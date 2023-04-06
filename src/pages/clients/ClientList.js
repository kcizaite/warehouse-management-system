import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

// Pagrindinis vaizdas. Pagrindiniame vaizde matoma:
// 1.1. sandėlio klientų sąrašas, prie kiekvieno kliento rodoma, kiek registruoto inventoriaus
// klientas turi (skaičiuojamas registracijų skaičius) bei nuoroda į kliento peržiūros vaizdą;
// 1.2. nuoroda į naujo kliento registravimo vaizdą.



export function ClientListPage() {
    const [clients, setClients] = useState([])
    const params = useParams();

    const fetchClients = () => {
        fetch("/api/v1/clients")
            .then((response) => response.json())
            .then((jsonResponse) => setClients(jsonResponse))
    };

    useEffect(() => {
        fetchClients();
    }, []);

    clients.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));


    return (
        <div>
            <Link to={'/create-client'}>
                Create New Client
            </Link>
            <div>
                <h1>Client List</h1>
                <div>
                    {clients.map(client => (
                        <div key={client.id}>
                            <div>
                                <h1>{client.name}</h1>
                            </div>
                            <div>
                                <p>Last edited: {client.createdDate}</p>
                            </div>
                            <div>
                                {/*Number of items */}
                                <p>{client.numberOfItems}</p>
                            </div>
                            <br></br>
                            <div>
                                <Link to={'/clients/view-client/' + client.id}>Read more</Link>
                            </div>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}