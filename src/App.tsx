import LandingPageNavbar from "./component/LandingPageNavbar";
import LandingPage from "./component/LandingPage";
import AppFooter from "./component/AppFooter";
import AddTodoListForm from "./features/app-page/AddTodoListForm";
import AddTodoForm from "./features/app-page/AddTodoForm";
import AppPageNavbar from "./component/AppPageNavbar";
import SideBar from "./features/sidebar/SideBar";
import AppPage from "./features/app-page/AppPage";
import { Box } from "@mui/material";
import UserRegistration from "./component/UserRegistration";
import UserLogin from "./component/UserLogin";
import LandingPageLayout from "./component/LandingPageLayout";
import AppPageLayout from "./component/AppPageLayout";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="register" element={<UserRegistration />} />
        <Route path="login" element={<UserLogin />} />
      </Route>
    </Routes>
  );
};

export default App;
