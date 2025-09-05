import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import schoolLogo from '../assets/school-logo.png';
import { ImageWithFallback } from './functions/ImageWithFallback';

interface FooterProps {
  language: string;
}

export function Footer({ language }: FooterProps) {
  const translations = {
    'English': {
      'Shah Abdul Latif': 'Shah Abdul Latif',
      'Higher Secondary School': 'Higher Secondary School',
      'Committed to excellence in education, nurturing young minds for a brighter future through quality teaching and moral development.': 'Committed to excellence in education, nurturing young minds for a brighter future through quality teaching and moral development.',
      'Quick Links': 'Quick Links',
      'Home': 'Home',
      'Our Mission': 'Our Mission',
      'Announcements': 'Announcements',
      'Our Offerings': 'Our Offerings',
      'Contact Us': 'Contact Us',
      'Programs': 'Programs',
      'Computer Science': 'Computer Science',
      'Science': 'Science',
      'Math': 'Math',
      'English': 'English',
      'Social Studies': 'Social Studies',
      'Languages & Islamic Studies': 'Languages & Islamic Studies',
      'Stay Connected': 'Stay Connected',
      'Follow us on social media for the latest updates and school news.': 'Follow us on social media for the latest updates and school news.',
      'All rights reserved': 'All rights reserved',
      'Privacy Policy': 'Privacy Policy',
      'Terms of Service': 'Terms of Service',
    },
    'Sindhi': {
      'Shah Abdul Latif': 'شاهه عبداللطيف',
      'Higher Secondary School': 'هاءِ سيڪنڊري اسڪول',
      'Committed to excellence in education, nurturing young minds for a brighter future through quality teaching and moral development.': 'تعليم ۾ بهترين ڪارڪردگي، معياري تدريس ۽ اخلاقي ترقي ذريعي نوجوان ذهنن کي روشن مستقبل لاءِ پرورش ڏيڻ لاءِ پابند.',
      'Quick Links': 'فوري لنڪس',
      'Home': 'گھر',
      'Our Mission': 'اسان جو مشن',
      'Announcements': 'اعلان',
      'Our Offerings': 'اسان جون سهولتون',
      'Contact Us': 'اسان سان رابطو ڪريو',
      'Programs': 'پروگرام',
      'Computer Science': 'ڪمپيوٽر سائنس',
      'Science': 'سائنس',
      'Math': 'رياضي',
      'English': 'انگريزي',
      'Social Studies': 'سماجي اڀياس',
      'Languages & Islamic Studies': 'ٻوليون ۽ اسلامي اڀياس',
      'Stay Connected': 'رابطي ۾ رهو',
      'Follow us on social media for the latest updates and school news.': 'اپڊيٽس ۽ خبرن لاءِ سوشل ميڊيا تي اسان جي پيروي ڪريو.',
      'All rights reserved': 'سڀ حق محفوظ آهن',
      'Privacy Policy': 'رازداري پاليسي',
      'Terms of Service': 'خدمت جا شرط',
    },
    'Urdu': {
      'Shah Abdul Latif': 'شاہ عبداللطیف',
      'Higher Secondary School': 'ہائی سیکنڈری اسکول',
      'Committed to excellence in education, nurturing young minds for a brighter future through quality teaching and moral development.': 'تعلیم میں بہترین کارکردگی، معیاری تدریس اور اخلاقی ترقی کے ذریعے نوجوان ذہنوں کو روشن مستقبل کے لیے پرورش دینے کے لیے پابند عہد۔',
      'Quick Links': 'فوری لنکس',
      'Home': 'گھر',
      'Our Mission': 'ہمارا مشن',
      'Announcements': 'اعلانات',
      'Our Offerings': 'ہماری سہولیات',
      'Contact Us': 'ہم سے رابطہ کریں',
      'Programs': 'پروگرامز',
      'Computer Science': 'کمپیوٹر سائنس',
      'Science': 'سائنس',
      'Math': 'ریاضی',
      'English': 'انگریزی',
      'Social Studies': 'سماجی علوم',
      'Languages & Islamic Studies': 'زبانیں اور اسلامی علوم',
      'Stay Connected': 'رابطے میں رہیں',
      'Follow us on social media for the latest updates and school news.': 'اپڈیٹس اور خبروں کے لیے سوشل میڈیا پر ہماری پیروی کریں۔',
      'All rights reserved': 'جملہ حقوق محفوظ ہیں',
      'Privacy Policy': 'رازداری کی پالیسی',
      'Terms of Service': 'خدمت کی شرائط',
    },
  };

  const t = translations[language as keyof typeof translations];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100063969792466", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: t['Home'], href: "/#home" },
    { name: t['Our Mission'], href: "/#mission" },
    { name: t['Programs'], href: "/#programs" },
    { name: t['Our Offerings'], href: "/#offerings" },
    { name: t['Announcements'], href: "/announcements" },
    { name: t['Contact Us'], href: "/#contact" }
  ];

  const programs = [
    { name: t['Computer Science'], href: "/subject/Computer-Science" },
    { name: t['Science'], href: "/subject/Science" },
    { name: t['Math'], href: "/subject/Math" },
    { name: t['English'], href: "/subject/English" },
    { name: t['Social Studies'], href: "/subject/SST" },
    { name: t['Languages & Islamic Studies'], href: "/subject/Languages-&-Islamic-Studies" },
  ];

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnRzJTIwZ3JhZHVhdGlvbiUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1NjUyNDY4MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Happy students graduation celebration"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Animated background texture */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 5px,
                rgba(255,255,255,0.1) 5px,
                rgba(255,255,255,0.1) 10px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 3px,
                rgba(255,255,255,0.05) 3px,
                rgba(255,255,255,0.05) 6px
              )
            `,
            backgroundSize: '40px 40px, 20px 20px'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.img 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  src={schoolLogo} 
                  alt="Shah Abdul Latif Higher Secondary School" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold">{t['Shah Abdul Latif']}</h3>
                  <p className="text-sm opacity-80">{t['Higher Secondary School']}</p>
                </div>
              </div>
              
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                {t['Committed to excellence in education, nurturing young minds for a brighter future through quality teaching and moral development.']}
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-sm"
                >
                  <MapPin size={16} className="opacity-80 mt-1 flex-shrink-0" />
                  <span className="opacity-80">Village Haji Khair Muhammad Laghari, Near Laghari Petrol Pump, Mirwah Road Mirpurkhas, Sindh, Pakistan</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-sm"
                >
                  <Phone size={16} className="opacity-80" />
                  <span className="opacity-80">+92 336 3273937</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-sm"
                >
                  <Mail size={16} className="opacity-80" />
                  <span className="opacity-80">schoolsal52gmail.com</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-sm"
                >
                  <Clock size={16} className="opacity-80" />
                  <span className="opacity-80">Mon - Sat: 8:00 AM - 2:00 PM</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">{t['Quick Links']}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="text-sm opacity-80 hover:opacity-100 transition-all duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">{t['Programs']}</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={program.href}
                      className="text-sm opacity-80 hover:opacity-100 transition-all duration-200 hover:underline"
                    >
                      {program.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">{t['Stay Connected']}</h3>
              
              <p className="text-sm opacity-80 mb-6">
                {t['Follow us on social media for the latest updates and school news.']}
              </p>

              {/* Social links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="opacity-80" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
              <p className="text-sm opacity-80 mb-4 sm:mb-0">
                © {new Date().getFullYear()} {t['Shah Abdul Latif']} {t['Higher Secondary School']}. {t['All rights reserved']}.
              </p>
              <div className="flex space-x-6">
                <Link
                  to="#"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200 hover:underline"
                >
                  {t['Privacy Policy']}
                </Link>
                <Link
                  to="#"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200 hover:underline"
                >
                  {t['Terms of Service']}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}