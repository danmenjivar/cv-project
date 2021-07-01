import React from "react";
import PracticalExpElement from "./PracticalExpElement";

export default function PracticalExp(props) {
  const expChildren = props.expChildren;
  const setExpChildren = props.setExpChildren;

  const addHandler = (e) => {
    const expIndex = expChildren.length;
    setExpChildren([
      ...expChildren,
      {
        key: expIndex,
        id: expIndex + 1,
        companyName: "COMPANY_NAME",
        positionTitle: "POSITION",
        startDate: "START_DATE",
        endDate: "END_DATE",
        city: "CITY_NAME",
        state: "ST",
        resp: "RESPONSIBILITIES",
      },
    ]);
  };

  const deleteHandler = (id) => {
    const expCopy = [...expChildren];
    expCopy.splice(id - 1, 1);
    reIndex(expCopy);
    setExpChildren(expCopy);
  };

  const reIndex = (arr) => {
    let i = 0;
    arr.forEach((element) => {
      element.key = i;
      element.id = i + 1;
      i++;
    });
  };

  return (
    <div>
      {expChildren.map((child) => {
        return (
          <PracticalExpElement
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
