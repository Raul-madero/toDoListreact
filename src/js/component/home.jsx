import React from "react";
import ToDo from "./ToDo";
const Home = () => {
  return (
    <div className="text-center w-50 my-5 mx-auto border border-success bg-light bg-gradient">
      <h1 className="text-info">To Do List</h1>
      <ToDo />
    </div>
  );
};
export default Home;
