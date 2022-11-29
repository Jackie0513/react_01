import React from "react";

const buttonStyle =
  "bg-cyan-400 shadow-lg shadow-black border-none rounded-full cursor-pointer text-5xl fixed bottom-6 right-6 font-bold flex justify-center items-center h-16 w-16";

const CreateTodoButton = () => {
  return <button className={`${buttonStyle}`}>+</button>;
};

export { CreateTodoButton };
