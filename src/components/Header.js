import "../App.css";

function Header({ images, index }) {
  return (
    <div className="header">
      <h1>My Portfolio</h1>
      <div>
        <img src={images[index]} className="image" alt="profile" />
      </div>
      <div className="profile-info">
        <h2>TuteDude</h2>
        <p>Product Designer & Frontend Engineer</p>
      </div>
    </div>
  );
}

export default Header;
