import Projs from "./Projs";
import Langs from "./Langs";
import Tools from "./Tools";

export default function TechExp(props) {
  const projs = props.projs;
  const langs = props.langs;
  const tools = props.tools;
  const setProjs = props.setProjs;
  const setLangs = props.setLangs;
  const setTools = props.setTools;

  const addProjectHandler = (e) => {
    const i = projs.length;
    setProjs([
      ...projs,
      {
        key: i,
        id: i + 1,
        title: "PROJ_TITLE",
        year: "YEAR_VAL",
        desc: "PROJ_DESC",
        etc: "LANG/TOOLS",
      },
    ]);
  };

  const addLanguageHandler = (e) => {
    const i = langs.length;
    setLangs([
      ...langs,
      {
        key: i,
        id: i + 1,
        name: "LANG_NAME",
      },
    ]);
  };

  const addToolHandler = (e) => {
    const i = tools.length;
    console.log(i);
    setTools([
      ...tools,
      {
        key: i,
        id: i + 1,
        name: "TECH_NAME",
      },
    ]);
  };

  const reIndex = (arr) => {
    let i = 0;
    arr.forEach((element) => {
      element.key = i;
      element.id = i + 1;
      i++;
    });
  };

  const deleteProjectHandler = (id) => {
    const stateCopy = [...projs];
    stateCopy.splice(id - 1, 1);
    reIndex(stateCopy);
    setProjs(stateCopy);
  };

  const deleteLanguageHandler = (id) => {
    console.log(`id to delete ${id}`);
    const stateCopy = [...langs];
    console.log("Before del:", stateCopy);
    stateCopy.splice(id - 1, 1);
    console.log("After del:", stateCopy);
    reIndex(stateCopy);
    setLangs(stateCopy);
  };

  const deleteToolHandler = (id) => {
    const stateCopy = [...tools];
    stateCopy.splice(id - 1, 1);
    reIndex(stateCopy);
    setTools(stateCopy);
  };

  return (
    <div>
      <h2>Tech Exp</h2>
      <button onClick={addProjectHandler}>+ Project</button>
      <button onClick={addLanguageHandler}>+ Language</button>
      <button onClick={addToolHandler}>+ Technology</button>
      {props.projs.map((proj) => {
        return (
          <Projs
            handleChange={props.handleChange}
            id={proj.id}
            key={proj.key}
            deleteHandler={deleteProjectHandler}
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
          />
        );
      })}
    </div>
  );
}
