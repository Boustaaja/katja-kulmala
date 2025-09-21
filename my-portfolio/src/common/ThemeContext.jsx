import React, { createContext, useContext, useEffect, useState } from "react";
// Create a context for the theme (light or dark)
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// If we dont have a theme use the light theme as default
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Apply the theme to the body and save it to localStorage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    console.log("Toggling theme");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provide the theme and toggle function to the context
  // This encapsulates the theme logic and makes it available to all children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
