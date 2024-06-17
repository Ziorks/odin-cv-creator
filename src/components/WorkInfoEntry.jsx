import "../styles/WorkInfoEntry.css";

function WorkInfoEntry({ data }) {
  return (
    <div className="workInfoEntry">
      <p className="title">{data.position}</p>
      <div className="details">
        <p>{`${data.company}, ${data.city}, ${data.state}`}</p>
        <p>{`${data.startDate} - ${data.endDate}`}</p>
      </div>
      <p className="summary">{data.summary}</p>
    </div>
  );
}

export default WorkInfoEntry;
