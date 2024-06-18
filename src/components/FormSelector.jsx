import { FaPlus } from "react-icons/fa";
import "../styles/FormSelector.css";

function FormSelector({ type, children }) {
  return (
    <div className="formSelector">
      {children}
      <button className="addBtn" type="button">
        <FaPlus />
        {type}
      </button>
    </div>
  );
}

export default FormSelector;
