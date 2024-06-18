import {
  FaAlignJustify,
  FaTrashAlt,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import "../styles/FormSelection.css";

function FormSelection({ name, isHidden }) {
  return (
    <div className="formSelection">
      <div className="name">
        <div className="grabber">
          <FaAlignJustify />
        </div>
        <button>{name}</button>
      </div>
      <div className="actions">
        <button>
          <FaTrashAlt />
        </button>
        <button>{isHidden ? <FaRegEyeSlash /> : <FaRegEye />}</button>
      </div>
    </div>
  );
}

export default FormSelection;
