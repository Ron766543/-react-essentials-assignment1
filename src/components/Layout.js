import React, { useState } from "react";
import Footer from "./Footer";
import Skill from "./Skill";
import Header from "./Header";
import About from "./About";
import "./Layout.css";

function Layout() {
  const [theme, setTheme] = useState("light");

 
  const images = [
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1661593195372-874ca9d29713?q=80&w=687&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1661582229365-c7565424552c?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1661299240085-e4f34de39fd8?q=80&w=1170&auto=format&fit=crop"
  ];
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={`layout ${theme}`}>
      <Header images={images} index={index} />
      <div className="main">
        <About />
        <Skill skills={['HTML','CSS','JS','React','Git','GitHub']} />
        <Footer 
          theme={theme} 
          setTheme={setTheme} 
          nextImage={nextImage} 
          prevImage={prevImage} 
        />
      </div>
    </div>
  );
}

export default Layout;
