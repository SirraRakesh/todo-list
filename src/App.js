import "./App.css";
import { useState } from "react";
import Taskitems from "./tasks/Taskitems";
function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [items, setItems] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submithandler = (e) => {
    e.preventDefault();
    const len = e.target.firstChild.value.trim().length;
    if (len > 0) {
      todo.push([task, Date.now()]);
      // setItem({...item,task,Date.now()})
      setItems([...todo]);
      // console.log(JSON.stringify(items));

      localStorage.setItem("items", JSON.stringify([...todo]));
    } else {
      todo = todo;
    }

    setTask("");
  };
  const delhandler = (indexValue, parsedItem) => {
    // console.log(parsedItem);
    const newTodo = parsedItem.filter((ele, index) => index !== indexValue);

    setTodo(newTodo);
    // console.log(parsedItem[indexValue]);
    // localStorage.removeItem(parsedItem);
    // parsedItem = [...newTodo];
    // console.log(parsedItem);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>To-Do-List</h1>
      </div>
      <div className="input-text">
        <form onSubmit={submithandler}>
          <input
            className="typing"
            type="text"
            placeholder="enter items in to  todo list"
            value={task}
            onChange={changeHandler}
          ></input>
          <input
            type="submit"
            className="add-btn"
            value="add"
            name="add"
          ></input>
        </form>
      </div>
      <Taskitems todolist={todo} items={items} delhandlerfun={delhandler} />
    </div>
  );
}
export default App;
