import React from "react";

class Todo extends React.Component {
  state = { tasks: ["fdkgjfnkg", "kfdjgnk"] };

  componentDidMount() {
    const taskstorage = localStorage.getItem("tasks");
    if (taskstorage) {
      console.log("thieres something in local");
    } else {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      console.log("local is empty");
    }
  }

  renderTasks = () => {
    return this.state.tasks.map((t, index) => <li key={index + t}>{t}</li>);
  };

  render() {
    return (
      <>
        <h1>To Do List</h1>
        <input type="text" id="newTask" placeholder="task to add.."></input>
        <button id="addTask">Add Task</button>
        <ul id="taskList">{this.renderTasks()}</ul>
      </>
    );
  }
}

export default Todo;
