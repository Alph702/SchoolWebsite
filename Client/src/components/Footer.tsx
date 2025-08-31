import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import schoolLogo from '../assets/school-logo.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      'About Us': 'About Us',
      'Admissions': 'Admissions',
      'Academic Calendar': 'Academic Calendar',
      'Faculty': 'Faculty',
      'Student Life': 'Student Life',
      'News & Events': 'News & Events',
      'Programs': 'Programs',
      'Pre-Primary': 'Pre-Primary',
      'Primary Education': 'Primary Education',
      'Secondary Education': 'Secondary Education',
      'Higher Secondary': 'Higher Secondary',
      'Extracurricular': 'Extracurricular',
      'Special Programs': 'Special Programs',
      'Stay Connected': 'Stay Connected',
      'Follow us on social media for updates and news.': 'Follow us on social media for updates and news.',
      'Subscribe to Newsletter': 'Subscribe to Newsletter',
      'Enter your email': 'Enter your email',
      'Subscribe': 'Subscribe',
      'All rights reserved': 'All rights reserved',
      'Privacy Policy': 'Privacy Policy',
      'Terms of Service': 'Terms of Service',
    },
    'Sindhi': {
      'Shah Abdul Latif': 'شاهه عبداللطيف',
      'Higher Secondary School': 'هاءِ سيڪنڊري اسڪول',
      'Committed to excellence in education, nurturing young minds for a brighter future through quality teaching and moral development.': 'تعليم ۾ بهترين ڪارڪردگي، معياري تدريس ۽ اخلاقي ترقي ذريعي نوجوان ذهنن کي روشن مستقبل لاءِ پرورش ڏيڻ لاءِ پابند.',
      'Quick Links': 'فوري لنڪس',
      'About Us': 'اسان جي باري ۾',
      'Admissions': 'داخلا',
      'Academic Calendar': 'تعليمي ڪيلنڊر',
      'Faculty': 'فيڪلٽي',
      'Student Life': 'شاگردن جي زندگي',
      'News & Events': 'خبرون ۽ تقريبون',
      'Programs': 'پروگرام',
      'Pre-Primary': 'پري پرائمري',
      'Primary Education': 'پرائمري تعليم',
      'Secondary Education': 'سيڪنڊري تعليم',
      'Higher Secondary': 'هاءِ سيڪنڊري',
      'Extracurricular': 'اضافي سرگرميون',
      'Special Programs': 'خاص پروگرام',
      'Stay Connected': 'رابطي ۾ رهو',
      'Follow us on social media for updates and news.': 'اپڊيٽس ۽ خبرن لاءِ سوشل ميڊيا تي اسان جي پيروي ڪريو.',
      'Subscribe to Newsletter': 'نيوز ليٽر جي رجسٽريشن ڪريو',
      'Enter your email': 'پنهنجي ايميل داخل ڪريو',
      'Subscribe': 'رجسٽر ٿيو',
      'All rights reserved': 'سڀ حق محفوظ آهن',
      'Privacy Policy': 'رازداري پاليسي',
      'Terms of Service': 'خدمت جا شرط',
    },
    'Urdu': {
      'Shah Abdul Latif': 'شاہ عبداللطیف',
      'Higher Secondary School': 'ہائی سیکنڈری اسکول',
      'Committed to excellence in education, nurturing young minds for a brighter future through quality teaching and moral development.': 'تعلیم میں بہترین کارکردگی، معیاری تدریس اور اخلاقی ترقی کے ذریعے نوجوان ذہنوں کو روشن مستقبل کے لیے پرورش دینے کے لیے پابند عہد۔',
      'Quick Links': 'فوری لنکس',
      'About Us': 'ہمارے بارے میں',
      'Admissions': 'داخلے',
      'Academic Calendar': 'تعلیمی کیلنڈر',
      'Faculty': 'فیکلٹی',
      'Student Life': 'طلبہ کی زندگی',
      'News & Events': 'خبریں اور تقریبات',
      'Programs': 'پروگرامز',
      'Pre-Primary': 'پری پرائمری',
      'Primary Education': 'پرائمری تعلیم',
      'Secondary Education': 'سیکنڈری تعلیم',
      'Higher Secondary': 'ہائی سیکنڈری',
      'Extracurricular': 'اضافی سرگرمیاں',
      'Special Programs': 'خصوصی پروگرامز',
      'Stay Connected': 'رابطے میں رہیں',
      'Follow us on social media for updates and news.': 'اپڈیٹس اور خبروں کے لیے سوشل میڈیا پر ہماری پیروی کریں۔',
      'Subscribe to Newsletter': 'نیوز لیٹر کی رجسٹریشن کریں',
      'Enter your email': 'اپنا ای میل درج کریں',
      'Subscribe': 'رجسٹر ہوں',
      'All rights reserved': 'جملہ حقوق محفوظ ہیں',
      'Privacy Policy': 'رازداری کی پالیسی',
      'Terms of Service': 'خدمت کی شرائط',
    },
  };

  const t = translations[language as keyof typeof translations];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: t['About Us'], href: "#" },
    { name: t['Admissions'], href: "#" },
    { name: t['Academic Calendar'], href: "#" },
    { name: t['Faculty'], href: "#" },
    { name: t['Student Life'], href: "#" },
    { name: t['News & Events'], href: "#" }
  ];

  const programs = [
    { name: t['Pre-Primary'], href: "#" },
    { name: t['Primary Education'], href: "#" },
    { name: t['Secondary Education'], href: "#" },
    { name: t['Higher Secondary'], href: "#" },
    { name: t['Extracurricular'], href: "#" },
    { name: t['Special Programs'], href: "#" }
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
                  className="flex items-center space-x-3 text-sm"
                >
                  <MapPin size={16} className="opacity-80" />
                  <span className="opacity-80">Mirpur Khas, Sindh, Pakistan</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-sm"
                >
                  <Phone size={16} className="opacity-80" />
                  <span className="opacity-80">+92 (243) 123-4567</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-sm"
                >
                  <Mail size={16} className="opacity-80" />
                  <span className="opacity-80">info@salschool.edu.pk</span>
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
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#fff" }}
                      className="text-sm opacity-80 hover:opacity-100 transition-all duration-200"
                    >
                      {link.name}
                    </motion.a>
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
                    <motion.a
                      href={program.href}
                      whileHover={{ x: 5, color: "#fff" }}
                      className="text-sm opacity-80 hover:opacity-100 transition-all duration-200"
                    >
                      {program.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
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
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm opacity-80 mb-4 sm:mb-0">
                © 2025 {t['Shah Abdul Latif']} {t['Higher Secondary School']}. {t['All rights reserved']}.
              </p>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {t['Privacy Policy']}
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {t['Terms of Service']}
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}