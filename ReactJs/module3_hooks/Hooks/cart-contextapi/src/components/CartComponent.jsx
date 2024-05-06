import React, { useContext } from "react";
import CartContext from "../utils/CartContext";

const CartComponent = ({ cart }) => {
  const { add } = useContext(CartContext);
  return (
    <div>
      <p>Cart Component</p>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          add();
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default CartComponent;
