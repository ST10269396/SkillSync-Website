import { BookOpen, LineChart, Users, BarChart3, User, Smartphone } from "lucide-react"

export const features = [
  {
    id: 1,
    title: 'Skill Management',
    description: 'Create, organize, and track all your skills in one place',
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    screenshot: '/images/screenshots/skill-management.png',
    details: [
      'Create unlimited skills',
      'Set visibility preferences',
      'Add descriptions and categories',
      'Organize with tags'
    ]
  },
  {
    id: 2,
    title: 'Progress Tracking',
    description: 'Monitor your improvement with visual progress indicators',
    icon: <LineChart className="w-8 h-8 text-primary" />,
    screenshot: '/images/screenshots/progress-tracking.png',
    details: [
      'Add diary entries',
      'Track progress updates',
      'Visual progress bars',
      'Streak tracking'
    ]
  },
  {
    id: 3,
    title: 'Community Features',
    description: 'Connect with other learners and share your journey',
    icon: <Users className="w-8 h-8 text-primary" />,
    screenshot: '/images/screenshots/community.png',
    details: [
      'Browse public skills',
      'Like and comment',
      'Follow other users',
      'Share achievements'
    ]
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Get insights into your learning journey with detailed analytics',
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    screenshot: '/images/screenshots/analytics.png',
    details: [
      'Skill statistics',
      'Progress trends',
      'Activity summaries',
      'Engagement metrics'
    ]
  },
  {
    id: 5,
    title: 'User Profiles',
    description: 'Showcase your skills and connect with the community',
    icon: <User className="w-8 h-8 text-primary" />,
    screenshot: '/images/screenshots/profile.png',
    details: [
      'Customizable profiles',
      'User statistics',
      'Skills showcase',
      'Activity feed'
    ]
  },
  {
    id: 6,
    title: 'Mobile Experience',
    description: 'Native mobile experience optimized for learning on the go',
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    screenshot: '/images/screenshots/mobile-experience.png',
    details: [
      'Smooth animations',
      'Touch-optimized interface',
      'Offline capabilities',
      'Push notifications'
    ]
  }
]


