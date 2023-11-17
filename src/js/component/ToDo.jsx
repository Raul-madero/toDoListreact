import React, { useState } from "react";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item border-0 bg-light">
            <input
              className="form-control border-0 border-bottom border-info bg-light"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              placeholder="Añade tareas a la lista"
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputValue != "") {
                  setItem(item.concat(inputValue));
                  setInputValue("");
                }
              }}
            ></input>
          </li>
          {item.map((task, index) => (
            <li
              onClick={(e) => setShowButton(true)}
              onMouseOut={(e) => setShowButton(false)}
              id={index}
              className="bg-light list-group-item border-0 my-2 border-bottom border-success d-flex justify-content-between"
              key={index}
            >
              {task}
              {showButton ? (
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    setItem(
                      item.filter((t, currentIndex) => index != currentIndex)
                    )
                  }
                >
                  X
                </button>
              ) : null}
            </li>
          ))}
        </ul>
        <div>
          <p className="text-start border-secondary bg-secondary bg-opacity-50 p-2 my-2 w-50 fw-lighter fst-italic">
            {item.length === 0
              ? "No hay tareas, agrega una tarea"
              : item.length + " tareas por hacer"}
          </p>
        </div>
      </div>
    </>
  );
};
export default ToDo;
