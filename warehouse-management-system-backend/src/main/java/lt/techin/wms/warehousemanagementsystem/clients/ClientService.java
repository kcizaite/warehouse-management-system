package lt.techin.wms.warehousemanagementsystem.clients;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ClientService {
    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getAll() {
        log.info("From Client Service: Get all clients successful.");
        return clientRepository.findAll();
    }

    public Client findById(Long id) {
        log.info("From Client Service: Find client by id successful.");
        return clientRepository.findById(id).orElse(new Client());
    }

    public Client create(Client client) {
        if (client.getName() == null
                && client.getSurname() == null
                && client.getDateOfBirth() == null
                && client.getPhoneNumber() == null
                && client.getClientType() == null) {
            log.info("From Client Service: Client name, surname, date of birth, phone number or type is null.");
            return null;
        }
        if (!findByClientNameAndSurnameAndDateOfBirth(client.getName(), client.getSurname(), client.getDateOfBirth())) {
            try {
                log.info("From Client Service: Client was create successful.");
                return clientRepository.save(client);
            } catch (Exception e) {
                log.info("Client was not create successful, getLocalizedMessage().");
                System.out.println(e.getLocalizedMessage());
            }
            log.info("From Client Service: Client was not found by name, surname or birth.");
        }
        log.info("From Client Service: Client create is null.");
        return null;
    }

    public boolean findByClientNameAndSurnameAndDateOfBirth(String name, String surname, String dateOfBirth) {
        log.info("From Client Service: Find client by name, surname and date of birth successful.");
        return getAll().stream().anyMatch(client -> client.getName().matches(name)
                && client.getSurname().matches(surname)
                && client.getDateOfBirth().matches(dateOfBirth));
    }
}
