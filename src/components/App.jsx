import Header from "./Header";
import Footer from "./Footer";
import InputContainer from "./InputContainer";
import InputSection from "./InputSection";
import FormSelector from "./FormSelector";
import FormSelection from "./FormSelection";
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
    hidden: true,
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
    hidden: false,
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
    hidden: false,
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
    hidden: false,
  },
];

let activeInputSection = 0;
let activeExperienceForm = 1;
let activeEducationForm = 0;

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <InputContainer>
          <InputSection
            icon={<IoPersonCircle />}
            name="Personal Details"
            isActive={activeInputSection === 0}>
            <GeneralInfoForm data={generalData} />
          </InputSection>
          <InputSection
            icon={<IoBriefcase />}
            name="Experience"
            isActive={activeInputSection === 1}>
            {activeExperienceForm === null ? (
              <FormSelector type="Experience">
                {experienceData.map(({ id, position, hidden }) => (
                  <FormSelection key={id} name={position} isHidden={hidden} />
                ))}
              </FormSelector>
            ) : (
              <WorkInfoForm data={experienceData[activeExperienceForm]} />
            )}
          </InputSection>
          <InputSection
            icon={<IoSchool />}
            name="Education"
            isActive={activeInputSection === 2}>
            {activeEducationForm === null ? (
              <FormSelector type="Education">
                {educationData.map(({ id, school, hidden }) => (
                  <FormSelection key={id} name={school} isHidden={hidden} />
                ))}
              </FormSelector>
            ) : (
              <EducationInfoForm data={educationData[0]} />
            )}
          </InputSection>
        </InputContainer>
        <LivePreview>
          <GeneralInfo data={generalData} />
          <WorkInfo>
            {experienceData.map(
              (entry) =>
                !entry.hidden && <WorkInfoEntry key={entry.id} data={entry} />
            )}
          </WorkInfo>
          <EducationInfo>
            {educationData.map(
              (entry) =>
                !entry.hidden && (
                  <EducationInfoEntry key={entry.id} data={entry} />
                )
            )}
          </EducationInfo>
        </LivePreview>
      </main>
      <Footer />
    </>
  );
}

export default App;
