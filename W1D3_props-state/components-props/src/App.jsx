import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import ColorComponent from './components/ColorComponent';

function App() {

  const color1 = "red";
  const color2 = "green";
  const color3 = "blue";

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <HeaderComponent />
      <p>this is the body</p>
      <ColorComponent color={"red"} />
      <ColorComponent color={color2} number={3} />
      <ColorComponent color={color3} />
    </fieldset>
  );
}

export default App;
