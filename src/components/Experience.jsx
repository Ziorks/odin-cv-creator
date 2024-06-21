import FormSelector from "./FormSelector";
import FormButtons from "./FormButtons";
import "../styles/Experience.css";

function Experience({
  form = false,
  data,
  setters = undefined,
  activeEntryIndex,
}) {
  const activeEntry = data[activeEntryIndex];

  if (form && activeEntryIndex === null) {
    return <ExperienceEntrySelector data={data} setters={setters} />;
  } else if (form) {
    return <ExperienceForm entry={activeEntry} setters={setters} />;
  } else {
    return <ExperienceDisplay data={data} />;
  }
}

function ExperienceEntrySelector({ data, setters }) {
  return (
    <FormSelector
      type="Experience"
      selections={data.map(({ id, position, hidden }) => ({
        id,
        name: position,
        isHidden: hidden,
      }))}
      setters={setters}></FormSelector>
  );
}

function ExperienceDisplay({ data }) {
  return (
    <div className="experienceDisplay">
      {data.length > 0 && <p className="heading">Professional Experience</p>}
      {data.map(
        (entry) =>
          !entry.hidden && (
            <ExperienceDisplayEntry key={entry.id} entry={entry} />
          )
      )}
    </div>
  );
}

function ExperienceDisplayEntry({ entry }) {
  return (
    <div className="experienceDisplayEntry">
      <p className="title">{entry.position}</p>
      <div className="details">
        <p>{`${entry.company}, ${entry.city}, ${entry.state}`}</p>
        <p>{`${entry.startDate} - ${entry.endDate}`}</p>
      </div>
      <p className="summary">{entry.summary}</p>
    </div>
  );
}

function ExperienceForm({ entry, setters }) {
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
    <div className="experienceForm">
      <div>
        <label htmlFor="position">Position Title</label>
        <input
          type="text"
          name="position"
          id="position"
          value={entry.position}
          onChange={(e) => setTemp({ ...entry, position: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          id="company"
          value={entry.company}
          onChange={(e) => setTemp({ ...entry, company: e.target.value })}
        />
      </div>
      <div className="group">
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={entry.city}
            onChange={(e) => setTemp({ ...entry, city: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            value={entry.state}
            onChange={(e) => setTemp({ ...entry, state: e.target.value })}
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
        <label htmlFor="summary">Work Summary</label>
        <textarea
          rows={3}
          name="summary"
          id="summary"
          value={entry.summary}
          onChange={(e) => setTemp({ ...entry, summary: e.target.value })}
        />
      </div>
      <FormButtons onCancel={handleCancel} onSave={handleSave} />
    </div>
  );
}

export default Experience;
