import React from "react";
import Box2Class from "./box2";

class Box1Class extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
        Im the parent, Box 1 (now as class Component)
        <Box2Class />
      </div>
    );
  }
}

export default Box1Class;
