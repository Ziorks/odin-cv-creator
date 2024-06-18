import PersonalInfo from "./PersonalInfo";
import WorkInfo from "./WorkInfo";
import EducationInfo from "./EducationInfo";
import "../styles/LivePreview.css";

function LivePreview() {
  return (
    <div className="livePreview">
      <PersonalInfo />
      <WorkInfo />
      <EducationInfo />
    </div>
  );
}

export default LivePreview;
