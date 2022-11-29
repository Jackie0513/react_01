import React from "react";

const TodoSearch = () => {
  return (
    <input
      className="h-10 w-[calc(100%-64px)] mt-3 mb-3 border-2 rounded-md  border-indigo-500/50"
      placeholder="Tarea"
    ></input>
  );
};

export { TodoSearch };
