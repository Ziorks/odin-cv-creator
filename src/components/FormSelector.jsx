import {
  FaPlus,
  FaAlignJustify,
  FaTrashAlt,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import "../styles/FormSelector.css";

function FormSelector({ type, selections }) {
  return (
    <div className="formSelector">
      {selections.map(({ id, name, isHidden }) => (
        <FormSelection key={id} name={name} isHidden={isHidden} />
      ))}
      <button className="addBtn" type="button">
        <FaPlus />
        {type}
      </button>
    </div>
  );
}

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

export default FormSelector;
