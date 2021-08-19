import React from "react";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ itens: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <>
      <ul className={classes.todos}>
        {props.itens.map((item) => (
          <TodoItem
            key={item.id}
            text={item.title}
            onRemoveHandler={props.onRemoveTodo.bind(null,item.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
