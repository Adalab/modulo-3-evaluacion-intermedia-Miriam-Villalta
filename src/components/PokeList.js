import React from "react";
import Pokemon from "./Pokemon.js";

const PokeList = (props) => {
  console.log(props.list);
  const eachPokemon = props.list.map((item, index) => {
    console.log(index);
    return (
      <li key={index}>
        <Pokemon item={item} />
      </li>
    );
  });
  return <ul>{eachPokemon}</ul>;
};
export default PokeList;
