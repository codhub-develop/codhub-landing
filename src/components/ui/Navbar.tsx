// src/components/ui/Navbar.tsx
import { Button } from './Button'
import logo from '../../assets/Logo.svg'
import { useTranslation } from 'react-i18next'

export function Navbar() {
  const { t } = useTranslation()

  const navItems = [
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray bg-white/80 backdrop-blur-sm">
      <nav className="px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Codhub.dev logo" />
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="font-body text-dark-gray hover:text-black transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Button variant="primary" size="medium">{t('nav.bookCall')}</Button>
        </div>
      </nav>
    </header>
  )
}