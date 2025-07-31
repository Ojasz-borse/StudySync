'use client'

import { TeacherDashboard } from '@/components/teacher/TeacherDashboard'
import { HydrationHandler } from '@/components/HydrationHandler'

export default function TeacherPage() {
  return (
    <HydrationHandler>
      <TeacherDashboard />
    </HydrationHandler>
  )
} 