import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, toggleState } from "./store/Slice/todoSlice";
import InputBox from "./component/inputBox";

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo); // store.todo

  return (
    <>
      <h1>Todo List</h1>
      <InputBox />
      <div className="container">
        <div>
          <ul>
            {todoList.map((item) => {
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => {
                      console.log("toggleState for ", item.id);
                      dispatch(toggleState(item.id));
                    }}
                  />
                  {item.todo}
                  <span
                    className="btn danger"
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                  >
                    delete
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
