import React from "react";
import EdExp from "./EdExp";
import uniqid from "uniqid";
import "../styles/Button.css";
import AddIcon from "@material-ui/icons/Add";

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
        schoolName: "",
        degreeOfStudy: "",
        gradDate: "",
        city: "",
        state: "",
        relStudy: "",
        isRemote: false,
      },
    ]);
  };

  const deleteHandler = (id) => {
    const edCopy = edChildren.filter((child) => child.id !== id);
    setEdChildren(edCopy);
  };

  const switchHandler = (id, fieldName) => {
    const edCopy = [...edChildren];
    const indexOfElemChanged = edCopy.findIndex((elem) => elem.id === id);
    const flag = edCopy[indexOfElemChanged][fieldName];
    edCopy[indexOfElemChanged][fieldName] = !flag;
    setEdChildren(edCopy);
  };

  return (
    <div>
      <h1>Education</h1>
      {edChildren.map((child) => {
        return (
          <EdExp
            id={child.id}
            key={child.key}
            deleteHandler={deleteHandler}
            handleChange={props.handleChange}
            edInfo={child}
            switchHandler={switchHandler}
          />
        );
      })}
      <div className="btn-container">
        <button className="add-btn" onClick={addHandler}>
          <AddIcon /> Educational Experience
        </button>
      </div>
    </div>
  );
}
