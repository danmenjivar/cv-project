import React from "react";

export default function EdExpElement(props) {
  const formId = "edInfo#" + props.id;
  return (
    <div>
      <h3>Educational Experience {props.id}</h3>
      <form id={formId}>
        <label htmlFor="schoolName">
          <input
            type="text"
            name="schoolName"
            value={props.schoolName}
            onChange={props.handleChange}
            placeholder="School Name"
          />
        </label>
        <label htmlFor="degreeOfStudy">
          <input
            type="text"
            name="degreeOfStudy"
            value={props.degreeOfStudy}
            onChange={props.handleChange}
            placeholder="Degree"
          />
        </label>
        <label htmlFor="gradDate">
          <input
            type="date"
            name="gradDate"
            value={props.gradDate}
            onChange={props.handleChange}
            placeholder="Graduation Date"
          />
        </label>
        <label htmlFor="city">
          <input
            type="text"
            name="city"
            value={props.city}
            onChange={props.handleChange}
            placeholder="City"
          />
        </label>
        <label htmlFor="state">
          <input
            type="text"
            name="state"
            value={props.state}
            onChange={props.handleChange}
            placeholder="State"
          />
        </label>
        <label htmlFor="relStudy">
          <textarea
            type="text"
            name="relStudy"
            value={props.relStudy}
            onChange={props.handleChange}
            placeholder="Relevant coursework/thesis/honors/awards (optional)"
          />
        </label>
      </form>
      {props.deleteHandler && (
        <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
      )}
    </div>
  );
}
