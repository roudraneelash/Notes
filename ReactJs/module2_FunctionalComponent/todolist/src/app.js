import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleCheckBox = (index) => {
    const updatedList = list.map((item, i) => {
      if (i === index) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setList(updatedList);
  };
  const countComplete = () => {
    let count = 0;
    list.forEach((item) => {
      if (item.complete) {
        count++;
      }
    });
    return count;
  };
  const handleDelete = (index) => {
    const updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newItem = {
            content: input,
            complete: false,
          };
          setList([...list, newItem]);
          setInput("");
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
      <div>
        <p>
          <span>completed({countComplete()})</span>
        </p>
      </div>
      <div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <span>
                  <input
                    checked={item.complete}
                    type="checkbox"
                    onChange={() => {
                      handleCheckBox(index);
                    }}
                  />
                </span>
                {item.content}
                <span>
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    delete
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
