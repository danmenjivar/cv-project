import React from "react";

export default function Tools() {
  return (
    <div>
      <form id="tools">
        <label htmlFor="toolName">
          Technology
          <input type="text" name="toolName" />
        </label>
      </form>
      <button>Delete</button>
    </div>
  );
}
