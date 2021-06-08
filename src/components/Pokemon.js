import React from "react";

const Pokemon = (props) => {
  console.log(props.name);

  return (
    <div id={props.item.id}>
      <img src={props.item.url}></img>
      <h2 className="Title">{props.item.name}</h2>
      <ul>
        <li>{props.item.types}</li>
      </ul>
    </div>
  );
};

export default Pokemon;
