import React from "react";
import EdExpElement from "./EdExpElement";

export default function EducationalExp(props) {
  const edChildren = props.edChildren;
  const setEdChildren = props.setEdChildren;
  // Moved up to App.js
  // const [edChildren, setEdChildren] = useState([
  //   {
  //     key: 0,
  //     id: 1,
  //     schoolName: "SCHOOL_NAME",
  //     degreeOfStudy: "DEGREE",
  //     gradDate: "GRAD_DATE",
  //     city: "CITY_NAME",
  //     state: "ST",
  //     relStudy: "REL_STUDY",
  //   },
  // ]);

  const addHandler = (e) => {
    const edIndex = edChildren.length;
    setEdChildren([
      ...edChildren,
      {
        key: edIndex,
        id: edIndex + 1,
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
    const edCopy = [...edChildren];
    edCopy.splice(id - 1, 1);
    reIndex(edCopy);
    setEdChildren(edCopy);
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
      {edChildren.map((child) => {
        return (
          <EdExpElement
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
