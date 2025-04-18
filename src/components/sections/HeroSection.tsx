import backgroundLogo from '../../assets/background_logo.svg'
import { Button } from '../ui/Button'
import GradientBorderButton from '../ui/GradientBorderBtn'

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] px-6">
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
        <GradientBorderButton />

        {/* Title */}
        <h1 className="font-title text-6xl mb-4">
          Lorem ipsum dolor sit amet.
        </h1>

        {/* Subtitle with highlight */}
        <h2 className="font-title text-4xl mb-6">
          Rem ipsa <span className="bg-neon-yellow px-2">consequatur.</span>
        </h2>

        {/* Description */}
        <p className="font-body text-dark-gray mb-12 max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet. Eos illo fuga est explicabo dolorum ut totam sint. Est dignissimos molestiae cum voluptas modi sed ipsa rerum sed ipsa sit modi aut.
        </p>

        {/* CTA Button */}
        <Button variant="gradient">
          Book A Call
        </Button>
      </div>
    </section>
  )
}
