import React from "react";
import Shop from "./components/16.1 Products/Shop";
import ReadMore from "./components/Hooks/18.1 ReadMore/ReadMore";
import Time from "./components/Hooks/18.3 Time/Time";
import DeletingItems from "./components/Hooks/18.4 Deleting/DeletingItems";
// import Fetch from "./components/Hooks/19.1 Fetch/Fetch";
//import Cancel from "./components/Hooks/Cancel";
import Editing from "./components/Hooks/21.1 Editing/Editing";
// import HoverBW from "./components/Hooks/21.3 HoverBW/HoverBW";
import PlayPause from "./components/Hooks/21.2 Play video/PlayPause";

function App() {
  return (
    <div>
      <Shop />
      <ReadMore />
      <Time />
      <DeletingItems />
      <Editing />
      {/* <HoverBW /> */}
      <PlayPause />
    </div>
  );
}

export default App;
