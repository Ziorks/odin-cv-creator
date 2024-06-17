import EducationInfoEntry from "./EducationInfoEntry";
import "../styles/EducationInfo.css";

function EducationInfo() {
  return (
    <div className="educationInfo">
      <p className="heading">Education</p>
      <EducationInfoEntry />
      <EducationInfoEntry />
    </div>
  );
}

export default EducationInfo;
