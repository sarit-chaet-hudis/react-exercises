import { useState, useRef, useEffect } from "react";
import vid from "./vid.mp4";

const PlayPause = () => {
  const [play, togglePlay] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    if (play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [play]);

  return (
    <div>
      <video src={vid} ref={videoRef}></video>
      <button onClick={() => togglePlay(true)}>Play</button> &nbsp;
      <button onClick={() => togglePlay(false)}>Pause</button> &nbsp;
    </div>
  );
};

export default PlayPause;
