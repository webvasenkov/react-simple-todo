import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [sortTodoList, setSortTodoList] = useState([]);
  const [sort, setSort] = useState("all");
  
  useEffect(() => {
    switch (sort) {
      case "all":
        const all = todoList
        setSortTodoList(all);
      break;

      case "completed":
        const completed = todoList.filter(todo => todo.completed)
        setSortTodoList(completed);
        break;

      case "uncompleted":
        const uncompleted = todoList.filter(todo => !todo.completed)
        setSortTodoList(uncompleted)
        break;

      default:
        break;
    }
  }, [sort, todoList]);

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
        sortTodoList={sortTodoList}
      />
    </div>
  );
}

export default App;
