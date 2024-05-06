import { useEffect, useState } from "react";
import { getUser } from "./test_component/getData";
import Pokemon from "./Pokemon";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      console.log(user);
      setUserName(user);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>{userName ? userName.name : "Loading..."}</h2> // Display fallback
      text if userName is undefined
      <Pokemon />
    </>
  );
}

export default App;
