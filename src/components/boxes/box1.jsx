import React from "react";
import Box2 from "./box2";

function Box1() {
  return (
    <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
      in Box 1- Box 2 should be nested
      <Box2 />
    </div>
  );
}

export default Box1;
