import React from "react";

const Pokemon = (props) => {
  const renderType = () => {
    return props.item.types.map((types, index) => {
      console.log(types);
      return <li key={index}>{types}</li>;
    });
  };

  return (
    <div className={`nombre__clase ${props.item.id}`}>
      <img src={props.item.url}></img>
      <h2 className="Title">{props.item.name}</h2>
      <ul>
        <li>{renderType()}</li>
      </ul>
    </div>
  );
};

export default Pokemon;
