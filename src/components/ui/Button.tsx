interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'gradient'
    size?: 'small' | 'medium' | 'large'
    children: React.ReactNode
  }
  
  const VARIANTS = {
    primary: 'bg-black text-white hover:bg-dark-gray',
    secondary: 'bg-white text-black hover:bg-light-gray',
    gradient: 'bg-gradient-to-r from-primary-orange via-primary-pink to-primary-purple text-white hover:opacity-90'
  }
  
  const SIZES = {
    small: 'px-4 py-1 text-sm',
    medium: 'px-6 py-2 text-md',
    large: 'px-8 py-3 text-xl'
  }
  
  export function Button({ 
    variant = 'primary', 
    size = 'medium', 
    children, 
    className, 
    ...props 
  }: ButtonProps) {
    return (
      <button
        className={`
          rounded-lg font-baloo font-medium border border-light-gray
          ${VARIANTS[variant]}
          ${SIZES[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    )
  }