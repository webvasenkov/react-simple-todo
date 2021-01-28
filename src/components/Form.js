import React from "react";

const Form = ({ setInputText, inputText, setTodoList, todoList, setSort }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    const todo = { id: Date.now(), text: inputText, completed: false };
    setTodoList([...todoList, todo]);
  };

  const selectHandler = (e) => {
    const selected = e.target.value;
    setSort(selected);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={buttonHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={selectHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
