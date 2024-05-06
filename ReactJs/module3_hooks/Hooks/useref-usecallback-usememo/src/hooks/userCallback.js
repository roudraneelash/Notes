import React, { useCallback, useEffect, useMemo, useState } from "react";
import List from "./components/List";

export default function UserCallback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("theme style changes");
  }, [themeStyle]);
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
      <div style={themeStyle}>
        <List getItems={getItems} />
      </div>
    </>
  );
}
