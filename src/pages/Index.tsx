import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ShoesSection from "@/components/ShoesSection";
import DressesSection from "@/components/DressesSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import CategorySection from "@/components/CategorySection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <ShoesSection />
        <DressesSection />
        <AccessoriesSection />
        <CategorySection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
