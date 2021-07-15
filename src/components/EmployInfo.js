import React from "react";
import EmployExp from "./EmployExp";
import uniqid from "uniqid";

export default function EmployInfo(props) {
  const empChildren = props.empChildren;
  const setEmpChildren = props.setEmpChildren;

  const addHandler = (e) => {
    const empId = uniqid();
    setEmpChildren([
      ...empChildren,
      {
        key: empId,
        id: empId,
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
    const empCopy = empChildren.filter((child) => child.id !== id);
    setEmpChildren(empCopy);
  };

  return (
    <div>
      <h1>Employment</h1>
      {empChildren.map((child) => {
        return (
          <EmployExp
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
