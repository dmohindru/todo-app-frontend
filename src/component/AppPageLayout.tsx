import { Box } from "@mui/material";
import SideBar from "../features/sidebar/SideBar";
import AppPage from "../features/app-page/AppPage";
import AppPageNavbar from "./AppPageNavbar";
const AppPageLayout: React.FC = () => {
  return (
    <>
      <AppPageNavbar />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <AppPage />
        {/* <AddTodoListForm isAdd={false} /> */}
        {/* <AddTodoForm isAdd /> */}
      </Box>
    </>
  );
};

export default AppPageLayout;
