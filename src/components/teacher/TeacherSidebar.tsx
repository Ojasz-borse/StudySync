'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Upload, 
  BookOpen, 
  Bell, 
  Users, 
  Settings,
  LogOut,
  Brain
} from 'lucide-react'

type DashboardSection = 'overview' | 'upload' | 'materials' | 'notices' | 'students' | 'settings'

interface TeacherSidebarProps {
  activeSection: DashboardSection
  onSectionChange: (section: DashboardSection) => void
}

const navigationItems = [
  {
    id: 'overview' as DashboardSection,
    label: 'Dashboard',
    icon: LayoutDashboard,
    description: 'Overview and analytics'
  },
  {
    id: 'upload' as DashboardSection,
    label: 'Upload Content',
    icon: Upload,
    description: 'Upload PDFs, images, notices'
  },
  {
    id: 'materials' as DashboardSection,
    label: 'Materials',
    icon: BookOpen,
    description: 'Manage educational content'
  },
  {
    id: 'notices' as DashboardSection,
    label: 'Notices',
    icon: Bell,
    description: 'Announcements and alerts'
  },
  {
    id: 'students' as DashboardSection,
    label: 'Students',
    icon: Users,
    description: 'Student management'
  },
  {
    id: 'settings' as DashboardSection,
    label: 'Settings',
    icon: Settings,
    description: 'Account and preferences'
  }
]

export function TeacherSidebar({ activeSection, onSectionChange }: TeacherSidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-primary">StudySync AI</h1>
            <p className="text-sm text-muted-foreground">Teacher Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-auto p-3",
                isActive && "bg-primary text-primary-foreground"
              )}
              onClick={() => onSectionChange(item.id)}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">{item.label}</div>
                  <div className={cn(
                    "text-xs",
                    isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}>
                    {item.description}
                  </div>
                </div>
              </div>
            </Button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )
} 