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
import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledButton = styled(Button)({
  margin: "2px",
});

const LandingPageNavbar: React.FC = () => {
  const { keycloak } = useKeycloak();

  // const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  // TODO fix with StyledButton
  const loginButton = (
    <StyledButton
      // href="login"
      variant="contained"
      color="info"
      onClick={() => keycloak.login()}
    >
      LOGIN
    </StyledButton>
  );

  const registerButton = (
    <StyledButton
      // href="register"
      variant="contained"
      color="info"
      onClick={() => keycloak.register()}
    >
      REGISTER
    </StyledButton>
  );

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* Left Portion of Navbar */}
        <IconButton component={Link} to="/">
          <Home />
        </IconButton>

        {/* Center Portion of Navbar */}
        <Typography variant="h4">Todo APP</Typography>

        {/* Right Portion of Navbar */}
        <Box sx={{ display: { sm: "flex", xs: "none" }, alignItems: "center" }}>
          <ThemeToggleButton />
          {loginButton}
          {registerButton}
        </Box>

        {/* Right Portion of App Bar for mobile view */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile view menu item */}
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
            <MenuItem>
              <ThemeToggleButton />
            </MenuItem>
            <MenuItem>{loginButton}</MenuItem>
            <MenuItem>{registerButton}</MenuItem>
          </Box>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default LandingPageNavbar;
