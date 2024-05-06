// PurchaseComponent.js
import React, { useContext } from "react";

const PurchaseComponent = ({ list, addItems }) => {
  return (
    <div>
      <p>Purchase Component</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItems(e.target.fruitList.value);
        }}
      >
        <select name="fruitList">
          {list.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name} - ${item.price}
            </option>
          ))}
        </select>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default PurchaseComponent;
