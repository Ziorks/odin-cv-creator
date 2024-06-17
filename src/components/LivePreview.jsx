import GeneralInfo from "./GeneralInfo";
import WorkInfo from "./WorkInfo";
import EducationInfo from "./EducationInfo";
import "../styles/LivePreview.css";

function LivePreview() {
  return (
    <div className="livePreview">
      <GeneralInfo />
      <WorkInfo />
      <EducationInfo />
    </div>
  );
}

export default LivePreview;
