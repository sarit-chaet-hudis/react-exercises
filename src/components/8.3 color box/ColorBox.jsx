import "./ColorBox.css";
import React from "react";

class ColorBox extends React.Component {
  state = { shape: "50%", counter: 0 };

  getColor = () => {
    let rand = Math.floor(Math.random() * 360);
    return `hsl(${rand}, 100%, 50%)`;
  };

  changeColorShape = () => {
    // increase counter
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
    if (this.state.counter === 5) {
      // counter reached 4, initialize counter, make square
      this.setState(() => {
        return { counter: 0 };
      });
      this.setState(() => {
        return { shape: "0" };
      });
    } else {
      this.setState(() => {
        return { shape: "50%" };
      });
    }
  };

  componentDidMount() {
    setInterval(this.changeColorShape, 1000);
  }

  render() {
    return (
      <div
        className="ColorBox"
        style={{
          backgroundColor: this.getColor(),
          borderRadius: this.state.shape,
        }}
      ></div>
    );
  }
}

export default ColorBox;
