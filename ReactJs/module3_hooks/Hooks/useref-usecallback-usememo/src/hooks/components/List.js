import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);

  return (
    <div>
      <p>List</p>
      <div>
        {items.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default List;
