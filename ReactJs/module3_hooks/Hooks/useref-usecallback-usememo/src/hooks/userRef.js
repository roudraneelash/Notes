import React, { useEffect, useState, useRef } from "react";

const UserRef = () => {
  const [input, setInput] = useState("");
  const renderCount = useRef(0);
  const prev = useRef("");

  useEffect(() => {
    renderCount.current += 1;
    prev.current = input;
  }, [input]);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>No of renders: {renderCount.current}</p>
      <p>Last input: {prev.current}</p>
    </div>
  );
};

export default UserRef;
