'use client'

import { useState } from 'react'
import { TeacherSidebar } from './TeacherSidebar'
import { DashboardOverview } from './DashboardOverview'
import { UploadSection } from './UploadSection'
import { MaterialsSection } from './MaterialsSection'
import { NoticesSection } from './NoticesSection'
import { StudentsSection } from './StudentsSection'
import { SettingsSection } from './SettingsSection'

type DashboardSection = 'overview' | 'upload' | 'materials' | 'notices' | 'students' | 'settings'

export function TeacherDashboard() {
  const [activeSection, setActiveSection] = useState<DashboardSection>('overview')

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview />
      case 'upload':
        return <UploadSection />
      case 'materials':
        return <MaterialsSection />
      case 'notices':
        return <NoticesSection />
      case 'students':
        return <StudentsSection />
      case 'settings':
        return <SettingsSection />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <TeacherSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <main className="flex-1 p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  )
} 