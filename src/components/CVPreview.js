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
        <div className="socials">
          <Linkedin />@{personalInfo.linkedIn}
          {" \u2022 "}
          <Github />@{personalInfo.github}
        </div>
        <hr></hr>
        <div className="personal">
          {personalInfo.streetAddress}
          {" \u2022 "}
          {personalInfo.city},{personalInfo.state} {personalInfo.zipCode}
          {" \u2022 "}
          {personalInfo.email}
          {" \u2022 "}
          {personalInfo.phone}
        </div>
        <h2>Education</h2>
        {edInfo.map((ed) => {
          return (
            <div className="grid">
              <div className="row1-col1">{ed.schoolName}</div>
              <div className="row1-col2">
                {ed.city}, {ed.state}
              </div>
              <div className="row2-col1">{ed.degreeOfStudy}</div>
              <div className="row2-col2">{ed.gradDate}</div>
              <div className="row3">{ed.relStudy}</div>
            </div>
          );
        })}
        <h2>Employment</h2>
        {expInfo.map((exp) => {
          return (
            <div className="grid">
              <div className="row1-col1">{exp.companyName}</div>
              <div className="row1-col2">
                {exp.city}, {exp.state}
              </div>
              <div className="row2-col1">{exp.positionTitle}</div>
              <div className="row2-col2">
                {exp.startDate}-{exp.endDate}
              </div>
              <div className="row3">{exp.resp}</div>
            </div>
          );
        })}
        <h2>Technical Experience</h2>
        {techInfo.projs.length > 0 && <h3>Projects</h3>}
        {techInfo.projs.map((proj) => {
          return (
            <div className="justify-left">
              {" \u2022 "}
              <span className="elemTitle">{proj.title}</span> ({proj.year}).{" "}
              {proj.desc}. {proj.etc}.
            </div>
          );
        })}
        <div className="justify-left">
          {techInfo.langs.length > 0 && (
            <span className="elemTitle">Languages: </span>
          )}
          {techInfo.langs.map((lang, i) => {
            return (
              <span>
                {lang.name}
                {techInfo.langs.length === i + 1 ? "." : ", "}
              </span>
            );
          })}
        </div>
        <div className="justify-left">
          {techInfo.tools.length > 0 && (
            <span className="elemTitle">Technologies: </span>
          )}
          {techInfo.tools.map((tech, i) => {
            return (
              <span>
                {tech.name}
                {techInfo.tools.length === i + 1 ? "." : ", "}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
