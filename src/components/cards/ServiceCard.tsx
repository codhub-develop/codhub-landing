import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  // Generate a unique ID for this card's gradient
  const gradientId = `gradient-${title.toLowerCase().replace(/\s+/g, '-')}`
  
  return (
    <div className="bg-background rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center">
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary-orange)" />
              <stop offset="50%" stopColor="var(--color-primary-pink)" />
              <stop offset="100%" stopColor="var(--color-primary-purple)" />
            </linearGradient>
          </defs>
        </svg>
        <Icon className="w-14 h-14 mt-6" color={`url(#${gradientId})`} />
      <h3 className="text-2xl font-baloo font-semibold mb-4 mt-10 text-center">{title}</h3>
      <p className="text-medium-gray text-md leading-relaxed text-center">
        {description}
      </p>
    </div>
  )
}