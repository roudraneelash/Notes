import React, { useState, useMemo, useCallback } from "react";

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default function UserMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    console.log("slowfunction rerenders");
    return slowFunction(number);
  }, [number]);
  console.log("component rerenders");
  // Memoizing the theme style object
  // The theme style object will only be recalculated when the 'dark' state changes
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}
