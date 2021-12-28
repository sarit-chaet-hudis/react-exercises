import { useState } from "react";
import "./HoverBW.css";
import dontlookup from "./dontlookup.png";

const HoverBW = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div>
      <h3> hover over an image to see it in color </h3>
      <img
        className={hover1 ? "color" : "blackwhite"}
        onMouseEnter={() => setHover1(true)}
        onMouseLeave={() => setHover1(false)}
        src={dontlookup}
        alt="nature"
      ></img>
      <img
        className={hover2 ? "color" : "blackwhite"}
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
        src="./sandwich.png"
        alt="sandwich town"
      ></img>
    </div>
  );
};

export default HoverBW;
