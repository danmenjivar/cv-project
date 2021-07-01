import React from "react";

export default function PracticalExpElement() {
  return (
    <div>
      <form action="">
        <label htmlFor="companyName">
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Company Name"
          />
        </label>
        <label htmlFor="positionTitle">
          <input
            type="text"
            name="positionTitle"
            id="positionTitle"
            placeholder="Position Title"
          />
        </label>
        <label htmlFor="dateFrom">
          <input type="date" name="dateFrom" id="dateFrom" placeholder="From" />
        </label>
        <label htmlFor="dateUntil">
          <input type="date" name="dateUntil" id="dateUntil" placeholder="To" />
        </label>
        <label htmlFor="city">
          <input type="text" name="city" id="city" placeholder="City" />
        </label>
        <label htmlFor="state">
          <input type="text" name="state" id="state" placeholder="State" />
        </label>
        {/* TODO: add switch for remote work */}
        <label htmlFor="responsibilities">
          <textarea
            type="text"
            name="responsibilities"
            id="responsibilities"
            placeholder="Main activities and responsibilities"
          />
        </label>
      </form>
      <button>Delete</button>
    </div>
  );
}
