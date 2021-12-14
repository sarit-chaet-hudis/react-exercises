import React from "react";
// import HelloWorld from "./components/2.1/HelloWorld.jsx";
// import Basic from "./components/2.2/basics.jsx";
// import Boxes from "./components/boxes/Boxes.jsx";
// import Boxes2 from "./components/6.1 boxes with classes/Boxes";
// import Button from "./components/4.1/Button.jsx";
// import Card from "./components/4.2-cards/Card.jsx";
// import Increment from "./components/7.3 increment/Increment";
// import LifeCycle from "./components/8.1 life cycle/LifeCycle";
import BoxAnimation from "./components/8.2 box animation/BoxAnimation";
// import Spinner from "./components/9.1 spinner/Spinner";
import ColorBox from "./components/8.3 color box/ColorBox";

function App() {
  return (
    <div>
      {/* <Button weight="bold" ButtonText="Important" />
      <Button weight="normal" ButtonText="Not Important" /> */}
      {/* <Boxes2 /> */}
      {/* <Increment initial="-5" /> */}
      {/*<Card cardName="First Card" randNum="23" />
       <Card cardName="Second Card" randNum="12" />
      <Card cardName="Three magic number Card" randNum="3" /> */}
      {/* <LifeCycle /> */}
      <BoxAnimation width="50px" height="10px" />
      <BoxAnimation width="30px" height="50px" />
      <BoxAnimation width="20px" height="40px" />
      {/* <Spinner /> */}
      <br />
      <ColorBox />
    </div>
  );
}

export default App;
