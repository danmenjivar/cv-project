import React from "react";

export default function Langs(props) {
  const formId = "lang#" + props.id;
  return (
    <div>
      <form id={formId}>
        <label htmlFor="name">
          Language {props.id}
          <input type="text" name="name" onChange={props.handleChange} />
        </label>
      </form>
      <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
    </div>
  );
}
