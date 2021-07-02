import React, { Component } from "react";
import "../styles/CVPreview.css";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";

export default class CVPreview extends Component {
  render() {
    const personalInfo = this.props.personal;
    const edInfo = this.props.edInfo;
    const expInfo = this.props.expInfo;
    const techInfo = this.props.techInfo;
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
          {" \u2022 "}
          <Github />@{personalInfo.github}
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
        <h2>Employment</h2>
        {expInfo.map((exp) => {
          return (
            <p>
              {exp.companyName} {exp.positionTitle} {exp.startDate}{" "}
              {exp.endDate} {exp.city} {exp.state} {exp.resp}
            </p>
          );
        })}
        <h2>Technical Experience</h2>
        {techInfo.projs.map((proj) => {
          return (
            <p>
              {proj.title}
              {proj.year}
              {proj.desc}
              {proj.etc}
            </p>
          );
        })}
        {techInfo.langs.map((lang) => {
          return <p>{lang.name}</p>;
        })}
        {techInfo.tools.map((tech) => {
          return <p>{tech.name}</p>;
        })}
      </div>
    );
  }
}
