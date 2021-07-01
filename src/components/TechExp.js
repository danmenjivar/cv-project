import React, { useState } from "react";
import Projs from "./Projs";
import Langs from "./Langs";
import Tools from "./Tools";

export default function TechExp() {
  const [projs, setProjs] = useState([
    // {
    //   key: 0,
    //   id: 0,
    //   title: "PROJ_TITLE",
    //   desc: "PROJ_DESC",
    //   etc: "LANG/TOOLS",
    // },
  ]);

  const [langs, setLangs] = useState([]);

  const [tools, setTools] = useState([]);

  const addProjectHandler = (e) => {
    setProjs([
      ...projs,
      {
        key: 0,
        id: 0,
        title: "PROJ_TITLE",
        desc: "PROJ_DESC",
        etc: "LANG/TOOLS",
      },
    ]);
  };

  const addLanguageHandler = (e) => {
    setLangs([
      ...langs,
      {
        key: 0,
        id: 0,
        lang: "LANG_NAME",
      },
    ]);
  };

  const addToolHandler = (e) => {
    setTools([
      ...tools,
      {
        key: 0,
        id: 0,
        toolName: "TECH_NAME",
      },
    ]);
  };

  return (
    <div>
      <h2>Tech Exp</h2>
      <button onClick={addProjectHandler}>+ Project</button>
      <button onClick={addLanguageHandler}>+ Language</button>
      <button onClick={addToolHandler}>+ Technology</button>
      {projs.map((proj) => {
        return <Projs />;
      })}{" "}
      {langs.map((lang) => {
        return <Langs />;
      })}
      {tools.map((tool) => {
        return <Tools />;
      })}
    </div>
  );
}
