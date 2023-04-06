import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// 3. Kliento informacijos peržiūros vaizdas. Vaizde pateikiama:
// 3.1. kliento informacija;
// 3.2. kliento registruoto inventoriaus lentelė pateikianti visą registracijos informaciją;
// 3.3. nuoroda į naujo inventoriaus registravimo vaizdą.

export function ClientViewPage () {
    const [client, setClient] = useState({})
    const params = useParams()

    useEffect(() => {
            fetch('/api/v1/clients/' + params.id)
                .then((response) => response.json())
                .then(setClient)
        }, [params.id]
    )
    return (
        <div>
            <div><b>Name</b></div>
            <div>{client.name}</div>

            <div><b>Surname</b></div>
            <div>{client.surname}</div>

            <div><b>Birth of date</b></div>
            <div>{client.birthOfDate}</div>

            <div><b>Phone number</b></div>
            <div>{client.phoneNumber}</div>

            <div><b>Client type</b></div>
            <div>{client.clientType}</div>
        </div>
    )
}