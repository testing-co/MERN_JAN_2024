
const ClickCount = (props) => {
    return (
        <fieldset>
            <legend>ClickCount.jsx</legend>
            <button onClick={() => props.setCount((prev) => {
                return prev + 1;
            })}>update count</button>
        </fieldset>
    );
};

export default ClickCount;