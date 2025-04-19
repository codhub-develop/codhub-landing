
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const languages = [
  { code: 'en', name: 'En', dir: 'ltr' },
  { code: 'fr', name: 'Fr', dir: 'ltr' },
  { code: 'ar', name: 'ع', dir: 'rtl' },
]

export function LanguageSelector() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const changeLanguage = (langCode: string, dir: string) => {
    i18n.changeLanguage(langCode)
    document.dir = dir // Set document direction for RTL support
    document.documentElement.setAttribute('lang', langCode)
    setIsOpen(false)
  }

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 font-body text-dark-gray hover:text-black transition-colors"
      >
        {currentLanguage.name}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-1 bg-white rounded-lg shadow-lg border border-gray/20 min-w-[100px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code, lang.dir)}
              className={`w-full px-4 py-2 text-left hover:bg-light-gray text-dark-gray transition-colors ${
                i18n.language === lang.code ? 'font-semibold' : ''
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}