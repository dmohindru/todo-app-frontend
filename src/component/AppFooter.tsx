import { AppBar, Toolbar, Typography, Box } from "@mui/material";
const AppFooter: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            About
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {" "}
            © 2024 Todo App. All rights reserved.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppFooter;
