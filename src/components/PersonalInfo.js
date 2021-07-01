import "../styles/PersonalInfo.css";

export default function PersonalInfo(props) {
  return (
    <div>
      <form id="personalInfo" className="PersonalInfo">
        <h3 className="title">Personal Info</h3>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={props.firstName}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={props.lastName}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor="streetAddress">
          Street Address
          <input
            type="text"
            name="streetAddress"
            placeholder="123 A St."
            value={props.streetAddress}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor="city">
          City
          <input
            type="text"
            name="city"
            placeholder="City"
            value={props.city}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor="state">
          State
          <input
            type="text"
            name="state"
            placeholder="State"
            value={props.state}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor="zipCode">
          Zip Code
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={props.zipCode}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={props.email}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            type="tel"
            name="phone"
            placeholder="123-456-7890"
            value={props.phone}
            onChange={props.handleChange}
          />
        </label>
        <label htmlFor="linkedIn">
          LinkedIn
          <input
            type="url"
            name="linkedIn"
            placeholder="LinkedIn"
            value={props.linkedIn}
            onChange={props.handleChange}
          />
        </label>
      </form>
    </div>
  );
}
