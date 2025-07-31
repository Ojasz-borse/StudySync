'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Bell, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Send, 
  Calendar,
  Tag,
  Users,
  MessageSquare
} from 'lucide-react'

interface Notice {
  id: string
  title: string
  content: string
  category: string
  status: 'draft' | 'published' | 'archived'
  publishDate: string
  views: number
  priority: 'low' | 'medium' | 'high'
}

const mockNotices: Notice[] = [
  {
    id: '1',
    title: 'Exam Schedule Update - January 2024',
    content: 'Dear students, please note that the Mathematics exam has been rescheduled to January 25th, 2024. All other exam dates remain unchanged.',
    category: 'exam',
    status: 'published',
    publishDate: '2024-01-15',
    views: 89,
    priority: 'high'
  },
  {
    id: '2',
    title: 'Science Lab Safety Guidelines',
    content: 'Important safety guidelines for the upcoming chemistry lab sessions. All students must review these guidelines before entering the laboratory.',
    category: 'general',
    status: 'published',
    publishDate: '2024-01-14',
    views: 67,
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Parent-Teacher Meeting Reminder',
    content: 'Parent-teacher meetings will be held on January 20th, 2024. Please ensure all parents are informed about the schedule.',
    category: 'event',
    status: 'draft',
    publishDate: '',
    views: 0,
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Library Hours Extended',
    content: 'The school library will now be open until 6:00 PM on weekdays to accommodate students who need additional study time.',
    category: 'general',
    status: 'published',
    publishDate: '2024-01-13',
    views: 45,
    priority: 'low'
  }
]

export function NoticesSection() {
  const [notices, setNotices] = useState<Notice[]>(mockNotices)
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [isCreating, setIsCreating] = useState(false)
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null)
  
  const [newNotice, setNewNotice] = useState({
    title: '',
    content: '',
    category: '',
    priority: 'medium' as 'low' | 'medium' | 'high'
  })

  const categories = ['general', 'exam', 'assignment', 'event', 'reminder']
  const priorities = ['low', 'medium', 'high']
  const statuses = ['all', 'draft', 'published', 'archived']

  const filteredNotices = notices.filter(notice => 
    selectedStatus === 'all' || notice.status === selectedStatus
  )

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'general': 'bg-blue-100 text-blue-800',
      'exam': 'bg-red-100 text-red-800',
      'assignment': 'bg-green-100 text-green-800',
      'event': 'bg-purple-100 text-purple-800',
      'reminder': 'bg-orange-100 text-orange-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const getPriorityColor = (priority: string) => {
    const colors: { [key: string]: string } = {
      'low': 'bg-green-100 text-green-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'high': 'bg-red-100 text-red-800'
    }
    return colors[priority] || 'bg-gray-100 text-gray-800'
  }

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'draft': 'bg-gray-100 text-gray-800',
      'published': 'bg-green-100 text-green-800',
      'archived': 'bg-orange-100 text-orange-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const handleCreateNotice = () => {
    if (newNotice.title && newNotice.content && newNotice.category) {
      const notice: Notice = {
        id: Math.random().toString(36).substr(2, 9),
        ...newNotice,
        status: 'draft',
        publishDate: '',
        views: 0
      }
      setNotices(prev => [notice, ...prev])
      setNewNotice({ title: '', content: '', category: '', priority: 'medium' })
      setIsCreating(false)
    }
  }

  const handlePublishNotice = (id: string) => {
    setNotices(prev => prev.map(notice => 
      notice.id === id 
        ? { ...notice, status: 'published', publishDate: new Date().toISOString().split('T')[0] }
        : notice
    ))
  }

  const handleDeleteNotice = (id: string) => {
    setNotices(prev => prev.filter(notice => notice.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Notices & Announcements</h1>
          <p className="text-muted-foreground">Create and manage announcements for your students</p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Create Notice
        </Button>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5" />
            <span>Filter Notices</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map(status => (
                  <SelectItem key={status} value={status}>
                    {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Create Notice Form */}
      {isCreating && (
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Create New Notice</CardTitle>
            <CardDescription>Fill in the details for your new announcement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Notice Title</Label>
              <Input
                id="title"
                placeholder="Enter notice title..."
                value={newNotice.title}
                onChange={(e) => setNewNotice(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={newNotice.category} onValueChange={(value) => setNewNotice(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select value={newNotice.priority} onValueChange={(value: 'low' | 'medium' | 'high') => setNewNotice(prev => ({ ...prev, priority: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priorities.map(priority => (
                      <SelectItem key={priority} value={priority}>
                        {priority.charAt(0).toUpperCase() + priority.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="content">Notice Content</Label>
              <Textarea
                id="content"
                placeholder="Enter notice content..."
                rows={4}
                value={newNotice.content}
                onChange={(e) => setNewNotice(prev => ({ ...prev, content: e.target.value }))}
              />
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleCreateNotice}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Save as Draft
              </Button>
              <Button variant="outline" onClick={() => setIsCreating(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <Card key={notice.id} className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <CardTitle className="text-lg">{notice.title}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notice.priority)}`}>
                      {notice.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(notice.status)}`}>
                      {notice.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(notice.category)}`}>
                      {notice.category}
                    </span>
                    {notice.publishDate && (
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(notice.publishDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Eye className="w-3 h-3" />
                      <span>{notice.views} views</span>
                    </div>
                  </div>
                  <CardDescription className="line-clamp-3">
                    {notice.content}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-1">
                  {notice.status === 'draft' && (
                    <Button size="sm" onClick={() => handlePublishNotice(notice.id)}>
                      <Send className="w-4 h-4 mr-1" />
                      Publish
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeleteNotice(notice.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotices.length === 0 && (
        <Card className="border-0 shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Bell className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-primary mb-2">No notices found</h3>
            <p className="text-muted-foreground text-center mb-4">
              {selectedStatus !== 'all'
                ? 'No notices with the selected status'
                : 'Start by creating your first notice'
              }
            </p>
            <Button onClick={() => setIsCreating(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Notice
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 