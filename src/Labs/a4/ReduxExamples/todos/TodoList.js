import React from "react";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
function TodoList() {
  const { todos } = useSelector((state) => state.todosReducer);
  
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
      <TodoForm/>
        {todos.map((todo) => (
          <TodoItem  todo={todo} />
        ))}

      </ul>
    </div>
  );
}
export default TodoList;