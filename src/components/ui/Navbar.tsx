// src/components/ui/Navbar.tsx
import { Button } from './Button'
import logo from '../../assets/Logo.svg'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LanguageSelector } from './LanguageSelector'

export function Navbar() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray bg-white/80 backdrop-blur-sm">
      <nav className="w-full px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src={logo} alt="Codhub.dev logo" className="h-8 sm:h-10 w-auto" />
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-dark-gray" />
          ) : (
            <Menu className="h-6 w-6 text-dark-gray" />
          )}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Button variant="primary" size="medium">{t('nav.bookCall')}</Button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray bg-white w-full">
          <ul className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="block font-body text-dark-gray hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 flex justify-between items-center">
              <Button variant="primary" size="medium" className="ml-4">{t('nav.bookCall')}</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}