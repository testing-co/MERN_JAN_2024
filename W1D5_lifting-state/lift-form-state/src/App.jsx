import './App.css';
import { useState } from 'react';
import ClickCount from './components/ClickCount';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h2>🏋️‍♂️ Lifting State</h2>
      <p>count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>update global count</button>
      <ClickCount setCount={setCount} />
    </>
  );
}

export default App;
