import LandingPage from "./component/LandingPage";
import AppPage from "./features/app-page/AppPage";
import UserRegistration from "./component/UserRegistration";
import UserLogin from "./component/UserLogin";
import LandingPageLayout from "./component/LandingPageLayout";
import AppPageLayout from "./component/AppPageLayout";
import AppDashBoard from "./features/app-page/AppDashBoard";
import { Route, Routes } from "react-router-dom";
import AddTodoForm from "./features/app-page/AddTodoForm";
import AddTodoTitleForm from "./features/app-page/AddTodoListForm";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="register" element={<UserRegistration />} />
        <Route path="login" element={<UserLogin />} />
      </Route>
      <Route path="/app" element={<AppPageLayout />}>
        <Route index element={<AppDashBoard />} />
        <Route path="app-page" element={<AppPage />} />
        <Route path="add-todo" element={<AddTodoForm isAdd />} />
        <Route path="add-todo-list" element={<AddTodoTitleForm isAdd />} />
      </Route>
    </Routes>
  );
};

export default App;
