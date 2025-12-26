import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../models/auth/authSlice";
import { MdLock } from "react-icons/md";
import { FiAtSign, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import illustration from "../../assets/Illustrasi Login.png";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await dispatch(login(payload)).unwrap();
      navigate("/home");
    } catch (err) {
      console.log("Login failed: ", err);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* ================= LEFT (FORM) ================= */}
      <div className="flex flex-col justify-center px-24 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10 justify-center">
          <img src={logo} alt="SIMS PPOB" className="w-8 h-8" />
          <span className="font-semibold text-lg">SIMS PPOB</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-8 leading-snug text-center">
          Masuk atau buat akun <br />
          untuk memulai
        </h1>

        {/* Form */}
        <form className="space-y-5 w-full h-auto mx-auto" onSubmit={onSubmit}>
          {/* EMAIL */}
          <div className="relative">
            <FiAtSign
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="email"
              name="email"
              placeholder="masukan email anda"
              className="w-full border border-gray-300 rounded px-4 py-3 pl-9 text-sm
                         focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <MdLock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="masukan kata sandi anda"
              className="w-full border border-gray-300 rounded px-4 py-3 pl-9 pr-9 text-sm
                         focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="button"
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded
                       font-semibold hover:bg-red-700 transition"
          >
            Masuk
          </button>
        </form>

        {/* Register */}
        <p className="text-gray-500 text-center text-xs mt-6">
          belum punya akun? registrasi{" "}
          <Link
            to="/register"
            className="text-red-600 font-semibold hover:underline"
          >
            di sini
          </Link>
        </p>
      </div>

      {/* ================= RIGHT (ILLUSTRATION) ================= */}
      <div className="flex items-center justify-center bg-[#FFF5F5]">
        <img src={illustration} alt="Login Illustration" className="max-w-lg" />
      </div>
    </div>
  );
}
