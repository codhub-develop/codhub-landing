// src/components/sections/CTASection.tsx
import { Button } from "../ui/Button"
import logoImage from '../../assets/side_logo.svg'
import arrowImage from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

export function CTASection() {
  const { t } = useTranslation()

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
      
      <h1 className="font-baloo text-6xl text-white mb-4">{t('cta.title')}</h1>
      <p className="font-body text-medium-gray mb-8">
        {t('cta.description')}
      </p>
      <Button variant="gradient" size="large">{t('cta.button')}</Button>
    </div>
  )
}