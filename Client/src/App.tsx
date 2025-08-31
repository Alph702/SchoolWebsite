import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MissionSection } from './components/MissionSection';
import { ProgramsSection } from './components/ProgramsSection';
import { OfferingsSection } from './components/OfferingsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoginPage } from './components/LoginPage';
import { AnnouncementsPage } from './components/AnnouncementsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('English');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage language={language} />;
      case 'announcements':
        return <AnnouncementsPage onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <HeroSection language={language} />
            <MissionSection language={language} />
            <ProgramsSection language={language} />
            <OfferingsSection language={language} />
            <ContactSection language={language} />
          </>
        );
    }
  };

  return (
    <div className="bg-background text-foreground font-sans">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        language={language} 
        setLanguage={setLanguage} 
      />
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer language={language} />
    </div>
  );
}