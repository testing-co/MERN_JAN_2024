import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  return (
    <>
      <PersonCard name={"bulbasaur"} id={1} isCool={true} /> <hr />
      <PersonCard name={"Charizard"} id={6} isCool={true} /> <hr />
      <PersonCard name={"Kirby"} id={0} isCool={false} />
    </>
  );
}

export default App;
