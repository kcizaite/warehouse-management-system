import {useState} from "react";
import "./ClientCreate.css";

// 2. Naujo kliento registravimo vaizdas.

export function ClientCreatePage() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    // Default value wil be regular or loyal?
    const [clientType, setClientType] = useState("REGULAR")

    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const clear = () => {
        setName("");
        setSurname("");
        setDateOfBirth("");
        setPhoneNumber("");
        setClientType("");
    };

    const createClient = () => {
        // setSuccess("");
        // setError("");
        fetch("api/v1/clients/create-client", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                surname,
                dateOfBirth,
                phoneNumber,
                clientType
            }),
        }).then(applyResult);
    }

    const applyResult = (result) => {
        if (result.ok) {
            setSuccess("Client was created successful.");
            clear();
        } else {
            result
                .text()
                .then((text) => {
                    const response = JSON.parse(text);
                    setError(response.message);
                })
                .catch((error) => {
                    setError("Client was not created successful.", error);
                });
        }
    };

    const handleChange = (event) => {
        setClientType(event.target.value);
    };

    return (
        <div className="container">
            <h1>Create New Client</h1>

            <div>
                <label htmlFor="nameClient">Name </label>
                <input
                    id="nameClient"
                    value={name}
                    onChange={
                        (e) => setName(e.target.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="surname">Surname </label>
                <input
                    id="surname"
                    value={surname}
                    onChange={
                        (e) => setSurname(e.target.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="dateOfBirth">Date Of Birth </label>
                <input
                    id="dateOfBirth"
                    value={dateOfBirth}
                    onChange={
                        (e) => setDateOfBirth(e.target.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number </label>
                <input

                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={
                        (e) => setPhoneNumber(e.target.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="clientType">Client Type </label>
                <select
                    id="clientType"
                    value={clientType}
                    onChange={handleChange}
                >
                    {/*  FIX THIS   */}
                    <option value="REGULAR">Regular client</option>
                    <option value="LOYAL">Loyal client</option>
                </select>
            </div>
            {error && <div className="errorText">{error}</div>}
            <div>
                <button onClick={createClient}>Create</button>
            </div>
        </div>
    )
}