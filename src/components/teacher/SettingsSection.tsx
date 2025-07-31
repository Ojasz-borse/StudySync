'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Palette,
  Save,
  Eye,
  EyeOff,
  Download,
  Upload
} from 'lucide-react'

export function SettingsSection() {
  const [activeTab, setActiveTab] = useState('profile')
  const [showPassword, setShowPassword] = useState(false)
  
  const [profileSettings, setProfileSettings] = useState({
    firstName: 'Dr. Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@school.edu',
    phone: '+1 (555) 123-4567',
    department: 'Mathematics',
    title: 'Senior Teacher'
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    studentUpdates: true,
    materialUploads: false,
    weeklyReports: true,
    examReminders: true
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: '30',
    passwordExpiry: '90'
  })

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    fontSize: 'medium',
    compactMode: false
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette }
  ]

  const handleSaveProfile = () => {
    // In a real app, this would save to the backend
    console.log('Saving profile:', profileSettings)
  }

  const handleExportData = () => {
    // In a real app, this would export user data
    console.log('Exporting data...')
  }

  const handleImportData = () => {
    // In a real app, this would import user data
    console.log('Importing data...')
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profileSettings.firstName}
                  onChange={(e) => setProfileSettings(prev => ({ ...prev, firstName: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profileSettings.lastName}
                  onChange={(e) => setProfileSettings(prev => ({ ...prev, lastName: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileSettings.email}
                  onChange={(e) => setProfileSettings(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={profileSettings.phone}
                  onChange={(e) => setProfileSettings(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Select 
                  value={profileSettings.department} 
                  onValueChange={(value) => setProfileSettings(prev => ({ ...prev, department: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                    <SelectItem value="Physics">Physics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="title">Job Title</Label>
                <Input
                  id="title"
                  value={profileSettings.title}
                  onChange={(e) => setProfileSettings(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleSaveProfile}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailNotifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                                 <Switch
                   id="emailNotifications"
                   checked={notificationSettings.emailNotifications}
                   onCheckedChange={(checked: boolean) => setNotificationSettings(prev => ({ ...prev, emailNotifications: checked }))}
                 />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="pushNotifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                </div>
                                 <Switch
                   id="pushNotifications"
                   checked={notificationSettings.pushNotifications}
                   onCheckedChange={(checked: boolean) => setNotificationSettings(prev => ({ ...prev, pushNotifications: checked }))}
                 />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="studentUpdates">Student Activity Updates</Label>
                  <p className="text-sm text-muted-foreground">Get notified when students access materials</p>
                </div>
                                 <Switch
                   id="studentUpdates"
                   checked={notificationSettings.studentUpdates}
                   onCheckedChange={(checked: boolean) => setNotificationSettings(prev => ({ ...prev, studentUpdates: checked }))}
                 />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="materialUploads">Material Upload Confirmations</Label>
                  <p className="text-sm text-muted-foreground">Confirm when materials are successfully uploaded</p>
                </div>
                                 <Switch
                   id="materialUploads"
                   checked={notificationSettings.materialUploads}
                   onCheckedChange={(checked: boolean) => setNotificationSettings(prev => ({ ...prev, materialUploads: checked }))}
                 />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weeklyReports">Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">Receive weekly activity summaries</p>
                </div>
                                 <Switch
                   id="weeklyReports"
                   checked={notificationSettings.weeklyReports}
                   onCheckedChange={(checked: boolean) => setNotificationSettings(prev => ({ ...prev, weeklyReports: checked }))}
                 />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="examReminders">Exam Reminders</Label>
                  <p className="text-sm text-muted-foreground">Get reminded about upcoming exams</p>
                </div>
                                 <Switch
                   id="examReminders"
                   checked={notificationSettings.examReminders}
                   onCheckedChange={(checked: boolean) => setNotificationSettings(prev => ({ ...prev, examReminders: checked }))}
                 />
              </div>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                                 <Switch
                   id="twoFactorAuth"
                   checked={securitySettings.twoFactorAuth}
                   onCheckedChange={(checked: boolean) => setSecuritySettings(prev => ({ ...prev, twoFactorAuth: checked }))}
                 />
              </div>
              <div>
                <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                <Select 
                  value={securitySettings.sessionTimeout} 
                  onValueChange={(value) => setSecuritySettings(prev => ({ ...prev, sessionTimeout: value }))}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                <Select 
                  value={securitySettings.passwordExpiry} 
                  onValueChange={(value) => setSecuritySettings(prev => ({ ...prev, passwordExpiry: value }))}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="pt-4 border-t">
              <h3 className="text-lg font-medium mb-4">Data Management</h3>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={handleExportData}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                <Button variant="outline" onClick={handleImportData}>
                  <Upload className="w-4 h-4 mr-2" />
                  Import Data
                </Button>
              </div>
            </div>
          </div>
        )

      case 'appearance':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="theme">Theme</Label>
                <Select 
                  value={appearanceSettings.theme} 
                  onValueChange={(value) => setAppearanceSettings(prev => ({ ...prev, theme: value }))}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="auto">Auto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="fontSize">Font Size</Label>
                <Select 
                  value={appearanceSettings.fontSize} 
                  onValueChange={(value) => setAppearanceSettings(prev => ({ ...prev, fontSize: value }))}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="compactMode">Compact Mode</Label>
                  <p className="text-sm text-muted-foreground">Reduce spacing for more content on screen</p>
                </div>
                                 <Switch
                   id="compactMode"
                   checked={appearanceSettings.compactMode}
                   onCheckedChange={(checked: boolean) => setAppearanceSettings(prev => ({ ...prev, compactMode: checked }))}
                 />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and system settings</p>
      </div>

      {/* Settings Tabs */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Account Settings</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <Button
                  key={tab.id}
                  variant={isActive ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </Button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="pt-4">
            {renderTabContent()}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 