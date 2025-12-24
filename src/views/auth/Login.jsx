import { useDispatch } from "react-redux";
import { handleLogin } from "../../controllers/authController";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import illustration from "../../assets/Illustrasi Login.png";

export default function Login() {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleLogin(dispatch, payload);
  };

  return (
    // PAGE WRAPPER
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* CARD */}
      <div className="bg-white w-[900px] h-[520px] rounded-lg shadow-lg grid grid-cols-2 overflow-hidden">
        {/* ================= LEFT (FORM) ================= */}
        <div className="flex flex-col justify-center px-16">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8 justify-center">
            <img src={logo} alt="SIMS PPOB" className="w-8 h-8" />
            <span className="font-semibold text-lg">SIMS PPOB</span>
          </div>

          {/* Title */}
          <h1 className="flex text-2xl font-bold mb-8 leading-snug justify-center">
            Masuk atau buat akun <br />
            untuk memulai
          </h1>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="email"
              placeholder="masukan email anda"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="password"
              placeholder="masukan password anda"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded
                         font-semibold hover:bg-red-700 transition"
            >
              Masuk
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-sm mt-6">
            belum punya akun?{" "}
            <Link
              to="/register"
              className="text-red-600 font-semibold hover:underline"
            >
              registrasi di sini
            </Link>
          </p>
        </div>

        {/* ================= RIGHT (ILLUSTRATION) ================= */}
        <div className="flex items-center justify-center bg-[#FFF5F5]">
          <img
            src={illustration}
            alt="Login Illustration"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
