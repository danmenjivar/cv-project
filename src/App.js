import "./styles/App.css";
import Nav from "./components/Nav";
import PersonalInfo from "./components/PersonalInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";

// Note: color palette https://coolors.co/ee6c4d-f38d68-662c91-17a398-33312e
function App() {
  return (
    <div className="App">
      <Nav />
      <PersonalInfo />
      <EducationalExp />
      <PracticalExp />
    </div>
  );
}

export default App;
