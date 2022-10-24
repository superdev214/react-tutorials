import React from "react";
import styles from "./TodoItem.module.scss";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  
  const {completed , id, title } = props.todo;
  return (
    <li className={styles.item}>
      <button onClick={() => props.delTodoEvent(id)}>Delete</button>

      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChangeTodoCompleted(id)}
      />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  );
};

export default TodoItem;
