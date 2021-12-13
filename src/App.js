import React from "react";
// import HelloWorld from "./components/2.1/HelloWorld.jsx";
// import Basic from "./components/2.2/basics.jsx";
// import Boxes from "./components/boxes/Boxes.jsx";
import Boxes2 from "./components/6.1 boxes with classes/Boxes";
import Button from "./components/4.1/Button.jsx";
import Card from "./components/4.2-cards/Card.jsx";

function App() {
  return (
    <div>
      <Button weight="bold" ButtonText="Important" />
      <Button weight="normal" ButtonText="Not Important" />
      <Boxes2 />
      <Card cardName="First Card" randNum="23" />
      <Card cardName="Second Card" randNum="12" />
      <Card cardName="Three magic number Card" randNum="3" />
    </div>
  );
}

export default App;
