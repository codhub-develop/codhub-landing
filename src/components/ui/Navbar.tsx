import { Button } from './Button'
import logo from '../../assets/Logo.svg'

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray bg-white/90 backdrop-blur-sm">
      <nav className="px-6 py-4 flex items-center justify-between">
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
          <button className="font-body text-dark-gray hover:text-black transition-colors">
            En
          </button>
          <Button variant="primary" size="medium">Book A Call</Button>
        </div>
      </nav>
    </header>
  )
} 