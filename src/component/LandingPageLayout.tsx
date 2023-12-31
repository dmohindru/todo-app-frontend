import { Box } from "@mui/material";
import LandingPageNavbar from "./LandingPageNavbar";
import LandingPage from "./LandingPage";
import AppFooter from "./AppFooter";
import { Outlet } from "react-router-dom";
const LandingPageLayout: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <LandingPageNavbar />
      <Outlet />
      <AppFooter />
    </Box>
  );
};

export default LandingPageLayout;
