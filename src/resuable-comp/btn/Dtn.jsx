import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
// import "./btn-style.scss";
const AnimatedButton = ({ children, onClick, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styles = {
    button: {
      backgroundColor: isHovered ? "black" : "transparent",
      display: "flex",
      width: "25vh",
      height: "5vh",
      padding: "5vh",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "2.5vh",
      color: isHovered ? "white" : "black",
      padding: isHovered ? " " : " ",
      borderRadius: isHovered ? "5vh" : "5vh ",
      cursor: "pointer",
      border: isHovered ? "" : "transparent",
      transition:
        "background-color 0.2s ease-in-out, color 0.2s ease-in-out, border 0.2s ease-in-out",
      ...style,
    },
    img: {
      width: "5vh",
      height: "5vh",
      backgroundColor: "rgb(255, 255, 255)",
      color: isHovered ? "black" : "black",
      transform: isHovered ? "translateX(0.2vh)" : "none",
      transition: "transform 0.1s ease-in",
      display: "grid",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
    },
  };

  return (
    <button
      style={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        id="btn-logodiv"
        style={styles.img}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MdOutlineNavigateNext />
      </div>
      {children}
    </button>
  );
};

export default AnimatedButton;
