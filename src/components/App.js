import React, { useState } from "react";
import "../stylesheets/App.css";
import PokeDex from "../data/PokeDex.json";
import PokeList from "./PokeList";
import pokemonImage from "../images/pokemon-logo.png";

function App() {
  const [pokemons] = useState(PokeDex);

  return (
    <>
      <div className="pokemon-img">
        <img src={pokemonImage} alt="" className="pokelogo" />
      </div>
      <h1 className="title">List</h1>
      <PokeList list={pokemons} />
    </>
  );
}

export default App;
