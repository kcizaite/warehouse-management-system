package lt.techin.wms.warehousemanagementsystem.inventories;

public class InventoryMapper {
    public static InventoryDto toInventoryDto(Inventory inventory) {
        var inventoryDto = new InventoryDto();
        inventoryDto.setId(inventory.getId());
        inventoryDto.setName(inventory.getName());
        inventoryDto.setWeight(inventory.getWeight());
        inventoryDto.setSector(inventory.getSector());
        inventoryDto.setCreatedDate(inventory.getCreatedDate());
        inventoryDto.setModifiedDate(inventory.getModifiedDate());
        return inventoryDto;
    }

    public static Inventory toInventory(InventoryDto inventoryDto) {
        var inventory = new Inventory();
        inventory.setId(inventoryDto.getId());
        inventory.setName(inventoryDto.getName());
        inventory.setWeight(inventoryDto.getWeight());
        inventory.setSector(inventoryDto.getSector());
        inventory.setCreatedDate(inventoryDto.getCreatedDate());
        inventory.setModifiedDate(inventoryDto.getModifiedDate());
        return inventory;
    }
}