import React, { useState } from "react";
import styles from "./TodoItem.module.scss";

const TodoItem = (props) => {
  const { completed, id, title } = props.todo;
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  /*const handleEditing = () =>{
    console.log("edit mode activated");
  };*/
  /**
   * View Mode and edit mode
   */
  let viewMode = {};
  let editMode = {};
  const [editing, setEditing] = useState(false);
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const handleEditing = () => {
    setEditing(true);

  };
  const handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };
  
  return (
    <li className={styles.item}>
      <div onDoubleClick={ handleEditing} style={viewMode}>
        <button onClick={() => props.delTodoEvent(id)}>Delete</button>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeTodoCompleted(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>

      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

export default TodoItem;
