import React from "react";
import ToDoList from "./ToDoList";
const Home = () => {
  return (
    <div className="text-center w-50 my-5 mx-auto border border-success">
      <h1>To Do List</h1>
      <ToDoList />
    </div>
  );
};
export default Home;
