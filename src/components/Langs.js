import React from "react";
import "../styles/Form.css";

export default function Langs(props) {
  const formId = "lang#" + props.id;
  return (
    <div>
      <form id={formId}>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="name"
            onChange={props.handleChange}
            placeholder="PLACEHOLDER"
          />
          <label className="form_label" htmlFor="name">
            Language Name
          </label>
        </div>
      </form>
      <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
    </div>
  );
}
