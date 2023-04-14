import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import "./css/ClientView.css";

export function ClientViewPage() {
    const [client, setClient] = useState({})
    const params = useParams()
    const [inventory, setInventory] = useState([])

    useEffect(() => {
            fetch('/api/v1/clients/client/' + params.id)
                .then((response) => response.json())
                .then(setClient)
        }, [params.id]
    )

    const fetchInventory = () => {
        fetch(`/api/v1/inventories/get-inventories/${params.id}`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (Array.isArray(jsonResponse)) {
                    setInventory(jsonResponse);
                } else {
                    setInventory([]);
                }
            })
    };

    useEffect(() => {
        fetchInventory();
        if (params.id) {
            fetch(`/api/v1/clients/client/${params.id}`)
                .then((response) => response.json())
                .then(setClient);
        }
    }, [params.id]);

    return (
        <div className="container">
            <div>
                <h1>{client.name} {client.surname}</h1>
                <table>
                    <tbody>
                    <tr>
                        <td><b>Date Of Birth:</b></td>
                        <td>{client.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td><b>Phone number:</b></td>
                        <td>{client.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td><b>Client type:</b></td>
                        <td>{client.clientType}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <div className="inventory-list-header">
                    <div>
                        <h3>Inventory List</h3>
                    </div>
                    <div>
                        <Link to={`/create-inventory/${params.id}`}>
                            <button>Create New Inventory</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Inventory name</th>
                            <th>Weight (kg)</th>
                            <th>Sector Nr.</th>
                            <th>Date of registration</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {inventory.map(inventory => (
                            <tr key={inventory.id}>
                                <td>{inventory.name}</td>
                                <td>{inventory.weight}</td>
                                <td>{inventory.sector}</td>
                                <td>{inventory.createdDate}</td>
                                <td>
                                    <button>Withdrawn</button>
                                </td>
                                <br></br>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}