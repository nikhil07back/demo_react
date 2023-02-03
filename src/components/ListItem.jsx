import React from "react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function ListItem({todo}) {
  
  const {deleteTodo , editTodo} = useContext(GlobalContext)
  
  return (
    <li className="list-group-item rounded-0">
      {todo.text}
      <button className="btn btn-warning rounded-0 btn-sm float-end mx-1" onClick={()=>editTodo(todo)}>Edit</button>
      <button className="btn btn-danger rounded-0 btn-sm float-end" onClick={()=>deleteTodo(todo.id)}>Del</button>
    </li>
  );
}

export default ListItem;
