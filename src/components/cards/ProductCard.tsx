// src/components/cards/ProductCard.tsx
import codhubMail from '../../assets/CodhubMail.png'
import { Button } from '../ui/Button'
import { useTranslation } from 'react-i18next'

export function ProductCard() {
  const { t } = useTranslation()

  return (
    <div className='flex flex-row gap-4 pt-10 text-white'>
      <img src={codhubMail} alt="codhubMail" className='border-5 border-white rounded-md w-160' />
      <div className='flex flex-col justify-center'>
        <h4 className='text-3xl font-display mb-2'>{t('products.codhubMail.title')}</h4>
        <p className='text-md text-medium-gray mb-6'>          
          {t('products.codhubMail.description')}
        </p>
        <Button variant='gradient' size='medium' className='self-start'>
          {t('products.codhubMail.learnMore')}
        </Button>
      </div>
    </div>
  )
}