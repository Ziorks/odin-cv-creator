import "../styles/EducationInfo.css";

function EducationInfo({ children }) {
  return (
    <div className="educationInfo">
      <p className="heading">Education</p>
      {children}
    </div>
  );
}

export default EducationInfo;
