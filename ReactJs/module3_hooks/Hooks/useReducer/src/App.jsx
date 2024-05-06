import { useState, useReducer } from "react";

import "./App.css";

const initialCount = { count: 0, name: "Sunny" };
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "custom":
      return {
        ...state,
        count: parseInt(state.count) + parseInt(action.payload),
      };
    case "customLogin":
      return { ...state, name: action.payload };
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};
function App() {
  const [val, setVal] = useState(0);
  const [state, dispatch] = useReducer(counterReducer, initialCount);
  const handleUser = () => {
    if (state.name == "Sunny") {
      dispatch({ type: "customLogin", payload: "Mimi" });
    } else {
      dispatch({ type: "customLogin", payload: "Sunny" });
    }
  };
  const Increment = () => {
    dispatch({ type: "increment" });
  };
  const Decrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "custom", payload: val });
    setVal(0);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>User {state.name} </p>
      <button onClick={handleUser}>toggle</button>
      <button disabled>count is {state.count}</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
