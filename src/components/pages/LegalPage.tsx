// src/components/pages/LegalPage.tsx

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MainLayout } from '../layouts/MainLayout'
import { Navbar } from '../ui/Navbar'
import { FooterSection } from '../sections/FooterSection'

interface LegalSection {
  id: string
  titleKey: string
}

const legalSections: LegalSection[] = [
  { id: 'terms', titleKey: 'legal.navigation.terms' },
  { id: 'privacy', titleKey: 'legal.navigation.privacy' },
  { id: 'legal-notice', titleKey: 'legal.navigation.legalNotice' },
  { id: 'terms-conditions', titleKey: 'legal.navigation.termsConditions' },
]

export function LegalPage() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('terms')

  return (
    <div className="bg-background font-text overflow-x-hidden">
      <Navbar />
      <MainLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <nav className="sticky top-24">
                <ul className="space-y-1">
                  {legalSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-primary-orange via-primary-pink to-primary-purple text-white'
                            : 'text-dark-gray hover:bg-light-gray/80'
                        }`}
                      >
                        {t(section.titleKey)}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <div className="prose prose-slate max-w-none prose-headings:font-baloo prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-dark-gray prose-li:text-dark-gray prose-a:text-primary-orange hover:prose-a:text-primary-pink">
                {activeSection === 'terms' && <TermsContent />}
                {activeSection === 'privacy' && <PrivacyContent />}
                {activeSection === 'legal-notice' && <LegalNoticeContent />}
                {activeSection === 'terms-conditions' && <TermsConditionsContent />}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
      <FooterSection />
    </div>
  )
}

function TermsContent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('legal.terms.title')}</h1>
      
      <section>
        <h2>{t('legal.terms.introduction.title')}</h2>
        <p>{t('legal.terms.introduction.content')}</p>
      </section>

      <section>
        <h2>{t('legal.terms.services.title')}</h2>
        <p>{t('legal.terms.services.content')}</p>
        <ul>
          <li>{t('legal.terms.services.development')}</li>
          <li>{t('legal.terms.services.customization')}</li>
          <li>{t('legal.terms.services.maintenance')}</li>
        </ul>
      </section>

      <section>
        <h2>{t('legal.terms.intellectualProperty.title')}</h2>
        <p>{t('legal.terms.intellectualProperty.content')}</p>
      </section>

      <section>
        <h2>{t('legal.terms.payment.title')}</h2>
        <p>{t('legal.terms.payment.content')}</p>
      </section>

      <section>
        <h2>{t('legal.terms.liability.title')}</h2>
        <p>{t('legal.terms.liability.content')}</p>
      </section>

      <section>
        <h2>{t('legal.terms.termination.title')}</h2>
        <p>{t('legal.terms.termination.content')}</p>
      </section>

      <section>
        <h2>{t('legal.terms.governingLaw.title')}</h2>
        <p>{t('legal.terms.governingLaw.content')}</p>
      </section>
    </div>
  )
}

function PrivacyContent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('legal.privacy.title')}</h1>
      
      <section>
        <h2>{t('legal.privacy.dataController.title')}</h2>
        <p>{t('legal.privacy.dataController.content')}</p>
      </section>

      <section>
        <h2>{t('legal.privacy.dataCollection.title')}</h2>
        <p>{t('legal.privacy.dataCollection.content')}</p>
        <ul>
          <li>{t('legal.privacy.dataCollection.personal')}</li>
          <li>{t('legal.privacy.dataCollection.usage')}</li>
          <li>{t('legal.privacy.dataCollection.technical')}</li>
        </ul>
      </section>

      <section>
        <h2>{t('legal.privacy.purposes.title')}</h2>
        <p>{t('legal.privacy.purposes.content')}</p>
      </section>

      <section>
        <h2>{t('legal.privacy.rights.title')}</h2>
        <p>{t('legal.privacy.rights.content')}</p>
        <ul>
          <li>{t('legal.privacy.rights.access')}</li>
          <li>{t('legal.privacy.rights.rectification')}</li>
          <li>{t('legal.privacy.rights.erasure')}</li>
          <li>{t('legal.privacy.rights.restriction')}</li>
          <li>{t('legal.privacy.rights.portability')}</li>
          <li>{t('legal.privacy.rights.objection')}</li>
        </ul>
      </section>

      <section>
        <h2>{t('legal.privacy.security.title')}</h2>
        <p>{t('legal.privacy.security.content')}</p>
      </section>

      <section>
        <h2>{t('legal.privacy.cookies.title')}</h2>
        <p>{t('legal.privacy.cookies.content')}</p>
      </section>
    </div>
  )
}

function LegalNoticeContent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('legal.legalNotice.title')}</h1>
      
      <section>
        <h2>{t('legal.legalNotice.publisher.title')}</h2>
        <p>{t('legal.legalNotice.publisher.name')}</p>
        <p>{t('legal.legalNotice.publisher.address')}</p>
        <p>{t('legal.legalNotice.publisher.siret')}</p>
        <p>{t('legal.legalNotice.publisher.tva')}</p>
        <p>{t('legal.legalNotice.publisher.capital')}</p>
        <p>{t('legal.legalNotice.publisher.email')}</p>
      </section>

      <section>
        <h2>{t('legal.legalNotice.director.title')}</h2>
        <p>{t('legal.legalNotice.director.name')}</p>
      </section>

      <section>
        <h2>{t('legal.legalNotice.hosting.title')}</h2>
        <p>{t('legal.legalNotice.hosting.content')}</p>
      </section>

      <section>
        <h2>{t('legal.legalNotice.credits.title')}</h2>
        <p>{t('legal.legalNotice.credits.content')}</p>
      </section>
    </div>
  )
}

function TermsConditionsContent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('legal.termsConditions.title')}</h1>
      
      <section>
        <h2>{t('legal.termsConditions.object.title')}</h2>
        <p>{t('legal.termsConditions.object.content')}</p>
      </section>

      <section>
        <h2>{t('legal.termsConditions.conditions.title')}</h2>
        <p>{t('legal.termsConditions.conditions.content')}</p>
      </section>

      <section>
        <h2>{t('legal.termsConditions.prices.title')}</h2>
        <p>{t('legal.termsConditions.prices.content')}</p>
      </section>

      <section>
        <h2>{t('legal.termsConditions.warranty.title')}</h2>
        <p>{t('legal.termsConditions.warranty.content')}</p>
      </section>

      <section>
        <h2>{t('legal.termsConditions.disputes.title')}</h2>
        <p>{t('legal.termsConditions.disputes.content')}</p>
      </section>
    </div>
  )
}