// src/components/sections/HeroSection.tsx
import backgroundLogo from '../../assets/background_logo.svg'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../ui/Button'
import { useTranslation } from 'react-i18next'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <MainLayout className="bg-background">
      <section className="relative min-h-[calc(100vh-73px)] px-4 sm:px-6 lg:px-10 overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex justify-center">
          <img 
            src={backgroundLogo} 
            alt="" 
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[800px] h-auto object-contain opacity-50 -mt-4 sm:-mt-8 md:-mt-16 lg:-mt-20"
            aria-hidden="true"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto pt-16 sm:pt-24 md:pt-32 text-center">
          {/* Tag */}
          <span className="inline-block px-2 py-1 font-medium text-xs bg-foreground text-white rounded-full">
            {t('hero.tag')}
          </span>

          {/* Title */}
          <div className="font-baloo text-3xl sm:text-5xl md:text-6xl lg:text-8xl space-y-2 sm:space-y-4 my-4 sm:my-6 md:my-8">
            <h1 className="break-words">{t('hero.title')}</h1>
            <p className="break-words">{t('hero.subtitle')}</p>
          </div>

          {/* Description */}
          <p className="font-body text-medium-gray text-base sm:text-lg max-w-[calc(100%-2rem)] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] mb-8 sm:mb-10 md:mb-12 mx-auto">
            {t('hero.description')}
          </p>

          {/* CTA Button */}
          <Button variant="gradient" size="large" className="mx-auto">
            {t('hero.cta')}
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}