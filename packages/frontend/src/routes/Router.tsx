import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/panel";
import UserPage from "../pages/user";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
