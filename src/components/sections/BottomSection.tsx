// src/components/sections/BottomSection.tsx
import footerLogo from '../../assets/footer_logo.svg'
import { Twitter } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function BottomSection() {
  const { t } = useTranslation()

  return (
    <div className="flex justify-between items-start py-12 text-medium-gray">
      {/* Logo */}
      <div>
        <img src={footerLogo} alt="Codhub.dev" className="w-auto" />
        <p className="text-medium-gray mt-4">{t('footer.copyright')}</p>
      </div>

      {/* Links */}
      <div className="flex gap-20">
        {/* Contact */}
        <div>
          <h3 className="text-light-gray font-baloo text-xl mb-4">{t('footer.contact.title')}</h3>
          <ul className="space-y-2 border-b border-gray/50 pb-4">
            <li>
              <a href="#contact">{t('footer.contact.contactUs')}</a>
            </li>
            <ul className='py-4'>
              {t('footer.contact.socials')} :
              <li className="mt-2">
                <Twitter className="text-light-gray" />
              </li>
            </ul>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-light-gray font-baloo text-xl mb-4">{t('footer.legal.title')}</h3>
          <div className="space-y-2">
            <p>{t('footer.legal.terms')}</p>
            <p>{t('footer.legal.privacy')}</p>
            <p>{t('footer.legal.notice')}</p>
            <p>{t('footer.legal.conditions')}</p>
          </div>
        </div>

      </div>
    </div>
  )
}