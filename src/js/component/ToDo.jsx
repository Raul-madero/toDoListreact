import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);
  const [showButton, setShowButton] = useState("");
  const urlAPI = "https://playground.4geeks.com/apis/fake/todos/";
  useEffect(() => {
    // createUser();
    getTodos();
  }, []);
  async function createUser() {
    try {
      const res = await fetch(urlAPI + "user/raul", {
        method: "POST",
        body: JSON.stringify([]),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json);
    } catch (err) {}
  }
  async function getTodos() {
    try {
      const res = await fetch(urlAPI + "user/raul");
      const json = await res.json();
      setItem(item.concat(json));
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteClick = (indexToDelete) => {
    const updatedItem = item.filter(
      (_, currentIndex) => indexToDelete !== currentIndex
    );
    setItem(updatedItem);
  };

  const handleItemClick = (index) => {
    setShowButton(index);
  };
  async function handleSubmit() {
    try {
      const res = await fetch(urlAPI + "user/raul", {
        method: "PUT",
        body: JSON.stringify([
          {
            label: inputValue,
            done: false,
          },
        ]),
        headers: {
          "Content-Type": "application/json; UTF-8",
        },
      });
      const json = await res.json();
      console.log(json);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteAllToDos() {
    try {
      const res = await fetch(urlAPI + "user/raul", {
        method: "DELETE",
      });
      setUser("");
      setItem([]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
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
                  handleSubmit();
                }
              }}
            />
          </li>
          {item.length > 0 &&
            item.map((task, index) => (
              <li
                onClick={() => handleItemClick(index)}
                onMouseLeave={() => setShowButton(null)}
                className="bg-light list-group-item border-0 my-2 border-bottom border-success d-flex justify-content-between"
                key={index}
              >
                {task.label}
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
          <button className="btn btn-danger" onClick={deleteAllToDos}>
            Eliminar Todo
          </button>
        </div>
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
