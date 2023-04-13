// 4. Naujo inventoriaus registravimo vaizdas.
// Užregistravus inventorių, grįžtama į kliento informacijos
// peržiūros vaizdą.
import {useState} from "react";

export function InventoryCreatePage() {
    const [name, setName] = useState("")
    const [weight, setWeight] = useState()
    const [sector, setSector] = useState()
    const [createdDate, setCreatedDate] = useState()

    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const applyResult = (result) => {
        if (result.ok) {
            setSuccess("Inventory was created successful.");
            //Return to /view-client
        } else {
            result
                .text()
                .then((text) => {
                    const response = JSON.parse(text);
                    setError(response.message);
                })
                .catch((error) => {
                    setError("Inventory was not created successful.", error);
                });
        }
    };

    const createInventory = () => {
        // setSuccess("");
        // setError("");
        // fetch link
        fetch("api/v1/clients/create-inventory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                weigth: weight,
                sector,
                createdDate,
            }),
        }).then(applyResult);
    }

    //Return to /view-client

    return (
        <div>
            <h1>Create New Inventory</h1>
            <div>
                <label htmlFor="name">Name </label>
                <input
                    required
                    id="name"
                    value={name}
                    onChange={
                        (e) => setName(e.target.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="weight">Weight </label>
                <input
                    required
                    id="weight"
                    value={weight}
                    onChange={
                        (e) => setWeight(e.target.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="sector">Sector </label>
                <input
                    required
                    id="sector"
                    value={sector}
                    onChange={
                        (e) => setSector(e.target.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="createdDate">Created Date </label>
                <input
                    required
                    id="createdDate"
                    value={createdDate}
                    onChange={
                        (e) => setCreatedDate(e.target.value)
                    }
                />
            </div>
            {error && <div className="errorText">{error}</div>}
            <div>
                <button onClick={createInventory}>Create</button>
            </div>
        </div>
    )
}