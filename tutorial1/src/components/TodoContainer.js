import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Set up web environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Develop web site",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };
  handleChangeTodoCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
  addTodoItem = (content) => {
    //console.log(content);
    const newTodo = {
      id: uuidv4(),
      title: content,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItem={this.addTodoItem} />
          <TodoList
            todos={this.state.todos}
            handleChangeTodoCompleted={this.handleChangeTodoCompleted}
            delTodoListener={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
