import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todoList,
  setTodoList,
  todoListCompleted,
  setTodoListCompleted,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodoListCompleted={setTodoListCompleted}
            todoListCompleted={todoListCompleted}
            setTodoList={setTodoList}
            todoList={todoList}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
