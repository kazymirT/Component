import React from "react";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="toggle-dark-theme" onClick={toggleTheme}>
      <button>
        <div className={`icon ${theme === "dark" ? "dark" : "light"}`}></div>
      </button>
    </div>
  );
};