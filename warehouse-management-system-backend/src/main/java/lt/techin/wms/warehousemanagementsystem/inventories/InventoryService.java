package lt.techin.wms.warehousemanagementsystem.inventories;

import lombok.extern.slf4j.Slf4j;
import lt.techin.wms.warehousemanagementsystem.clients.Client;
import lt.techin.wms.warehousemanagementsystem.clients.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class InventoryService {
    @Autowired
    private InventoryRepository inventoryRepository;
    @Autowired
    private ClientRepository clientRepository;

    public List<Inventory> getAll() {
        log.info("Klientas sukurtas.");
        return inventoryRepository.findAll();
    }

    public Inventory finById(Long id) {
        log.info("Klientas sukurtas.");
        return inventoryRepository.findById(id).orElse(new Inventory());
    }

    public Client create(Inventory inventory, Long clientId) {
        var client = clientRepository.findById(clientId).orElse(null);
        if (client == null) {
            log.info("Klientas nerastas.");
            return null;
        } else {
            var saveInventory = inventoryRepository.save(inventory);
            List<Inventory> list = client.getInventories();
            list.add(saveInventory);
            client.setInventories(list);
            log.info("Klientas sukurtas.");
            return clientRepository.save(client);
        }
    }
}
