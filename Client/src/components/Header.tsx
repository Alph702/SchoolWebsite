import { motion } from 'motion/react';
import { Menu, X, LogIn, Bell, Globe } from 'lucide-react';
import { useState } from 'react';
import schoolLogo from '../assets/school-logo.png'; // Ensure you have a logo image in the specified path
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";


interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

export function Header({ currentPage = 'home', onNavigate, language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    'English': {
      'Home': 'Home',
      'Mission': 'Mission',
      'Programs': 'Programs',
      'Contact': 'Contact',
      'Announcements': 'Announcements',
      'Login': 'Login',
      'Shah Abdul Latif': 'Shah Abdul Latif',
      'Higher Secondary School': 'Higher Secondary School',
    },
    'Sindhi': {
      'Home': 'گھر',
      'Mission': 'مشن',
      'Programs': 'پروگرام',
      'Contact': 'رابطو',
      'Announcements': 'اعلان',
      'Login': 'لاگ ان',
      'Shah Abdul Latif': 'شاه عبداللطيف',
      'Higher Secondary School': 'اعلي ثانوي اسڪول',
    },
    'Urdu': {
      'Home': 'گھر',
      'Mission': 'مشن',
      'Programs': 'پروگرام',
      'Contact': 'رابطہ',
      'Announcements': 'اعلانات',
      'Login': 'لاگ ان',
      'Shah Abdul Latif': 'شاہ عبداللطیف',
      'Higher Secondary School': 'ہائر سیکنڈری اسکول',
    }
  };

  const t = translations[language as keyof typeof translations];

  const menuItems = [
    { name: t.Home, href: '#home', page: 'home' },
    { name: t.Mission, href: '#mission', page: 'home' },
    { name: t.Programs, href: '#programs', page: 'home' },
    { name: t.Contact, href: '#contact', page: 'home' },
    { name: t.Announcements, href: '#announcements', page: 'announcements' },
  ];

  const handleNavClick = (item: any) => {
    if (onNavigate) {
      if (item.page === 'home' && currentPage !== 'home') {
        onNavigate('home');
        // Small delay to allow page transition, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (item.page !== 'home') {
        onNavigate(item.page);
      } else {
        // Already on home page, just scroll to section
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    if (onNavigate) {
      onNavigate('login');
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick({ name: 'Home', href: '#home', page: 'home' })}
            className="flex items-center space-x-3"
          >
            <img 
              src={schoolLogo} 
              alt="Shah Abdul Latif Higher Secondary School" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <div className="hidden lg:block">
              <h1 className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">{t['Shah Abdul Latif']}</h1>
              <p className="text-sm text-muted-foreground leading-tight">{t['Higher Secondary School']}</p>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('English')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('Sindhi')}>
                  Sindhi
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('Urdu')}>
                  Urdu
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: menuItems.length * 0.1 }}
            >
              <Button
                onClick={handleLoginClick}
                variant="outline"
                size="sm"
                className="ml-4 flex items-center gap-2"
              >
                <LogIn size={16} />
                {t.Login}
              </Button>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background border-t border-border"
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
            {/* Language Selector for Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                >
                  <Globe size={16} />
                  {language}
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setLanguage('English')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('Sindhi')}>
                  Sindhi
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('Urdu')}>
                  Urdu
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Login Button */}
            <motion.button
              onClick={handleLoginClick}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
              className="flex items-center gap-2 w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
            >
              <LogIn size={16} />
              {t.Login}
            </motion.button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}