import InputSection from "./InputSection";
import GeneralInfoForm from "./GeneralInfoForm";
import WorkInfoForm from "./WorkInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import { IoPersonCircle, IoSchool, IoBriefcase } from "react-icons/io5";
import "../styles/InputContainer.css";

function InputContainer() {
  const personalDetailsTitle = (
    <>
      <IoPersonCircle />
      Personal Details
    </>
  );

  const experienceTitle = (
    <>
      <IoBriefcase />
      Experience
    </>
  );

  const educationTitle = (
    <>
      <IoSchool />
      Education
    </>
  );

  return (
    <div className="inputContainer">
      <InputSection title={personalDetailsTitle} isActive={true}>
        <GeneralInfoForm />
      </InputSection>
      <InputSection title={experienceTitle} isActive={true}>
        <WorkInfoForm />
      </InputSection>
      <InputSection title={educationTitle} isActive={true}>
        <EducationInfoForm />
      </InputSection>
    </div>
  );
}

export default InputContainer;
