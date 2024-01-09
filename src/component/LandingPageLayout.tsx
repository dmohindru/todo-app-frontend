import { Box } from "@mui/material";
import LandingPageNavbar from "./LandingPageNavbar";
import AppFooter from "./AppFooter";
import { Outlet } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LandingPageLayout: React.FC = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  useEffect(() => {
    if (keycloak.authenticated) {
      // console.log("User is authenticated. Auth token: ", keycloak.token);
      // console.log("Refresh Token: ", keycloak.refreshToken);
      navigate("/app");
    } else {
      console.log("User not authenticated");
    }
  }, [keycloak.authenticated, navigate]);

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
