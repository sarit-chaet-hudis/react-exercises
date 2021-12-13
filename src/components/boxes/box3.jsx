import React from "react";
import Box4 from "./box4";

function Box3() {
  return (
    <div
      style={{ height: "100px", backgroundColor: "salmon", padding: "10px" }}
    >
      <Box4 />
      <Box4 />
    </div>
  );
}

export default Box3;
