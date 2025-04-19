import { MainLayout } from "../layouts/MainLayout"
import { BottomSection } from "./BottomSection"
import { CTASection } from "./CTASection"

export function FooterSection() {
  return (
    <div className="bg-foreground overflow-hidden">
      <MainLayout>
        <CTASection />
        <BottomSection />
      </MainLayout>
    </div>
  )
}