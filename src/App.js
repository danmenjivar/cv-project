import React, { useState, useRef } from "react";
import Nav from "./components/Nav";
import PersonalInfo from "./components/PersonalInfo";
import EdInfo from "./components/EdInfo";
import PracticalExp from "./components/PracticalExp";
import TechExp from "./components/TechExp";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";
import { useReactToPrint } from "react-to-print";

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

  const [expInfo, setExpInfo] = useState([
    {
      key: 0,
      id: 1,
      companyName: "COMPANY_NAME",
      positionTitle: "POSITION",
      startDate: "START_DATE",
      endDate: "END_DATE",
      city: "CITY_NAME",
      state: "ST",
      resp: "RESPONSIBILITIES",
    },
  ]);

  const [projs, setProjs] = useState([]);

  const [langs, setLangs] = useState([]);

  const [tools, setTools] = useState([]);

  // refs
  const previewRef = useRef(); // for calling react-to-print

  // handlers
  const handleSave = () => {
    // TODO: save to localStorage
    console.log("Clicked on Save");
  };

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
      case "expInfo":
        handleExpInfoChange(formId, fieldName, fieldValue);
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

  const handleExpInfoChange = (formNumber, fieldName, fieldValue) => {
    let copyOfState = [...expInfo];
    const elemChange = copyOfState[formNumber - 1];
    elemChange[fieldName] = fieldValue;
    setExpInfo(copyOfState);
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

  // JSX render
  return (
    <div className="App">
      <Nav />
      <div className="Form">
        <PersonalInfo handleChange={handleChange} />
        <EdInfo
          handleChange={handleChange}
          edChildren={edInfo}
          setEdChildren={setEdInfo}
        />
        <PracticalExp
          handleChange={handleChange}
          expChildren={expInfo}
          setExpChildren={setExpInfo}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handlePrint}>Download as PDF</button>
        <TechExp
          handleChange={handleChange}
          projs={projs}
          setProjs={setProjs}
          langs={langs}
          setLangs={setLangs}
          tools={tools}
          setTools={setTools}
        />
      </div>
      <CVPreview
        ref={previewRef}
        className="column"
        personal={personalInfo}
        edInfo={edInfo}
        expInfo={expInfo}
        techInfo={{ projs, langs, tools }}
      />
    </div>
  );
}

export default App;
