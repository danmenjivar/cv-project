import React from "react";

export default function Langs() {
  return (
    <div>
      <form id="lang">
        <label htmlFor="lang">
          Language
          <input type="text" name="lang" />
        </label>
      </form>
      <button>Delete</button>
    </div>
  );
}
