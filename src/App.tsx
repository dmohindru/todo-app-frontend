import LandingPageNavbar from "./component/LandingPageNavbar";
import AppPageNavbar from "./component/AppPageNavbar";
import SideBar from "./features/sidebar/SideBar";
import AppPage from "./features/page/AppPage";
import { Stack } from "@mui/material";
const App: React.FC = () => {
  return (
    <div>
      {/* <LandingPageNavbar /> */}
      <AppPageNavbar />
      <Stack direction="row" spacing={0.5} justifyContent="space-between">
        <SideBar />
        <AppPage />
      </Stack>
    </div>
  );
};

export default App;
