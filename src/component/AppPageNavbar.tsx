import { Home } from "@mui/icons-material";
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
  InputBase,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledButton = styled(Button)({
  margin: "2px",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const AppPageNavbar: React.FC = () => {
  //   const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const logoutButton = (
    <StyledButton href="/" variant="contained" color="info">
      LOGOUT
    </StyledButton>
  );

  const avatar = (
    <Avatar sx={{ width: 36, height: 36, fontSize: 14, fontWeight: "bold" }}>
      DM
    </Avatar>
  );

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* Left portion of App Bar */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton href="/app">
            <Home />
          </IconButton>
          <Typography
            variant="h5"
            sx={{ display: { sm: "block", xs: "none" } }}
          >
            Todo APP
          </Typography>
        </Box>

        {/* Center portion of App Bar */}
        <Search>
          <InputBase placeholder="Search ..." />
        </Search>

        {/* Right portion of App Bar */}
        <Box
          sx={{
            display: { sm: "flex", xs: "none" },
            alignItems: "center",
            "& > *": {
              mx: 0.5,
            },
          }}
        >
          <ThemeToggleButton />
          {avatar}
          {logoutButton}
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
            <MenuItem>{avatar}</MenuItem>
            <MenuItem>{logoutButton}</MenuItem>
          </Box>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default AppPageNavbar;
