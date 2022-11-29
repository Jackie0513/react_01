import React from "react";

const pStyle = "m-6 mr-0 w-[calc(100%-120px)] text-lg leading-6 font-normal ";
const iconStyle =
  "cursor-pointer flex justify-center items-center h-12 w-12 text-2xl font-bold";
const TodoItem = (props) => {
  return (
    <li className=" bg-violet-300 relative flex justify-center items-center mt-6">
      <span
        className={`${iconStyle} absolute left-3 ${
          props.completed ? "text-emerald-300" : ""
        }`}
      >
        √
      </span>
      <p
        className={`${pStyle} ${
          props.completed ? "line-through" : "no-underline"
        }`}
      >
        {props.text}
      </p>
      <span
        className={`${iconStyle} absolute -top-6 right-0 hover:text-rose-600`}
      >
        x
      </span>
    </li>
  );
};

export { TodoItem };
