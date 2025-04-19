// src/components/cards/ProductCard.tsx
import codhubMail from '../../assets/CodhubMail.png'
import { Button } from '../ui/Button'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Mail, Shield, Zap } from 'lucide-react'

export function ProductCard() {
  const { t } = useTranslation()

  const features = [
    { icon: Mail, label: 'Easy Integration' },
    { icon: Shield, label: 'Secure by Default' },
    { icon: Zap, label: 'Lightning Fast' },
  ]

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-8 sm:pt-12'>
      <div className='relative group overflow-hidden rounded-3xl order-2 lg:order-1'>
        <div className='aspect-[4/3] lg:aspect-[16/10] relative overflow-hidden'>
          <img 
            src={codhubMail} 
            alt="codhubMail" 
            className='absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105' 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 via-primary-pink/10 to-primary-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-6 left-6">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
              Featured Product
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center text-white order-1 lg:order-2'>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-primary-orange to-primary-pink rounded-lg">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <span className="text-medium-gray font-medium">Email Solution</span>
        </div>
        <h3 className='text-3xl sm:text-4xl lg:text-5xl font-display mb-4 lg:mb-6'>{t('products.codhubMail.title')}</h3>
        <p className='text-base sm:text-lg text-medium-gray mb-8 leading-relaxed'>          
          {t('products.codhubMail.description')}
        </p>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <feature.icon className="w-5 h-5 text-primary-pink" />
              <span className="text-sm text-light-gray">{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant='gradient' size='large' className='group'>
            <span className="flex items-center gap-2">
              {t('products.codhubMail.learnMore')}
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Button>
          <Button variant='secondary' size='large' className='border border-light-gray/20 bg-transparent hover:bg-white/5'>
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  )
}