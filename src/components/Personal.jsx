import FormButtons from "./FormButtons";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Personal.css";

function Personal({ form = false, data, setters = undefined }) {
  if (form) {
    return <PersonalForm data={data} setters={setters} />;
  } else {
    return <PersonalDisplay data={data} />;
  }
}

function PersonalDisplay({ data }) {
  return (
    <div className="personalDisplay">
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

function PersonalForm({ data, setters }) {
  const setTemp = setters.temp;

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
            onChange={(e) => setTemp({ ...data, firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={data.lastName}
            onChange={(e) => setTemp({ ...data, lastName: e.target.value })}
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
          onChange={(e) => setTemp({ ...data, jobTitle: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={data.address}
          onChange={(e) => setTemp({ ...data, address: e.target.value })}
        />
      </div>
      <div className="group">
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={(e) => setTemp({ ...data, phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={(e) => setTemp({ ...data, email: e.target.value })}
          />
        </div>
      </div>
      <div className="group">
        <div>
          <label htmlFor="github">Github Link</label>
          <input
            type="url"
            name="github"
            id="github"
            value={data.github}
            onChange={(e) => setTemp({ ...data, github: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn Link</label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            value={data.linkedin}
            onChange={(e) => setTemp({ ...data, linkedin: e.target.value })}
          />
        </div>
      </div>
      <FormButtons onCancel={setters.cancel} onSave={setters.save} />
    </div>
  );
}

export default Personal;
