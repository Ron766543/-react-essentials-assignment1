import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Footer.css";

function Footer({ theme, setTheme, nextImage, prevImage }) {
  const [like, setLike] = useState(0);

  return (
    <div className={`footer ${theme}`}>
      <button
        className="thebtn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <>
            <i className="fas fa-moon moo"></i> Dark
          </>
        ) : (
          <>
            <i className="fas fa-sun lig"></i> Light
          </>
        )}
      </button>

      <div className="Slide">
        <button onClick={prevImage} className="prev-btn">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextImage} className="next-btn">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="liked">
        <button className="likebtn" onClick={() => setLike(prev => prev + 1)}>
          <i className="fa-regular fa-heart"></i>
        </button>
        <p>{like}</p>
      </div>

      <button
        className="contactbtn"
        onClick={() => alert("It is connecting....")}
      >
        <i className="fa-solid fa-envelope"></i> Contact
      </button>
    </div>
  );
}

export default Footer;
