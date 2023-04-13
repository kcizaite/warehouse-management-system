package lt.techin.wms.warehousemanagementsystem.inventories;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findInventoriesById(Long clientID);
}
