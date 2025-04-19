import { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient?: string
}

export function ServiceCard({ icon: Icon, title, description, gradient = 'from-primary-orange' }: ServiceCardProps) {
  // Extract color from gradient class for dynamic styling
  const colorClass = gradient.replace('from-', '')
  
  // Generate a unique ID for this card's gradient
  const gradientId = `gradient-${title.toLowerCase().replace(/\s+/g, '-')}`
  
  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* SVG gradient definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={`var(--color-${colorClass})`} />
            <stop offset="100%" stopColor={`var(--color-${colorClass})`} stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Card content */}
      <div className="relative">
        {/* Icon container with hover effect */}
        <div className="relative inline-flex mb-6">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300`} />
          <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${gradient} to-transparent/5`}>
            <Icon className="w-8 h-8" color={`url(#${gradientId})`} />
          </div>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-baloo font-semibold mb-4 text-black">
          {title}
        </h3>
        
        <p className="text-medium-gray text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>
        
        <button className="flex items-center gap-2 text-sm font-medium text-medium-gray hover:text-black transition-colors group/button">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}