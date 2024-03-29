import Projs from "./Projs";
import Langs from "./Langs";
import Tools from "./Tools";
import uniqid from "uniqid";
import "../styles/Button.css";
import AddIcon from "@material-ui/icons/Add";

export default function TechInfo(props) {
  const projs = props.projs;
  const langs = props.langs;
  const tools = props.tools;
  const setProjs = props.setProjs;
  const setLangs = props.setLangs;
  const setTools = props.setTools;

  const addProjectHandler = (e) => {
    const projId = uniqid();
    setProjs([
      ...projs,
      {
        key: projId,
        id: projId,
        title: "",
        year: "",
        desc: "",
        etc: "",
      },
    ]);
  };

  const addLanguageHandler = (e) => {
    const langId = uniqid();
    setLangs([
      ...langs,
      {
        key: langId,
        id: langId,
        name: "",
      },
    ]);
  };

  const addToolHandler = (e) => {
    const toolId = uniqid();
    setTools([
      ...tools,
      {
        key: toolId,
        id: toolId,
        name: "",
      },
    ]);
  };

  const deleteProjectHandler = (id) => {
    const stateCopy = projs.filter((child) => child.id !== id);
    setProjs(stateCopy);
  };

  const deleteLanguageHandler = (id) => {
    const stateCopy = langs.filter((child) => child.id !== id);
    setLangs(stateCopy);
  };

  const deleteToolHandler = (id) => {
    const stateCopy = tools.filter((child) => child.id !== id);
    setTools(stateCopy);
  };

  return (
    <div>
      <h1>Technical Experience</h1>
      <div className="tri-btn-container">
        <button className="add-btn" onClick={addProjectHandler}>
          <AddIcon /> Project
        </button>
        <button className="add-btn" onClick={addLanguageHandler}>
          <AddIcon /> Language
        </button>
        <button className="add-btn" onClick={addToolHandler}>
          <AddIcon /> Technology
        </button>
      </div>
      {props.projs.map((proj) => {
        return (
          <Projs
            handleChange={props.handleChange}
            id={proj.id}
            key={proj.key}
            deleteHandler={deleteProjectHandler}
            projInfo={proj}
          />
        );
      })}
      {props.langs.map((lang) => {
        return (
          <Langs
            handleChange={props.handleChange}
            id={lang.id}
            key={lang.key}
            deleteHandler={deleteLanguageHandler}
            langName={lang.name}
          />
        );
      })}
      {props.tools.map((tool) => {
        return (
          <Tools
            handleChange={props.handleChange}
            id={tool.id}
            key={tool.key}
            deleteHandler={deleteToolHandler}
            toolName={tool.name}
          />
        );
      })}
    </div>
  );
}
