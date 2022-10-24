import React from "react";

const TodoItem = (props) =>{
  return (
  
    <li>
        <button onClick={ () => props.delTodoEvent(props.todo.id)}>Delete</button>
      <input type="checkbox" 
      checked={props.todo.completed}
      onChange = { () => props.handleChangeTodoCompleted(props.todo.id)}
      />
      
      {props.todo.title}
    </li>
  )
}

export default TodoItem;