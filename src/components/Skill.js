import "../App.css"


function Skill({ skills = [] }) {
  return (
    <div className="personal-info">
      {skills.map((item, index) => (
        <span key={index} className="skill-badge">{item}</span>
      ))}
    </div>
  );
}

export default Skill;
