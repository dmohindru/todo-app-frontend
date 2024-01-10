import { Box } from "@mui/material";
import SideBar from "../features/sidebar/SideBar";
import AppPageNavbar from "./AppPageNavbar";
import { Outlet } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { Navigate, useLocation } from "react-router-dom";
import { addAuth } from "../app/store";
import { useAppDispatch } from "../hooks/useHooks";

const AppPageLayout: React.FC = () => {
  const { keycloak } = useKeycloak();
  const location = useLocation();
  console.log(location.state);
  const dispatch = useAppDispatch();

  if (keycloak.authenticated) {
    dispatch(
      addAuth({
        refreshToken: location.state.refreshToken,
        accessToken: location.state.token,
      })
    );
  }

  return (
    <>
      {!keycloak.authenticated ? (
        <Navigate to="/" replace={true} />
      ) : (
        <>
          <AppPageNavbar />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <SideBar />
            <Outlet />
          </Box>
        </>
      )}
    </>
  );
};

export default AppPageLayout;
