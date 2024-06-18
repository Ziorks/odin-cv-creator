import FormButtons from "./FormButtons";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/PersonalInfo.css";

const data = {
  firstName: "First Name",
  lastName: "Last Name",
  jobTitle: "Job Title",
  address: "Address",
  phone: "Phone",
  email: "email@example.com",
  github: "github.com/link",
  linkedin: "linkedin.com/link",
};

function PersonalInfo({ form = false }) {
  if (form) {
    return (
      <div className="personalForm">
        <div className="group">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={data.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={data.lastName}
            />
          </div>
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={data.jobTitle}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" value={data.address} />
        </div>
        <div className="group">
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" value={data.phone} />
          </div>
          <div>
            <label htmlFor="email">E-mail Address</label>
            <input type="email" name="email" id="email" value={data.email} />
          </div>
        </div>
        <div className="group">
          <div>
            <label htmlFor="github">Github Link</label>
            <input type="url" name="github" id="github" value={data.github} />
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn Link</label>
            <input
              type="url"
              name="linkedin"
              id="linkedin"
              value={data.linkedin}
            />
          </div>
        </div>
        <FormButtons />
      </div>
    );
  }

  return (
    <div className="personalInfo">
      <div className="left">
        <p className="name">{data.firstName}</p>
        <p className="name">{data.lastName}</p>
        <p className="title">{data.jobTitle}</p>
      </div>
      <div className="right">
        <p>
          <GiPositionMarker /> {data.address} | <MdOutlinePhone /> {data.phone}
        </p>
        <p>
          {data.email} <MdOutlineMail />
        </p>
        <p>
          {data.github} <FaGithub />
        </p>
        <p>
          {data.linkedin} <FaLinkedin />
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
