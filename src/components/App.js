import React from "react";
import Todoitem from "./Todoitem.js";
import "./App.css";

function App() {
  return (
    <div className = "todo-list">
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
    </div>
  )
}
export default App