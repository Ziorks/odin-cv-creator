import WorkInfoEntry from "./WorkInfoEntry";
import FormSelector from "./FormSelector";
import FormSelection from "./FormSelection";
import FormButtons from "./FormButtons";
import "../styles/WorkInfo.css";

const data = [
  {
    id: crypto.randomUUID(),
    position: "Position Title",
    company: "Company Name",
    city: "City",
    state: "State",
    startDate: "June 2024",
    endDate: "Present",
    summary: "Work summary",
    hidden: true,
  },
  {
    id: crypto.randomUUID(),
    position: "Position Title",
    company: "Hidden Company",
    city: "City",
    state: "State",
    startDate: "June 2024",
    endDate: "Present",
    summary: "Work summary",
    hidden: false,
  },
];

let activeFormIndex = null;

function WorkInfo({ form = false }) {
  const activeData = data[activeFormIndex];

  if (form && activeFormIndex === null) {
    return (
      <FormSelector type="Experience">
        {data.map(({ id, position, hidden }) => (
          <FormSelection key={id} name={position} isHidden={hidden} />
        ))}
      </FormSelector>
    );
  } else if (form) {
    return (
      <div className="workForm">
        <div>
          <label htmlFor="position">Position Title</label>
          <input
            type="text"
            name="position"
            id="position"
            value={activeData.position}
          />
        </div>
        <div>
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            name="company"
            id="company"
            value={activeData.company}
          />
        </div>
        <div className="group">
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" value={activeData.city} />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              id="state"
              value={activeData.state}
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
              value={activeData.startDate}
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              name="endDate"
              id="endDate"
              value={activeData.endDate}
            />
          </div>
        </div>
        <div>
          <label htmlFor="summary">Work Summary</label>
          <textarea
            rows={3}
            name="summary"
            id="summary"
            value={activeData.summary}
          />
        </div>
        <FormButtons />
      </div>
    );
  }

  return (
    <div className="workInfo">
      <p className="heading">Professional Experience</p>
      {data.map(
        (entry) =>
          !entry.hidden && <WorkInfoEntry key={entry.id} data={entry} />
      )}
    </div>
  );
}

export default WorkInfo;
