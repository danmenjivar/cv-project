import React from "react";

export default function PersonalInfo() {
  return (
    <div>
      <form action="">
        <h3>Personal Info</h3>
        <label htmlFor="firstName">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
        </label>
        <label htmlFor="lastName">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
        </label>
        <label htmlFor="Street Address">
          <input
            type="text"
            name="Street Address"
            id="Street Address"
            placeholder="Street Address"
          />
        </label>
        <label htmlFor="city">
          <input type="text" name="city" id="city" placeholder="City" />
        </label>
        <label htmlFor="state">
          <input type="text" name="state" id="state" placeholder="State" />
        </label>
        <label htmlFor="zipCode">
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            placeholder="Zip Code"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
        </label>
        <label htmlFor="phone">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone number"
          />
        </label>
        <label htmlFor="linkedIn">
          <input
            type="url"
            name="linkedIn"
            id="linkedIn"
            placeholder="LinkedIn"
          />
        </label>
      </form>
    </div>
  );
}
