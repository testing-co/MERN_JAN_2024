import { useState } from "react";
const Form = (props) => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [hasPowerUp, setHasPowerUp] = useState(true);

    const formHandler = (e) => {
        e.preventDefault();
        const newPerson = {
            name,
            color,
            hasPowerUp
        };
        // console.log(newPerson);
        props.addNewPersonToPeople(newPerson);
    };
    return (
        <fieldset>
            <legend>Form.jsx</legend>
            {/* <div>
                state vars: <br />
                {JSON.stringify(name)} <br />
                {JSON.stringify(color)} <br />
                {JSON.stringify(hasPowerUp)}
            </div> */}
            <form onSubmit={formHandler}>
                <dir>
                    name:
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </dir>
                <dir>
                    color:
                    <input value={color} onChange={(e) => setColor(e.target.value)} />
                </dir>
                <dir>
                    has a power up?:
                    <input type="checkbox"
                        checked={hasPowerUp}
                        onChange={(e) => setHasPowerUp(e.target.checked)}
                    />
                </dir>

                <button>create Person</button>
            </form>
        </fieldset>
    );
};

export default Form;