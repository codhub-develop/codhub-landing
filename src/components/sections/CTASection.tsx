// src/components/sections/CTASection.tsx
import { Button } from "../ui/Button"
import logoImage from '../../assets/side_logo.svg'
import arrowImage from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto max-w-4xl text-center relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/5 via-primary-pink/5 to-primary-purple/5 blur-3xl rounded-full" />
        
        {/* Arrow positioned responsively */}
        <img 
          src={arrowImage} 
          alt=""
          aria-hidden="true"
          className="absolute right-0 -bottom-8 sm:-bottom-12 lg:-bottom-16 w-[80px] sm:w-[120px] lg:w-auto opacity-30 lg:opacity-50 -z-10" 
        />
        
        {/* Logo positioned responsively */}
        <img 
          src={logoImage} 
          alt=""
          aria-hidden="true"
          className="absolute right-0 -bottom-6 sm:-bottom-8 lg:-bottom-10 w-[50px] sm:w-[70px] lg:w-[90px] opacity-80" 
        />
        
        <div className="relative">
          <h2 className="font-baloo text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="font-body text-medium-gray text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <Button variant="gradient" size="large" className="w-full sm:w-auto group">
              {t('cta.button')}
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}