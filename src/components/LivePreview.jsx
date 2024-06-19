import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import "../styles/LivePreview.css";

function LivePreview() {
  return (
    <div className="livePreview">
      <Personal />
      <Experience />
      <Education />
    </div>
  );
}

export default LivePreview;
