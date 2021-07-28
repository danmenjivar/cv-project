import React from "react";
import EmployExp from "./EmployExp";
import uniqid from "uniqid";
import "../styles/Button.css";
import AddIcon from "@material-ui/icons/Add";

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
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        isCurrentPosition: false,
        isRemote: false,
        city: "",
        state: "",
        resp: "",
      },
    ]);
  };

  const deleteHandler = (id) => {
    const empCopy = empChildren.filter((child) => child.id !== id);
    setEmpChildren(empCopy);
  };

  const onToggleHandler = (id, fieldName) => {
    const empCopy = [...empChildren];
    const indexOfElemChanged = empCopy.findIndex((elem) => elem.id === id);
    const flag = empCopy[indexOfElemChanged][fieldName];
    empCopy[indexOfElemChanged][fieldName] = !flag;
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
            switchHandler={onToggleHandler}
            handleChange={props.handleChange}
            empInfo={child}
          />
        );
      })}
      <div className="btn-container">
        <button onClick={addHandler} className="add-btn">
          <AddIcon /> Employment Experience
        </button>
      </div>
    </div>
  );
}
