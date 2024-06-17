import "../styles/WorkInfoForm.css";

function WorkInfoForm() {
  return (
    <div className="workInfoForm">
      <div>
        <label htmlFor="position">Position Title</label>
        <input type="text" name="position" id="position" />
      </div>
      <div>
        <label htmlFor="company">Company Name</label>
        <input type="text" name="company" id="company" />
      </div>
      <div className="group">
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" name="state" id="state" />
        </div>
      </div>
      <div className="group">
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="text" name="startDate" id="startDate" />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="text" name="endDate" id="endDate" />
        </div>
      </div>
      <div>
        <label htmlFor="summary">Work Summary</label>
        <textarea rows={3} name="summary" id="summary" />
      </div>
    </div>
  );
}

export default WorkInfoForm;
