// functional programming

const myCoolCallback = function () {
    console.log("hello after 3 seconds");
};

// setTimeout(myCoolCallback, 3000);

// .map
const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

const awesomeAnimals = animals.map((animal, idx) => {
    return `${idx + 1} - ${animal} is`;
});

// console.log(awesomeAnimals);

// --- filter----\
const filteredAnimals = animals.filter((eachElement) => {
    if (eachElement.length <= 5) {
        return true;
    } else {
        return false;
    }
});

const altFilter = animals.filter((animal) => {
    return animal.length <= 5;
}).map((eachRemainingAnimal) => eachRemainingAnimal + " is cool");

// console.log(altFilter);

const people = Object.freeze([
    { name: "Bob", age: 30 },
    { name: "Mary", age: 31 },
    { name: "Sue", age: 28 },
    { name: "George", age: 38 }
]);

// filter people with age greater than or equal to 30
const filteredPeople = people.filter((person) => {
    return person.age >= 30;
});
// console.log(filteredPeople);

const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 35, "name": "Clefairy", "types": ["normal"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// an array with just the names of the pokémon whose only type is poison

// an array of pokemon objects where the id is evenly divisible by 3
const filteredPokemon = pokemon.filter((poke) => {
    return poke.id % 3 === 0;
});

// an array with all pokemon except the pokemon with the id of 148
const filtered148 = pokemon.filter((eachPoke) => {
    // if( && ) {
    //     return true
    // } else {
    //     return false
    // }
    return eachPoke.id !== 148;
});

console.log(filtered148);

// console.log(filteredPokemon);