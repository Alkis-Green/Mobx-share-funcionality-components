import React from "react";
import { useContext } from "react";
import { StoreContext } from "../App";

const InterfaceOne = () => {
  const store = useContext(StoreContext);

  const onMouseDown = () => {
    store.addClick(InterfaceOne.name);
  };

  const handleOnClick = () => {
    alert(
      "My button is Clicked but i also updated the counter! (Bubbling event)"
    );
  };

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        backgroundColor: "lightblue",
        padding: "2em",
        marginRight: "2em",
        borderRadius: "10px",
      }}
    >
      <h1>Component 1</h1>
      <div style={{ padding: "1.5em", backgroundColor: "black" }}>
        <button
          onClick={handleOnClick}
          style={{ padding: ".5em", marginRight: ".85em" }}
        >
          Press me
        </button>
      </div>
    </div>
  );
};

export default InterfaceOne;
