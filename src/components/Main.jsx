import InputContainer from "./InputContainer";
import LivePreview from "./LivePreview";
import { useState } from "react";
import "../styles/Main.css";

const personalTestData = {
  firstName: "First Name",
  lastName: "Last Name",
  jobTitle: "Job Title",
  address: "Address",
  phone: "Phone",
  email: "email@example.com",
  github: "github.com/link",
  linkedin: "linkedin.com/link",
};

const experienceTestData = [
  {
    id: crypto.randomUUID(),
    position: "Position Title 0",
    company: "Company Name",
    city: "City",
    state: "State",
    startDate: "June 2024",
    endDate: "Present",
    summary: "Work summary",
    hidden: false,
  },
  {
    id: crypto.randomUUID(),
    position: "Position Title 1",
    company: "Hidden Company",
    city: "City",
    state: "State",
    startDate: "June 2024",
    endDate: "Present",
    summary: "Work summary",
    hidden: true,
  },
];

const educationTestData = [
  {
    id: crypto.randomUUID(),
    school: "School Name 0",
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
    school: "School Name 1",
    location: "Location",
    degree: "Degree",
    field: "Field of Study",
    startDate: "June 2024",
    endDate: "Present",
    details: "Additional details",
    hidden: false,
  },
];

function Main() {
  const [personalSaved, setPersonalSaved] = useState(personalTestData);
  const [experienceSaved, setExperienceSaved] = useState(experienceTestData);
  const [educationSaved, setEducationSaved] = useState(educationTestData);

  const [personalTemp, setPersonalTemp] = useState(personalTestData);
  const [experienceTemp, setExperienceTemp] = useState(experienceTestData);
  const [educationTemp, setEducationTemp] = useState(educationTestData);

  const [activeInputSection, setActiveInputSection] = useState(null);

  const datas = [personalSaved, experienceSaved, educationSaved];
  const tempDatas = [personalTemp, experienceSaved, educationSaved];

  //This is jank but works if activeInputSection is set to the index it appears in datas/tempDatas
  if (activeInputSection !== null) {
    datas[activeInputSection] = tempDatas[activeInputSection];
  }

  const setters = {
    handleSectionSelect: (index) => {
      if (activeInputSection === index) {
        setActiveInputSection(null);
      } else {
        setActiveInputSection(index);
      }
    },
    personal: {
      saved: setPersonalSaved,
      temp: setPersonalTemp,
      cancel: () => {
        setActiveInputSection(null);
        setPersonalTemp({ ...personalSaved });
      },
      save: () => {
        setActiveInputSection(null);
        setPersonalSaved({ ...personalTemp });
      },
    },
    experience: {
      saved: setExperienceSaved,
      temp: setExperienceTemp,
      cancel: () => {
        setActiveInputSection(null);
        setExperienceTemp({ ...experienceSaved });
      },
      save: () => {
        setActiveInputSection(null);
        setExperienceSaved({ ...experienceTemp });
      },
    },
    education: {
      saved: setEducationSaved,
      temp: setEducationTemp,
      cancel: () => {
        setActiveInputSection(null);
        setEducationTemp({ ...educationSaved });
      },
      save: () => {
        setActiveInputSection(null);
        setEducationSaved({ ...educationTemp });
      },
    },
  };

  return (
    <main className="main">
      <InputContainer
        datas={[...datas, activeInputSection]}
        setters={setters}
      />
      <LivePreview datas={datas} />
    </main>
  );
}

export default Main;
