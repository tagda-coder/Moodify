// src/layouts/AuthLayout.jsx
import { Outlet } from 'react-router-dom'
function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background justify-center items-center">
      <main className="flex-1 w-full max-w-7xl mx-auto bg">
        <Outlet />  
      </main>
    </div>
  )
}

export default AuthLayout;