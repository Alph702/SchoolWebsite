import { motion } from 'motion/react';
import { Calendar, Clock, BookOpen, Trophy, AlertCircle, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AnnouncementsPageProps {
  onBack: () => void;
}

export function AnnouncementsPage({ onBack }: AnnouncementsPageProps) {
  const announcements = [
    {
      id: 1,
      title: "Annual Science Fair 2024",
      description: "Join us for our annual science fair showcasing innovative projects from our talented students. Prizes will be awarded for the most creative and impactful presentations.",
      date: "2024-03-15",
      time: "9:00 AM - 4:00 PM",
      category: "Academic",
      priority: "high",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmFpcnxlbnwxfHx8fDE3NTY1MjQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Sports Championship Results",
      description: "Congratulations to our amazing athletes who secured first place in the inter-school basketball championship. Great teamwork and dedication paid off!",
      date: "2024-03-10",
      time: "All Day",
      category: "Sports",
      priority: "medium",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY2hhbXBpb25zaGlwfGVufDF8fHx8MTc1NjUyNDU1MXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Parent-Teacher Conference",
      description: "Important meeting to discuss student progress and upcoming academic plans. All parents are encouraged to attend for better communication.",
      date: "2024-03-20",
      time: "2:00 PM - 6:00 PM",
      category: "Important",
      priority: "high",
      icon: Users,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjB0ZWFjaGVyJTIwbWVldGluZ3xlbnwxfHx8fDE3NTY1MjQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "New Library Resources Available",
      description: "We've added 200+ new books and digital resources to our library. Students can now access advanced research materials for their projects.",
      date: "2024-03-08",
      time: "Library Hours",
      category: "Academic",
      priority: "medium",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzU2NTI0NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      title: "Campus Maintenance Notice",
      description: "Scheduled maintenance work on the main building will take place next week. Some areas may be temporarily inaccessible.",
      date: "2024-03-25",
      time: "7:00 AM - 5:00 PM",
      category: "Notice",
      priority: "low",
      icon: AlertCircle,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc1NjUyNDU1MXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      title: "Cultural Festival 2024",
      description: "Annual cultural festival celebrating diversity and traditions. Students will showcase their talents through music, dance, and art performances.",
      date: "2024-04-01",
      time: "10:00 AM - 8:00 PM",
      category: "Cultural",
      priority: "high",
      icon: Users,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwc2Nob29sfGVufDF8fHx8MTc1NjUyNDU1MXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-secondary text-secondary-foreground';
      case 'low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-primary/10 text-primary border-primary/20';
      case 'Sports': return 'bg-accent/50 text-accent-foreground border-accent';
      case 'Important': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'Cultural': return 'bg-secondary/50 text-secondary-foreground border-secondary';
      case 'Notice': return 'bg-muted text-muted-foreground border-border';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-20">
      {/* Background with sandpaper texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0),
              linear-gradient(45deg, transparent 25%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 50%, transparent 50%, transparent 75%, rgba(0,0,0,0.05) 75%)
            `,
            backgroundSize: '12px 12px, 24px 24px'
          }}
        />
      </div>



      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
            School Announcements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, events, and important information from Shah Abdul Latif Higher Secondary School
          </p>
        </motion.div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col backdrop-blur-sm bg-background/95 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Priority badge */}
                  <div className="absolute top-3 right-3">
                    <Badge className={`${getPriorityColor(announcement.priority)} font-medium`}>
                      {announcement.priority.toUpperCase()}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <announcement.icon size={20} className="text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <CardHeader className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={getCategoryColor(announcement.category)}>
                      {announcement.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="line-clamp-2">{announcement.title}</CardTitle>
                  <CardDescription className="line-clamp-3 flex-grow">
                    {announcement.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{new Date(announcement.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={16} />
                      <span>{announcement.time}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group">
                    <span>Read More</span>
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center pb-16"
        >
          <Button size="lg" variant="outline" className="px-8 py-3">
            Load More Announcements
          </Button>
        </motion.div>
      </div>
    </div>
  );
}