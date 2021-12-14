import React from "react";
import "./BoxAnimation.css";

class BoxAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "movingBox enterBox" };
  }

  startExit = () => {
    this.setState(() => {
      return { class: "movingBox exitBox" };
    });
  };

  componentDidMount() {
    setTimeout(this.startExit, 4000);
  }

  render() {
    return (
      <div
        className={this.state.class}
        style={{ width: this.props.width, height: this.props.height }}
      ></div>
    );
  }
}

export default BoxAnimation;
