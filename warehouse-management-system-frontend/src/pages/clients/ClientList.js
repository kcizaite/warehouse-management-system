import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import "./css/ClientList.css";

export function ClientListPage() {
    const [clients, setClients] = useState([]);

    const fetchClients = () => {
        fetch("api/v1/clients", {cache: "no-store"})
            .then((response) => response.json())
            .then((jsonResponse) => setClients(jsonResponse));
    };

    useEffect(() => {
        fetchClients();
    }, []);

    return (
        <div className="container">
            <div>
                <div className="client-list-header">
                    <div>
                        <h1>Client List</h1>
                    </div>
                    <div>
                        <Link to={"/create-client"} className="create-client-link">
                            <button>Create New Client</button>
                        </Link>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Number of registered inventories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>
                                <Link to={`/clients/view-client/${client.id}`}>
                                    {client.name}
                                </Link>
                            </td>
                            <td>{client.surname}</td>
                            <td>QUANTITY</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
