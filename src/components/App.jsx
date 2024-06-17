import Header from "./Header";
import Footer from "./Footer";
import InputContainer from "./InputContainer";
import InputSection from "./InputSection";
import GeneralInfoForm from "./GeneralInfoForm";
import WorkInfoForm from "./WorkInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import LivePreview from "./LivePreview";
import GeneralInfo from "./GeneralInfo";
import WorkInfo from "./WorkInfo";
import WorkInfoEntry from "./WorkInfoEntry";
import EducationInfo from "./EducationInfo";
import EducationInfoEntry from "./EducationInfoEntry";
import { IoPersonCircle, IoSchool, IoBriefcase } from "react-icons/io5";
import "../styles/App.css";

const generalData = {
  firstName: "First Name",
  lastName: "Last Name",
  jobTitle: "Job Title",
  address: "Address",
  phone: "Phone",
  email: "email@example.com",
  github: "github.com/link",
  linkedin: "linkedin.com/link",
};

const experienceData = [
  {
    id: crypto.randomUUID(),
    position: "Position Title",
    company: "Company Name",
    city: "City",
    state: "State",
    startDate: "June 2024",
    endDate: "Present",
    summary: "Work summary",
  },
  {
    id: crypto.randomUUID(),
    position: "Position Title",
    company: "Company Name",
    city: "City",
    state: "State",
    startDate: "June 2024",
    endDate: "Present",
    summary: "Work summary",
  },
];

const educationData = [
  {
    id: crypto.randomUUID(),
    school: "School Name",
    location: "Location",
    degree: "Degree",
    field: "Field of Study",
    startDate: "June 2024",
    endDate: "Present",
    details: "Additional details",
  },
  {
    id: crypto.randomUUID(),
    school: "School Name",
    location: "Location",
    degree: "Degree",
    field: "Field of Study",
    startDate: "June 2024",
    endDate: "Present",
    details: "Additional details",
  },
];

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

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <InputContainer>
          <InputSection title={personalDetailsTitle} isActive={true}>
            <GeneralInfoForm data={generalData} />
          </InputSection>
          <InputSection title={experienceTitle} isActive={true}>
            {/* TODO: Display a list of all experienceData entries */}
            <WorkInfoForm data={experienceData[0]} />
          </InputSection>
          <InputSection title={educationTitle} isActive={true}>
            {/* TODO: Display a list of all educationData entries */}
            <EducationInfoForm data={educationData[0]} />
          </InputSection>
        </InputContainer>
        <LivePreview>
          <GeneralInfo data={generalData} />
          <WorkInfo>
            {experienceData.map((entry) => (
              <WorkInfoEntry key={entry.id} data={entry} />
            ))}
          </WorkInfo>
          <EducationInfo>
            {educationData.map((entry) => (
              <EducationInfoEntry key={entry.id} data={entry} />
            ))}
          </EducationInfo>
        </LivePreview>
      </main>
      <Footer />
    </>
  );
}

export default App;
