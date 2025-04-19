import { HeroSection } from "../sections/HeroSection"
import { ProductSection } from "../sections/ProductSection"
import { ServiceSection } from "../sections/ServiceSection"
import { HeaderSection } from "../sections/HeaderSection"
import { FooterSection } from "../sections/FooterSection"
export function HomePage() {
  return (
    <div className="bg-background font-text" >
      <HeaderSection />
      <HeroSection />
      <ProductSection />
      <ServiceSection />
      <FooterSection />
    </div>
  )
}