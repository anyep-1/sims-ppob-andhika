const services = [
  "PBB",
  "Listrik",
  "Pulsa",
  "PDAM",
  "PGN",
  "TV Langganan",
  "Musik",
  "Voucher Game",
  "Voucher Makanan",
  "Kurban",
  "Zakat",
  "Paket Data",
];

export default function ServiceMenu() {
  return (
    <div className="grid grid-cols-12 gap-6 mt-10 px-10">
      {services.map((item) => (
        <div
          key={item}
          className="col-span-2 flex flex-col items-center gap-2 text-sm"
        >
          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500">◎</span>
          </div>
          <span className="text-center">{item}</span>
        </div>
      ))}
    </div>
  );
}
