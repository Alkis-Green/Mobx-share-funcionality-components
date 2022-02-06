import "./App.css";
import { useLocalStore } from "mobx-react";
import { createContext } from "react";
import InterfaceOne from "./Components/InterfaceOne";
import InterfaceTwo from "./Components/InterfaceTwo";
import ClickCounter from "./Components/ClickCounter";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    clicks: {
      InterfaceOne: 0,
      InterfaceTwo: 0,
    },
    addClick: (componentName) => {
      if (componentName === "InterfaceOne") {
        store.clicks.InterfaceOne = store.clicks.InterfaceOne + 1;
      } else {
        store.clicks.InterfaceTwo = store.clicks.InterfaceTwo + 1;
      }
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <InterfaceOne />
          <InterfaceTwo />
        </header>
        <div className="App-body">
          <ClickCounter />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
