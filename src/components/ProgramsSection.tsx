import { motion } from 'motion/react';
import { Button } from './ui/button';
import { BookOpen, Calculator, Globe, Palette, Microscope, Computer } from 'lucide-react';
import { ImageWithFallback } from './functions/ImageWithFallback';
import bio from '../assets/bio.jpg';
import cs from '../assets/cs.jpg';
import math from '../assets/Math.jpg';
import english from '../assets/English.jpg';
import sst from '../assets/SST.jpg';
import urdu from '../assets/Language.jpg';

interface ProgramsSectionProps {
  language: string;
} 

export function ProgramsSection({ language }: ProgramsSectionProps) {
  const translations = {
    'English': {
      'Academic Programs': 'Academic Programs',
      'Discover our comprehensive range of academic programs designed to nurture intellectual growth and prepare students for future success.': 'Discover our comprehensive range of academic programs designed to nurture intellectual growth and prepare students for future success.',
      'Literature & Languages': 'Literature & Languages',
      'Comprehensive language arts program focusing on Urdu, English, and classical literature.': 'Comprehensive language arts program focusing on Urdu, English, and classical literature.',
      'Urdu Literature': 'Urdu Literature',
      'English Language': 'English Language',
      'Islamic Studies': 'Islamic Studies',
      'Mathematics & Sciences': 'Mathematics & Sciences',
      'Advanced mathematics and science curriculum preparing students for higher education.': 'Advanced mathematics and science curriculum preparing students for higher education.',
      'Advanced Mathematics': 'Advanced Mathematics',
      'Physics': 'Physics',
      'Chemistry': 'Chemistry',
      'Social Sciences': 'Social Sciences',
      'Understanding society, history, and global perspectives through comprehensive studies.': 'Understanding society, history, and global perspectives through comprehensive studies.',
      'History': 'History',
      'Geography': 'Geography',
      'Political Science': 'Political Science',
      'Arts & Culture': 'Arts & Culture',
      'Creative expression through visual arts, music, and cultural appreciation programs.': 'Creative expression through visual arts, music, and cultural appreciation programs.',
      'Fine Arts': 'Fine Arts',
      'Music': 'Music',
      'Cultural Studies': 'Cultural Studies',
      'Applied Sciences': 'Applied Sciences',
      'Hands-on learning in biology, environmental science, and practical applications.': 'Hands-on learning in biology, environmental science, and practical applications.',
      'Biology': 'Biology',
      'Environmental Science': 'Environmental Science',
      'Lab Work': 'Lab Work',
      'Technology & Skills': 'Technology & Skills',
      'Modern technology skills and computer literacy for the digital age.': 'Modern technology skills and computer literacy for the digital age.',
      'Computer Science': 'Computer Science',
      'Digital Literacy': 'Digital Literacy',
      'IT Skills': 'IT Skills',
      'Key Subjects:': 'Key Subjects:',
      'Learn More': 'Learn More',
      'Ready to Join Our Academic Community?': 'Ready to Join Our Academic Community?',
      'Discover how our comprehensive programs can help shape your child\'s future. Contact us to learn more about admission requirements and enrollment process.': 'Discover how our comprehensive programs can help shape your child\'s future. Contact us to learn more about admission requirements and enrollment process.',
      'Get Admission Information': 'Get Admission Information',
      'Science': 'Science',
      'Math': 'Math',
      'English': 'English',
      'SST': 'SST',
      'Urdu': 'Urdu',
      'Sindhi': 'Sindhi',
      'Islamiat': 'Islamiat',
      'Explore the wonders of science, including biology, chemistry, and physics.': 'Explore the wonders of science, including biology, chemistry, and physics.',
      'Develop mathematical skills and problem-solving abilities.': 'Develop mathematical skills and problem-solving abilities.',
      'Master the English language through literature and communication.': 'Master the English language through literature and communication.',
      'Study Social Studies including history, geography, and civics.': 'Study Social Studies including history, geography, and civics.',
      'Study the Urdu language and literature.': 'Study the Urdu language and literature.',
        'Study the Sindhi language and literature.': 'Study the Sindhi language and literature.',
        'Study Islamic history and teachings.': 'Study Islamic history and teachings.',
        'Algebra': 'Algebra',
        'Geometry': 'Geometry',
        'Arithmetic': 'Arithmetic',
        'Grammar': 'Grammar',
        'Literature': 'Literature',
        'Writing': 'Writing',
        'Civics': 'Civics',
        'Urdu Language': 'Urdu Language',
        'Sindhi Literature': 'Sindhi Literature',
        'Sindhi Language': 'Sindhi Language',
        'Islamic History': 'Islamic History',
        'Quranic Studies': 'Quranic Studies',
        'Languages & Islamic Studies': 'Languages & Islamic Studies',
        'Comprehensive program for Urdu, Sindhi, and Islamic studies.': 'Comprehensive program for Urdu, Sindhi, and Islamic studies.',
    },
    'Sindhi': {
      'Academic Programs': 'تعليمي پروگرام',
      'Discover our comprehensive range of academic programs designed to nurture intellectual growth and prepare students for future success.': 'اسان جي تعليمي پروگرامن جي جامع رينج دريافت ڪريو جيڪي دانشورانه ترقي کي فروغ ڏيڻ ۽ شاگردن کي مستقبل جي ڪاميابي لاءِ تيار ڪرڻ لاءِ ٺهيل آهن.',
      'Literature & Languages': 'ادب ۽ ٻوليون',
      'Comprehensive language arts program focusing on Urdu, English, and classical literature.': 'جامع ٻولي آرٽس پروگرام جيڪو اردو، انگريزي ۽ ڪلاسيڪل ادب تي ڌيان ڏئي ٿو.',
      'Urdu Literature': 'اردو ادب',
      'English Language': 'انگريزي ٻولي',
      'Islamic Studies': 'اسلامي اڀياس',
      'Mathematics & Sciences': 'رياضي ۽ سائنس',
      'Advanced mathematics and science curriculum preparing students for higher education.': 'اعليٰ تعليم لاءِ شاگردن کي تيار ڪرڻ لاءِ جديد رياضي ۽ سائنس جو نصاب.',
      'Advanced Mathematics': 'ترقي يافته رياضي',
      'Physics': 'طبيعيات',
      'Chemistry': 'ڪيمسٽري',
      'Social Sciences': 'سماجي سائنس',
      'Understanding society, history, and global perspectives through comprehensive studies.': 'جامع اڀياس ذريعي سماج، تاريخ ۽ عالمي نقطه نظر کي سمجھڻ.',
      'History': 'تاريخ',
      'Geography': 'جاگرافي',
      'Political Science': 'پوليٽيڪل سائنس',
      'Arts & Culture': 'آرٽس ۽ ثقافت',
      'Creative expression through visual arts, music, and cultural appreciation programs.': 'بصري آرٽس، ميوزڪ، ۽ ثقافتي تعريف جي پروگرامن ذريعي تخليقي اظهار.',
      'Fine Arts': 'فائن آرٽس',
      'Music': 'موسيقي',
      'Cultural Studies': 'ثقافتي اڀياس',
      'Applied Sciences': 'اپلائيڊ سائنسز',
      'Hands-on learning in biology, environmental science, and practical applications.': 'حياتيات، ماحولياتي سائنس، ۽ عملي ايپليڪيشنن ۾ هٿ تي سکيا.',
      'Biology': 'حياتيات',
      'Environmental Science': 'ماحولياتي سائنس',
      'Lab Work': 'ليبارٽري جو ڪم',
      'Technology & Skills': 'ٽيڪنالاجي ۽ مهارتون',
      'Modern technology skills and computer literacy for the digital age.': 'ڊجيٽل دور لاءِ جديد ٽيڪنالاجي جون مهارتون ۽ ڪمپيوٽر جي خواندگي.',
      'Computer Science': 'ڪمپيوٽر سائنس',
      'Digital Literacy': 'ڊجيٽل خواندگي',
      'IT Skills': 'آئي ٽي مهارتون',
      'Key Subjects:': 'اهم مضمون:',
      'Learn More': 'وڌيڪ سکو',
      'Ready to Join Our Academic Community?': 'اسان جي تعليمي برادري ۾ شامل ٿيڻ لاءِ تيار آهيو؟',
      'Discover how our comprehensive programs can help shape your child\'s future. Contact us to learn more about admission requirements and enrollment process.': 'دريافت ڪريو ته اسان جا جامع پروگرام توهان جي ٻار جي مستقبل کي شڪل ڏيڻ ۾ ڪيئن مدد ڪري سگهن ٿا. داخلا جي گهرج ۽ داخلا جي عمل بابت وڌيڪ سکڻ لاءِ اسان سان رابطو ڪريو.',
      'Get Admission Information': 'داخلا جي معلومات حاصل ڪريو',
      'Science': 'سائنس',
        'Math': 'رياضي',
        'English': 'انگريزي',
        'SST': 'ايس ايس ٽي',
        'Urdu': 'اردو',
        'Sindhi': 'سنڌي',
        'Islamiat': 'اسلاميات',
        'Explore the wonders of science, including biology, chemistry, and physics.': 'سائنس جي عجائبات کي دريافت ڪريو، بشمول حياتيات، ڪيمسٽري ۽ فزڪس.',
        'Develop mathematical skills and problem-solving abilities.': 'رياضي جي صلاحيتن ۽ مسئلا حل ڪرڻ جي صلاحيتن کي وڌايو.',
        'Master the English language through literature and communication.': 'ادب ۽ ڪميونيڪيشن ذريعي انگريزي ٻوليءَ ۾ مهارت حاصل ڪريو.',
        'Study Social Studies including history, geography, and civics.': 'تاريخ، جاگرافي ۽ شهريت سميت سماجي اڀياس جو مطالعو ڪريو.',
        'Study the Urdu language and literature.': 'اردو ٻولي ۽ ادب جو مطالعو ڪريو.',
        'Study the Sindhi language and literature.': 'سنڌي ٻولي ۽ ادب جو مطالعو ڪريو.',
        'Study Islamic history and teachings.': 'اسلامي تاريخ ۽ تعليمات جو مطالعو ڪريو.',
        'Algebra': 'الجبرا',
        'Geometry': 'جاميٽري',
        'Arithmetic': 'حساب',
        'Grammar': 'گرامر',
        'Literature': 'ادب',
        'Writing': 'لکھڻ',
        'Civics': 'شهريت',
        'Urdu Language': 'اردو ٻولي',
        'Sindhi Literature': 'سنڌي ادب',
        'Sindhi Language': 'سنڌي ٻولي',
        'Islamic History': 'اسلامي تاريخ',
        'Quranic Studies': 'قرآني اڀياس',
        'Languages & Islamic Studies': 'ٻوليون ۽ اسلامي اڀياس',
        'Comprehensive program for Urdu, Sindhi, and Islamic studies.': 'اردو، سنڌي ۽ اسلامي اڀياس لاءِ جامع پروگرام.',
    },
    'Urdu': {
      'Academic Programs': 'تعلیمی پروگرام',
      'Discover our comprehensive range of academic programs designed to nurture intellectual growth and prepare students for future success.': 'ہمارے تعلیمی پروگراموں کی جامع رینج دریافت کریں جو فکری نشوونما کو فروغ دینے اور طلباء کو مستقبل کی کامیابی کے لیے تیار کرنے کے لیے ڈیزائن کیا گیا ہے۔',
      'Literature & Languages': 'ادب اور زبانیں',
      'Comprehensive language arts program focusing on Urdu, English, and classical literature.': 'جامع لسانی فنون کا پروگرام جو اردو، انگریزی اور کلاسیکی ادب پر مرکوز ہے۔',
      'Urdu Literature': 'اردو ادب',
      'English Language': 'انگریزی زبان',
      'Islamic Studies': 'اسلامی علوم',
      'Mathematics & Sciences': 'ریاضی اور سائنس',
      'Advanced mathematics and science curriculum preparing students for higher education.': 'اعلیٰ تعلیم کے لیے طلباء کو تیار کرنے والا جدید ریاضی اور سائنس کا نصاب.',
      'Advanced Mathematics': 'اعلیٰ ریاضی',
      'Physics': 'طبیعیات',
      'Chemistry': 'کیمیا',
      'Social Sciences': 'سماجی علوم',
      'Understanding society, history, and global perspectives through comprehensive studies.': 'جامع مطالعات کے ذریعے معاشرے، تاریخ اور عالمی تناظر کو سمجھنا.',
      'History': 'تاریخ',
      'Geography': 'جغرافیہ',
      'Political Science': 'سیاسیات',
      'Arts & Culture': 'فنون اور ثقافت',
      'Creative expression through visual arts, music, and cultural appreciation programs.': 'بصری فنون، موسیقی، اور ثقافتی قدردانی کے پروگراموں کے ذریعے تخلیقی اظہار.',
      'Fine Arts': 'فنون لطیفہ',
      'Music': 'موسیقی',
      'Cultural Studies': 'ثقافتی علوم',
      'Applied Sciences': 'اطلاقی علوم',
      'Hands-on learning in biology, environmental science, and practical applications.': 'حیاتیات، ماحولیاتی سائنس، اور عملی ایپلی کیشنز میں ہاتھ پر سیکھنا.',
      'Biology': 'حیاتیات',
      'Environmental Science': 'ماحولیاتی سائنس',
      'Lab Work': 'لیب کا کام',
      'Technology & Skills': 'ٹیکنالوجی اور ہنر',
      'Modern technology skills and computer literacy for the digital age.': 'ڈیجیٹل دور کے لیے جدید ٹیکنالوجی کی مہارتیں اور کمپیوٽر کی خواندگی.',
      'Computer Science': 'کمپیوٽر سائنس',
      'Digital Literacy': 'ڈیجیٹل خواندگی',
      'IT Skills': 'آئی ٹی ہنر',
      'Key Subjects:': 'اہم مضامین:',
      'Learn More': 'مزید جانیں',
      'Ready to Join Our Academic Community?': 'ہماری تعلیمی برادری میں شامل ہونے کے لیے تیار ہیں؟',
      'Discover how our comprehensive programs can help shape your child\'s future. Contact us to learn more about admission requirements and enrollment process.': 'دریافت کریں کہ ہمارے جامع پروگرام آپ کے بچے کے مستقبل کو کس طرح تشکیل دے سکتے ہیں۔ داخلے کی ضروریات اور اندراج کے عمل کے بارے میں مزید جاننے کے لیے ہم سے رابطہ کریں۔',
      'Get Admission Information': 'داخلہ کی معلومات حاصل کریں',
      'Science': 'سائنس',
        'Math': 'ریاضی',
        'English': 'انگریزی',
        'SST': 'ایس ایس ٹی',
        'Urdu': 'اردو',
        'Sindhi': 'سندھی',
        'Islamiat': 'اسلامیات',
        'Explore the wonders of science, including biology, chemistry, and physics.': 'سائنس کے عجائبات کو دریافت کریں، بشمول حیاتیات، ڪيمسٽري اور فزڪس.',
        'Develop mathematical skills and problem-solving abilities.': 'ریاضی کی مہارتیں اور مسائل کو حل کرنے کی صلاحیتوں کو فروغ دیں۔',
        'Master the English language through literature and communication.': 'ادب اور مواصلات کے ذریعے انگریزی زبان میں مہارت حاصل کریں۔',
        'Study Social Studies including history, geography, and civics.': 'تاریخ، جاگرافیہ اور شہریات سمیت سماجی علوم کا مطالعہ کریں۔',
        'Study the Urdu language and literature.': 'اردو زبان اور ادب کا مطالعہ کریں۔',
        'Study the Sindhi language and literature.': 'سنڌي ٻولي ۽ ادب جو مطالعو ڪريو.',
        'Study Islamic history and teachings.': 'اسلامی تاریخ اور تعلیمات کا مطالعو ڪريو.',
        'Algebra': 'الجبرا',
        'Geometry': 'جیومیٹری',
        'Arithmetic': 'حساب',
        'Grammar': 'گرامر',
        'Literature': 'ادب',
        'Writing': 'لکھنا',
        'Civics': 'شہریات',
        'Urdu Language': 'اردو زبان',
        'Sindhi Literature': 'سندھی ادب',
        'Sindhi Language': 'سندھی زبان',
        'Islamic History': 'اسلامی تاریخ',
        'Quranic Studies': 'قرآنی علوم',
        'Languages & Islamic Studies': 'زبانیں اور اسلامی علوم',
        'Comprehensive program for Urdu, Sindhi, and Islamic studies.': 'اردو، سندھی اور اسلامی علوم کے لیے جامع پروگرام۔',
    }
  };

  const t = translations[language as keyof typeof translations];

  const programs = [
    {
      id: 'Computer-Science',
      icon: Computer,
      title: t['Computer Science'],
      description: t['Modern technology skills and computer literacy for the digital age.'],
      subjects: [t['Computer Science'], t['Digital Literacy'], t['IT Skills']],
      color: "from-accent/20 to-primary/20",
      image: cs
    },
    {
      id: 'Science',
      icon: Microscope,
      title: t['Science'],
      description: t['Explore the wonders of science, including biology, chemistry, and physics.'],
      subjects: [t['Biology'], t['Chemistry'], t['Physics']],
      color: "from-primary/20 to-secondary/20",
      image: bio
    },
    {
      id: 'Math',
      icon: Calculator,
      title: t['Math'],
      description: t['Develop mathematical skills and problem-solving abilities.'],
      subjects: [t['Algebra'], t['Geometry'], t['Arithmetic']],
      color: "from-secondary/20 to-accent/20",
      image: math
    },
    {
      id: 'English',
      icon: BookOpen,
      title: t['English'],
      description: t['Master the English language through literature and communication.'],
      subjects: [t['Grammar'], t['Literature'], t['Writing']],
      color: "from-accent/20 to-secondary/20",
      image: english
    },
    {
      id: 'SST',
      icon: Globe,
      title: t['SST'],
      description: t['Study Social Studies including history, geography, and civics.'],
      subjects: [t['History'], t['Geography'], t['Civics']],
      color: "from-primary/20 to-accent/20",
      image: sst
    },
    {
      id: 'Languages-&-Islamic-Studies',
      icon: BookOpen,
      title: t['Languages & Islamic Studies'],
      description: t['Comprehensive program for Urdu, Sindhi, and Islamic studies.'],
      subjects: [t['Urdu'], t['Sindhi'], t['Islamiat']],
      color: "from-primary/20 to-secondary/20",
      image: urdu
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/20">
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              conic-gradient(from 0deg at 50% 50%,
                transparent 0deg,
                rgba(0,0,0,0.1) 90deg,
                transparent 180deg,
                rgba(0,0,0,0.1) 270deg,
                transparent 360deg
              )
            `,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t['Academic Programs']}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t['Discover our comprehensive range of academic programs designed to nurture intellectual growth and prepare students for future success.']}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.3
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 h-full relative overflow-hidden">
                {/* Program image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={program.image}
                    alt={`${program.title} program`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Floating icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg"
                  >
                    <program.icon size={24} className="text-primary" />
                  </motion.div>
                </div>

                <div className="p-6">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Textural overlay */}
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 3px,
                        rgba(0,0,0,0.1) 3px,
                        rgba(0,0,0,0.1) 6px
                      )`,
                      backgroundSize: '12px 12px'
                    }}
                  />

                  <div className="relative z-10">
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Subjects list */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-medium text-foreground mb-2">{t['Key Subjects:']}</h4>
                      {program.subjects.map((subject, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.1) + (subIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:bg-primary/80 transition-colors" />
                          {subject}
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn more button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        >
                          {t['Learn More']}
                        </Button>
                      
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 relative overflow-hidden">
            {/* Animated background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.2) 2px, transparent 2px)`,
                backgroundSize: '40px 40px'
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                Ready to Join Our Academic Community?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discover how our comprehensive programs can help shape your child's future. 
                Contact us to learn more about admission requirements and enrollment process.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
 size="lg" className="text-lg px-8 py-3">
                  Get Admission Information
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}