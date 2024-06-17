import { FaChevronUp } from "react-icons/fa";
import "../styles/InputSection.css";

function InputSection({ title, isActive, children }) {
  return (
    <div className="inputSection">
      <button type="button" className="expandBtn">
        <h2 className="title">{title}</h2>
        <FaChevronUp
          className={"activeIndicator" + (isActive ? " active" : "")}
        />
      </button>
      {isActive && children}
    </div>
  );
}

export default InputSection;
