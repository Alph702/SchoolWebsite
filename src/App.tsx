import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  return (
    <div className="bg-background text-foreground font-sans">
      <Header
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/login" element={<LoginPage language={language} />} />
            <Route path="/announcements" element={<AnnouncementsPage onBack={() => {}} language={language} />} />
            <Route
              path="/subject/:subjectName"
              element={
                <>
                  <div className="h-16 sm:h-20" />
                  <SubjectPage language={language} />
                </>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer language={language} />
    </div>
  );
}
