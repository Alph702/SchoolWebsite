import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Target, Heart, Lightbulb, Award } from 'lucide-react';
import { ImageWithFallback } from './functions/ImageWithFallback';
import conslingImage from '../assets/consling.jpg';


interface MissionSectionProps {
  language: string;
}

export function MissionSection({ language }: MissionSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const translations = {
    'English': {
      'Our Mission & Values': 'Our Mission & Values',
      'At Shah Abdul Latif Higher Secondary School, we are committed to providing quality education that empowers students to become responsible citizens and lifelong learners.': 'At Shah Abdul Latif Higher Secondary School, we are committed to providing quality education that empowers students to become responsible citizens and lifelong learners.',
      'To nurture young minds with knowledge, wisdom, and moral values, preparing them to face future challenges with confidence and integrity.': 'To nurture young minds with knowledge, wisdom, and moral values, preparing them to face future challenges with confidence and integrity.',
      'School Leadership Team': 'School Leadership Team',
      'Excellence': 'Excellence',
      'Striving for the highest standards in education and character development.': 'Striving for the highest standards in education and character development.',
      'Compassion': 'Compassion',
      'Fostering empathy, kindness, and understanding in our learning community.': 'Fostering empathy, kindness, and understanding in our learning community.',
      'Innovation': 'Innovation',
      'Embracing creative thinking and modern approaches to learning.': 'Embracing creative thinking and modern approaches to learning.',
      'Achievement': 'Achievement',
      'Celebrating success and encouraging continuous growth and improvement.': 'Celebrating success and encouraging continuous growth and improvement.',
    },
    'Sindhi': {
      'Our Mission & Values': 'اسان جو مشن ۽ قدر',
      'At Shah Abdul Latif Higher Secondary School, we are committed to providing quality education that empowers students to become responsible citizens and lifelong learners.': 'شاهه عبداللطيف هائير سيڪنڊري اسڪول ۾، اسان معياري تعليم فراهم ڪرڻ لاءِ پرعزم آهيون جيڪا شاگردن کي ذميوار شهري ۽ تاحيات سکيا ڏيندڙ بڻائي ٿي.',
      'To nurture young minds with knowledge, wisdom, and moral values, preparing them to face future challenges with confidence and integrity.': 'نوجوان ذهنن کي علم، حڪمت ۽ اخلاقي قدرن سان پالڻ، انهن کي مستقبل جي چئلينجن کي اعتماد ۽ سالميت سان منهن ڏيڻ لاءِ تيار ڪرڻ.',
      'School Leadership Team': 'اسڪول قيادت ٽيم',
      'Excellence': 'بهترين',
      'Striving for the highest standards in education and character development.': 'تعليم ۽ ڪردار جي ترقي ۾ اعليٰ معيار لاءِ ڪوشش ڪرڻ.',
      'Compassion': 'همدردي',
      'Fostering empathy, kindness, and understanding in our learning community.': 'اسان جي سکيا واري ڪميونٽي ۾ همدردي، احسان، ۽ سمجھ کي وڌائڻ.',
      'Innovation': 'جدت',
      'Embracing creative thinking and modern approaches to learning.': 'تخليقي سوچ ۽ سکيا لاءِ جديد طريقن کي اپنائڻ.',
      'Achievement': 'ڪاميابي',
      'Celebrating success and encouraging continuous growth and improvement.': 'ڪاميابي جو جشن ملهائڻ ۽ مسلسل ترقي ۽ بهتري جي حوصلا افزائي ڪرڻ.',
    },
    'Urdu': {
      'Our Mission & Values': 'ہمارا مشن اور اقدار',
      'At Shah Abdul Latif Higher Secondary School, we are committed to providing quality education that empowers students to become responsible citizens and lifelong learners.': 'شاہ عبداللطیف ہائر سیکنڈری اسکول میں، ہم معیاری تعلیم فراہم کرنے کے لیے پرعزم ہیں جو طلباء کو ذمہ دار شہری اور تاحیات سیکھنے والے بننے کے لیے بااختیار بناتی ہے۔',
      'To nurture young minds with knowledge, wisdom, and moral values, preparing them to face future challenges with confidence and integrity.': 'نوجوان ذہنوں کو علم، حکمت اور اخلاقی اقدار سے پروان چڑھانا، انہیں مستقبل کے چیلنجوں کا اعتماد اور دیانتداری سے مقابلہ کرنے کے لیے تیار کرنا۔',
      'School Leadership Team': 'اسکول کی قیادت کی ٹیم',
      'Excellence': 'فضیلت',
      'Striving for the highest standards in education and character development.': 'تعلیم اور کردار کی نشوونما میں اعلیٰ ترین معیارات کے لیے کوشاں۔',
      'Compassion': 'ہمدردی',
      'Fostering empathy, kindness, and understanding in our learning community.': 'ہماری سیکھنے والی برادری میں ہمدردی، مہربانی اور افہام و تفہیم کو فروغ دینا۔',
      'Innovation': 'جدت',
      'Embracing creative thinking and modern approaches to learning.': 'تخلیقی سوچ اور سیکھنے کے جدید طریقوں کو اپنانا۔',
      'Achievement': 'کامیابی',
      'Celebrating success and encouraging continuous growth and improvement.': 'کامیابی کا جشن منانا اور مسلسل ترقی اور بہتری کی حوصلہ افزائی کرنا۔',
    },
  };

  const t = translations[language as keyof typeof translations];

  const values = [
    {
      icon: Target,
      title: t.Excellence,
      description: t['Striving for the highest standards in education and character development.']
    },
    {
      icon: Heart,
      title: t.Compassion,
      description: t['Fostering empathy, kindness, and understanding in our learning community.']
    },
    {
      icon: Lightbulb,
      title: t.Innovation,
      description: t['Embracing creative thinking and modern approaches to learning.']
    },
    {
      icon: Award,
      title: t.Achievement,
      description: t['Celebrating success and encouraging continuous growth and improvement.']
    }
  ];

  return (
    <section id="mission" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Textured background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.1) 2px,
                rgba(0,0,0,0.1) 4px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.05) 2px,
                rgba(0,0,0,0.05) 4px
              )
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t['Our Mission & Values']}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t['At Shah Abdul Latif Higher Secondary School, we are committed to providing quality education that empowers students to become responsible citizens and lifelong learners.']}
            </p>
          </motion.div>
        </div>

        {/* Mission statement with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 relative overflow-hidden"
          >
            {/* Decorative texture overlay */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
                backgroundSize: '16px 16px'
              }}
            />
            
            <div className="relative z-10 text-center lg:text-left">
              <motion.blockquote 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed"
              >
                "{t['To nurture young minds with knowledge, wisdom, and moral values, preparing them to face future challenges with confidence and integrity.']}"
              </motion.blockquote>
              <motion.cite 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="block mt-6 text-muted-foreground text-lg"
              >
                — {t['School Leadership Team']}
              </motion.cite>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={conslingImage}
              alt="Diverse students learning in classroom"
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-background/70 backdrop-blur-sm rounded-xl p-6 border border-border/50 text-center relative overflow-hidden group"
            >
              {/* Hover effect background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId={`bg-${index}`}
              />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
                >
                  <value.icon size={32} className="text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}