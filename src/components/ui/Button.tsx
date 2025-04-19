interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient'
  size?: 'small' | 'medium' | 'large'
  shadow?: 'primary' | 'secondary' | 'gradient'
  children: React.ReactNode
}

const VARIANTS = {
  primary: 'bg-black text-white hover:bg-dark-gray',
  secondary: 'bg-white text-black hover:bg-light-gray',
  gradient: 'bg-gradient-to-r from-primary-orange via-primary-pink to-primary-purple text-white hover:opacity-90 transition-opacity duration-300'
}

const SIZES = {
  small: 'px-4 py-1 text-sm',
  medium: 'px-6 py-2 text-md',
  large: 'px-8 py-3 text-xl'
}

const SHADOWS = {
  primary: 'shadow-primary-orange',
  secondary: 'shadow-primary-pink',
  gradient: 'shadow-primary-purple'
}

export function Button({ 
  variant = 'primary', 
  size = 'medium',
  shadow = 'primary',
  children, 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`
        rounded-lg font-baloo font-medium transition-all duration-300
        ${VARIANTS[variant]}
        ${SIZES[size]}
        ${SHADOWS[shadow]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}