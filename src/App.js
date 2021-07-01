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
      schoolName: "SCHOOL_NAME",
      degreeOfStudy: "DEGREE",
      gradDate: "GRAD_DATE",
      city: "CITY_NAME",
      state: "ST",
      relStudy: "REL_STUDY",
    },
  ]);
  const [expInfo, setExpInfo] = useState([]);

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
    console.log(e);
    console.log(e.target.form.id, e.target.name, e.target.value);
    handleChangeHelper(e.target.form.id, e.target.name, e.target.value);
  };

  const handleChangeHelper = (formId, fieldName, fieldValue) => {
    switch (formId) {
      case "personalInfo":
        let copyOfState = Object.assign({}, personalInfo);
        copyOfState[fieldName] = fieldValue;
        setPersonalInfo(copyOfState);
        break;
      case "edInfo":
        break;
      default:
        break;
    }
  };

  const handleAdd = (e) => {
    console.log("Clicked add", e);
  };

  // JSX render
  return (
    <div className="App">
      <Nav />
      <div className="column">
        <PersonalInfo handleChange={handleChange} />
        <EducationalExp handleChange={handleChange} onAdd={handleAdd} />
        <PracticalExp onAdd={handleAdd} />
        <button onClick={handleSave}>Save</button>
        <button onClick={handlePrint}>Download as PDF</button>
      </div>
      <CVPreview
        ref={previewRef}
        className="column"
        personal={personalInfo}
        edInfo={edInfo}
      />
    </div>
  );
}

export default App;
