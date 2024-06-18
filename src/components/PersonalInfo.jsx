import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/PersonalInfo.css";

function PersonalInfo({ data }) {
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
