'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  FileText, 
  ImageIcon, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Trash2,
  Calendar,
  Tag
} from 'lucide-react'

interface Material {
  id: string
  name: string
  type: 'pdf' | 'image'
  size: string
  category: string
  uploadDate: string
  downloads: number
  views: number
}

const mockMaterials: Material[] = [
  {
    id: '1',
    name: 'Mathematics Chapter 5 - Algebra',
    type: 'pdf',
    size: '2.4 MB',
    category: 'Mathematics',
    uploadDate: '2024-01-15',
    downloads: 45,
    views: 120
  },
  {
    id: '2',
    name: 'Science Lab Diagram - Photosynthesis',
    type: 'image',
    size: '1.2 MB',
    category: 'Science',
    uploadDate: '2024-01-14',
    downloads: 23,
    views: 67
  },
  {
    id: '3',
    name: 'English Literature Notes',
    type: 'pdf',
    size: '3.1 MB',
    category: 'English',
    uploadDate: '2024-01-13',
    downloads: 38,
    views: 89
  },
  {
    id: '4',
    name: 'History Timeline Chart',
    type: 'image',
    size: '856 KB',
    category: 'History',
    uploadDate: '2024-01-12',
    downloads: 29,
    views: 76
  },
  {
    id: '5',
    name: 'Physics Formula Sheet',
    type: 'pdf',
    size: '1.8 MB',
    category: 'Physics',
    uploadDate: '2024-01-11',
    downloads: 52,
    views: 134
  }
]

export function MaterialsSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [materials] = useState<Material[]>(mockMaterials)

  const categories = ['all', 'Mathematics', 'Science', 'English', 'History', 'Physics']
  const types = ['all', 'pdf', 'image']

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory
    const matchesType = selectedType === 'all' || material.type === selectedType
    
    return matchesSearch && matchesCategory && matchesType
  })

  const getFileIcon = (type: string) => {
    return type === 'pdf' ? (
      <FileText className="w-6 h-6 text-red-500" />
    ) : (
      <ImageIcon className="w-6 h-6 text-blue-500" />
    )
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Mathematics': 'bg-blue-100 text-blue-800',
      'Science': 'bg-green-100 text-green-800',
      'English': 'bg-purple-100 text-purple-800',
      'History': 'bg-orange-100 text-orange-800',
      'Physics': 'bg-indigo-100 text-indigo-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Materials Library</h1>
          <p className="text-muted-foreground">Manage and organize your educational content</p>
        </div>
        <Button>
          <FileText className="w-4 h-4 mr-2" />
          Add Material
        </Button>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filters & Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                {types.map(type => (
                  <SelectItem key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full">
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <Card key={material.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  {getFileIcon(material.type)}
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base line-clamp-2">{material.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(material.category)}`}>
                        {material.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{material.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(material.uploadDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{material.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{material.views}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 mt-3">
                <Button size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  <Eye className="w-4 h-4 mr-1" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredMaterials.length === 0 && (
        <Card className="border-0 shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-primary mb-2">No materials found</h3>
            <p className="text-muted-foreground text-center mb-4">
              {searchTerm || selectedCategory !== 'all' || selectedType !== 'all'
                ? 'Try adjusting your search or filters'
                : 'Start by uploading your first educational material'
              }
            </p>
            <Button>
              <FileText className="w-4 h-4 mr-2" />
              Upload Material
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 