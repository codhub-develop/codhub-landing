interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MainLayout({ 
  children, 
  className
}: MainLayoutProps) {
  return (
    <div className={`w-full overflow-x-hidden ${className || ''}`}>
      <div className="flex">
        {/* Left border */}
        <div className="hidden md:block w-4 lg:w-8 border-r border-gray/50 flex-shrink-0" />
        
        {/* Main content */}
        <div className="flex-1 w-full min-w-0">
          {children}
        </div>

        {/* Right border */}
        <div className="hidden md:block w-4 lg:w-8 border-l border-gray/50 flex-shrink-0" />
      </div>
    </div>
  )
}