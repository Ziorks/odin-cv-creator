import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  return (
    <div className="generalInfo">
      <div className="left">
        <p className="name">First Name</p>
        <p className="name">Last Name</p>
        <p className="title">Job Title</p>
      </div>
      <div className="right">
        <p>
          <span>
            <GiPositionMarker /> Address
          </span>
          |
          <span>
            <MdOutlinePhone /> phone #
          </span>
        </p>
        <p>
          email@example.com <MdOutlineMail />
        </p>
        <p>
          link@github.com <FaGithub />
        </p>
        <p>
          link@linkedin.com <FaLinkedin />
        </p>
      </div>
    </div>
  );
}

export default GeneralInfo;
