import { useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // State for edit
  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  // Save Todo
  const saveTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // Set Edit State
  const editTodo = (todo) => {
    setEdit({ todo: todo, isEdit: true });
  };

  // update todo
  const updateTodo = (id, text) => {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, text: text } : item))
    );
    setEdit({
      todo: {},
      isEdit: false,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ todos, deleteTodo, edit, updateTodo, editTodo, saveTodo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
