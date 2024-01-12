// rafce
import { useState } from 'react';
import Display from './Display';

const FormComponent = (props) => {
    // create state for display
    const [inventory, setInventory] = useState([
        { cpu: "AMD Threadripper", gpu: "RTX 4090", ram: 64 },
        { cpu: "Intel core i5", gpu: "Intel Arc A380", ram: 32 }
    ]);

    // create state vars for this form
    const [cpu, setCPU] = useState("");
    const [gpu, setGPU] = useState("");
    const [ram, setRam] = useState(0);

    const formHandler = (e) => {
        e.preventDefault();

        const newPC = { cpu, gpu, ram };

        const newInventory = [...inventory];
        newInventory.push(newPC);
        setInventory(newInventory);

        // 1 line
        // setInventory([...inventory, { cpu, gpu, ram }]);

    };

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <>
                <p>we are going to create a {props.thingy}</p>

                <form onSubmit={formHandler}>
                    <p>
                        <label htmlFor="cpu-label">CPU</label> <br />
                        <input id="cpu-label" value={cpu} onChange={(e) => setCPU(e.target.value)} />
                    </p>
                    <p>
                        graphics card<br />
                        <input value={gpu} onChange={(e) => setGPU(e.target.value)} />
                    </p>
                    <p>
                        amount of ram in GB<br />
                        <input type="number" value={ram} onChange={(e) => setRam(e.target.value)} />
                    </p>

                    <input type="submit" value={"make a pc"} />
                </form>

                <Display inventory={inventory} />
            </>
        </fieldset>
    );
};

export default FormComponent;