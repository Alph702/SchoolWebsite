import { motion } from 'motion/react';
import { Calendar, Clock, BookOpen, Trophy, AlertCircle, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './functions/ImageWithFallback';
import Rabi_ul_Awal from '../assets/Rabi_ul_Awal.jpg';
import { useState } from 'react';
import AnnouncementModal from './AnnouncementModal';

interface AnnouncementsPageProps {
  onBack: () => void;
  language: string;
}

export function AnnouncementsPage({ onBack, language }: AnnouncementsPageProps) {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);

  const announcements = [
    {
      id: 1,
      title: {
        English: "🌙✨ 12th Rabi-ul-Awal Day 2 Activities ✨🌙",
        Sindhi: "🌙✨ 12 ربيع الاول ڏينهن 2 سرگرميون ✨🌙",
        Urdu: "🌙✨ ١٢ ربیع الاول دن ٢ سرگرمیاں ✨🌙",
      },
      description: {
        English: "Alhamdulillah! On Day 2 of the Students’ Seerat-un-Nabi (SAWW) Conference at Shah Abdul Latif H/S School Mirpurkhas, our Girls from all classes actively participated in the Naat and Qiraat Competitions, beautifully expressing their devotion, love, and reverence for our beloved Prophet Muhammad (SAWW).\n\nAt the conclusion, all Students and Teachers joined together in heartfelt duas for our beloved country and for the progress of our school. The day ended with a blessed Niaz-e-Rasool (SAWW), shared among all with love and unity. 🌹\n\n👏 A special appreciation goes to our Female Teaching Faculty for their dedication, hard work, and disciplined organization of this memorable event.\n\n✨ May Allah bless our students with the light of Seerat-un-Nabi (SAWW), and guide them towards knowledge, success, and strong faith. Ameen.",
        Sindhi: "الحمدالله! شاگردن جي سيرت النبي (ص) ڪانفرنس جي ٻئي ڏينهن شاهه عبداللطيف هائير سيڪنڊري اسڪول ميرپورخاص ۾، اسان جي سڀني ڪلاسن جي ڇوڪرين نعت ۽ قرآت جي مقابلن ۾ ڀرپور شرڪت ڪئي، ۽ اسان جي پياري نبي ڪريم صلي الله عليه وآله وسلم جن سان پنهنجي عقيدت، محبت ۽ احترام جو خوبصورت اظهار ڪيو.\n\nآخر ۾، سڀني شاگردن ۽ استادن گڏجي اسان جي پياري ملڪ ۽ اسان جي اسڪول جي ترقي لاءِ دل سان دعائون گهريون. ڏينهن جو اختتام نياز رسول (ص) جي برڪت سان ٿيو، جيڪو سڀني ۾ محبت ۽ اتحاد سان ورهايو ويو. 🌹\n\n👏 اسان جي عورت استادن جي انهن جي لگن، محنت ۽ هن يادگار تقريب جي منظم تنظيم لاءِ خاص تعريف ڪئي وڃي ٿي.\n\n✨ الله اسان جي شاگردن کي سيرت النبي (ص) جي روشني سان منور فرمائي، ۽ انهن کي علم، ڪاميابي ۽ مضبوط ايمان جي طرف رهنمائي فرمائي. آمين.",
        Urdu: "الحمدللہ! شاہ عبداللطیف ہائر سیکنڈری اسکول میرپورخاص میں طلباء کی سیرت النبی (ص) کانفرنس کے دوسرے دن، ہماری تمام کلاسوں کی لڑکیوں نے نعت اور قرآت کے مقابلوں میں بھرپور شرکت کی، اور ہمارے پیارے نبی کریم صلی اللہ علیہ وآلہ وسلم کے ساتھ اپنی عقیدت، محبت اور احترام کا خوبصورت اظہار کیا۔\n\nآخر میں، تمام طلباء اور اساتذہ نے مل کر ہمارے پیارے ملک اور ہمارے اسکول کی ترقی کے لیے تہہ دل سے دعائیں کیں۔ دن کا اختتام نیاز رسول (ص) کی برکت سے ہوا، جو سب میں محبت اور اتحاد کے ساتھ تقسیم کیا گیا۔ 🌹\n\n👏 ہماری خواتین اساتذہ کی ان کی لگن، محنت اور اس یادگار تقریب کی منظم تنظیم کے لیے خصوصی تعریف کی جاتی ہے۔\n\n✨ اللہ ہمارے طلباء کو سیرت النبی (ص) کی روشنی سے منور فرمائے، اور انہیں علم، کامیابی اور مضبوط ایمان کی طرف رہنمائی فرمائے۔ آمین۔",
      },
      date: "2025-09-05",
      time: "All Day",
      category: "Cultural",
      priority: "high",
      icon: BookOpen,
      image: Rabi_ul_Awal
    },
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
    <>
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
                      alt={announcement.title[language as keyof typeof announcement.title]}
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
                    
                    <CardTitle className="line-clamp-2">{announcement.title[language as keyof typeof announcement.title]}</CardTitle>
                    <CardDescription className="line-clamp-3 flex-grow">
                      {announcement.description[language as keyof typeof announcement.description]}
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

                    <Button variant="outline" className="w-full group" onClick={() => setSelectedAnnouncement(announcement)}>
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
            {/* <Button size="lg" variant="outline" className="px-8 py-3">
              Load More Announcements
            </Button> */}
          </motion.div>
        </div>
      </div>
      <AnnouncementModal
        isOpen={selectedAnnouncement !== null}
        onClose={() => setSelectedAnnouncement(null)}
        announcement={selectedAnnouncement}
        language={language}
      />
    </>
  );
}