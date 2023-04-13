package lt.techin.wms.warehousemanagementsystem.clients;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lt.techin.wms.warehousemanagementsystem.inventories.Inventory;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Please enter name not blank")
    @NotNull(message = "Please enter name not null")
//    @Size(min = 2, max = 200)
    @Size(min = 1, message = "username must have a min of 2 characters")
    private String name;
    @NotBlank
    @NotNull
    @Size(min = 1, max = 200)
    private String surname;
    //@NotNull(message = "The date of birth is required.")
    //@Past(message = "The date of birth must be in the past.")
    //private Date dateOfBirth;
    @NotBlank
    @NotNull
    private String dateOfBirth;
    @NotBlank
    @NotNull
    @NotBlank(message = "Please enter your phone number")
    private String phoneNumber;
    @NotNull
    private ClientType clientType;
    @OneToMany
    @JoinColumn(name = "clientId")
    private List<Inventory> inventories;
    @CreatedDate
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdDate;
    @LastModifiedDate
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime modifiedDate;

    @PrePersist
    public void prePersist() {
        createdDate = LocalDateTime.now();
        modifiedDate = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        modifiedDate = LocalDateTime.now();
    }

    public Client() {
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

    //public Date getDateOfBirth() {
    //   return dateOfBirth;
    //    }

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

    public List<Inventory> getInventories() {
        return inventories;
    }

    public void setInventories(List<Inventory> inventories) {
        this.inventories = inventories;
    }

    public void setClientType(ClientType clientType) {
        this.clientType = clientType;
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
