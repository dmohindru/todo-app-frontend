import { Box } from "@mui/material";
import SideBar from "../features/sidebar/SideBar";
import AppPageNavbar from "./AppPageNavbar";
import { Outlet } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppPageLayout: React.FC = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  useEffect(() => {
    if (!keycloak.authenticated) {
      console.log("user logged out or not authenticated");
      navigate("/");
    }
  }, [keycloak, navigate]);

  return (
    <>
      <AppPageNavbar />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Outlet />
      </Box>
    </>
  );
};

export default AppPageLayout;
