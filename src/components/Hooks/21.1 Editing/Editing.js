import { useState, useEffect, useRef } from "react";

const Editing = () => {
  const [edit, toggleEdit] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (edit) {
      inputRef.current.focus();
    }
  }, [edit]);

  return (
    <>
      <button onClick={() => toggleEdit(!edit)}>
        {edit ? "Save" : "Edit"}
      </button>
      {edit ? <input ref={inputRef} type="text"></input> : null}
    </>
  );
};

export default Editing;
