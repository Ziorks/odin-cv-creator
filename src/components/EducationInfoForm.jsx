import "../styles/EducationInfoForm.css";

function EducationInfoForm() {
  return (
    <div className="educationInfoForm">
      <div>
        <label htmlFor="school">School</label>
        <input type="text" name="school" id="school" />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" id="location" />
      </div>
      <div className="group">
        <div>
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" />
        </div>
        <div>
          <label htmlFor="fieldOfStudy">Field of Study</label>
          <input type="text" name="fieldOfStudy" id="fieldOfStudy" />
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
        <label htmlFor="details">Additional Details</label>
        <textarea rows={3} name="details" id="details" />
      </div>
    </div>
  );
}

export default EducationInfoForm;
