const promos = [
  {
    title: "Saldo Gratis!",
    desc: "Dapatkan saldo gratis untuk pengguna baru",
    bg: "bg-red-500",
  },
  {
    title: "Diskon listrik!",
    desc: "Bayar listrik makin hemat",
    bg: "bg-pink-400",
  },
  {
    title: "Promo makanan!",
    desc: "Voucher makanan diskon",
    bg: "bg-blue-400",
  },
  {
    title: "Cashback 25%",
    desc: "Pembayaran lebih hemat",
    bg: "bg-gray-300",
  },
];

export default function PromoSlider() {
  return (
    <section className="mt-10 px-10">
      <h2 className="font-semibold mb-4">Temukan promo menarik</h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {promos.map((promo, index) => (
          <div
            key={index}
            className={`min-w-[260px] rounded-xl p-4 text-white ${promo.bg}`}
          >
            <h3 className="font-semibold">{promo.title}</h3>
            <p className="text-sm mt-1">{promo.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
