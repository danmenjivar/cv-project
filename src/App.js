import React, { useState, useRef } from "react";
import Nav from "./components/Nav";
import PersonalInfo from "./components/PersonalInfo";
import EdInfo from "./components/EdInfo";
import EmployInfo from "./components/EmployInfo";
import TechInfo from "./components/TechInfo";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";
import { useReactToPrint } from "react-to-print";
import FileSaver from "file-saver";

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

  const handleProjInfoChange = (formId, fieldName, fieldValue) => {
    let copyOfState = [...projs];
    const indexOfElemChanged = copyOfState.findIndex(
      (elem) => elem.id === formId
    );
    copyOfState[indexOfElemChanged][fieldName] = fieldValue;
    setProjs(copyOfState);
  };

  const handleLangInfoChange = (formId, fieldName, fieldValue) => {
    let copyOfState = [...langs];
    const indexOfElemChanged = copyOfState.findIndex(
      (elem) => elem.id === formId
    );
    copyOfState[indexOfElemChanged][fieldName] = fieldValue;
    setLangs(copyOfState);
  };

  const handleToolInfoChange = (formId, fieldName, fieldValue) => {
    let copyOfState = [...tools];
    const indexOfElemChanged = copyOfState.findIndex(
      (elem) => elem.id === formId
    );
    copyOfState[indexOfElemChanged][fieldName] = fieldValue;
    setTools(copyOfState);
  };

  const downloadJSONHandler = () => {
    const cvObj = {
      cv_version: "0.1",
      personal: personalInfo,
      ed: edInfo,
      emp: empInfo,
      projs: projs,
      langs: langs,
      tools: tools,
    };
    const cvData = new Blob([JSON.stringify(cvObj)], {
      type: "application/json;charset=utf-8",
    });
    const saveFileAs = `cv-data-${new Date()}.json`;
    FileSaver.saveAs(cvData, saveFileAs);
  };

  const loadJSONHandler = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      let fileData = e.target.result;
      loadJSON(fileData);
    };

    reader.readAsText(file);
  };

  const loadJSON = (fileData) => {
    let cvData = JSON.parse(fileData);
    // sanity check if JSON uploaded is a CV
    if (cvData.cv_version) {
      setPersonalInfo(cvData.personal);
      setEdInfo(cvData.ed);
      setEmpInfo(cvData.emp);
      setProjs(cvData.projs);
      setTools(cvData.tools);
      setLangs(cvData.langs);
      console.log(personalInfo);
    } else {
      console.error("Invalid File Type");
    }
  };

  // JSX render
  return (
    <div className="App">
      <Nav
        downloadHandler={downloadJSONHandler}
        printHandler={handlePrint}
        handleJSONUpload={loadJSONHandler}
      />
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
        <TechInfo
          handleChange={handleChange}
          projs={projs}
          setProjs={setProjs}
          langs={langs}
          setLangs={setLangs}
          tools={tools}
          setTools={setTools}
        />
      </div>
      <div>
        <h1>Preview</h1>
        <CVPreview
          ref={previewRef}
          className="column"
          personal={personalInfo}
          edInfo={edInfo}
          expInfo={empInfo}
          techInfo={{ projs, langs, tools }}
        />
      </div>
    </div>
  );
}

export default App;
