import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEye, FiEyeOff, FiAtSign } from "react-icons/fi";
import { MdLock, MdPerson } from "react-icons/md";

import logo from "../../assets/Logo.png";
import illustration from "../../assets/Illustrasi Login.png";
import { register } from "../../models/auth/authSlice";
import { isValidEmail, isStrongPassword } from "../../utils/validators";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isLoading } = useSelector((state) => state.auth);

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!isValidEmail(email)) {
      setFormError("Format email tidak valid");
      return;
    }

    if (!isStrongPassword(password)) {
      setFormError("Password minimal 8 karakter");
      return;
    }

    const payload = {
      email: email,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      password: password,
    };
    try {
      await dispatch(register(payload)).unwrap();
      navigate("/login");
    } catch (err) {
      console.log("Register gagal:", err);
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
        <h1 className="text-center text-2xl font-bold mb-8 leading-snug">
          Lengkapi data untuk <br />
          membuat akun
        </h1>

        {/* FORM */}
        <form className="space-y-5 w-full h-auto mx-auto" onSubmit={onSubmit}>
          {/* EMAIL */}
          <div className="relative">
            <FiAtSign
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              name="email"
              type="email"
              placeholder="masukan email anda"
              className="w-full border border-gray-300 rounded px-4 py-3 pl-9 text-sm
                         focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* NAMA DEPAN */}
          <div className="relative">
            <MdPerson
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              name="first_name"
              type="text"
              placeholder="nama depan"
              className="w-full border border-gray-300 rounded px-4 py-3 pl-9 text-sm
                         focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* NAMA BELAKANG */}
          <div className="relative">
            <MdPerson
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              name="last_name"
              type="text"
              placeholder="nama belakang"
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
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="buat password"
              className="w-full border border-gray-300 rounded px-4 py-3 pl-9 pr-9 text-sm
                         focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="button"
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>

          {/* KONFIRMASI PASSWORD */}
          <div className="relative">
            <MdLock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="konfirmasi password"
              className="w-full border border-gray-300 rounded px-4 py-3 pl-9 pr-9 text-sm
                         focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="button"
              onMouseDown={() => setShowConfirmPassword(true)}
              onMouseUp={() => setShowConfirmPassword(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showConfirmPassword ? (
                <FiEyeOff size={18} />
              ) : (
                <FiEye size={18} />
              )}
            </button>
          </div>
          {formError && (
            <p className="text-red-500 text-sm text-center mt-2">{formError}</p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 text-white py-3 rounded
                       font-semibold hover:bg-red-700 transition"
          >
            Registrasi
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-gray-500 text-center text-xs mt-6">
          sudah punya akun? login{" "}
          <Link
            to="/login"
            className="text-red-600 font-semibold hover:underline"
          >
            di sini
          </Link>
        </p>
      </div>

      {/* ================= RIGHT (ILLUSTRATION) ================= */}
      <div className="flex items-center justify-center bg-[#FFF5F5]">
        <img
          src={illustration}
          alt="Register Illustration"
          className="max-w-lg"
        />
      </div>
    </div>
  );
}
