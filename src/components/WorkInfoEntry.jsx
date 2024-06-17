import "../styles/WorkInfoEntry.css";

function WorkInfoEntry() {
  return (
    <div className="workInfoEntry">
      <p className="title">Job Title</p>
      <div className="details">
        <p>Company Name, City, State</p>
        <p>June 2024 - Present</p>
      </div>
      <p className="summary">Work summary</p>
    </div>
  );
}

export default WorkInfoEntry;
