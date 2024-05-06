import { createContext, useState } from "react";

const CartContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(0);

  const valueToShare = {
    count: count,
    add: () => {
      setCount((prev) => prev + 1);
    },
  };

  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
}
export { Provider };
export default CartContext;
