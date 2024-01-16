
const Fleet = (props) => {
    return (
        <fieldset>
            <legend>Fleet.jsx</legend>
            {
                props.fleet.map((eachShip, i) => {
                    return (
                        <div key={i}>
                            🚀name: {eachShip.name}<br />
                            turrets: {eachShip.numberOfTurrets}<br />
                            shields: {eachShip.shieldPower}<br />
                            <hr />
                        </div>
                    );
                })
            }
        </fieldset>
    );
};

export default Fleet;