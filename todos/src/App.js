import "./App.css";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = (title, desc) => {
    const newTodo = {
      id: Date.now(),
      title,
      desc,
    };

    // Update the state with the new todo
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);

    // Save the updated todos to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter((item) => item !== todo);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <>
      <Header title="Todos" />
      <AddTodo addTodo={addTodo} />
      <TodoItem TodoItem={todos} deleteTodo={deleteTodo} />
      <Footer />
    </>
  );
}

export default App;
