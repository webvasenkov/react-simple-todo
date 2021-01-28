import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoListCompleted, setTodoListCompleted] = useState([]);
  const [sort, setSort] = useState("all");

  useEffect(() => {
    switch (sort) {
      case "all":
        break;

      case "completed":
        break;

      case "uncompleted":
        break;

      default:
        break;
    }
  }, [sort]);

  return (
    <div className="App">
      <header>Simple todo</header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        setTodoList={setTodoList}
        todoList={todoList}
        setSort={setSort}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        todoListCompleted={todoListCompleted}
        setTodoListCompleted={setTodoListCompleted}
      />
    </div>
  );
}

export default App;
