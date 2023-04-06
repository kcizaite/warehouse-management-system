import {useState} from "react";
// 2. Naujo kliento registravimo vaizdas.

export function ClientCreatePage() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [birthOfDate, setBirthOfDate] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    // Default value wil be regular or loyal?
    const [clientType, setClientType] = useState("")

    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const clear = () => {
        setName("");
        setSurname("");
        setBirthOfDate("");
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
                birthOfDate,
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
        <div>
            <h1>Create New Client</h1>
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
                <label htmlFor="surname">Surname </label>
                <input
                    required
                    id="surname"
                    value={surname}
                    onChange={
                        (e) => setSurname(e.target.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="birthOfDate">Birth Of Date </label>
                <input
                    required
                    id="birthOfDate"
                    value={birthOfDate}
                    onChange={
                        (e) => setBirthOfDate(e.target.value)
                    }
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number </label>
                <input
                    required
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
                    required
                    id="clientType"
                    value={clientType}
                    onChange={handleChange}
                >
                    {/*  FIX THIS   */}
                    <option value="regular">Regular client</option>
                    <option value="loyal">Loyal client</option>
                </select>
            </div>
            {error && <div className="errorText">{error}</div>}
            <div>
                <button onClick={createClient}>Create</button>
            </div>
        </div>
    )
}