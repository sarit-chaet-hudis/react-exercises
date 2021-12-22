import React from "react";

class Todo extends React.Component {
  state = { newTask: "", tasks: ["rdterre"] };

  componentDidMount() {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  renderTasks = () => {
    return this.state.tasks.map((t, index) => {
      return (
        <li key={index + t}>
          <div>{t}</div>
          <br />
          <button onClick={() => console.log("delete")}>Delete</button>
        </li>
      );
    });
  };

  onTaskChange(e) {
    this.setState({ newTask: e.target.value });
    console.log(`task changed to ${e.target.value}`);
  }

  onTaskAdd() {
    this.setState((prev) => {
      return { tasks: [...prev.tasks].push(this.state.newTask) };
    });
  }

  render() {
    return (
      <>
        <h1>To Do List</h1>
        <input
          type="text"
          id="newTask"
          placeholder="task to add.."
          value={this.state.newTask}
          onChange={(e) => this.onTaskChange(e)}
        ></input>
        <button id="addTask" onClick={() => this.onTaskAdd()}>
          Add Task
        </button>
        <ul id="taskList">{this.renderTasks()}</ul>
      </>
    );
  }
}

export default Todo;
