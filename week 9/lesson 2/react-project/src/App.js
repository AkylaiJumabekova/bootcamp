import React from "react";
import "./components/TodoList/TodoList.css";
// import Like from "./components/Like"
import Render from "./components/Render";
import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = React.useState([]);

  function handleTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function changeStatus(id) {
    const otherNewTodos = todos.map(item => {
      if(item.id === id) {
        item.status = !item.status;
      };
      return item;
    });
    setTodos(otherNewTodos);
  };

  return (
    <>
      {/* <Like/>  самое лучшее тут то, что они друг от друга никак не зависят */}
      {/* <Like/>
    <Like/> */}
      {/* <Render /> */}
      <AddTodo handleTask={handleTask} />
      <TodoList todos={todos} changeStatus={changeStatus} />
    </>
  );
}

export default App;
