import logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 h-16 bg-white border-b">
      <div className="flex items-center gap-2">
        <img src={logo} alt="SIMS PPOB" className="w-6 h-6" />
        <span className="font-semibold">SIMS PPOB</span>
      </div>

      <nav className="flex gap-8 text-sm font-medium text-gray-700">
        <button>Top Up</button>
        <button>Transaction</button>
        <button>Akun</button>
      </nav>
    </header>
  );
}
