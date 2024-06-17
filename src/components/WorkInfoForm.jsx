import "../styles/WorkInfoForm.css";

function WorkInfoForm({ data }) {
  return (
    <div className="workInfoForm">
      <div>
        <label htmlFor="position">Position Title</label>
        <input
          type="text"
          name="position"
          id="position"
          value={data.position}
        />
      </div>
      <div>
        <label htmlFor="company">Company Name</label>
        <input type="text" name="company" id="company" value={data.company} />
      </div>
      <div className="group">
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" value={data.city} />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" name="state" id="state" value={data.state} />
        </div>
      </div>
      <div className="group">
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            name="startDate"
            id="startDate"
            value={data.startDate}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="text" name="endDate" id="endDate" value={data.endDate} />
        </div>
      </div>
      <div>
        <label htmlFor="summary">Work Summary</label>
        <textarea rows={3} name="summary" id="summary" value={data.summary} />
      </div>
    </div>
  );
}

export default WorkInfoForm;
