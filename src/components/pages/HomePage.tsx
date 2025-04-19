import { HeroSection } from "../sections/HeroSection"
import { Navbar } from "../ui/Navbar"
import { ProductSection } from "../sections/ProductSection"
import { MainLayout } from "../layouts/MainLayout"

export function HomePage() {
  return (
    <div>
      <MainLayout className="bg-white">
        <Navbar />
        <HeroSection />
      </MainLayout>
      <MainLayout className="bg-black">
        <ProductSection />
      </MainLayout>
    </div>
  )
}