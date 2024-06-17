import "../styles/WorkInfo.css";

function WorkInfo({ children }) {
  return (
    <div className="workInfo">
      <p className="heading">Professional Experience</p>
      {children}
    </div>
  );
}

export default WorkInfo;
