import LandingPageNavbar from "./component/LandingPageNavbar";
import AddTodoListForm from "./features/app-page/AddTodoListForm";
import AddTodoForm from "./features/app-page/AddTodoForm";
import AppPageNavbar from "./component/AppPageNavbar";
import SideBar from "./features/sidebar/SideBar";
import AppPage from "./features/app-page/AppPage";
import { Box } from "@mui/material";
import UserRegistration from "./component/UserRegistration";
import UserLogin from "./component/UserLogin";
const App: React.FC = () => {
  return (
    <>
      {/* <LandingPageNavbar /> */}
      <AppPageNavbar />
      {/* <UserRegistration /> */}
      {/* <UserLogin /> */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        {/* <AppPage /> */}
        {/* <AddTodoListForm isAdd={false} /> */}
        <AddTodoForm isAdd />
      </Box>
    </>
  );
};

export default App;
