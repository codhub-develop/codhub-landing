// src/components/sections/ProductSection.tsx
import { ProductCard } from "../cards/ProductCard"
import { MainLayout } from "../layouts/MainLayout"
import { useTranslation } from 'react-i18next'

export function ProductSection() {
  const { t } = useTranslation()

  return (
    <MainLayout className="bg-foreground">
      <section className="bg-foreground py-30 px-10">
        <div className="container mx-auto">
          <div className="flex flex-col border-b border-light-gray/20 pb-12">
            <div className="flex flex-row justify-between items-end">
              <h2 className="font-baloo text-4xl text-white mr-auto">{t('products.title')}</h2>
              <p className="font-body text-medium-gray max-w-[400px] text-right">
                {t('products.description')}
              </p>
            </div>
          </div>
          <ProductCard />
        </div>
      </section>
    </MainLayout>
  )
}