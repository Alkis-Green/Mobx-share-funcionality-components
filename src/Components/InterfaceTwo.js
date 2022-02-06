import React from "react";
import { useContext } from "react";
import { StoreContext } from "../App";

const InterfaceTwo = () => {
  const store = useContext(StoreContext);

  const onMouseDown = () => {
    store.addClick(InterfaceTwo.name);
  };

  const handleOnClick = () => {
    alert("And I also updated the counter!");
  };

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        backgroundColor: "hotpink",
        padding: "2em",
        marginRight: "2em",
        borderRadius: "10px",
      }}
    >
      <h1>Component 2</h1>
      <div style={{ padding: "1.5em", backgroundColor: "grey" }}>
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

export default InterfaceTwo;
