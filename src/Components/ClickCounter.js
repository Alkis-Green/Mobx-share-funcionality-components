import React from "react";
import { useObserver } from "mobx-react";
import { useContext } from "react";
import { StoreContext } from "../App";

const ClickCounter = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <div>
      <div>
        <div style={{ padding: "2em" }}>
          <span>
            Component 1 was Clicked : {store.clicks.InterfaceOne} times
          </span>
        </div>
        <div>
          <span>
            Component 1 was Clicked : {store.clicks.InterfaceTwo} times
          </span>
        </div>
      </div>
    </div>
  ));
};

export default ClickCounter;
