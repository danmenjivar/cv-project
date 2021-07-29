import React from "react";
import "../styles/Nav.css";
import PrintIcon from "@material-ui/icons/Print";
import GetAppIcon from "@material-ui/icons/GetApp";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import GitHubIcon from "@material-ui/icons/GitHub";
import ClearIcon from "@material-ui/icons/Clear";

export default function Nav(props) {
  return (
    <div className="Nav">
      <h1 style={{ color: "white" }}>CV Maker</h1>
      <span className="end">
        <button
          className="icon-button"
          onClick={props.clearHandler}
          title="Clear All CV Data"
        >
          <ClearIcon />
        </button>
        <label
          htmlFor="file-upload"
          className="icon-button"
          title="Load CV Data"
        >
          <input
            type="file"
            name="file-ipload"
            id="file-upload"
            accept=".json"
            onChange={(e) => props.handleJSONUpload(e.target.files[0])}
          />
          <CloudUploadIcon />
        </label>

        <button
          className="icon-button"
          onClick={props.downloadHandler}
          title="Download CV Data"
        >
          <GetAppIcon />
        </button>
        <button
          className="icon-button"
          onClick={props.printHandler}
          title="Print CV"
        >
          <PrintIcon />
        </button>
        <a
          className="icon-button"
          href="https://github.com/danmenjivar"
          target="_blank"
          title="Checkout My GitHub"
        >
          <GitHubIcon />
        </a>
      </span>
    </div>
  );
}
