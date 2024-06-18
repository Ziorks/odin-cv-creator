import InputSection from "./InputSection";
import PersonalInfo from "./PersonalInfo";
import WorkInfo from "./WorkInfo";
import EducationInfo from "./EducationInfo";
import { IoPersonCircle, IoSchool, IoBriefcase } from "react-icons/io5";
import "../styles/InputContainer.css";

let activeInputSection = 2;

function InputContainer() {
  return (
    <div className="inputContainer">
      <InputSection
        icon={<IoPersonCircle />}
        name="Personal Details"
        isActive={activeInputSection === 0}>
        <PersonalInfo form={true} />
      </InputSection>
      <InputSection
        icon={<IoBriefcase />}
        name="Experience"
        isActive={activeInputSection === 1}>
        <WorkInfo form={true} />
      </InputSection>
      <InputSection
        icon={<IoSchool />}
        name="Education"
        isActive={activeInputSection === 2}>
        <EducationInfo form={true} />
      </InputSection>
    </div>
  );
}

export default InputContainer;
