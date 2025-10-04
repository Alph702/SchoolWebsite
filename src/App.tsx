import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MissionSection } from './components/MissionSection';
import { ProgramsSection } from './components/ProgramsSection';
import { OfferingsSection } from './components/OfferingsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoginPage } from './components/LoginPage';
import { AnnouncementsPage } from './components/AnnouncementsPage';
import SubjectPage from './components/SubjectPage';
import Loader from './components/Loader';
import { Analytics } from '@vercel/analytics/react';

function HomePage({ language }: { language: string }) {
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

export default function App() {
  const [language, setLanguage] = useState('English');
  const [pathname, setPathname] = useState(window.location.pathname);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);

    if (sessionStorage.getItem('isInitialLoadComplete')) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('isInitialLoadComplete', 'true');
      }, 7000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('popstate', handlePopState);
      };
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    const path = pathname;
    if (path === '/login') {
      return <LoginPage language={language} />;
    }
    if (path === '/announcements') {
      return <AnnouncementsPage onBack={() => {}} language={language} />;
    }
    if (path.startsWith('/subject/')) {
      return (
        <>
          <div className="h-16 sm:h-20" />
          <SubjectPage language={language} />
        </>
      );
    }
    return <HomePage language={language} />;
  };
  


  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <div className={`bg-background text-foreground font-sans transition-opacity duration-500 ${!isLoading ? 'opacity-100' : 'opacity-0'}`}>
        <Header
          language={language}
          setLanguage={setLanguage}
        />
        <main>
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>
        </main>
        <Footer language={language} />
        <Analytics />
      </div>
    </>
  );
}
