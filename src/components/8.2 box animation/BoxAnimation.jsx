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
    let { width, height } = this.props;
    return (
      <div
        className={this.state.class}
        style={{ width: width, height: height }}
      ></div>
    );
  }
}

export default BoxAnimation;
