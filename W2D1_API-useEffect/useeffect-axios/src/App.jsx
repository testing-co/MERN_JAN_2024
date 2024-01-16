import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  //                   function to change state
  //      state var         |
  //          V             V
  const [superHeroes, setSuperHeroes] = useState([]);

  useEffect(() => {
    // axios.get("https://akabab.github.io/superhero-api/api/all.json")
    //   .then((someServerData) => {
    //     console.log("AXIOS => someServerData.data", someServerData.data);
    //     setSuperHeroes(someServerData.data);
    //   })
    //   .catch(err => console.log("❌❌❌", err));
    getHeroesAsync();
  }, []);

  const getHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then((someServerData) => {
        console.log(someServerData.data);
        setSuperHeroes(someServerData.data);
      })
      .catch(err => console.log("❌❌❌", err));
  };

  const getHeroesAsync = async () => {
    try {
      const response = await axios.get("https://akabab.github.io/superhero-api/api/all.json");
      console.log(response.status !== 200);
      console.log(response.data);
      setSuperHeroes(response.data);
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3>SuperHeroes API 🦸‍♂️🦸‍♀️🦹‍♂️🦹‍♀️</h3>
      {/* what is the state var? {JSON.stringify(superHeroes)} */}
      {/* <button onClick={getHeroes}>GET all heroes</button> */}
      <hr />
      {
        superHeroes.length > 1 ? (
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
        ) : <h2>loading...</h2>
      }

    </>
  );
}

export default App;
