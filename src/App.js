import React from "react";
import Shop from "./components/16.1 Products/Shop";
import ReadMore from "./components/Hooks/18.1 ReadMore/ReadMore";
import Time from "./components/Hooks/18.3 Time/Time";
import DeletingItems from "./components/Hooks/18.4 Deleting/DeletingItems";
import Fetch from "./components/Hooks/19.1 Fetch/Fetch";

function App() {
  return (
    <div>
      <Shop />
      <ReadMore />
      <Time />
      <DeletingItems />
      <Fetch />
    </div>
  );
}

export default App;
