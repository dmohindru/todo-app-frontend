import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
const ThemeToggleButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <IconButton
        sx={{ display: !darkMode ? "block" : "none" }}
        onClick={() => setDarkMode(true)}
      >
        <DarkMode />
      </IconButton>
      <IconButton
        sx={{ display: darkMode ? "block" : "none" }}
        onClick={() => setDarkMode(false)}
      >
        <LightMode />
      </IconButton>
    </>
  );
};

export default ThemeToggleButton;
