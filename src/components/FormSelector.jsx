import {
  FaPlus,
  FaAlignJustify,
  FaTrashAlt,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import "../styles/FormSelector.css";

function FormSelector({ type, selections, setters }) {
  const { addBtn } = setters;

  return (
    <div className="formSelector">
      {selections.map(({ id, name, isHidden }) => (
        <FormSelection
          key={id}
          id={id}
          name={name}
          isHidden={isHidden}
          setters={setters}
        />
      ))}
      <button className="addBtn" type="button" onClick={addBtn}>
        <FaPlus />
        {type}
      </button>
    </div>
  );
}

function FormSelection({ id, name, isHidden, setters }) {
  const { entrySelect, deleteEntry, toggleHidden } = setters;

  return (
    <div className="formSelection">
      <div className="name">
        <div className="grabber">
          <FaAlignJustify />
        </div>
        <button onClick={() => entrySelect(id)}>{name}</button>
      </div>
      <div className="actions">
        <button onClick={() => deleteEntry(id)}>
          <FaTrashAlt />
        </button>
        <button onClick={() => toggleHidden(id)}>
          {isHidden ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
    </div>
  );
}

export default FormSelector;
