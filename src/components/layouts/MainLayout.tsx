interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
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