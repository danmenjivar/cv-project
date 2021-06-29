import React from "react";

export default function EdExpElement() {
  return (
    <div>
      <form action="">
        <label htmlFor="schoolName">
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            placeholder="School Name"
          />
        </label>
        <label htmlFor="degreeOfStudy">
          <input
            type="text"
            name="degreeOfStudy"
            id="degreeOfStudy"
            placeholder="Degree"
          />
        </label>
        <label htmlFor="concentration">
          <input
            type="text"
            name="concentration"
            id="concentration"
            placeholder="Concentration"
          />
        </label>
        <label htmlFor="gradDate">
          <input
            type="text"
            name="gradDate"
            id="gradDate"
            placeholder="Graduation Date"
          />
        </label>
        <label htmlFor="subjectOfStudy">
          <input
            type="text"
            name="subjectOfStudy"
            id="subjectOfStudy"
            placeholder="Subject of Study"
          />
        </label>
        <label htmlFor="city">
          <input type="text" name="city" id="city" placeholder="City" />
        </label>
        <label htmlFor="state">
          <input type="text" name="state" id="state" placeholder="State" />
        </label>
        <label htmlFor="relStudy">
          <textarea
            type="text"
            name="relStudy"
            id="relStudy"
            placeholder="Relevant coursework/thesis/honors/awards (optional)"
          />
        </label>
      </form>
      <button>Add</button>
    </div>
  );
}
