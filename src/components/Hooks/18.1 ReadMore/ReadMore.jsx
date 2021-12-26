import { useState } from "react";
import "./ReadMore.css";

export default function ReadMore() {
  const [expand, toggleExpand] = useState(false);

  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quia
      corporis aliquam reprehenderit, amet soluta nobis, quis quod nemo, harum
      cum culpa pariatur sapiente porro quaerat tenetur odio aspernatur natus
      distinctio dolorum expedita ullam eius! Delectus dignissimos obcaecati
      officiis itaque impedit quis at,
      <button onClick={() => toggleExpand(!expand)}>
        {expand ? "Read Less" : "Read More"}
      </button>
      <div className={!expand ? "hide" : null}>
        deserunt, accusamus vel voluptatibus sapiente enim nulla odio esse
        minima nemo praesentium suscipit. Eaque quasi minus voluptas quo
        laudantium doloribus natus quidem, itaque labore incidunt, similique
        saepe?
      </div>
    </div>
  );
}
