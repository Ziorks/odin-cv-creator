import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import { IoPersonCircle, IoSchool, IoBriefcase } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import "../styles/InputContainer.css";

function InputContainer() {
  const [activeInputSection, setActiveInputSection] = useState(null);

  const handleSectionSelect = (selection) => {
    if (activeInputSection === selection) {
      setActiveInputSection(null);
    } else {
      setActiveInputSection(selection);
    }
  };

  return (
    <div className="inputContainer">
      <InputSection
        icon={<IoPersonCircle />}
        name="Personal Details"
        isActive={activeInputSection === 0}
        onClick={() => handleSectionSelect(0)}>
        <Personal form={true} />
      </InputSection>
      <InputSection
        icon={<IoBriefcase />}
        name="Experience"
        isActive={activeInputSection === 1}
        onClick={() => handleSectionSelect(1)}>
        <Experience form={true} />
      </InputSection>
      <InputSection
        icon={<IoSchool />}
        name="Education"
        isActive={activeInputSection === 2}
        onClick={() => handleSectionSelect(2)}>
        <Education form={true} />
      </InputSection>
    </div>
  );
}

function InputSection({ icon = undefined, name, isActive, onClick, children }) {
  return (
    <div className="inputSection">
      <button type="button" className="expandBtn" onClick={onClick}>
        <h2 className="title">
          {icon}
          {name}
        </h2>
        <FaChevronUp
          className={"activeIndicator" + (isActive ? " active" : "")}
        />
      </button>
      {isActive && children}
    </div>
  );
}

export default InputContainer;
