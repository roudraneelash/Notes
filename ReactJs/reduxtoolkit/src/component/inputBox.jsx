import React, { useState } from "react";
import { addItem } from "../store/Slice/todoSlice";
import { useDispatch } from "react-redux";

const InputBox = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = addItem(input);
    console.log(action);
    if (input.length > 0) dispatch(addItem(input));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <span className="btn primary" onClick={handleSubmit}>
        add
      </span>
    </form>
  );
};

export default InputBox;
