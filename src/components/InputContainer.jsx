import FormContainer from "./FormContainer";
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
      <FormContainer title={personalDetailsTitle} isActive={true}>
        <GeneralInfoForm />
      </FormContainer>
      <FormContainer title={experienceTitle} isActive={true}>
        <WorkInfoForm />
      </FormContainer>
      <FormContainer title={educationTitle} isActive={true}>
        <EducationInfoForm />
      </FormContainer>
    </div>
  );
}

export default InputContainer;
