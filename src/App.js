import React, { useState, useRef } from "react";
import Nav from "./components/Nav";
import PersonalInfo from "./components/PersonalInfo";
import EdInfo from "./components/EdInfo";
import EmployInfo from "./components/EmployInfo";
import TechExp from "./components/TechExp";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";
import { useReactToPrint } from "react-to-print";
import FileSaver, { saveAs } from "file-saver";

// Note: color palette https://coolors.co/ee6c4d-f38d68-662c91-17a398-33312e
function App() {
  // states
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "FIRST_NAME",
    lastName: "LAST_NAME",
    streetAddress: "STREET_ADDRESS",
    city: "CITY",
    state: "ST",
    zipCode: "ZIPC0D3",
    email: "EMAIL@EMAIL.COM",
    phone: "(123) 456-678",
    linkedIn: "_USERNAME",
    github: "_USERNAME",
  });

  const [edInfo, setEdInfo] = useState([]);

  const [empInfo, setEmpInfo] = useState([]);

  const [projs, setProjs] = useState([]);

  const [langs, setLangs] = useState([]);

  const [tools, setTools] = useState([]);

  // refs
  const previewRef = useRef(); // for calling react-to-print

  // handlers
  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });

  const handleChange = (e) => {
    const [formName, formId] = e.target.form.id.split("#");
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.table({
      formName,
      formId,
      fieldName,
      fieldValue,
    });

    switch (formName) {
      case "personalInfo":
        handlePersonalInfoChange(fieldName, fieldValue);
        break;
      case "edInfo":
        handleEduInfoChange(formId, fieldName, fieldValue);
        break;
      case "empInfo":
        handleEmpInfoChange(formId, fieldName, fieldValue);
        break;
      case "proj":
        handleProjInfoChange(formId, fieldName, fieldValue);
        break;
      case "lang":
        handleLangInfoChange(formId, fieldName, fieldValue);
        break;
      case "tool":
        handleToolInfoChange(formId, fieldName, fieldValue);
        break;
      default:
        break;
    }
  };

  const handlePersonalInfoChange = (fieldName, fieldValue) => {
    let copyOfState = Object.assign({}, personalInfo);
    copyOfState[fieldName] = fieldValue;
    setPersonalInfo(copyOfState);
  };

  const handleEduInfoChange = (formId, fieldName, fieldValue) => {
    let copyOfState = [...edInfo];
    const indexOfElemChanged = copyOfState.findIndex(
      (elem) => elem.id === formId
    );
    copyOfState[indexOfElemChanged][fieldName] = fieldValue;
    setEdInfo(copyOfState);
  };

  const handleEmpInfoChange = (formId, fieldName, fieldValue) => {
    let copyOfState = [...empInfo];
    const indexOfElemChanged = copyOfState.findIndex(
      (elem) => elem.id === formId
    );
    copyOfState[indexOfElemChanged][fieldName] = fieldValue;
    setEmpInfo(copyOfState);
  };

  const handleProjInfoChange = (formNumber, fieldName, fieldValue) => {
    let copyOfState = [...projs];
    const elemChange = copyOfState[formNumber - 1];
    elemChange[fieldName] = fieldValue;
    setProjs(copyOfState);
  };

  const handleLangInfoChange = (formNumber, fieldName, fieldValue) => {
    let copyOfState = [...langs];
    const elemChange = copyOfState[formNumber - 1];
    elemChange[fieldName] = fieldValue;
    setLangs(copyOfState);
  };

  const handleToolInfoChange = (formNumber, fieldName, fieldValue) => {
    let copyOfState = [...tools];
    const elemChange = copyOfState[formNumber - 1];
    elemChange[fieldName] = fieldValue;
    setTools(copyOfState);
  };

  const downloadJSONHandler = () => {
    const cvObj = {
      personal: personalInfo,
      emp: empInfo,
      projs: projs,
      langs: langs,
      tools: tools,
    };
    const cvData = new Blob([JSON.stringify(cvObj)], {
      type: "application/json;charset=utf-8",
    });
    FileSaver.saveAs(cvData, "cv-data.json");
  };

  const loadJSONHandler = () => {};

  // JSX render
  return (
    <div className="App">
      <Nav downloadHandler={downloadJSONHandler} printHandler={handlePrint} />
      <div className="Form">
        <PersonalInfo handleChange={handleChange} />
        <EdInfo
          handleChange={handleChange}
          edChildren={edInfo}
          setEdChildren={setEdInfo}
        />
        <EmployInfo
          handleChange={handleChange}
          empChildren={empInfo}
          setEmpChildren={setEmpInfo}
        />
        <TechExp
          handleChange={handleChange}
          projs={projs}
          setProjs={setProjs}
          langs={langs}
          setLangs={setLangs}
          tools={tools}
          setTools={setTools}
        />
        <input type="file" name="" id="" />
      </div>
      <CVPreview
        ref={previewRef}
        className="column"
        personal={personalInfo}
        edInfo={edInfo}
        expInfo={empInfo}
        techInfo={{ projs, langs, tools }}
      />
    </div>
  );
}

export default App;
