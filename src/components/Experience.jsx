import FormSelector from "./FormSelector";
import FormButtons from "./FormButtons";
import "../styles/Experience.css";

let activeEntryIndex = null;

function Experience({ form = false, data }) {
  const activeEntry = data[activeEntryIndex];

  if (form && activeEntryIndex === null) {
    return <ExperienceEntrySelector data={data} />;
  } else if (form) {
    return <ExperienceForm entry={activeEntry} />;
  } else {
    return <ExperienceDisplay data={data} />;
  }
}

function ExperienceEntrySelector({ data }) {
  return (
    <FormSelector
      type="Experience"
      selections={data.map(({ id, position, hidden }) => ({
        id,
        name: position,
        isHidden: hidden,
      }))}></FormSelector>
  );
}

function ExperienceDisplay({ data }) {
  return (
    <div className="experienceDisplay">
      <p className="heading">Professional Experience</p>
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

function ExperienceForm({ entry }) {
  return (
    <div className="experienceForm">
      <div>
        <label htmlFor="position">Position Title</label>
        <input
          type="text"
          name="position"
          id="position"
          value={entry.position}
        />
      </div>
      <div>
        <label htmlFor="company">Company Name</label>
        <input type="text" name="company" id="company" value={entry.company} />
      </div>
      <div className="group">
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" value={entry.city} />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" name="state" id="state" value={entry.state} />
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
        <label htmlFor="summary">Work Summary</label>
        <textarea rows={3} name="summary" id="summary" value={entry.summary} />
      </div>
      <FormButtons />
    </div>
  );
}

export default Experience;
