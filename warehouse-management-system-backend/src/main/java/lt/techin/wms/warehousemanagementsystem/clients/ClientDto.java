package lt.techin.wms.warehousemanagementsystem.clients;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lt.techin.wms.warehousemanagementsystem.inventories.Inventory;

import java.time.LocalDateTime;
import java.util.List;

public class ClientDto {
    private Long id;

    @Size(min = 2, message = "username must have a min of 2 characters")
    private String name;
    private String surname;
    //    private Date dateOfBirth;
    private String dateOfBirth;
    private String phoneNumber;

    private ClientType clientType;
    private List<Inventory> inventories;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdDate;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime modifiedDate;

    public ClientDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

//    public Date getDateOfBirth() {
//        return dateOfBirth;
//    }
//
//    public void setDateOfBirth(Date dateOfBirth) {
//        this.dateOfBirth = dateOfBirth;
//    }


    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public ClientType getClientType() {
        return clientType;
    }

    public void setClientType(ClientType clientType) {
        this.clientType = clientType;
    }

    public List<Inventory> getInventories() {
        return inventories;
    }

    public void setInventories(List<Inventory> inventories) {
        this.inventories = inventories;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public LocalDateTime getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(LocalDateTime modifiedDate) {
        this.modifiedDate = modifiedDate;
    }
}
