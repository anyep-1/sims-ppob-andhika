import Navbar from "../../components/Navbar";
import ProfileSection from "../../components/ProfileSection";
import BalanceCard from "../../components/BalanceCard";
import ServiceMenu from "../../components/ServiceMenu";
import PromoSlider from "../../components/PromoSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Profile + Balance */}
      <section className="flex justify-between items-center px-10 mt-6">
        <ProfileSection />
        <BalanceCard />
      </section>

      <ServiceMenu />

      <PromoSlider />
    </div>
  );
}
