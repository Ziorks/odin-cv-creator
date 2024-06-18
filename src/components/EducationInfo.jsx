import EducationInfoEntry from "./EducationInfoEntry";
import FormSelector from "./FormSelector";
import FormSelection from "./FormSelection";
import FormButtons from "./FormButtons";
import "../styles/EducationInfo.css";

const data = [
  {
    id: crypto.randomUUID(),
    school: "School Name",
    location: "Location",
    degree: "Degree",
    field: "Field of Study",
    startDate: "June 2024",
    endDate: "Present",
    details: "Additional details",
    hidden: false,
  },
  {
    id: crypto.randomUUID(),
    school: "School Name",
    location: "Location",
    degree: "Degree",
    field: "Field of Study",
    startDate: "June 2024",
    endDate: "Present",
    details: "Additional details",
    hidden: false,
  },
];

let activeFormIndex = null;

function EducationInfo({ form = false }) {
  const activeData = data[activeFormIndex];

  if (form && activeFormIndex === null) {
    return (
      <FormSelector type="Education">
        {data.map(({ id, school, hidden }) => (
          <FormSelection key={id} name={school} isHidden={hidden} />
        ))}
      </FormSelector>
    );
  } else if (form) {
    return (
      <div className="educationForm">
        <div>
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            value={activeData.school}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={activeData.location}
          />
        </div>
        <div className="group">
          <div>
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={activeData.degree}
            />
          </div>
          <div>
            <label htmlFor="fieldOfStudy">Field of Study</label>
            <input
              type="text"
              name="fieldOfStudy"
              id="fieldOfStudy"
              value={activeData.field}
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
          <label htmlFor="details">Additional Details</label>
          <textarea
            rows={3}
            name="details"
            id="details"
            value={activeData.details}
          />
        </div>
        <FormButtons />
      </div>
    );
  }

  return (
    <div className="educationInfo">
      <p className="heading">Education</p>
      {data.map(
        (entry) =>
          !entry.hidden && <EducationInfoEntry key={entry.id} data={entry} />
      )}
    </div>
  );
}

export default EducationInfo;
