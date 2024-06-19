import FormSelector from "./FormSelector";
import FormButtons from "./FormButtons";
import "../styles/Education.css";

let activeEntryIndex = null;

function Education({ form = false, data }) {
  const activeEntry = data[activeEntryIndex];

  if (form && activeEntryIndex === null) {
    return <EducationEntrySelector data={data} />;
  } else if (form) {
    return <EducationForm entry={activeEntry} />;
  } else {
    return <EducationDisplay data={data} />;
  }
}

function EducationEntrySelector({ data }) {
  return (
    <FormSelector
      type="Education"
      selections={data.map(({ id, school, hidden }) => ({
        id,
        name: school,
        isHidden: hidden,
      }))}></FormSelector>
  );
}

function EducationDisplay({ data }) {
  return (
    <div className="educationDisplay">
      <p className="heading">Education</p>
      {data.map(
        (entry) =>
          !entry.hidden && (
            <EducationDisplayEntry key={entry.id} entry={entry} />
          )
      )}
    </div>
  );
}

function EducationDisplayEntry({ entry }) {
  return (
    <div className="educationDisplayEntry">
      <p>
        {`${entry.degree} in ${entry.field} ${entry.startDate} - ${entry.endDate}`}
      </p>
      <p className="schoolInfo">{`${entry.school} at ${entry.location}`}</p>
      <p>{entry.details}</p>
    </div>
  );
}

function EducationForm({ entry }) {
  return (
    <div className="educationForm">
      <div>
        <label htmlFor="school">School</label>
        <input type="text" name="school" id="school" value={entry.school} />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={entry.location}
        />
      </div>
      <div className="group">
        <div>
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" value={entry.degree} />
        </div>
        <div>
          <label htmlFor="fieldOfStudy">Field of Study</label>
          <input
            type="text"
            name="fieldOfStudy"
            id="fieldOfStudy"
            value={entry.field}
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
            value={entry.startDate}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            name="endDate"
            id="endDate"
            value={entry.endDate}
          />
        </div>
      </div>
      <div>
        <label htmlFor="details">Additional Details</label>
        <textarea rows={3} name="details" id="details" value={entry.details} />
      </div>
      <FormButtons />
    </div>
  );
}

export default Education;
