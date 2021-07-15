import React from "react";
import "../styles/Form.css";

export default function EdExp(props) {
  const formId = "edInfo#" + props.id;
  return (
    <div>
      <h3>Educational Experience</h3>
      <form id={formId}>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="schoolName"
            value={props.schoolName}
            onChange={props.handleChange}
            placeholder="School Name"
          />
          <label className="form_label" htmlFor="schoolName">
            Name of School
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="degreeOfStudy"
            value={props.degreeOfStudy}
            onChange={props.handleChange}
            placeholder="Degree"
          />
          <label className="form_label" htmlFor="degreeOfStudy">
            Degree
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="date"
            name="gradDate"
            value={props.gradDate}
            onChange={props.handleChange}
            placeholder="Graduation Date"
          />
          <label className="form_label" htmlFor="gradDate">
            Graduation Date
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="city"
            value={props.city}
            onChange={props.handleChange}
            placeholder="City"
          />
          <label className="form_label" htmlFor="city">
            City
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="state"
            value={props.state}
            onChange={props.handleChange}
            placeholder="State"
          />
          <label className="form_label" htmlFor="state">
            State
          </label>
        </div>
        <div className="form_group">
          <textarea
            type="text"
            name="relStudy"
            value={props.relStudy}
            onChange={props.handleChange}
            placeholder="Relevant coursework/thesis/honors/awards (optional)"
          />
        </div>
      </form>
      {props.deleteHandler && (
        <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
      )}
    </div>
  );
}
