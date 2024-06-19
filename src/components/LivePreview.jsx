import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import "../styles/LivePreview.css";

function LivePreview({ datas }) {
  const [personalData, experienceData, educationData] = datas;

  return (
    <div className="livePreview">
      <Personal data={personalData} />
      <Experience data={experienceData} />
      <Education data={educationData} />
    </div>
  );
}

export default LivePreview;
