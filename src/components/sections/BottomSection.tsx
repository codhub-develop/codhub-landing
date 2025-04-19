import footerLogo from '../../assets/footer_logo.svg'
import { Twitter } from 'lucide-react'

export function BottomSection() {
  return (
    <div className="flex justify-between items-start py-12 text-medium-gray">
      {/* Logo */}
      <div>
        <img src={footerLogo} alt="Codhub.dev" className="w-auto" />
        <p className="text-medium-gray mt-4">Codhub.dev © 2025</p>
      </div>

      {/* Links */}
      <div className="flex gap-20">
        {/* Contact */}
        <div>
          <h3 className="text-light-gray font-baloo text-xl mb-4">Contact</h3>
          <ul className="space-y-2 border-b border-gray/50 pb-4">
            <li>
            <a>Contact Us</a>
            </li>
            <ul className='py-4'>Socials :
                <Twitter className="text-light-gray" />
            </ul>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-light-gray font-baloo text-xl mb-4">Legal</h3>
          <div className="space-y-2">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Legal Notice</p>
            <p>Terms and Conditions</p>
          </div>
        </div>

        {/* Language Selector */}
        <div>
          <button className="text-white hover:text-neon-yellow transition-colors">
            En
          </button>
        </div>
      </div>
    </div>
  )
}