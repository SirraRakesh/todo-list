import "./taskitems.css";
function Taskitems({ todolist, items, delhandlerfun, doneHandler }) {
  // const savedItem = localStorage.getItem("items");
  // const parsedItem = JSON.parse(savedItem);
  // console.log(parsedItem);
  const styles = (e) => {
    e.target.innerText = "Ongoing";
    e.target.id = "notdone";
  };
  const styles1 = (e) => {
    e.target.innerText = "Done";
    e.target.id = "done";
  };
  return (
    <div id="items-container">
      {todolist.map((item, index, parsedItem) => (
        <div key={index} id="each-item">
          <span className="taskitem">{item[0]}</span>
          <div id="itembuttons">
            <button
              className="del"
              onClick={() => delhandlerfun(index, parsedItem)}
            >
              Del
            </button>
            <button onDoubleClick={styles} onClick={styles1}>
              Done
            </button>
          </div>
          <span id="timestamp">
            {new Intl.DateTimeFormat("en-US", {
              day: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              month: "2-digit",
            }).format(item[1])}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Taskitems;
