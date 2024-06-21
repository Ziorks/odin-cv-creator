import FormSelector from "./FormSelector";
import FormButtons from "./FormButtons";
import "../styles/Education.css";

function Education({
  form = false,
  data,
  setters = undefined,
  activeEntryIndex,
}) {
  const activeEntry = data[activeEntryIndex];

  if (form && activeEntryIndex === null) {
    return <EducationEntrySelector data={data} setters={setters} />;
  } else if (form) {
    return <EducationForm entry={activeEntry} setters={setters} />;
  } else {
    return <EducationDisplay data={data} />;
  }
}

function EducationEntrySelector({ data, setters }) {
  return (
    <FormSelector
      type="Education"
      selections={data.map(({ id, school, hidden }) => ({
        id,
        name: school,
        isHidden: hidden,
      }))}
      setters={setters}></FormSelector>
  );
}

function EducationDisplay({ data }) {
  return (
    <div className="educationDisplay">
      {data.length > 0 && <p className="heading">Education</p>}
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

function EducationForm({ entry, setters }) {
  const { setTemp } = setters;
  const handleCancel = () => {
    setters.clear();
    setters.cancelBtn();
  };
  const handleSave = () => {
    setters.clear();
    setters.saveBtn();
  };

  return (
    <div className="educationForm">
      <div>
        <label htmlFor="school">School</label>
        <input
          type="text"
          name="school"
          id="school"
          value={entry.school}
          onChange={(e) => setTemp({ ...entry, school: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={entry.location}
          onChange={(e) => setTemp({ ...entry, location: e.target.value })}
        />
      </div>
      <div className="group">
        <div>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={entry.degree}
            onChange={(e) => setTemp({ ...entry, degree: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="fieldOfStudy">Field of Study</label>
          <input
            type="text"
            name="fieldOfStudy"
            id="fieldOfStudy"
            value={entry.field}
            onChange={(e) => setTemp({ ...entry, field: e.target.value })}
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
            onChange={(e) => setTemp({ ...entry, startDate: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            name="endDate"
            id="endDate"
            value={entry.endDate}
            onChange={(e) => setTemp({ ...entry, endDate: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label htmlFor="details">Additional Details</label>
        <textarea
          rows={3}
          name="details"
          id="details"
          value={entry.details}
          onChange={(e) => setTemp({ ...entry, details: e.target.value })}
        />
      </div>
      <FormButtons onCancel={handleCancel} onSave={handleSave} />
    </div>
  );
}

export default Education;
