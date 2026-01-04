import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import AllCategoriesSection from "@/components/allCategoriesSection";
import FavouritesSection from "@/components/favouritesSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-white">
      <Navbar />
      <HeroSection />
      <AllCategoriesSection />
      <FavouritesSection />
      <Footer />
    </div>
  );
}
