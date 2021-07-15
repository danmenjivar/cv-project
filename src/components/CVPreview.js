import React, { Component } from "react";
import "../styles/CVPreview.css";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";

export default class CVPreview extends Component {
  render() {
    const personalInfo = this.props.personal;
    const edInfo = this.props.edInfo;
    const expInfo = this.props.expInfo;
    const techInfo = this.props.techInfo;

    function dateFormatter(htmlDate) {
      const datePattern = /\d{4}-\d{2}-\d{2}/;
      if (!datePattern.test(htmlDate)) {
        return;
      }

      let [year, month, day] = htmlDate.split("-");

      // strip leading zeroes
      const zeroPattern = /^0/g;
      month = month.replaceAll(zeroPattern, "");
      day = day.replaceAll(zeroPattern, "");

      const getMonth = (month) => {
        switch (month) {
          case "1":
            return "January";
          case "2":
            return "February";
          case "3":
            return "March";
          case "4":
            return "April";
          case "5":
            return "May";
          case "6":
            return "June";
          case "7":
            return "July";
          case "8":
            return "August";
          case "9":
            return "September";
          case "10":
            return "October";
          case "11":
            return "November";
          case "12":
            return "December";
          default:
            return "BAD_MONTH";
        }
      };
      return `${getMonth(month)} ${day}, ${year}`;
    }

    function isTechExp() {
      return (
        techInfo.projs.length > 0 ||
        techInfo.langs.length > 0 ||
        techInfo.tools.length > 0
      );
    }

    return (
      <div className="CVPreview">
        <h1 style={{ color: "black" }}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
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
        {edInfo.length > 0 && <h2>Education</h2>}
        {edInfo.map((ed) => {
          return (
            <div className="grid">
              <div className="row1-col1">{ed.schoolName}</div>
              <div className="row1-col2">
                {ed.city}, {ed.state}
              </div>
              <div className="row2-col1">{ed.degreeOfStudy}</div>
              <div className="row2-col2">{dateFormatter(ed.gradDate)}</div>
              <div className="row3">{ed.relStudy}</div>
            </div>
          );
        })}
        {expInfo.length > 0 && <h2>Employment</h2>}
        {expInfo.map((exp) => {
          return (
            <div className="grid">
              <div className="row1-col1">{exp.companyName}</div>
              <div className="row1-col2">
                {exp.city}, {exp.state}
              </div>
              <div className="row2-col1">{exp.positionTitle}</div>
              <div className="row2-col2">
                {dateFormatter(exp.startDate)}-{dateFormatter(exp.endDate)}
              </div>
              <div className="row3">{exp.resp}</div>
            </div>
          );
        })}
        {isTechExp() && <h2>Technical Experience</h2>}
        {techInfo.projs.length > 0 && <h3>Personal Projects</h3>}
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
