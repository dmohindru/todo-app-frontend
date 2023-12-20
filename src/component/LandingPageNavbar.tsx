import { Home, DarkMode, LightMode } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import { useState } from "react";

// interface NavbarProps {
//   authenticated: boolean;
// }

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledButton = styled(Button)({
  margin: "2px",
});

const LandingPageNavbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const loginButton = (
    <StyledButton variant="contained" color="info">
      LOGIN
    </StyledButton>
  );

  const registerButton = (
    <StyledButton variant="contained" color="info">
      REGISTER
    </StyledButton>
  );

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <IconButton>
          <Home />
        </IconButton>
        <Typography variant="h4">Todo APP</Typography>
        <Box sx={{ display: { sm: "flex", xs: "none" }, alignItems: "center" }}>
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
          {loginButton}
          {registerButton}
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Menu
          id="button-menu"
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MenuItem>{loginButton}</MenuItem>
            <MenuItem>{registerButton}</MenuItem>
          </Box>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default LandingPageNavbar;
