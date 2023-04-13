import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
// 3. Kliento informacijos peržiūros vaizdas. Vaizde pateikiama:
// 3.1. kliento informacija;
// 3.2. kliento registruoto inventoriaus lentelė pateikianti visą registracijos informaciją;
// 3.3. nuoroda į naujo inventoriaus registravimo vaizdą.

export function ClientViewPage() {
    const [client, setClient] = useState({})
    const params = useParams()

    useEffect(() => {
            fetch('/api/v1/clients/client/' + params.id)
                .then((response) => response.json())
                .then(setClient)
        }, [params.id]
    )
    return (
        <div className="container">
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
            <div>
                <Link to={"/create-inventory"} className="create-inventory-link">
                    <button>Create New Inventory</button>
                </Link>
            </div>
        </div>
    )
}