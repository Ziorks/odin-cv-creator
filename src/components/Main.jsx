import InputContainer from "./InputContainer";
import LivePreview from "./LivePreview";
import { useState } from "react";
import { SECTIONS } from "../utilities/constants";
import "../styles/Main.css";

const personalDataTemplate = {
  firstName: "First Name",
  lastName: "Last Name",
  jobTitle: "Job Title",
  address: "Address",
  phone: "Phone",
  email: "email@example.com",
  github: "github.com/link",
  linkedin: "linkedin.com/link",
};

const getNewExperienceDataEntry = () => {
  return {
    id: crypto.randomUUID(),
    position: "Position Title",
    company: "Company Name",
    city: "City",
    state: "State",
    startDate: "June 2024",
    endDate: "Present",
    summary: "Work summary",
    hidden: false,
  };
};

const getNewEducationDataEntry = () => {
  return {
    id: crypto.randomUUID(),
    school: "School Name",
    location: "Location",
    degree: "Degree",
    field: "Field of Study",
    startDate: "June 2024",
    endDate: "Present",
    details: "Additional details",
    hidden: false,
  };
};

const experienceDataTemplate = [
  getNewExperienceDataEntry(),
  getNewExperienceDataEntry(),
];
const educationDataTemplate = [getNewEducationDataEntry()];

function Main() {
  const [personalData, setPersonalData] = useState({
    saved: personalDataTemplate,
    temp: personalDataTemplate,
  });
  const [experienceData, setExperienceData] = useState({
    saved: experienceDataTemplate,
    temp: experienceDataTemplate,
  });
  const [educationData, setEducationData] = useState({
    saved: educationDataTemplate,
    temp: educationDataTemplate,
  });

  const [activeInputSection, setActiveInputSection] = useState(null);

  const setters = {
    handleSectionSelect: (section) => {
      if (activeInputSection === section) {
        setActiveInputSection(null);
      } else {
        setActiveInputSection(section);
      }
    },
    personal: {
      setTemp: (newTempData) => {
        setPersonalData({ ...personalData, temp: newTempData });
      },
      cancelBtn: () => {
        setActiveInputSection(null);
        setPersonalData({ ...personalData, temp: personalData.saved });
      },
      saveBtn: () => {
        setActiveInputSection(null);
        setPersonalData({ ...personalData, saved: personalData.temp });
      },
    },
    experience: {
      setTemp: (newEntry) => {
        const newData = experienceData.saved.map((entry) => {
          return entry.id === newEntry.id ? newEntry : entry;
        });
        setExperienceData({ ...experienceData, temp: newData });
      },
      deleteEntry: (id) => {
        const deleted = experienceData.saved.filter((entry) => entry.id !== id);
        setExperienceData({ saved: deleted, temp: deleted });
      },
      toggleHidden: (id) => {
        const toggled = experienceData.saved.map((entry) => {
          if (entry.id === id) {
            return { ...entry, hidden: !entry.hidden };
          }
          return entry;
        });
        setExperienceData({ saved: toggled, temp: toggled });
      },
      addBtn: () => {
        const added = [...experienceData.saved, getNewExperienceDataEntry()];
        setExperienceData({ saved: added, temp: added });
      },
      cancelBtn: () => {
        setExperienceData({ ...experienceData, temp: experienceData.saved });
      },
      saveBtn: () => {
        setExperienceData({ ...experienceData, saved: experienceData.temp });
      },
    },
    education: {
      setTemp: (newEntry) => {
        const newData = educationData.saved.map((entry) => {
          return entry.id === newEntry.id ? newEntry : entry;
        });
        setEducationData({ ...educationData, temp: newData });
      },
      deleteEntry: (id) => {
        const deleted = educationData.saved.filter((entry) => entry.id !== id);
        setEducationData({ saved: deleted, temp: deleted });
      },
      toggleHidden: (id) => {
        const toggled = educationData.saved.map((entry) => {
          if (entry.id === id) {
            return { ...entry, hidden: !entry.hidden };
          }
          return entry;
        });
        setEducationData({ saved: toggled, temp: toggled });
      },
      addBtn: () => {
        const added = [...educationData.saved, getNewEducationDataEntry()];
        setEducationData({ saved: added, temp: added });
      },
      cancelBtn: () => {
        setEducationData({ ...educationData, temp: educationData.saved });
      },
      saveBtn: () => {
        setEducationData({ ...educationData, saved: educationData.temp });
      },
    },
  };

  const datas = [personalData.saved, experienceData.saved, educationData.saved];

  switch (activeInputSection) {
    case SECTIONS.personal:
      datas[0] = personalData.temp;
      break;
    case SECTIONS.experience:
      datas[1] = experienceData.temp;
      break;
    case SECTIONS.education:
      datas[2] = educationData.temp;
      break;
  }

  return (
    <main className="main">
      <InputContainer
        activeInputSection={activeInputSection}
        datas={datas}
        setters={setters}
      />
      <LivePreview datas={datas} />
    </main>
  );
}

export default Main;
