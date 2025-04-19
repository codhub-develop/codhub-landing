// src/components/sections/ProductSection.tsx
import { ProductCard } from "../cards/ProductCard"
import { MainLayout } from "../layouts/MainLayout"
import { useTranslation } from 'react-i18next'

export function ProductSection() {
  const { t } = useTranslation()

  return (
    <MainLayout className="bg-foreground">
      <section id="products" className="bg-foreground py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-baloo text-4xl sm:text-5xl lg:text-6xl text-white mb-6">{t('products.title')}</h2>
            <p className="font-body text-medium-gray text-lg sm:text-xl">
              {t('products.description')}
            </p>
          </div>
          <ProductCard />
        </div>
      </section>
    </MainLayout>
  )
}