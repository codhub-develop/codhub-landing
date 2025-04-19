// src/components/sections/BottomSection.tsx
import footerLogo from '../../assets/footer_logo.svg'
import { Twitter, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function BottomSection() {
  const { t } = useTranslation()

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const legalLinks = [
    { label: t('footer.legal.terms'), href: '#' },
    { label: t('footer.legal.privacy'), href: '#' },
    { label: t('footer.legal.notice'), href: '#' },
    { label: t('footer.legal.conditions'), href: '#' },
  ]

  return (
    <footer className="border-t border-gray/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-12 lg:py-20">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <img src={footerLogo} alt="Codhub.dev" className="w-36 sm:w-44 h-auto mb-6" />
            <p className="text-medium-gray text-sm max-w-xs">
              Building innovative solutions for modern businesses. Transform your ideas into reality with our cutting-edge development services.
            </p>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-4">
            <h3 className="text-light-gray font-baloo text-xl mb-6">{t('footer.contact.title')}</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="mailto:contact@codhub.dev" className="flex items-center gap-3 text-medium-gray hover:text-light-gray transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contact@codhub.dev</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-medium-gray hover:text-light-gray transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-medium-gray">
                  <MapPin className="w-5 h-5" />
                  <span>Remote First Company</span>
                </span>
              </li>
            </ul>
            <div>
              <p className="text-medium-gray mb-4">{t('footer.contact.socials')} :</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 rounded-full border border-gray/20 flex items-center justify-center text-light-gray hover:text-white hover:border-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-4">
            <h3 className="text-light-gray font-baloo text-xl mb-6">{t('footer.legal.title')}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-medium-gray hover:text-light-gray transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-pink group-hover:bg-white transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-medium-gray text-sm">
            <p>{t('footer.copyright')} © {new Date().getFullYear()}</p>
            <p>Crafted with ❤️ by the Codhub team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}