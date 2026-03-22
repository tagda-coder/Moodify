import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/auth";
function Login() {
  const [formData, setFormData] = useState({ login: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginUser(formData)
      console.log(res.data) // check kar pehle
      navigate('/feed')
    } catch (err) {
      setError(err.response?.data?.Message || 'Something went wrong')
    }         
  }

  return (
    <main className="min-h-screen w-full  flex flex-col items-center justify-center">
      <div className="w-[70vw] md:w-[20vw] max-w-md p-8 flex gap-8 flex-col">
        <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="login"
            type="text"
            placeholder="username or email"
            onChange={handleChange}
            className="w-full border !px-2 py-2 h-10 rounded-md placeholder:px-2 outline-none"
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="password"
            className="w-full border !px-2 py-2 h-10 rounded-md placeholder:px-2 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-[1.4rem] font-semibold h-11 py-2 rounded-md"
          >
            Login
          </button>
          <div className="back-to-register flex gap-1">
            <p className="text-sm opacity-60">Not a member?</p>
            <Link to="/register" className="text-sm font-semibold opacity-90 text-green-300">
              Register
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
