// src/layouts/MainLayout.jsx
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Crimson Core Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(228,42,66,0.06) 0%, rgba(228,42,66,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(240,60,80,0.06), rgba(0,0,0,0) 60%), #050505",
        }}
      />
      {/* Soft vignette to blend edges */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.5) 100%)",
          opacity: 0.95,
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
