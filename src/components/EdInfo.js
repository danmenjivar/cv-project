import React from "react";
import EdExp from "./EdExp";
import uniqid from "uniqid";

export default function EdInfo(props) {
  const edChildren = props.edChildren;
  const setEdChildren = props.setEdChildren;

  const addHandler = (e) => {
    const edId = uniqid();
    setEdChildren([
      ...edChildren,
      {
        key: edId,
        id: edId,
        schoolName: "SCHOOL_NAME",
        degreeOfStudy: "DEGREE",
        gradDate: "GRAD_DATE",
        city: "CITY_NAME",
        state: "ST",
        relStudy: "REL_STUDY",
      },
    ]);
  };

  const deleteHandler = (id) => {
    const edCopy = edChildren.filter((child) => child.id !== id);
    setEdChildren(edCopy);
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      {edChildren.map((child) => {
        return (
          <EdExp
            id={child.id}
            key={child.key}
            deleteHandler={deleteHandler}
            handleChange={props.handleChange}
          />
        );
      })}
      <button onClick={addHandler}>Add</button>
    </div>
  );
}
