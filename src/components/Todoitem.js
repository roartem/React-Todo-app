import React from "react";
import "./Todoitem.css";
function Todoitem() {
    return (
        <div className="todo-item">
         <input className="checkbox" type="checkbox"/>
         <p className="p">Флаг</p>
         </div>
    )
}
export default Todoitem