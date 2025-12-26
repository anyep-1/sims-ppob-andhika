import avatar from "../assets/avatar.png";

export default function ProfileSection() {
  return (
    <div className="flex items-center gap-4">
      <img
        src={avatar}
        alt="Profile"
        className="w-14 h-14 rounded-full border"
      />
      <div>
        <p className="text-sm text-gray-500">Selamat datang</p>
        <p className="font-semibold text-lg">Kristanto Wibowo</p>
      </div>
    </div>
  );
}
