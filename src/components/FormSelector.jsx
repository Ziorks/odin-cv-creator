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
      <div>
        {selections.map(({ id, name, isHidden }) => (
          <FormSelection
            key={id}
            id={id}
            name={name}
            isHidden={isHidden}
            setters={setters}
          />
        ))}
      </div>
      <button className="addBtn" type="button" onClick={addBtn}>
        <FaPlus />
        {type}
      </button>
    </div>
  );
}

function FormSelection({ id, name, isHidden, setters }) {
  const { reorder, entrySelect, deleteEntry, toggleHidden } = setters;

  //This is probably a good way to do this but it works ¯\_(ツ)_/¯
  const handleGrab = (e) => {
    const grabberDiv = e.currentTarget;
    const entryDiv = grabberDiv.parentNode;
    const entriesContainer = entryDiv.parentNode;
    const entryRect = entryDiv.getBoundingClientRect();
    const entriesContainerRect = entriesContainer.getBoundingClientRect();
    const minTranslateY = entriesContainerRect.top - entryRect.top;
    const maxTranslateY = entriesContainerRect.bottom - entryRect.bottom;
    const entryHeight =
      entriesContainerRect.height / entriesContainer.children.length;
    const startY = e.pageY;
    const startingIndex = calcIndexOfDragged();
    const otherEntries = [];

    [...entriesContainer.children].forEach((child, index) => {
      if (child == entryDiv) {
        return;
      }
      otherEntries.push({ node: child, index, above: index < startingIndex });
    });

    function calcIndexOfDragged() {
      const { top, height } = entryDiv.getBoundingClientRect();
      return Math.floor(
        (top + height / 2 - entryDiv.parentNode.getBoundingClientRect().top) /
          entryHeight
      );
    }

    const handleDrag = (e) => {
      const draggedIndex = calcIndexOfDragged();
      otherEntries.forEach((entry) => {
        if (entry.above) {
          if (draggedIndex <= entry.index) {
            entry.node.classList.add("shiftDown");
          } else {
            entry.node.classList.remove("shiftDown");
          }
        } else {
          if (draggedIndex >= entry.index) {
            entry.node.classList.add("shiftUp");
          } else {
            entry.node.classList.remove("shiftUp");
          }
        }
      });

      const translateY = Math.max(
        Math.min(e.pageY - startY, maxTranslateY),
        minTranslateY
      );
      entryDiv.style.transform = `translateY(${translateY}px)`;
    };

    const handleDrop = () => {
      const newIndex = calcIndexOfDragged();
      otherEntries.forEach((entry) => {
        entry.node.classList.remove("shiftUp", "shiftDown");
      });
      entryDiv.style.transform = "";
      document.body.classList.remove("grabbing");
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleDrop);
      reorder(id, newIndex);
    };

    document.body.classList.add("grabbing");
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", handleDrop);
  };

  return (
    <div className="formSelection">
      <div className="grabber" onMouseDown={handleGrab}>
        <FaAlignJustify />
      </div>
      <button className="entryBtn" onClick={() => entrySelect(id)}>
        {name}
      </button>
      <button className="deleteBtn" onClick={() => deleteEntry(id)}>
        <FaTrashAlt />
      </button>
      <button className="toggleHiddenBtn" onClick={() => toggleHidden(id)}>
        {isHidden ? <FaRegEyeSlash /> : <FaRegEye />}
      </button>
    </div>
  );
}

export default FormSelector;
