const ColorComponent = (props) => {
    console.log(props);

    return (
        <fieldset style={{ backgroundColor: props.color }}>
            <legend>ColorComponent.jsx</legend>
            this color is: {props.color} <br />
            number is {props.number}
            <hr />
            <input onChange={(unicorn) => console.log(unicorn.target.value)} />
            <button onClick={() => alert("you clicked a button!")}>click me</button>
        </fieldset>
    );
};

export default ColorComponent;