import { useState } from "react";

const PersonCard = (props) => {
    const { name, id, isCool } = props;

    const [pokeId, setPokeId] = useState(id);

    const getNewPokemon = () => {
        const randomId = Math.round(Math.random() * (1000 - 1) + 1);
        console.log(randomId);
        setPokeId(randomId);
    };

    return (
        <div>
            <h3>{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`} alt={name} />
            <p>{isCool ? "😎" : "😟"}</p>
            <button onClick={getNewPokemon}>click</button>

        </div>
    );
};

export default PersonCard;