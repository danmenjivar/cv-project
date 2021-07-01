import React from "react";

export default function Projs() {
  return (
    <div>
      <form id="proj">
        <label htmlFor="title">
          Project Title
          <input type="text" name="title" id="" />
        </label>
        <label htmlFor="year">
          Year
          <input type="text" name="year" id="" />
        </label>
        <label htmlFor="description">
          Description
          <input type="text" name="description" id="" />
        </label>
        <label htmlFor="Relevant Technologies/Tools">
          Relevant Tech/Tools:
          <input type="text" name="Relevant Technologies/Tools" id="" />
        </label>
      </form>
      <button>Delete</button>
    </div>
  );
}
