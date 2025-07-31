'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Image, 
  Bell, 
  Users, 
  TrendingUp, 
  Clock,
  Plus,
  Eye,
  Upload
} from 'lucide-react'

export function DashboardOverview() {
  const stats = [
    {
      title: 'Total Materials',
      value: '124',
      change: '+12%',
      icon: FileText,
      description: 'Educational resources'
    },
    {
      title: 'Images Uploaded',
      value: '89',
      change: '+8%',
      icon: Image,
      description: 'Visual content'
    },
    {
      title: 'Active Notices',
      value: '23',
      change: '+5%',
      icon: Bell,
      description: 'Current announcements'
    },
    {
      title: 'Students',
      value: '156',
      change: '+3%',
      icon: Users,
      description: 'Enrolled students'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'upload',
      title: 'Mathematics Chapter 5 PDF',
      description: 'Uploaded new study material',
      time: '2 hours ago',
      icon: FileText
    },
    {
      id: 2,
      type: 'notice',
      title: 'Exam Schedule Update',
      description: 'Published new notice',
      time: '4 hours ago',
      icon: Bell
    },
    {
      id: 3,
      type: 'image',
      title: 'Science Lab Diagram',
      description: 'Uploaded experiment image',
      time: '6 hours ago',
      icon: Image
    },
    {
      id: 4,
      type: 'student',
      title: 'New Student Registration',
      description: 'Sarah Johnson joined class',
      time: '1 day ago',
      icon: Users
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Quick Upload
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <p className="text-xs text-green-600">{stat.change}</p>
                  <p className="text-xs text-muted-foreground">from last month</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>
                Latest updates and activities in your classroom
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon
                  return (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-primary">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Upload className="w-4 h-4 mr-2" />
                Upload PDF
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Image className="w-4 h-4 mr-2" />
                Upload Image
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Create Notice
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Add Student
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 