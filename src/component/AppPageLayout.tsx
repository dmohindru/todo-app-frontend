import { Box } from "@mui/material";
import SideBar from "../features/sidebar/SideBar";
import AppPage from "../features/app-page/AppPage";
import AppPageNavbar from "./AppPageNavbar";
import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";
const AppPageLayout: React.FC = () => {
  return (
    <>
      <AppPageNavbar />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Outlet />
        {/* <AppPage /> */}
        {/* <AddTodoListForm isAdd={false} /> */}
        {/* <AddTodoForm isAdd /> */}
        {/* <AppFooter /> */}
      </Box>
    </>
  );
};

export default AppPageLayout;
