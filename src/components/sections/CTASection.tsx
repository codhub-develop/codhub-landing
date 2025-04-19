import { Button } from "../ui/Button"
import logoImage from '../../assets/side_logo.svg'
import arrowImage from '../../assets/arrow.svg'

export function CTASection() {
  return (
    <div className="mx-auto text-center border-b border-gray/50 pt-20 pb-32 mb-12 relative">
      {/* Arrow positioned to match the second design */}
      <img 
        src={arrowImage} 
        alt="Arrow" 
        className="absolute right-0 bottom-16" 
      />
      
      {/* Logo positioned to match the second design */}
      <img 
        src={logoImage} 
        alt="Logo" 
        className="absolute right-0 bottom-20" 
      />
      
      <h1 className="font-baloo text-6xl text-white mb-4">Ready to get started?</h1>
      <p className="font-body text-medium-gray mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <Button variant="gradient" size="large">Get Started</Button>
    </div>
  )
}