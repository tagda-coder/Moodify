import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import NavbarLayout from "../layouts/NavbarLayout";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import LandingPage from "@/pages/LandingPage";
function AppRoutes() {
  return (
    <Routes>
      {/* Navbar Layout  */}
      <Route element={<MainLayout />}>
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      {/* AuthLayout Routing */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
