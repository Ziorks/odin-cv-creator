import "../styles/FormButtons.css";

function FormButtons({ onCancel, onSave }) {
  return (
    <div className="formButtons">
      <button className="cancelBtn" onClick={onCancel}>
        Cancel
      </button>
      <button className="saveBtn" onClick={onSave}>
        Save
      </button>
    </div>
  );
}

export default FormButtons;
