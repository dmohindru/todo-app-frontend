import LandingPageNavbar from "./component/LandingPageNavbar";
import AddTodoTitleForm from "./features/app-page/AddTodoTitleForm";
import AppPageNavbar from "./component/AppPageNavbar";
import SideBar from "./features/sidebar/SideBar";
import AppPage from "./features/app-page/AppPage";
import { Box } from "@mui/material";
const App: React.FC = () => {
  return (
    <>
      {/* <LandingPageNavbar /> */}
      <AppPageNavbar />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        {/* <AppPage /> */}
        <AddTodoTitleForm isAdd />
      </Box>
    </>
  );
};

export default App;
