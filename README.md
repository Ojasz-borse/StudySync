<<<<<<< HEAD
# Next js chatbot UI

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/aditi-joshis-projects-4181c963/v0-next-js-chatbot-ui)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/KK3aQqLlSa9)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/aditi-joshis-projects-4181c963/v0-next-js-chatbot-ui](https://vercel.com/aditi-joshis-projects-4181c963/v0-next-js-chatbot-ui)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/KK3aQqLlSa9](https://v0.dev/chat/projects/KK3aQqLlSa9)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
=======
# StudySync AI - AI-Powered Academic Assistant

A professional academic management platform designed for teachers to upload, organize, and manage educational content with AI-powered features.

## 🚀 Features

### For Teachers
- **Smart Document Upload**: Upload PDFs, images, and create notices with drag-and-drop functionality
- **Materials Library**: Organize and categorize educational content with advanced search and filtering
- **Student Management**: Track student progress, manage enrollments, and monitor engagement
- **Notice System**: Create and publish announcements with priority levels and categories
- **Professional Dashboard**: Comprehensive overview with analytics and quick actions
- **Settings Management**: Customize notifications, security, and appearance preferences

### Key Features
- **Professional UI**: Clean, modern interface with white and grey theme
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Reusable components for easy maintenance and scalability
- **TypeScript Support**: Full type safety and better development experience
- **Modern Tech Stack**: Built with Next.js 15, React 18, and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **File Upload**: React Dropzone
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles and theme
│   └── teacher/
│       └── page.tsx            # Teacher dashboard entry point
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── switch.tsx
│   │   └── ...
│   └── teacher/                # Teacher-specific components
│       ├── TeacherDashboard.tsx    # Main dashboard component
│       ├── TeacherSidebar.tsx      # Navigation sidebar
│       ├── DashboardOverview.tsx   # Dashboard overview section
│       ├── UploadSection.tsx       # File upload functionality
│       ├── MaterialsSection.tsx    # Materials library
│       ├── NoticesSection.tsx      # Notices management
│       ├── StudentsSection.tsx     # Student management
│       └── SettingsSection.tsx     # Settings and preferences
└── lib/
    └── utils.ts                # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Professional grey tones (#2E2E2E)
- **Background**: Clean white (#FFFFFF)
- **Secondary**: Light grey accents (#F5F5F5)
- **Muted**: Subtle grey text (#6B7280)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, professional styling
- **Body Text**: Clean, readable typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd studysync-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Usage

### Landing Page
- Professional introduction to StudySync AI
- Feature highlights and benefits
- Call-to-action buttons to access teacher portal

### Teacher Dashboard
1. **Dashboard Overview**: View statistics, recent activity, and quick actions
2. **Upload Content**: 
   - Select upload type (PDF, Image, Notice)
   - Drag and drop files or use file picker
   - Create notices with rich text content
3. **Materials Library**: 
   - Browse uploaded materials
   - Search and filter by category/type
   - Download and preview content
4. **Notices**: 
   - Create and manage announcements
   - Set priority levels and categories
   - Publish or save as drafts
5. **Students**: 
   - Manage student information
   - Track engagement and progress
   - Add new students to the system
6. **Settings**: 
   - Profile management
   - Notification preferences
   - Security settings
   - Appearance customization

## 🔧 Customization

### Adding New Components
1. Create component in appropriate directory (`src/components/ui/` for reusable components)
2. Follow existing naming conventions
3. Use TypeScript interfaces for props
4. Include proper JSDoc comments

### Styling
- Use Tailwind CSS classes for styling
- Follow the established design system
- Use CSS variables for theme colors
- Maintain consistency with existing components

### Adding New Features
1. Create new section component in `src/components/teacher/`
2. Add navigation item in `TeacherSidebar.tsx`
3. Update `TeacherDashboard.tsx` to include new section
4. Follow existing patterns for state management

## 📦 Dependencies

### Core Dependencies
- `next`: 15.4.5 - React framework
- `react`: 18.3.1 - UI library
- `typescript`: 5 - Type safety
- `tailwindcss`: 3.4.17 - CSS framework

### UI Dependencies
- `@radix-ui/*`: UI primitives
- `lucide-react`: Icon library
- `class-variance-authority`: Component variants
- `clsx`: Conditional classes
- `tailwind-merge`: Tailwind class merging

### Development Dependencies
- `@types/node`: Node.js types
- `@types/react`: React types
- `eslint`: Code linting
- `autoprefixer`: CSS autoprefixing
- `postcss`: CSS processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- **AI Integration**: Smart content categorization and recommendations
- **Real-time Collaboration**: Live editing and commenting features
- **Mobile App**: Native mobile application
- **Advanced Analytics**: Detailed insights and reporting
- **Integration APIs**: Connect with existing school management systems
- **Multi-language Support**: Internationalization features
- **Advanced Security**: Enhanced authentication and data protection

---

**StudySync AI** - Empowering educators with intelligent academic management tools.
>>>>>>> c5d3b12 (Initial commit on Teacher branch)
