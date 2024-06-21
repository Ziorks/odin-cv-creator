import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import { IoPersonCircle, IoSchool, IoBriefcase } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import { SECTIONS } from "../utilities/constants";
import "../styles/InputContainer.css";

function InputContainer({ activeInputSection, datas, setters }) {
  const [activeExperienceEntryIndex, setActiveExperienceEntryIndex] =
    useState(null);
  const [activeEducationEntryIndex, setActiveEducationEntryIndex] =
    useState(null);

  const [personalData, experienceData, educationData] = datas;
  const { handleSectionSelect, experience, education } = setters;

  const experienceSetters = {
    ...experience,
    clear: () => setActiveExperienceEntryIndex(null),
    entrySelect: (id) => {
      const entryIndex = experienceData.findIndex((entry) => entry.id === id);
      setActiveExperienceEntryIndex(entryIndex);
    },
    addBtn: () => {
      experience.addBtn();
      setActiveExperienceEntryIndex(experienceData.length);
    },
  };

  const educationSetters = {
    ...education,
    clear: () => setActiveEducationEntryIndex(null),
    entrySelect: (id) => {
      const entryIndex = educationData.findIndex((entry) => entry.id === id);
      setActiveEducationEntryIndex(entryIndex);
    },
    addBtn: () => {
      education.addBtn();
      setActiveEducationEntryIndex(educationData.length);
    },
  };

  return (
    <div className="inputContainer">
      <InputSection
        icon={<IoPersonCircle />}
        name="Personal Details"
        isActive={activeInputSection === SECTIONS.personal}
        onClick={() => handleSectionSelect(SECTIONS.personal)}>
        <Personal form={true} data={personalData} setters={setters.personal} />
      </InputSection>
      <InputSection
        icon={<IoBriefcase />}
        name="Experience"
        isActive={activeInputSection === SECTIONS.experience}
        onClick={() => handleSectionSelect(SECTIONS.experience)}>
        <Experience
          form={true}
          data={experienceData}
          setters={experienceSetters}
          activeEntryIndex={activeExperienceEntryIndex}
        />
      </InputSection>
      <InputSection
        icon={<IoSchool />}
        name="Education"
        isActive={activeInputSection === SECTIONS.education}
        onClick={() => handleSectionSelect(SECTIONS.education)}>
        <Education
          form={true}
          data={educationData}
          setters={educationSetters}
          activeEntryIndex={activeEducationEntryIndex}
        />
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
