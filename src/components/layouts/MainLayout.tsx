interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="flex">
        {/* Left border */}
        <div className="w-6 border-r border-gray" />
        
        {/* Main content */}
        <div className="flex-1 mx-auto">
          {children}
        </div>

        {/* Right border */}
        <div className="w-6 border-l border-gray" />
      </div>
    </div>
  )
} 