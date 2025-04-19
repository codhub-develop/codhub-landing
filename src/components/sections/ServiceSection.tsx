import { MainLayout } from "../layouts/MainLayout"
import serviceImage from '../../assets/colorfull_logo.svg'
import { ServiceCard } from "../cards/ServiceCard"
import { SquareCode, PencilRuler, Rocket } from "lucide-react"

export function ServiceSection() {
  return (
    <div className="relative bg-off-white">
      <div className="absolute top-0 right-0 z-0 max-w-[400px]">
        <img src={serviceImage} alt="Service" />
      </div>
      <MainLayout className="bg-transparent relative z-10">
        <section className="py-30 px-10">
        <div className="container mx-auto">
        <div className="flex flex-col border-b border-gray/50 pb-12 mb-12">
                        <h2 className="font-baloo text-4xl text-black">Services</h2>
                        </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <ServiceCard
                icon={SquareCode}
                title="Development From Scratch"
                description="Lorem ipsum dolor sit amet. Eos illo fuga est explicabo Lorem ipsum dolor sit amet. Eos illo fuga est explicabo"
              />
              <ServiceCard
                icon={PencilRuler}
                title="Customizing Of Our Products"
                description="Lorem ipsum dolor sit amet. Eos illo fuga est explicabo Lorem ipsum dolor sit amet. Eos illo fuga est explicabo"
              />
              <ServiceCard
                icon={Rocket}
                title="Deployment And Maintnability"
                description="Lorem ipsum dolor sit amet. Eos illo fuga est explicabo Lorem ipsum dolor sit amet. Eos illo fuga est explicabo"
              />
            </div>
        </div>
        </section>
      </MainLayout>
    </div>
  )
}