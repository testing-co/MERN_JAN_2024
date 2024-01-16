import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  const [people, setPeople] = useState([
    {
      name: "Mario",
      color: "red",
      hasPowerUp: true
    },
    {
      name: "Luigi",
      color: "green",
      hasPowerUp: false
    },
  ]);

  const addNewPersonToPeople = (newPerson) => {
    // console.log("hello", newPerson);
    setPeople([...people, newPerson]);
  };

  const removePerson = (personIndex) => {
    // console.log("delete", personIndex);
    const filteredPeople = people.filter((eachPerson, idx) => {
      return idx !== personIndex;
    });
    console.log('filteredPeople: ', filteredPeople);
    setPeople(filteredPeople);
  };

  const changePowerUp = (personIndex) => {
    // console.log("checked", personIndex);
    const peopleCopy = [...people];
    // console.log(peopleCopy[personIndex].hasPowerUp);
    peopleCopy[personIndex].hasPowerUp = !peopleCopy[personIndex].hasPowerUp;
    setPeople(peopleCopy);
  };

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h3>Mushroom Kingdom State 🍄</h3>
      <p>{JSON.stringify(people)}</p>
      <Form addNewPersonToPeople={addNewPersonToPeople} />
      <Display
        people={people}
        removePerson={removePerson}
        changePowerUp={changePowerUp}
      />
    </fieldset>
  );
}

export default App;
