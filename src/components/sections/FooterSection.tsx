import { MainLayout } from "../layouts/MainLayout"
import { BottomSection } from "./BottomSection"
import { CTASection } from "./CTASection"

export function FooterSection() {
  return (
    <MainLayout className="bg-foreground">
      <section className="bg-foreground py-30 px-10">
          <CTASection />
          <BottomSection />
      </section>
    </MainLayout>
  )
}