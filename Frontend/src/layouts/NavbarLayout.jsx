// src/layouts/AuthLayout.jsx
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
function NavbarLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="flex-1 w-full max-w-7xl mx-auto">
        <Navbar />
        <Outlet />  {/* page render hoga  */}
      </main>
    </div>
  )
}

export default NavbarLayout;