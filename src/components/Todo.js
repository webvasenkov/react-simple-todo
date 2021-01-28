import React from "react";

const Todo = ({
  text,
  setTodoListCompleted,
  todoListCompleted,
  setTodoList,
  todoList,
  todo,
}) => {
  const completedHandler = (e) => {
    e.preventDefault();
    const todoCompleted = { ...todo, completed: !todo.completed };
    setTodoListCompleted([
      ...todoListCompleted.filter((el) => el.id !== todoCompleted.id),
      todoCompleted,
    ]);

    setTodoList(
      todoList.map((el) => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }

        return el;
      })
    );
  };

  const trashHandler = (e) => {
    e.preventDefault();
    const trash = (array) => array.filter((el) => el.id !== todo.id);
    setTodoListCompleted(trash(todoListCompleted));
    setTodoList(trash(todoList));
  };

  return (
    <div className={`todo ${todo.completed && "completed"}`}>
      <li className="todo-item">{text}</li>
      <button className="complete-btn" onClick={completedHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={trashHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
