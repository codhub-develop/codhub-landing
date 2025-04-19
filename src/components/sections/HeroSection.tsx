import backgroundLogo from '../../assets/background_logo.svg'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <MainLayout className="bg-background">
    <section className="relative min-h-[calc(100vh-73px)] px-10">
      {/* Background Logo */}
      <div className="absolute inset-0 flex justify-center">
        <img 
          src={backgroundLogo} 
          alt="" 
          className="w-[800px] h-auto object-contain opacity-50 -mt-20"
          aria-hidden="true"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 mx-auto pt-32 text-center">
        {/* Tag */}
        <span className="px-2 py-1 font-medium text-xs bg-foreground text-white rounded-full">WE CAN HELP YOU</span>

        {/* Title */}
        <div className="font-baloo text-8xl space-y-4 my-8">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Rem ipsa consequatur.</p>
        </div>

        {/* Description */}
        <p className="font-body text-medium-gray text-lg max-w-[800px] mb-12 mx-auto">
          Lorem ipsum dolor sit amet. Eos illo fuga est explicabo dolorum ut totam sint. Est dignissimos molestiae cum voluptas modi sed ipsa rerum sed ipsa sit modi aut.
        </p>

        {/* CTA Button */}
        <Button variant="gradient" size="large">
          Book A Call
        </Button>
      </div>
    </section>
    </MainLayout>
  )
}
