import "../styles/Form.css";

export default function PersonalInfo(props) {
  return (
    <div className="Background">
      <h1>Personal Info</h1>
      <form id="personalInfo">
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={props.firstName}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="firstName">
            First Name
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={props.lastName}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="lastName">
            Last Name
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="streetAddress"
            placeholder="123 A St."
            value={props.streetAddress}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="streetAddress">
            Street Address
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="city"
            placeholder="City"
            value={props.city}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="city">
            City
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="state"
            placeholder="State"
            value={props.state}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="state">
            State
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={props.zipCode}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="zipCode">
            Zip Code
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={props.email}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="email">
            Email
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="tel"
            name="phone"
            placeholder="123-456-7890"
            value={props.phone}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="phone">
            Phone
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="linkedIn"
            placeholder="LinkedIn"
            value={props.linkedIn}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="linkedIn">
            LinkedIn
          </label>
        </div>
        <div className="form_group">
          <input
            className="form_field"
            type="text"
            name="github"
            placeholder="GitHub"
            value={props.github}
            onChange={props.handleChange}
          />
          <label className="form_label" htmlFor="github">
            GitHub
          </label>
        </div>
      </form>
    </div>
  );
}
