import React from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
            <TodoItem 
            todo = {todo} 
            key = {todo.id} 
            handleChangeTodoCompleted = {props.handleChangeTodoCompleted}
            delTodoEvent = {props.delTodoListener}
            />
      ))}
    </ul>
  );
};

export default TodoList;
