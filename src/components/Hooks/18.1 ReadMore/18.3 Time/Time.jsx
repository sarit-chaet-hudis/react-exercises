import { useState } from "react";

export default function Time() {
  const [curTime, updateTime] = useState(1);

  const timeWasUpdated = (e) => {
    let newTime;
    switch (e.target.name) {
      case "seconds":
        newTime = e.target.value / 60;
        break;
      case "hours":
        newTime = e.target.value * 60;
        break;
      default:
        newTime = e.target.value;
        break;
    }
    updateTime(newTime);
  };
  // updateTime(e.target.value);

  return (
    <div>
      <input
        name="seconds"
        type="text"
        onChange={(e) => timeWasUpdated(e)}
        value={curTime * 60}
      ></input>
      <br />
      <input
        name="minutes"
        type="text"
        onChange={(e) => timeWasUpdated(e)}
        value={curTime}
      ></input>
      <br />
      <input
        name="hours"
        type="text"
        onChange={(e) => timeWasUpdated(e)}
        value={curTime / 60}
      ></input>
    </div>
  );
}
