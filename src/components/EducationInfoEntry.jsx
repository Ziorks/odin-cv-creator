import "../styles/EducationInfoEntry.css";

function EducationInfoEntry({ data }) {
  return (
    <div className="educationInfoEntry">
      <p>
        {`${data.degree} in ${data.field} ${data.startDate} - ${data.endDate}`}
      </p>
      <p className="schoolInfo">{`${data.school} at ${data.location}`}</p>
      <p>{data.details}</p>
    </div>
  );
}

export default EducationInfoEntry;
