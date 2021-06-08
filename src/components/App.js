import React from "react";
import "../stylesheets/App.css";
import PokeDex from "../data/PokeDex.json";
import PokeList from "./PokeList";
import Pokemon from "./Pokemon";

function App() {
  return (
    <>
      <h1 className="title">Mi lista de Pokemon</h1>
      <PokeList list={PokeDex} />
    </>
  );
}

export default App;
