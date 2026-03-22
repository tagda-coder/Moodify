import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';
function Register() {
  const [formData, setFormData] = useState({username: '', email: '', password: ''});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      console.log(res.data);
      navigate('/feed');
    } catch (error) {
      setError(error.response?.data?.Message || "Something went wrong");
    }
  }
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[70vw] md:w-[20vw] max-w-md p-8 flex gap-8 flex-col">
        <h2 className="text-4xl font-bold mb-6 text-center">Signup</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="username"
            className="w-full border !px-2 py-2 h-10 rounded-md placeholder:px-2 outline-none"
          />
          <input
            name="email"
            onChange={handleChange}
            type="text"
            placeholder="email"
            className="w-full border !px-2 py-2 h-10 rounded-md placeholder:px-2 outline-none"
          />
          <input 
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="password"
            className="w-full border !px-2 py-2 h-10 rounded-md placeholder:px-2 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-[1.3rem] font-semibold h-11 py-2  rounded-md"
          >
            Register
          </button>
          <div className="back-to-register flex gap-1">
            <p className="text-sm opacity-60">Already have an account?</p>
            <Link to="/login" className="text-sm font-semibold opacity-90 text-green-300">
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register