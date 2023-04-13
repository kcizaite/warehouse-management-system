package lt.techin.wms.warehousemanagementsystem.clients;

public class ClientMapper {
    public static ClientDto toClientDto(Client client) {
        var clientDto = new ClientDto();
        clientDto.setId(client.getId());
        clientDto.setName(client.getName());
        clientDto.setSurname(client.getSurname());
        clientDto.setDateOfBirth(client.getDateOfBirth());
        clientDto.setPhoneNumber(client.getPhoneNumber());
        clientDto.setClientType(client.getClientType());
        clientDto.setInventories(client.getInventories());
        clientDto.setCreatedDate(client.getCreatedDate());
        clientDto.setModifiedDate(client.getModifiedDate());
        return clientDto;
    }

    public static Client toClient(ClientDto clientDto) {
        var client = new Client();
        client.setId(clientDto.getId());
        client.setName(clientDto.getName());
        client.setSurname(clientDto.getSurname());
        client.setDateOfBirth(clientDto.getDateOfBirth());
        client.setPhoneNumber(clientDto.getPhoneNumber());
        client.setClientType(clientDto.getClientType());
        client.setInventories(clientDto.getInventories());
        client.setCreatedDate(clientDto.getCreatedDate());
        client.setModifiedDate(clientDto.getModifiedDate());
        return client;
    }
}
