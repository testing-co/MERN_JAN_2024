import { useState } from 'react';

const Pet = (props) => {

    const { name, weight } = props;

    // setting state variable for this component
    const [petWeight, setPetWeight] = useState(props.weight);

    // function to change weight 
    const weightChange = () => {
        setPetWeight(petWeight - 1);
        // setPetWeight((prevWeight) => prevWeight - 1);
    };

    return (
        <fieldset>
            <legend>Pet.jsx</legend>
            {name} weighs {petWeight} lbs <br />
            <button onClick={() => weightChange()}>decrease weight</button>
            {/* if the weight goes below 6 lbs tell the user to give their pet a cake */}
            {petWeight < 6 ? <p>give your pet a cake!</p> : <p>keep going on the treadmill</p>}
        </fieldset>
    );
};

export default Pet;