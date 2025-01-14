import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import DashboardPage from "pages/DashboardPage";
import Adminpage from "pages/Adminpage";
import PageNotFound from "pages/404";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="admin" element={<Adminpage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
