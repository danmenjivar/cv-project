import React, { Component } from "react";
import "../styles/CVPreview.css";

export default class CVPreview extends Component {
  render() {
    const simpleIcons = require("simple-icons");
    const linkedInIcon = simpleIcons.get("linkedin");
    const personalInfo = this.props.personal;
    const edInfo = this.props.edInfo;
    return (
      <div className="CVPreview">
        <h3>
          {personalInfo.firstName} {personalInfo.lastName}
        </h3>
        <hr></hr>
        <p>
          {personalInfo.streetAddress}
          {" \u2022 "}
          {personalInfo.city},{personalInfo.state} {personalInfo.zipCode}
          {" \u2022 "}
          {personalInfo.email}
          {" \u2022 "}
          {personalInfo.phone}
          {linkedInIcon.svg}
          {" \u2022 "}@{personalInfo.linkedIn}
        </p>
        <h2>Education</h2>
        {edInfo.map((ed) => {
          return (
            <p>
              {ed.schoolName} {ed.degreeOfStudy} {ed.gradDate} {ed.city}{" "}
              {ed.state} {ed.relStudy}
            </p>
          );
        })}
        <h2>Experience</h2>
      </div>
    );
  }
}
