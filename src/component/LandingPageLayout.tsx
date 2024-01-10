import { Box } from "@mui/material";
import LandingPageNavbar from "./LandingPageNavbar";
import AppFooter from "./AppFooter";
import { Outlet } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";

const LandingPageLayout: React.FC = () => {
  const { keycloak } = useKeycloak();

  return (
    <>
      {keycloak.authenticated ? (
        <Navigate
          to="/app"
          replace={true}
          state={{
            token: keycloak.token,
            refreshToken: keycloak.refreshToken,
          }}
        />
      ) : (
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
      )}
    </>
  );
};

export default LandingPageLayout;
