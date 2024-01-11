import { useState } from 'react';

const Form = (props) => {
    // declare state variables
    const [zoo, setZoo] = useState(['🐈', '🐒', '🦈']);
    const [animalInput, setAnimalInput] = useState("");

    // submit function 
    const addAnimalToZoo = (e) => {
        e.preventDefault();

        // add the animal from state to the zoo array
        // 1. create a copy of zoo
        // const copyZoo = [...zoo];
        // copyZoo.push(animalInput);
        // console.log('copyZoo: ', copyZoo);
        // setZoo(copyZoo);

        setZoo([...zoo, animalInput]);
        // reset input:
        setAnimalInput("");

    };

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            {/* <p>zoo state: {JSON.stringify(zoo)}</p>
            <p>animalInput state: {JSON.stringify(animalInput)}</p> */}

            <form onSubmit={addAnimalToZoo}>
                <input onChange={(e) => setAnimalInput(e.target.value)} value={animalInput} /> <br />
                <button>add animal</button>
            </form>

            <hr />
            <ul>
                {
                    zoo.map((animal, idx) => {
                        return (
                            <li key={idx}>{animal} is cool</li>
                        );
                    })
                }
            </ul>
            <p>{zoo.length > 6 ? <span style={{ color: "red" }}> don't add any more animals</span> : ""}</p>
        </fieldset>
    );
};

export default Form;