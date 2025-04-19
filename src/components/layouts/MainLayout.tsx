interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MainLayout({ 
  children, 
  className
}: MainLayoutProps) {
  return (
    <div className={`${className}`}>
      <div className="flex">
        {/* Left border */}
        <div className="w-8 border-r border-gray/50" />
        
        {/* Main content */}
        <div className="flex-1 mx-auto">
          {children}
        </div>

        {/* Right border */}
        <div className="w-8 border-l border-gray/50" />
      </div>
    </div>
  )
}