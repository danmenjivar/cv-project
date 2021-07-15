import React from "react";
import "../styles/Form.css";

export default function Projs(props) {
  const formId = "proj#" + props.id;
  return (
    <div>
      <form id={formId}>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="title"
            onChange={props.handleChange}
            placeholder="Project Title"
          />
          <label className="form_label" htmlFor="title">
            Project Title
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="year"
            onChange={props.handleChange}
            placeholder="Year"
          />
          <label className="form_label" htmlFor="year">
            Year
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="desc"
            onChange={props.handleChange}
            placeholder="Brief Description"
          />
          <label className="form_label" htmlFor="desc">
            Brief Description
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="etc"
            onChange={props.handleChange}
            placeholder="Relevant Tech/Tools:"
          />
          <label className="form_label" htmlFor="etc">
            Relevant Tech/Tools:
          </label>
        </div>
      </form>
      <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
    </div>
  );
}
