import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  //                   function to change state
  //      state var         |
  //          V             V
  const [superHeroes, setSuperHeroes] = useState([]);

  const getHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all1111.json")
      .then((someServerData) => {
        console.log(someServerData.data);
        setSuperHeroes(someServerData.data);
      })
      .catch(err => console.log("❌❌❌", err));
  };

  return (
    <>
      <h3>SuperHeroes API 🦸‍♂️🦸‍♀️🦹‍♂️🦹‍♀️</h3>
      {/* what is the state var? {JSON.stringify(superHeroes)} */}
      <button onClick={getHeroes}>GET all heroes</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>full name</th>
            <th>publisher</th>
          </tr>
        </thead>

        <tbody>
          {
            superHeroes.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.sm} alt={hero.name} width="90px" loading='lazy' /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              );
            })
          }


        </tbody>
      </table>
    </>
  );
}

export default App;
