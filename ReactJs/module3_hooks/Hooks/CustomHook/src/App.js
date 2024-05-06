import React from "react";
import useCustomHook from "./hook";

const App = () => {
  const { input, setInput, outputValue } = useCustomHook();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <p>
        <span>Input: {input}</span>
      </p>
      <p>
        <span>Output: {outputValue()}</span>
      </p>
      <form>
        <input
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </form>
    </div>
  );
};

export default App;
