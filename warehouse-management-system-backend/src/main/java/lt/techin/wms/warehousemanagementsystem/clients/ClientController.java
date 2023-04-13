package lt.techin.wms.warehousemanagementsystem.clients;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import static lt.techin.wms.warehousemanagementsystem.clients.ClientMapper.toClient;
import static lt.techin.wms.warehousemanagementsystem.clients.ClientMapper.toClientDto;

@RestController
@RequestMapping("/api/v1/clients")
public class ClientController {
    Logger logger = Logger.getLogger(ClientController.class.getName());
    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<ClientDto> getClients() {
        logger.info("Successful clients list.");
        return clientService.getAll().stream().map(ClientMapper::toClientDto).toList();
    }

    @GetMapping(value = "/client/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<ClientDto> getClient(@PathVariable Long id) {
        logger.log(Level.INFO, "Something went wrong: {0} ", id);
        return ResponseEntity.ok(toClientDto(clientService.findById(id)));
    }

    @PostMapping(value = "/create-client", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Map<String, String>> createClient(@Valid @RequestBody ClientDto clientDto) {
        var createClient = clientService.create(toClient(clientDto));
        if (createClient == null) {
            logger.info("The client is already created.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "The client is already created."));
        }
        logger.info("The client was created, successfully");
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("message", (toClientDto(createClient).toString())));
    }


}
