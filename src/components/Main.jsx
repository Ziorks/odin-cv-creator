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
    position: "Position Title",
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
    position: "Position Title 2",
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
    school: "School Name 2",
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
  const tempDatas = [personalTemp, experienceTemp, educationTemp];

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
      setTemp: setPersonalTemp,
      cancelBtn: () => {
        setActiveInputSection(null);
        setPersonalTemp({ ...personalSaved });
      },
      saveBtn: () => {
        setActiveInputSection(null);
        setPersonalSaved({ ...personalTemp });
      },
    },
    experience: {
      setTemp: (newEntry) => {
        const newData = experienceTemp.map((entry) => {
          return entry.id === newEntry.id ? newEntry : entry;
        });
        setExperienceTemp(newData);
      },
      deleteEntry: (id) => {
        const deleted = experienceTemp.filter((entry) => entry.id !== id);
        setExperienceSaved(deleted);
        setExperienceTemp(deleted);
      },
      toggleHidden: (id) => {
        const toggled = experienceTemp.map((entry) => {
          if (entry.id === id) {
            return { ...entry, hidden: !entry.hidden };
          }
          return entry;
        });
        setExperienceSaved(toggled);
        setExperienceTemp(toggled);
      },
      addBtn: () => {
        const added = [
          ...experienceTemp,
          { ...experienceTestData[0], id: crypto.randomUUID() },
        ];
        setExperienceSaved(added);
        setExperienceTemp(added);
      },
      cancelBtn: () => {
        setExperienceTemp([...experienceSaved]);
      },
      saveBtn: () => {
        setExperienceSaved([...experienceTemp]);
      },
    },
    education: {
      setTemp: (newEntry) => {
        const newData = educationTemp.map((entry) => {
          return entry.id === newEntry.id ? newEntry : entry;
        });
        setEducationTemp(newData);
      },
      deleteEntry: (id) => {
        const deleted = educationTemp.filter((entry) => entry.id !== id);
        setEducationSaved(deleted);
        setEducationTemp(deleted);
      },
      toggleHidden: (id) => {
        const toggled = educationTemp.map((entry) => {
          if (entry.id === id) {
            return { ...entry, hidden: !entry.hidden };
          }
          return entry;
        });
        setEducationSaved(toggled);
        setEducationTemp(toggled);
      },
      addBtn: () => {
        const added = [
          ...educationTemp,
          { ...educationTestData[0], id: crypto.randomUUID() },
        ];
        setEducationSaved(added);
        setEducationTemp(added);
      },
      cancelBtn: () => {
        setEducationTemp([...educationSaved]);
      },
      saveBtn: () => {
        setEducationSaved([...educationTemp]);
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
