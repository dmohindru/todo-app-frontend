import LandingPageNavbar from "./component/LandingPageNavbar";
import AppPageNavbar from "./component/AppPageNavbar";
import SideBar from "./features/sidebar/SideBar";
import AppPage from "./features/page/AppPage";
import { Box } from "@mui/material";
const App: React.FC = () => {
  return (
    <>
      {/* <LandingPageNavbar /> */}
      <AppPageNavbar />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <AppPage />
      </Box>
    </>
  );
};

export default App;
