import {useState} from "react";
import {useParams} from "react-router-dom";
import './css/InventoryCreate.css'

export function InventoryCreatePage() {
    const params = useParams();
    const [inputs, setInputs] = useState({});

    const createInventory = () => {
        fetch(`/api/v1/inventories/create-inventory/${params.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: inputs.name,
                weight: inputs.weight,
                sector: inputs.sector,
                createdDate: inputs.createdDate
            })
        })
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        console.log(params.id);
        createInventory();
    }

    return (
        <div className="container">
            <h1>Create New Inventory </h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Inventory name</label>
                    </div>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                    <label>Weight (kg)</label>
                    <input
                        type="text"
                        name="weight"
                        value={inputs.weight || ""}
                        onChange={handleChange}
                    />
                    <label>sector</label>
                    <input
                        type="text"
                        name="sector"
                        value={inputs.sector || ""}
                        onChange={handleChange}
                    />
                    <br></br>
                    <div>
                        <input type="submit"/>
                    </div>
                    <br></br>
                </form>
            </div>
        </div>
    )
}