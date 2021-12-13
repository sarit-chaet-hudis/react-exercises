import React from "react";
import HelloWorld from "./components/2.1/HelloWorld.jsx";
import Basic from "./components/2.2/basics.jsx";
import Boxes from "./components/boxes/Boxes.jsx";
import Button from "./components/4.1/Button.jsx";

function App() {
  return (
    <div>
      <Basic />
      <HelloWorld />
      <Boxes />
      <Button weight="bold" ButtonText="Important" />
      <Button weight="normal" ButtonText="Not Important" />
    </div>
  );
}

export default App;
