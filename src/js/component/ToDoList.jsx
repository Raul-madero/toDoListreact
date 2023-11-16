import React, { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);
  const [button, setButton] = useState(false);
  const handleSubmit = (e) => e.preventDefault();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setItem(item.concat([inputValue]));
      if (inputValue === "") {
        alert("Añade una tarea para agregarla a la lista");
      }
      setInputValue("");
      return item;
    }
  };
  const showButton = () => setButton(true);
  const handleClick = () =>
    setTodosList(
      item.filter((currentIndex) => {
        index !== currentIndex;
      })
    );

  const hideButton = () => setButton(false);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border border-info border-top-0 border-start-0 border-end-0 rounded-2 m-3"
      >
        <div>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="form-control border border-0"
            placeholder="Añade tareas a la lista"
            onKeyDown={handleKeyDown}
          />
        </div>
      </form>
      <ul className="list-group">
        {item.map((key, value) => (
          <li
            className="form-control border border-0 d-flex justify-content-between"
            key={value}
            onClick={showButton}
            readOnly
          >
            <span>{key}</span>
            {button ? (
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClick}
                onMouseOut={hideButton}
              >
                X
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ToDoList;
