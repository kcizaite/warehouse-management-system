package lt.techin.wms.warehousemanagementsystem.inventories;

import lt.techin.wms.warehousemanagementsystem.clients.ClientDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import static lt.techin.wms.warehousemanagementsystem.clients.ClientMapper.toClientDto;
import static lt.techin.wms.warehousemanagementsystem.inventories.InventoryMapper.toInventory;

@RestController
@RequestMapping("/api/v1/inventories")
public class InventoryController {
    Logger logger = Logger.getLogger(InventoryController.class.getName());
    private final InventoryService inventoryService;
    private InventoryRepository inventoryRepository;

    public InventoryController(InventoryService inventoryService, InventoryRepository inventoryRepository) {
        this.inventoryService = inventoryService;
        this.inventoryRepository = inventoryRepository;
    }

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<InventoryDto> getInventories() {
        logger.info("Successful inventory list.");
        return inventoryService.getAll().stream().map(InventoryMapper::toInventoryDto).toList();
    }

    @GetMapping(value = "/get-inventories/{clientId}")
    public ResponseEntity<List<InventoryDto>> getClientInventory(@PathVariable Long clientId) {
//        var inventories = inventoryRepository.findInventoryByClientId(clientId)
        var inventories = inventoryRepository.findInventoriesById(clientId)
                .stream().map(InventoryMapper::toInventoryDto).toList();
        logger.log(Level.INFO, "getting client inventory id {}", clientId);
        return ResponseEntity.ok(inventories);
    }

    @PostMapping(value = "/create-inventory/{clientId}", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<ClientDto> createInventory(@RequestBody InventoryDto inventoryDto,
                                                     @PathVariable Long clientId) {
        var addInventoryToClient = inventoryService.create(toInventory(inventoryDto), clientId);
        if (addInventoryToClient == null) {
            logger.log(Level.INFO, "Client was not found with id: {0} ", clientId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
        logger.log(Level.INFO, "Inventory was created to client id: {}", clientId);
        return ResponseEntity.status(HttpStatus.CREATED).body(toClientDto(addInventoryToClient));
    }
}
