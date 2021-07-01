import React from "react";
import PracticalExpElement from "./PracticalExpElement";

export default function PracticalExp(props) {
  const expChildren = props.expChildren;
  const setExpChildren = props.setExpChildren;

  const addHandler = (e) => {};

  return (
    <div>
      <h3>Practical Experience</h3>
      {expChildren.map((child) => {
        return (
          <PracticalExpElement
            id={child.id}
            key={child.key}
            // deleteHandler={deleteHandler}
            handleChange={props.handleChange}
          />
        );
      })}
      <button onClick={addHandler}>Add</button>
    </div>
  );
}
