package lt.techin.wms.warehousemanagementsystem.inventories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findInventoriesById(Long clientID);
}
