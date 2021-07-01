import React from "react";

export default function PracticalExpElement(props) {
  const formId = "expInfo#" + props.id;
  return (
    <div>
      <h3>Practical Experience {props.id}</h3>
      <form id={formId}>
        <label htmlFor="companyName">
          <input
            type="text"
            name="companyName"
            value={props.companyName}
            onChange={props.handleChange}
            placeholder="Company Name"
          />
        </label>
        <label htmlFor="positionTitle">
          <input
            type="text"
            name="positionTitle"
            value={props.positionTitle}
            onChange={props.handleChange}
            placeholder="Position Title"
          />
        </label>
        <label htmlFor="startDate">
          <input
            type="date"
            name="startDate"
            value={props.startDate}
            onChange={props.handleChange}
            placeholder="From"
          />
        </label>
        <label htmlFor="endDate">
          <input
            type="date"
            name="endDate"
            value={props.endDate}
            onChange={props.handleChange}
            placeholder="To"
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
        {/* TODO: add switch for remote work */}
        <label htmlFor="resp">
          <textarea
            type="text"
            name="resp"
            value={props.resp}
            onChange={props.handleChange}
            placeholder="Main activities and responsibilities"
          />
        </label>
      </form>
      <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
    </div>
  );
}
