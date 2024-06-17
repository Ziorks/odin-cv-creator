import "../styles/GeneralInfoForm.css";

function GeneralInfoForm() {
  return (
    <div className="generalInfoForm">
      <div className="group">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
      </div>
      <div>
        <label htmlFor="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" id="jobTitle" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />
      </div>
      <div className="group">
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="email">E-mail Address</label>
          <input type="email" name="email" id="email" />
        </div>
      </div>
      <div className="group">
        <div>
          <label htmlFor="github">Github Link</label>
          <input type="url" name="github" id="github" />
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn Link</label>
          <input type="url" name="linkedin" id="linkedin" />
        </div>
      </div>
    </div>
  );
}

export default GeneralInfoForm;
