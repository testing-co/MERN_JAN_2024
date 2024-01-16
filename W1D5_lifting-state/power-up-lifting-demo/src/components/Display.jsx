const Display = (props) => {
    const { people, removePerson, changePowerUp } = props;
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {/* {JSON.stringify(people)} */}
            {
                people.map((person, i) => {
                    return (
                        <div key={i} style={{ color: person.color, outline: "1px solid black" }}>
                            <h4>{person.name} {person.hasPowerUp ? "⭐" : ""}</h4>

                            got a power up?
                            <input
                                type="checkbox"
                                checked={person.hasPowerUp}
                                onChange={() => changePowerUp(i)}
                            />

                            <button onClick={() => removePerson(i)}>remove from Mushroom Kingdom</button>
                        </div>
                    );
                })
            }
        </fieldset>
    );
};

export default Display;