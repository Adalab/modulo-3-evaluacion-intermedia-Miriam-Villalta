import React, { useState } from "react";
import "../stylesheets/App.css";
import PokeDex from "../data/PokeDex.json";
import PokeList from "./PokeList";

function App() {
  const [pokemons] = useState(PokeDex);

  return (
    <>
      <h1 className="title">Mi lista de Pokemon</h1>
      <PokeList list={pokemons} />
    </>
  );
}

export default App;
