import React, { useState } from "react";
import Item from "./Item";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);

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
          <Item task={item} />
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
