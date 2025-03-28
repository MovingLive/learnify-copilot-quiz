
import React from 'react';
import { Theme } from '@/data/quizData';
import { Card } from '@/components/ui/card';
import { Code, MessageCircle, MessageSquare, GitBranch, CornerRightDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeSelectorProps {
  themes: Theme[];
  onSelectTheme: (themeId: string) => void;
  progress: Record<string, boolean>;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ themes, onSelectTheme, progress }) => {

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  const getCompletedCount = () => {
    return Object.values(progress).filter(Boolean).length;
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gradient bg-gradient-to-r from-copilot-purple to-copilot-blue bg-clip-text text-transparent">
          GitHub Copilot Quiz
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Apprends les meilleures pratiques de GitHub Copilot de manière ludique au travers d'un quiz.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="bg-white p-3 rounded-lg shadow-sm inline-flex items-center">
            <div className="flex items-center text-sm">
              <span className="font-medium text-gray-700">Progression: </span>
              <span className="ml-2 font-bold text-copilot-purple">{getCompletedCount()}/{themes.length}</span>
            </div>
            <div className="ml-3 w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-copilot-purple to-copilot-blue"
                style={{ width: `${(getCompletedCount() / themes.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center space-x-2">
        <div className="text-lg font-medium">Sélectionne un thème :</div>
        <CornerRightDown className="h-5 w-5 text-copilot-purple animate-bounce" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {themes.map((theme) => {
          const isCompleted = progress[theme.id];

          return (
            <Card
              key={theme.id}
              className={`p-6 hover:shadow-md transition-all border-2 cursor-pointer
                ${isCompleted ? 'border-copilot-green bg-green-50' : 'border-gray-200 hover:border-copilot-purple'}`}
              onClick={() => onSelectTheme(theme.id)}
            >
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${isCompleted ? 'bg-copilot-green text-white' : 'bg-copilot-purple/10 text-copilot-purple'}`}>
                  {getIconComponent(theme.icon)}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{theme.title}</h3>
                  <p className="text-gray-600 mt-1">{theme.description}</p>
                  <Button
                    className={`mt-4 ${isCompleted ? 'bg-green-500 hover:bg-green-600' : 'bg-copilot-purple hover:bg-copilot-purple/90'}`}
                    size="sm"
                  >
                    {isCompleted ? 'Completed! Try Again' : 'Start Quiz'}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSelector;
