import React from "react";

const TodoList = (props) => {
  return (
    <section>
      <ul className="m-0 p-0 pb-14">{props.children}</ul>
    </section>
  );
};

export { TodoList };
