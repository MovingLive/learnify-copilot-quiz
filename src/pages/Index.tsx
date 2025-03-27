
import React, { useState } from 'react';
import ThemeSelector from '@/components/ThemeSelector';
import QuizView from '@/components/QuizView';
import quizData from '@/data/quizData';

const Index = () => {
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  const handleSelectTheme = (themeId: string) => {
    setSelectedThemeId(themeId);
  };

  const handleBack = () => {
    setSelectedThemeId(null);
  };

  const handleComplete = (themeId: string) => {
    setProgress(prev => ({
      ...prev,
      [themeId]: true
    }));
  };

  const selectedTheme = quizData.themes.find(theme => theme.id === selectedThemeId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      {selectedTheme ? (
        <QuizView 
          theme={selectedTheme} 
          onBack={handleBack} 
          onComplete={handleComplete}
        />
      ) : (
        <ThemeSelector 
          themes={quizData.themes} 
          onSelectTheme={handleSelectTheme} 
          progress={progress}
        />
      )}
    </div>
  );
};

export default Index;
