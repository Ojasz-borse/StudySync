'use client'

import { useEffect, useState } from 'react'

interface HydrationHandlerProps {
  children: React.ReactNode
}

export function HydrationHandler({ children }: HydrationHandlerProps) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Mark as hydrated after the component mounts
    setIsHydrated(true)
  }, [])

  // Show a loading state until hydration is complete
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading StudySync AI...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
} 