import React from "react";
import "../styles/Form.css";

export default function Tools(props) {
  const formId = "tool#" + props.id;
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
            Technology Name
          </label>
        </div>
      </form>
      <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
    </div>
  );
}
