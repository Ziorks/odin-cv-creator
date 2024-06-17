import { FaChevronUp } from "react-icons/fa";
import "../styles/FormContainer.css";

function FormContainer({ title, isActive, children }) {
  return (
    <div className="formContainer">
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

export default FormContainer;
