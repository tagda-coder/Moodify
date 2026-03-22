import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleShortCuts = (e) => {
      // CTRL + SHIFT + L - LOGIN
      if (e.ctrlKey && e.shiftKey && e.key === "L") {
        navigate("/login");
      }
      // CTRL + SHIFT + R - REGISTER
      if (e.ctrlKey && e.shiftKey && e.key === "R") {
        navigate("/register");
      }
      // CTRL + SHIFT + H - REGISTER
      if (e.ctrlKey && e.shiftKey && e.key === "H") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleShortCuts);
    return () => {
      window.removeEventListener("keydown", handleShortCuts);
    }
  }, []);
  
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
