import React from "react";
import "./Increment.css";

class Increment extends React.Component {
  constructor({ initial }) {
    super(initial);
    this.state = { current: +initial, colorClass: null };
  }

  increment = () => {
    if (this.state.current < 10) {
      this.setState({ current: this.state.current + 1 });
    }
  };
  decrement = () => {
    if (this.state.current > -10) {
      this.setState({ current: this.state.current - 1 });
    }
  };

  getColor = () => {
    if (this.state.current >= 1) {
      return "green";
    } else if (this.state.current === 0) {
      return "black";
    } else {
      return "red";
    }
  };

  render() {
    return (
      <div className="inc">
        <button onClick={this.increment}>Increment +</button>
        <p className={this.getColor()}>{this.state.current}</p>
        <button onClick={this.decrement}>Decrement -</button>
      </div>
    );
  }
}

export default Increment;
