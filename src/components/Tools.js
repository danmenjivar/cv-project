import React from "react";

export default function Tools(props) {
  const formId = "tool#" + props.id;
  return (
    <div>
      <form id={formId}>
        <label htmlFor="name">
          Technology {props.id}
          <input type="text" name="name" onChange={props.handleChange} />
        </label>
      </form>
      <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
    </div>
  );
}
