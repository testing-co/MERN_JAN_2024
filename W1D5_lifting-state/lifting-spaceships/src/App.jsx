import './App.css';
import { useState } from 'react';
import CreateSpaceship from './components/CreateSpaceship';
import Fleet from './components/Fleet';

function App() {
  const staringFleet = [
    {
      name: "Cosmos",
      numberOfTurrets: 3,
      shieldPower: 100
    },
    {
      name: "Uranus-1",
      numberOfTurrets: 10,
      shieldPower: 30
    },
  ];

  // create state var for this component
  const [fleet, setFleet] = useState(staringFleet);

  const updateTheGlobalState = (newShip) => {
    console.log("hello from app.jsx", newShip);
    setFleet([...fleet, newShip]);
  };

  return (
    <>
      {JSON.stringify(fleet)}
      <h3>create spaceships 🚀</h3>
      <CreateSpaceship updateTheGlobalState={updateTheGlobalState} fleet={fleet} />
      <Fleet fleet={fleet} />
    </>
  );
}

export default App;
