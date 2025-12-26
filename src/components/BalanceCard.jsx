export default function BalanceCard() {
  return (
    <div className="bg-red-500 rounded-xl p-6 text-white w-[420px]">
      <p className="text-sm">Saldo anda</p>
      <p className="text-2xl font-bold mt-2">Rp ••••••</p>
      <button className="text-sm mt-2 underline">Lihat saldo</button>
    </div>
  );
}
