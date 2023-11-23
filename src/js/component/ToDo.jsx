import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);
  const [showButton, setShowButton] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = () => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/raul")
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.log("Error al traer tareas de la API", error));
  };
  const handlesubmit = () => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/raul", {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);
        console.log(response.text());
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  const handleDeleteClick = (indexToDelete) => {
    const updatedItem = item.filter(
      (_, currentIndex) => indexToDelete !== currentIndex
    );
    setItem(updatedItem);
  };

  const handleItemClick = (index) => {
    setShowButton(index);
  };

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
                if (e.key === "Enter" && inputValue.trim() !== "") {
                  setItem(item.concat(inputValue.trim()));
                  setInputValue("");
                  handlesubmit();
                }
              }}
            />
          </li>
          {item.map((task, index) => (
            <li
              onClick={() => handleItemClick(index)}
              onMouseLeave={() => setShowButton(null)}
              className="bg-light list-group-item border-0 my-2 border-bottom border-success d-flex justify-content-between"
              key={index}
            >
              {task}
              {showButton === index && (
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(index)}
                >
                  X
                </button>
              )}
            </li>
          ))}
        </ul>
        <div>
          <p
            className={`text-start p-2 my-2 w-50 fw-lighter fst-italic ${
              item.length === 0 ? "text-secondary" : ""
            }`}
          >
            {item.length === 0
              ? "No hay tareas, agrega una tarea"
              : `${item.length} ${
                  item.length === 1 ? "tarea" : "tareas"
                } por hacer`}
          </p>
        </div>
      </div>
    </>
  );
};

export default ToDo;
