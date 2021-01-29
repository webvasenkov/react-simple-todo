import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todoList,
  setTodoList,
  sortTodoList,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {sortTodoList.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
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
