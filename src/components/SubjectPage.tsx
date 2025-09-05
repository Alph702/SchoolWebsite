import React from 'react';
import { motion } from 'motion/react';
import { subjects } from '../data/subjects';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageWithFallback } from './functions/ImageWithFallback';

interface SubjectPageProps {
  language: string;
}

const SubjectPage: React.FC<SubjectPageProps> = ({ language }) => {
  const subjectName = window.location.pathname.split('/').pop();
  const subject = subjects.find((s) => s.id === subjectName);

  if (!subject) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-center">Subject not found</h1>
      </div>
    );
  }

  const title = subject.title[language as keyof typeof subject.title];
  const description = subject.description[language as keyof typeof subject.description];
  const keyTopics = subject.keyTopics[language as keyof typeof subject.keyTopics];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="overflow-hidden">
          <CardHeader className="p-0">
            <ImageWithFallback
              src={subject.image}
              alt={title}
              className="w-full h-64 object-cover"
            />
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-8">{title}</CardTitle>
            <p className="text-lg text-muted-foreground mb-12">{description}</p>

            <h3 className="text-2xl md:text-3xl font-bold mb-8">Key Topics</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyTopics.map((topic, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  <span className="text-lg ml-2">{topic}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SubjectPage;