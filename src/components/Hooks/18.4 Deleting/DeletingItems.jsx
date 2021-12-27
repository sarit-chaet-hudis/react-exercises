import { useState } from "react";

export default function DeletingItems() {
  const items = ["one", "two", "three", "four", "five", "six"];
  const [itemsToKeep, updateListToKeep] = useState(items);

  const renderList = () => {
    return itemsToKeep.map((item) => {
      return (
        <div key={Math.random()}>
          <input type="checkbox" label={item}></input>
          {item}
        </div>
      );
    });
  };

  const deleteSelected = () => {
    // delete items that were selected
  };

  const wasChanged = (e) => {
    if (e.target.checked) console.log(e.target.checked);
  };

  return (
    <>
      <button onClick={deleteSelected}>Delete</button>

      <form onChange={(e) => wasChanged(e)}>{renderList()}</form>
    </>
  );
}
