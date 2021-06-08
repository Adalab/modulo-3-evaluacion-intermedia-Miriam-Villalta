import React from "react";

const Pokemon = (props) => {
  const renderType = () => {
    return props.item.types.map((types, index) => {
      console.log(types);
      return <li key={index}>{types}</li>;
    });
  };

  return (
    <div className={`box ${props.item.id}`}>
      <img src={props.item.url} className="image"></img>
      <h2 className="pokemon-name">{props.item.name}</h2>
      <ul>
        <li className="type-list">{renderType()}</li>
      </ul>
    </div>
  );
};

export default Pokemon;
