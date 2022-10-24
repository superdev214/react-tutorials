import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    if (this.state.title.trim()) {
      e.preventDefault();
      // console.log(this.state.title);
      this.props.addTodoItem(this.state.title);
      this.setState({
        title: "",
      });
    }
    else
        alert("Please Write Todo");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button> Submit </button>
      </form>
    );
  }
}
export default InputTodo;
