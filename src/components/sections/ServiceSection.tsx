// src/components/sections/ServiceSection.tsx
import { MainLayout } from "../layouts/MainLayout"
import serviceImage from '../../assets/colorfull_logo.svg'
import { ServiceCard } from "../cards/ServiceCard"
import { SquareCode, PencilRuler, Rocket } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function ServiceSection() {
  const { t } = useTranslation()

  const services = [
    {
      icon: SquareCode,
      title: t('services.development.title'),
      description: t('services.development.description'),
      gradient: 'from-primary-orange'
    },
    {
      icon: PencilRuler,
      title: t('services.customizing.title'),
      description: t('services.customizing.description'),
      gradient: 'from-primary-pink'
    },
    {
      icon: Rocket,
      title: t('services.deployment.title'),
      description: t('services.deployment.description'),
      gradient: 'from-primary-purple'
    }
  ]

  return (
    <div className="relative bg-off-white overflow-hidden">
      {/* Decorative background image */}
      <div className="absolute -top-10 -right-10 sm:top-0 sm:right-0 lg:top-10 lg:right-10 z-0 opacity-50 lg:opacity-70">
        <img 
          src={serviceImage} 
          alt="" 
          className="w-[200px] sm:w-[250px] lg:w-[400px] h-auto" 
          aria-hidden="true"
        />
      </div>
      
      <MainLayout className="bg-transparent relative z-10">
        <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10">
          <div className="container mx-auto">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <h2 className="font-baloo text-3xl sm:text-4xl lg:text-5xl text-black mb-4">{t('services.title')}</h2>
              <p className="text-medium-gray text-lg">
                We provide comprehensive solutions for your digital needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  gradient={service.gradient}
                />
              ))}
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  )
}