import React, { useContext } from "react";
import CartContext from "../utils/CartContext";

const TotalComponent = ({ getTotal }) => {
  const { count } = useContext(CartContext);
  return (
    <div>
      TotalComponent
      <p>Total : {getTotal}</p>
      <p>Value: {count}</p>
    </div>
  );
};

export default TotalComponent;
