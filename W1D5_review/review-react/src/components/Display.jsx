const Display = (props) => {

    const { inventory } = props;
    return (
        <fieldset>
            <legend>Display</legend>
            <table border="1" >
                <thead>
                    <tr>
                        <th>CPU</th>
                        <th>GPU</th>
                        <th>RAM</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventory.map((eachPC, idx) => {
                            return <tr key={idx}>
                                <td>{eachPC.cpu}</td>
                                <td>{eachPC.gpu}</td>
                                <td>{eachPC.ram} GB</td>
                            </tr>;
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    );
};

export default Display;