import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import { IoPrint } from "react-icons/io5";
import "../styles/LivePreview.css";

function LivePreview({ datas }) {
  const [personalData, experienceData, educationData] = datas;

  return (
    <div className="livePreview">
      <div className="preview">
        <Personal data={personalData} />
        <Experience data={experienceData} />
        <Education data={educationData} />
      </div>
      <button
        className="printBtn"
        onClick={() => {
          window.print();
        }}>
        <IoPrint /> Print
      </button>
    </div>
  );
}

export default LivePreview;
