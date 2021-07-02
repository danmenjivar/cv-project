import React from "react";

export default function Projs(props) {
  const formId = "proj#" + props.id;
  return (
    <div>
      <form id={formId}>
        <label htmlFor="title">
          Project Title
          <input type="text" name="title" onChange={props.handleChange} />
        </label>
        <label htmlFor="year">
          Year
          <input type="text" name="year" onChange={props.handleChange} />
        </label>
        <label htmlFor="desc">
          Description
          <input type="text" name="desc" onChange={props.handleChange} />
        </label>
        <label htmlFor="etc">
          Relevant Tech/Tools:
          <input type="text" name="etc" onChange={props.handleChange} />
        </label>
      </form>
      <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
    </div>
  );
}
