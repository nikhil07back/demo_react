import { useContext } from "react";
import {useEffect, useState} from "react";
import GlobalContext from "../context/GlobalContext";

function Form() {

  const {edit , updateTodo ,saveTodo} = useContext(GlobalContext)

  const [text , setText] = useState("")

  // useEffect
  useEffect(()=>{
    setText(edit.todo.text)
  },[edit])



  const handleSubmit = (e) => {
    e.preventDefault()  
    if(edit.isEdit){
      updateTodo(edit.todo.id , text)
    }else{
      saveTodo(text)
    }
    setText("")
  }



  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <input value={text} type="text" className="form-control rounded-0" required onChange={(e) => setText(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary w-100 rounded-0">
        Submit
      </button>
    </form>
  );
}

export default Form;
