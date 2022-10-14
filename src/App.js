import { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

function App() {
  const [inputList, setinputList] = useState("");
  const [Items, setItems] = useState([]);

  const inputEvent = (event) => {
    let value = event.target.value;
    setinputList(value);
  };

  const listOfitems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };

  const deleteItem = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            onChange={inputEvent}
            value={inputList}
          />
          <button onClick={listOfitems}> + </button>

          <ol>
            {Items.map((inputvalue, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={inputvalue}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
