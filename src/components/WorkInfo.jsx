import WorkInfoEntry from "./WorkInfoEntry";
import "../styles/WorkInfo.css";

function WorkInfo() {
  return (
    <div className="workInfo">
      <p className="heading">Professional Experience</p>
      <WorkInfoEntry />
      <WorkInfoEntry />
    </div>
  );
}

export default WorkInfo;
