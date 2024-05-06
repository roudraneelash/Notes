// App.js
import React, { useState } from "react";
import PurchaseComponent from "./components/PurchaseComponent";
import CartComponent from "./components/CartComponent";
import TotalComponent from "./components/TotalComponent";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const list = [
    {
      name: "Apple",
      price: 20,
    },
    {
      name: "Oranges",
      price: 10,
    },
    {
      name: "Bananas",
      price: 3,
    },
  ];

  const addItems = (fruit) => {
    const newFruit = list.find((item) => item.name === fruit);
    setCart([...cart, newFruit]);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <>
      <PurchaseComponent list={list} addItems={addItems} />
      <CartComponent cart={cart} />
      <TotalComponent getTotal={getTotal()} />
    </>
  );
}

export default App;
