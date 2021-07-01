import React, { useState } from "react";
import PracticalExpElement from "./PracticalExpElement";

export default function PracticalExp() {
  const [practChildren, setPractChildren] = useState([<PracticalExpElement />]);

  const addHelper = (e) => {
    setPractChildren([...practChildren, <PracticalExpElement />]);
  };

  return (
    <div>
      <h3>Practical Experience</h3>
      {practChildren.map((child) => child)}
      <button onClick={addHelper}>Add</button>
    </div>
  );
}
