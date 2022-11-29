/* eslint-disable no-unused-vars */
import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos = [
  { text: "Cortar cabello", completed: true },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Pagar la luz", completed: false },
];

const App = () => {
  return (
    <React.Fragment>
      <div className="p-0 m-0 flex flex-col items-center">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map((element) => (
            <TodoItem
              key={element.text}
              text={element.text}
              completed={element.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
};

export default App;
