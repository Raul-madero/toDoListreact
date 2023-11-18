import React, { useState } from "react";

const Item = (props) => {
  const [showButton, setShowButton] = useState("hidden");

  return props.task.map((task, index) => (
    <li
      onClick={() => setShowButton(null)}
      onMouseOut={() => setShowButton("hidden")}
      id={index}
      className="bg-light list-group-item border-0 my-2 border-bottom border-success d-flex justify-content-between"
      key={index}
    >
      {task}
      <button
        id={showButton}
        className="btn btn-danger"
        onClick={() =>
          setItem(props.task.filter((t, currentIndex) => index != currentIndex))
        }
      >
        X
      </button>
    </li>
  ));
};
export default Item;
