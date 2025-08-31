import { motion } from 'motion/react';
import {
  Bus,
  BookOpen,
  Book,
  Microscope,
  Monitor,
  MapPin,
  Camera,
  Sun,
  Users,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface OfferingsSectionProps {
  language: string;
}

export function OfferingsSection({ language }: OfferingsSectionProps) {
  const translations = {
    English: {
      title: 'Our Offerings',
      subtitle: "What we provide to support your child’s growth and learning",
      'Free Transport': 'Free Transport',
      'We provide safe transport to and from school.': 'We provide safe transport to and from school.',
      'Free Education': 'Free Education',
      'Free Books': 'Free Books',
      'Science Lab': 'Science Lab',
      'Computer Lab': 'Computer Lab',
      'Sports & Extracurricular Activities': 'Sports & Extracurricular Activities',
      'Sports programs, teams and clubs with regular training.': 'Sports programs, teams and clubs with regular training.',
      'Study & Excursion Trips': 'Study & Excursion Trips',
      'Separate Classrooms for Girls': 'Separate Classrooms for Girls',
      'Solar System & CCTV Camera': 'Solar System & CCTV Camera',
      'Short supportive text.': 'Short supportive text.',
    },
    Sindhi: {
      title: '\u0627\u0646\u06cc\u0633\u0627\u0646\u06cc\u0648\u06ba',
      subtitle: '\u062c\u0648 \u0627\u067e\u0627 \u0627\u067e\u064a\u0648\u06cc\u0686\u0631\u0627\u0621\u0627\u0646 \u0628\u0631\u0627\u064a\u062c\u064a\u0627\u0628\u064a\u06aa\u0627 \u0645\u0627\u0647\u064a\u0648\u06ba',
      'Free Transport': '\u0645\u0641\u062a \u0645\u0648\u0627\u0633\u0644\u0648\u06ba',
      'We provide safe transport to and from school.': '\u0627\u0633\u0627\u0646 \u06aa\u0648\u0627\u062a\u0627 \u0633\u0641\u064a \u0646\u0635\u0631\u06cc\u0627\u062a \u0627\u0646\u06cc\u06ba\u06d4',
      'Free Education': '\u0645\u0641\u062a \u062a\u0639\u0644\u06cc\u0645',
      'Free Books': '\u0645\u0641\u062a \u06aa\u0627\u062a\u0628',
      'Science Lab': '\u0633\u0627\u0626\u0646\u0633 \u0644\u0627\u0628',
      'Computer Lab': '\u06aa\u06cc\u0645\u067e\u06cc\u0648\u067e\u0679\u0631 \u0644\u0627\u0628',
      'Sports & Extracurricular Activities': '\u0633\u067e\u0631\u067e\u0633 \u0627\u0648\u0631 \u0632\u0645\u064a\u0646\u064a\u06ba',
      'Sports programs, teams and clubs with regular training.': '\u0628\u0631\u0627\u0628\u0631\u064a \u062a\u0631\u0628\u064a\u0627\u062a \u0627\u0648\u0631 \u06aa\u0644\u0628\u0632\u060c \u06aa\u0627\u0645\u0679\u0631\u0632 \u0627\u0648\u0631 \u0627\u0639\u062f\u0627\u062f\u06cc\u0627\u0646\u06cc \u06aa\u0631\u06cc\u0646\u06d4',
      'Study & Excursion Trips': '\u062a\u0639\u0644\u064a\u0645 \u0627\u0648\u0631 \u0633\u06cc\u0631\u06cc \u0633\u06cc\u0627\u062a',
      'Separate Classrooms for Girls': '\u0627\u0644\u0633\u062a \u06a9\u06cc \u062c\u0648\u0627\u0628\u064a\u06aa\u0627\u062a\u06c1',
      'Solar System & CCTV Camera': '\u0633\u0648\u0644\u0631 \u0633\u064a\u0633\u0679\u0645 \u0627\u0648\u0631 CCTV \u06aa\u06cc \u0645\u0627\u0634\u064a\u0646',
      'Short supportive text.': '\u0634\u0648\u0631\u062a \u0645\u062f\u062f\u0631 \u0645\u062a\u0646\u0633\u0628',
    },
    Urdu: {
      title: '\u0627\u0633\u0627\u0646 \u0627\u0641\u0631\u064a\u0646\u06af\u0632',
      subtitle: '\u0627\u0646\u06cc\u0648\u06ba \u062a\u0639\u0644\u064a\u0645 \u0627\u0648\u0631 \u0627\u067e\u0646\u0627 \u0628\u0631\u0627\u064a\u062c\u064a \u06aa\u06cc\u0627 \u062c\u0627\u0626\u06cc\u06ba',
      'Free Transport': '\u0645\u0641\u062a \u0646\u0642\u0644',
      'We provide safe transport to and from school.': '\u0627\u0646\u06cc \u062f\u0648\u0631\u0627\u0646 \u0627\u0645\u0646 \u0627\u062c\u0627\u062a \u0645\u0647\u06cc\u0627\u0644\u06cc\u062a \u0628\u06cc\u06ba\u06d4',
      'Free Education': '\u0622\u0632\u0627\u062f\u06cc \u062a\u0639\u0644\u06cc\u0645',
      'Free Books': '\u0631\u0627\u062f\u0627 \u06aa\u062a\u0627\u0628',
      'Science Lab': '\u0633\u0627\u0626\u0646\u0633 \u0644\u0627\u0628',
      'Computer Lab': '\u06a9\u0645\u067e\u06cc\u0648\u067e\u0679\u0631 \u0644\u0627\u0628',
      'Sports & Extracurricular Activities': '\u0633\u067e\u0648\u0631\u067e\u0633 \u0627\u0648\u0631 \u0632\u0645\u064a\u0646\u064a\u06ba',
      'Sports programs, teams and clubs with regular training.': '\u0627\u0633\u067e\u0648\u0631\u0632, \u0679\u06cc\u0645\u0632 \u0627\u0648\u0631 \u06aa\u0644\u0628\u0632 \u062c\u0648\u0627\u0628\u0631 \u062a\u0631\u0628\u06cc\u0627\u062a \u06aa\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc\u062a \u06cc\u0627\u0628\u06d4',
      'Study & Excursion Trips': '\u0633\u0627\u0626\u062a\u06cc \u062a\u0639\u0644\u06cc\u0645 \u0627\u0648\u0631 \u0633\u06cc\u0631\u06cc\u0633',
      'Separate Classrooms for Girls': '\u0627\u0644\u062a\u0627 \u0644\u06cc\u06ba \u06aa\u0644\u0627\u0633\u0631\u0648\u0645\u0632',
      'Solar System & CCTV Camera': '\u0633\u0648\u0644\u0631 \u0633\u0627\u0633\u0679\u0645 \u0627\u0648\u0631 CCTV \u06aa\u06cc \u06a9\u0627\u0645\u0631\u0627',
      'Short supportive text.': '\u0645\u0627\u062f\u062f\u0627 \u062a\u0635\u0646\u064a\u0641\u064a \u0645\u0633\u062a\u0646\u062f',
    },
  } as const;

  const langKey = language as keyof typeof translations;
  const t = { offerings: translations[langKey] } as const;

  // RTL detection for simple languages
  const RTL_LANGS = new Set(['Sindhi', 'Urdu']);
  const isRTL = RTL_LANGS.has(language);

  interface Offering {
    id: string;
    icon: any;
    title: string;
    description: string;
  isDual?: boolean;
  secondIcon?: any;
  }

  const offerings: Offering[] = [
    { id: 'transport', icon: Bus, title: t.offerings['Free Transport'], description: t.offerings['We provide safe transport to and from school.'] },
    { id: 'education', icon: BookOpen, title: t.offerings['Free Education'], description: t.offerings['Short supportive text.'] },
    { id: 'books', icon: Book, title: t.offerings['Free Books'], description: t.offerings['Short supportive text.'] },
    { id: 'science', icon: Microscope, title: t.offerings['Science Lab'], description: t.offerings['Short supportive text.'] },
    { id: 'computer', icon: Monitor, title: t.offerings['Computer Lab'], description: t.offerings['Short supportive text.'] },
    { id: 'sports', icon: Users, title: t.offerings['Sports & Extracurricular Activities'], description: t.offerings['Sports programs, teams and clubs with regular training.'] },
    { id: 'trips', icon: Bus, title: t.offerings['Study & Excursion Trips'], description: t.offerings['Short supportive text.'] },
    { id: 'girls', icon: ShieldCheck, title: t.offerings['Separate Classrooms for Girls'], description: t.offerings['Short supportive text.'] },
    { id: 'safety', icon: Zap, title: t.offerings['Solar System & CCTV Camera'], description: t.offerings['Short supportive text.'], isDual: true, secondIcon: Camera },
  ];

  return (
    <section id="offerings" className={`py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden ${isRTL ? 'rtl' : ''}`}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
             backgroundSize: '24px 24px'
           }} />

      {/* Sandpaper texture overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
           style={{
             backgroundImage: `
               radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0),
               linear-gradient(45deg, transparent 25%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 50%, transparent 50%, transparent 75%, rgba(0,0,0,0.05) 75%)
             `,
             backgroundSize: '12px 12px, 24px 24px'
           }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            {t.offerings.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t.offerings.subtitle}
          </motion.p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon as any;
            const SecondIcon = (offering as any).secondIcon as any;
            return (
              <motion.div
                key={(offering as any).id ?? index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="p-6">
                    {/* Icon/Image Section */}
                    <div className="mb-6 relative">
                      <div className={`flex items-center justify-center w-full h-32 ${isRTL ? 'flex-row-reverse' : ''}`}>
        {offering.isDual && SecondIcon ? (
                          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                              <Icon size={32} className="text-primary" />
                            </div>
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
          <SecondIcon size={32} className="text-secondary" />
                            </div>
                          </div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                          >
                            <Icon size={40} className="text-primary" />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <motion.h3
                        className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {(offering as any).title}
                      </motion.h3>
                      <motion.p
                        className="text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {(offering as any).description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default OfferingsSection;