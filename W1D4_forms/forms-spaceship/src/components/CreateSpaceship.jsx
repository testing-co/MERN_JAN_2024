import { useState } from "react";
import Fleet from "./Fleet";

const CreateSpaceship = (props) => {

    const staringFleet = [
        {
            name: "Cosmos",
            numberOfTurrets: 3,
            shieldPower: 100
        },
        {
            name: "Uranus-1",
            numberOfTurrets: 10,
            shieldPower: 30
        },
    ];

    // create state var for this component
    const [fleet, setFleet] = useState(staringFleet);
    // form state variables
    const [name, setName] = useState("");
    const [numberOfTurrets, setNumberOfTurrets] = useState(0);
    const [shieldPower, setShieldPower] = useState(10);
    const [nameError, setNameError] = useState(false);

    const checkName = (e) => {
        setName(e.target.value);
        if (e.target.value.length <= 3) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();

        const newShip = {
            name,
            numberOfTurrets,
            shieldPower
        };

        // add newShip to fleet
        const cloneFleet = [...fleet];
        cloneFleet.push(newShip); // new temp array
        console.log(cloneFleet);
        setFleet(cloneFleet); // push new temp array

        // clean up inputs
        setName("");
        setNumberOfTurrets(0);
        setShieldPower(10);
    };

    return (
        <fieldset>
            <legend>CreateSpaceShip.jsx</legend>
            {/* {JSON.stringify(fleet)} */}
            <hr />

            <form onSubmit={formSubmit}>
                name:
                <input
                    value={name}
                    onChange={checkName}
                />
                {nameError ? <p style={{ color: "red" }}>need more characters</p> : <p></p>}

                <br />
                turrets:
                <input
                    type="number"
                    value={numberOfTurrets}
                    onChange={(e) => setNumberOfTurrets(e.target.value)}
                /> <br />

                shields:
                <input
                    type="number"
                    value={shieldPower}
                    onChange={(e) => setShieldPower(e.target.value)}
                /> <br />

                <button>Create Ship 🚀</button>
            </form>
            <Fleet fleet={fleet} />
        </fieldset>
    );
};

export default CreateSpaceship;