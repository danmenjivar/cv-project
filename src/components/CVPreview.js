import React, { Component } from "react";
import "../styles/CVPreview.css";
import { Linkedin } from "@icons-pack/react-simple-icons";

export default class CVPreview extends Component {
  render() {
    const personalInfo = this.props.personal;
    const edInfo = this.props.edInfo;
    const expInfo = this.props.expInfo;
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
          {" \u2022 "}
          <Linkedin />@{personalInfo.linkedIn}
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
        {expInfo.map((exp) => {
          return (
            <p>
              {exp.companyName} {exp.positionTitle} {exp.startDate}{" "}
              {exp.endDate} {exp.city} {exp.state} {exp.resp}
            </p>
          );
        })}
      </div>
    );
  }
}
