import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContactSectionProps {
  language: string;
}

export function ContactSection({ language }: ContactSectionProps) {
  const translations = {
    'English': {
      'Get In Touch': 'Get In Touch',
      'Have questions about our programs or admissions? We\'d love to hear from you. Reach out to us and let\'s start a conversation about your child\'s future.': 'Have questions about our programs or admissions? We\'d love to hear from you. Reach out to us and let\'s start a conversation about your child\'s future.',
      'Contact Information': 'Contact Information',
      'Feel free to reach out to us through any of these channels. Our staff is ready to assist you with any questions you may have.': 'Feel free to reach out to us through any of these channels. Our staff is ready to assist you with any questions you may have.',
      'Address': 'Address',
      'Phone': 'Phone',
      'Email': 'Email',
      'Hours': 'Hours',
      'Our Campus': 'Our Campus',
      'Send us a Message': 'Send us a Message',
      'Your Name': 'Your Name',
      'Your Email': 'Your Email',
      'Phone Number': 'Phone Number',
      'Your Message': 'Your Message',
      'Send Message': 'Send Message',
    },
    'Sindhi': {
      'Get In Touch': 'رابطو ڪريو',
      'Have questions about our programs or admissions? We\'d love to hear from you. Reach out to us and let\'s start a conversation about your child\'s future.': 'ڇا توھان وٽ اسان جي پروگرامن يا داخلائن بابت سوال آھن؟ اسان کي توھان کان ٻڌي خوشي ٿيندي. اسان سان رابطو ڪريو ۽ اچو ته توھان جي ٻار جي مستقبل بابت گفتگو شروع ڪريون.',
      'Contact Information': 'رابطي جي معلومات',
      'Feel free to reach out to us through any of these channels. Our staff is ready to assist you with any questions you may have.': 'انهن مان ڪنهن به چينل ذريعي اسان سان رابطو ڪرڻ لاءِ آزاد محسوس ڪريو. اسان جو عملو توهان جي ڪنهن به سوالن ۾ مدد ڪرڻ لاءِ تيار آهي.',
      'Address': 'پتو',
      'Phone': 'فون',
      'Email': 'ايميل',
      'Hours': 'ڪلاڪ',
      'Our Campus': 'اسان جو ڪيمپس',
      'Send us a Message': 'اسان کي پيغام موڪليو',
      'Your Name': 'توهان جو نالو',
      'Your Email': 'توهان جي ايميل',
      'Phone Number': 'فون نمبر',
      'Your Message': 'توهان جو پيغام',
      'Send Message': 'پيغام موڪليو',
    },
    'Urdu': {
      'Get In Touch': 'رابطہ کریں',
      'Have questions about our programs or admissions? We\'d love to hear from you. Reach out to us and let\'s start a conversation about your child\'s future.': 'کیا آپ کے پاس ہمارے پروگراموں یا داخلوں کے بارے میں سوالات ہیں؟ ہمیں آپ سے سن کر خوشی ہوگی۔ ہم سے رابطہ کریں اور آئیے آپ کے بچے کے مستقبل کے بارے میں بات چیت شروع کریں۔',
      'Contact Information': 'رابطے کی معلومات',
      'Feel free to reach out to us through any of these channels. Our staff is ready to assist you with any questions you may have.': 'ان میں سے کسی بھی چینل کے ذریعے ہم سے بلا جھجھک رابطہ کریں۔ ہمارا عملہ آپ کے کسی بھی سوال میں آپ کی مدد کے لیے تیار ہے۔',
      'Address': 'پتہ',
      'Phone': 'فون',
      'Email': 'ای میل',
      'Hours': 'اوقات',
      'Our Campus': 'ہمارا کیمپس',
      'Send us a Message': 'ہمیں ایک پیغام بھیجیں',
      'Your Name': 'آپ کا نام',
      'Your Email': 'آپ کا ای میل',
      'Phone Number': 'فون نمبر',
      'Your Message': 'آپ کا پیغام',
      'Send Message': 'پیغام بھیجیں',
    },
  };

  const t = translations[language as keyof typeof translations];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Shah Abdul Latif Road, Khairpur, Sindh, Pakistan",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+92 (243) 123-4567",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@salschool.edu.pk",
      color: "text-orange-500"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon - Fri: 8:00 AM - 3:00 PM",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated background with sandpaper texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-background to-secondary/20">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                rgba(0,0,0,0.1) 1px,
                rgba(0,0,0,0.1) 2px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 1px,
                rgba(0,0,0,0.05) 1px,
                rgba(0,0,0,0.05) 2px
              )
            `,
            backgroundSize: '30px 30px'
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
              {t['Get In Touch']}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t['Have questions about our programs or admissions? We\'d love to hear from you. Reach out to us and let\'s start a conversation about your child\'s future.']}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t['Contact Information']}</h3>
              <p className="text-muted-foreground mb-8">
                {t['Feel free to reach out to us through any of these channels. Our staff is ready to assist you with any questions you may have.']}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`flex-shrink-0 w-12 h-12 ${info.color} bg-current/10 rounded-lg flex items-center justify-center`}
                  >
                    <info.icon size={24} className={info.color} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* School entrance image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 rounded-xl border border-border/50 bg-primary/90 p-4 w-full max-w-md text-white"
            >
              <div className="flex items-center space-x-2 mb-2">
                <MapPin size={16} />
                <span className="text-sm font-medium">{t['Our Campus']}</span>
              </div>
              <div className="rounded-lg overflow-hidden border border-white/20 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.773739053261!2d69.00400499999999!3d25.479229599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394eaf1b620763e1%3A0xba814ecab36bb7d!2sSHAH%20ABDUL%20LATIF%20HIGH%20SCHOOL!5e0!3m2!1sen!2s!4v1756613602023!5m2!1sen!2s"
                  width="100%"
                  height="200"
                  style={{ border: 0, width: '100%', height: '200px', display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 relative overflow-hidden">
              {/* Decorative background */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,0,0,0.2) 2px, transparent 2px), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.2) 2px, transparent 2px)`,
                  backgroundSize: '50px 50px'
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Enter your email"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Enter your phone"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[120px] resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" size="lg" className="w-full">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        Send Message
                      </motion.span>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}