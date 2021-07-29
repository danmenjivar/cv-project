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
        return "MXY, XX, XYYZ";
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
          {personalInfo.firstName.length > 0
            ? personalInfo.firstName
            : "FIRST_NAME"}{" "}
          {personalInfo.lastName.length > 0
            ? personalInfo.lastName
            : "LAST_NAME"}
        </h1>
        <div className="socials">
          <Linkedin />@
          {personalInfo.linkedIn.length > 0
            ? personalInfo.linkedIn
            : "_USERNAME"}
          {" \u2022 "}
          <Github />@
          {personalInfo.github.length > 0 ? personalInfo.github : "_USERNAME"}
        </div>
        <hr></hr>
        <div className="personal">
          {personalInfo.streetAddress.length > 0
            ? personalInfo.streetAddress
            : "STREET_ADDRESS"}
          {" \u2022 "}
          {personalInfo.city.length > 0 ? personalInfo.city : "CITY"}
          {", "}
          {personalInfo.state.length > 0 ? personalInfo.state : "ST"}{" "}
          {personalInfo.zipCode.length > 0 ? personalInfo.zipCode : "XXXXX"}
          {" \u2022 "}
          {personalInfo.email.length > 0
            ? personalInfo.email
            : "EMAIL@HOST.COM"}
          {" \u2022 "}
          {personalInfo.phone.length > 0
            ? personalInfo.phone
            : "(XYZ) XXX-XYYZ"}
        </div>
        {edInfo.length > 0 && <h2>Education</h2>}
        {edInfo.map((ed) => {
          return (
            <div className="grid" key={ed.key}>
              <div className="row1-col1">
                {ed.schoolName.length > 0 ? ed.schoolName : "SCHOOL_NAME"}
              </div>
              <div className="row1-col2">
                {ed.city.length > 0 ? ed.city : "CITY"},{" "}
                {ed.state.length > 0 ? ed.state : "ST"}
              </div>
              <div className="row2-col1">
                {ed.degreeOfStudy.length > 0 ? ed.degreeOfStudy : "DEGREE_NAME"}
              </div>
              <div className="row2-col2">{dateFormatter(ed.gradDate)}</div>
              <div className="row3">
                {ed.relStudy.length > 0 ? ed.relStudy : "REL_STUDY"}
              </div>
            </div>
          );
        })}
        {expInfo.length > 0 && <h2>Employment</h2>}
        {expInfo.map((exp) => {
          return (
            <div className="grid" key={exp.key}>
              <div className="row1-col1">
                {exp.companyName.length > 0 ? exp.companyName : "COMPANY_NAME"}
              </div>
              <div className="row1-col2">
                {exp.isRemote
                  ? "Remote"
                  : (exp.city.length > 0 ? exp.city : "CITY") +
                    ", " +
                    (exp.state.length > 0 ? exp.state : "ST")}
              </div>
              <div className="row2-col1">
                {exp.positionTitle.length > 0
                  ? exp.positionTitle
                  : "POSITION_TITLE"}
              </div>
              <div className="row2-col2">
                {dateFormatter(exp.startDate)}
                {"\u2013"}
                {exp.isCurrentPosition ? "Present" : dateFormatter(exp.endDate)}
              </div>
              <div className="row3">
                {exp.resp.length > 0 ? exp.resp : "RESPONSIBILITIES"}
              </div>
            </div>
          );
        })}
        {isTechExp() && <h2>Technical Experience</h2>}
        {techInfo.projs.length > 0 && <h3>Personal Projects</h3>}
        {techInfo.projs.map((proj) => {
          return (
            <div className="justify-left" key={proj.key}>
              {" \u2022 "}
              <span className="elemTitle">
                {proj.title.length > 0 ? proj.title : "PROJ_TITLE"}
              </span>{" "}
              ({proj.year.length > 0 ? proj.year : "XYYZ"}).{" "}
              {proj.desc.length > 0 ? proj.desc : "PROJ_DESC"}.{" "}
              {proj.etc.length > 0 ? proj.etc : "LANG/TOOLS"}.
            </div>
          );
        })}
        <div className="justify-left">
          {techInfo.langs.length > 0 && (
            <span className="elemTitle">Languages: </span>
          )}
          {techInfo.langs.map((lang, i) => {
            return (
              <span key={lang.key}>
                {lang.name.length > 0 ? lang.name : "LANG_NAME"}
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
              <span key={tech.key}>
                {tech.name.length > 0 ? tech.name : "TECH_NAME"}
                {techInfo.tools.length === i + 1 ? "." : ", "}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
