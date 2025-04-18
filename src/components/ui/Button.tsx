interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'gradient'
    children: React.ReactNode
  }
  
  export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
    return (
      <button
        className={`
          px-6 py-2 rounded-lg font-baloo text-md font-medium border border-light-gray
          ${variant === 'primary' 
            ? 'bg-black text-white hover:bg-dark-gray' 
            : variant === 'secondary'
            ? 'bg-white text-black hover:bg-light-gray'
            : 'bg-gradient-to-r from-primary-orange via-primary-pink to-primary-purple text-white hover:opacity-90'}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    )
  }