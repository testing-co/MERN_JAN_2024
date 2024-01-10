import './App.css';
import Pet from './components/Pet';

function App() {

  const pets = [
    { name: "Garfield", weight: 28 },
    { name: "Lulu", weight: 13 },
    { name: "Finley", weight: 15 },
  ];

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h3>track your Pet's weight</h3>

      {/* {
        pets.map((pet, idx) => {
          return <Pet
            key={idx}
            name={pet.name}
            weight={pet.weight}
          />;
        })
      } */}


      <Pet name={"Garfield"} weight={28} />
      <Pet name={"Lulu"} weight={13} />
      <Pet name={"Finley"} weight={15} />

    </fieldset>
  );
}

export default App;
