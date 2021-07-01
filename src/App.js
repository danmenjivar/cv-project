import React, { useState, useRef } from "react";
import Nav from "./components/Nav";
import PersonalInfo from "./components/PersonalInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";
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
  });

  const [edInfo, setEdInfo] = useState([
    {
      key: 0,
      id: 1,
      schoolName: "SCHOOL_NAME",
      degreeOfStudy: "DEGREE",
      gradDate: "GRAD_DATE",
      city: "CITY_NAME",
      state: "ST",
      relStudy: "REL_STUDY",
    },
  ]);

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
    const formId = e.target.form.id;
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    // console.log(formId, fieldName, fieldValue);

    if (formId === "personalInfo") {
      handlePersonalInfoChange(fieldName, fieldValue);
    } else if (formId.includes("edInfo")) {
      const formNum = formId.split("#")[1];
      handleEduInfoChange(formNum, fieldName, fieldValue);
    } else if (formId.includes("expInfo")) {
      const formNum = formId.split("#")[1];
      handleExpInfoChange(formNum, fieldName, fieldValue);
    }
  };

  const handlePersonalInfoChange = (fieldName, fieldValue) => {
    let copyOfState = Object.assign({}, personalInfo);
    copyOfState[fieldName] = fieldValue;
    setPersonalInfo(copyOfState);
  };

  const handleEduInfoChange = (formNumber, fieldName, fieldValue) => {
    let copyOfState = [...edInfo];
    const elemChange = copyOfState[formNumber - 1];
    elemChange[fieldName] = fieldValue;
    setEdInfo(copyOfState);
  };

  const handleExpInfoChange = (formNumber, fieldName, fieldValue) => {
    let copyOfState = [...expInfo];
    const elemChange = copyOfState[formNumber - 1];
    elemChange[fieldName] = fieldValue;
    setExpInfo(copyOfState);
  };

  // JSX render
  return (
    <div className="App">
      <Nav />
      <div className="column">
        <PersonalInfo handleChange={handleChange} />
        <EducationalExp
          handleChange={handleChange}
          edChildren={edInfo}
          setEdChildren={setEdInfo}
        />
        <PracticalExp
          handleChange={handleChange}
          expChildren={expInfo}
          setEdChildren={setExpInfo}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handlePrint}>Download as PDF</button>
      </div>
      <CVPreview
        ref={previewRef}
        className="column"
        personal={personalInfo}
        edInfo={edInfo}
        expInfo={expInfo}
      />
    </div>
  );
}

export default App;
