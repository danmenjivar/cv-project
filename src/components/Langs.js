import React from "react";
import "../styles/Form.css";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Langs(props) {
  const formId = "lang#" + props.id;
  return (
    <div className="btn-container-header">
      <form id={formId}>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="name"
            onChange={props.handleChange}
            placeholder="PLACEHOLDER"
            value={props.langName}
          />
          <label className="form_label" htmlFor="name">
            Language Name
          </label>
        </div>
      </form>
      <button className="del-btn" onClick={() => props.deleteHandler(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}
