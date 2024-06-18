import FormButtons from "./FormButtons";
import "../styles/EducationForm.css";

function EducationForm({ data }) {
  return (
    <div className="educationForm">
      <div>
        <label htmlFor="school">School</label>
        <input type="text" name="school" id="school" value={data.school} />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={data.location}
        />
      </div>
      <div className="group">
        <div>
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" value={data.degree} />
        </div>
        <div>
          <label htmlFor="fieldOfStudy">Field of Study</label>
          <input
            type="text"
            name="fieldOfStudy"
            id="fieldOfStudy"
            value={data.field}
          />
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
        <label htmlFor="details">Additional Details</label>
        <textarea rows={3} name="details" id="details" value={data.details} />
      </div>
      <FormButtons />
    </div>
  );
}

export default EducationForm;
