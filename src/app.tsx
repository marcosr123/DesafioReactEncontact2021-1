import React, { useCallback, useState } from "react";
import api from "./api";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const removeTodoHandler = (todoId : string) => {
    setTodos((texto) => {
      return texto.filter(todo => todo.id !== todoId);
    })
  }

  const addTodoHandler = (todo: string) => {
    const novoTodo = new Todo(todo);
    setTodos((antTodos) => {
      return antTodos.concat(novoTodo);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos itens={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}
