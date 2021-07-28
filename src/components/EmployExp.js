import React from "react";
import "../styles/Form.css";
import DeleteIcon from "@material-ui/icons/Delete";

export default function EmployExp(props) {
  const empInfo = props.empInfo;
  const formId = "empInfo#" + props.id;
  return (
    <div>
      <div className="btn-container-header">
        <h3>Practical Employment Experience</h3>
        <button
          className="del-btn"
          onClick={() => props.deleteHandler(props.id)}
        >
          <DeleteIcon />
        </button>
      </div>
      <form id={formId}>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="companyName"
            value={empInfo.companyName}
            onChange={props.handleChange}
            placeholder="Company Name"
          />
          <label className="form_label" htmlFor="companyName">
            Name of Company
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="positionTitle"
            value={empInfo.positionTitle}
            onChange={props.handleChange}
            placeholder="Position Title"
          />
          <label className="form_label" htmlFor="positionTitle">
            Position Title
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="date"
            name="startDate"
            value={empInfo.startDate}
            onChange={props.handleChange}
            placeholder="From"
          />
          <label className="form_label" htmlFor="startDate">
            Start Date
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="date"
            name="endDate"
            value={empInfo.endDate}
            onChange={props.handleChange}
            placeholder="To"
          />
          <label className="form_label" htmlFor="endDate">
            End Date
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="city"
            value={empInfo.city}
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
            value={empInfo.state}
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
            name="resp"
            value={empInfo.resp}
            onChange={props.handleChange}
            spellCheck="true"
            placeholder="Main activities and responsibilities"
          />
          <label className="form_label" htmlFor="resp"></label>
        </div>
      </form>
    </div>
  );
}
