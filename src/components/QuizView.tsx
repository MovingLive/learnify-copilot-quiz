
import React, { useEffect, useState } from 'react';
import { Card, Theme } from '@/data/quizData';
import DraggableCardList from './DraggableCardList';
import QuizCard from './QuizCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shuffle, CheckCircle, XCircle, HelpCircle, Battery, ArrowDown, ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import { useToast } from '@/hooks/use-toast';

interface QuizViewProps {
  theme: Theme;
  onBack: () => void;
  onComplete: (themeId: string) => void;
}

const QuizView: React.FC<QuizViewProps> = ({ theme, onBack, onComplete }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Shuffle the cards initially
    const shuffledCards = [...theme.cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setSubmitted(false);
    setIsCorrect(false);
  }, [theme]);

  const handleSort = (sortedCards: Card[]) => {
    setCards(sortedCards);
  };

  const handleShuffle = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    // Check if the cards are in correct order (by power level)
    const isInCorrectOrder = cards.every((card, index, array) => {
      if (index === 0) return true;
      return card.power > array[index - 1].power;
    });

    setSubmitted(true);
    setIsCorrect(isInCorrectOrder);

    if (isInCorrectOrder) {
      toast({
        title: "Great job!",
        description: "You've correctly ordered the techniques from least to most effective!",
      });
      onComplete(theme.id);
    } else {
      toast({
        title: "Not quite right",
        description: "Try sorting the techniques by their effectiveness (power level).",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    handleShuffle();
    setSubmitted(false);
  };

  // Power level legend indicators
  const PowerLevelLegend = () => (
    <div className="bg-white p-4 mb-6 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium mb-2">Effectiveness Scale:</h3>
      <div className="grid grid-cols-4 gap-2">
        {[
          { level: 1, icon: <ArrowDown className="h-4 w-4" />, label: "Least Effective", color: "bg-gray-100" },
          { level: 2, icon: <ArrowRight className="h-4 w-4" />, label: "Somewhat Effective", color: "bg-copilot-light-blue" },
          { level: 3, icon: <ArrowUp className="h-4 w-4" />, label: "Very Effective", color: "bg-copilot-light-purple" },
          { level: 4, icon: <ArrowUpRight className="h-4 w-4" />, label: "Most Effective", color: "bg-copilot-light-green" }
        ].map((item) => (
          <div key={item.level} className={`flex items-center p-2 rounded-md ${item.color} border`}>
            <div className="flex items-center">
              {item.icon}
              <span className="ml-1 font-semibold">{item.level}</span>
            </div>
            <span className="ml-2 text-xs hidden md:inline">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container px-4 py-8 mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Themes
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleShuffle}
          disabled={submitted}
        >
          <Shuffle className="h-4 w-4 mr-2" />
          Shuffle
        </Button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-2xl font-bold mb-2">{theme.title}</h2>
        <p className="text-gray-600 mb-4">{theme.description}</p>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-md flex items-start">
          <HelpCircle className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
          <p className="ml-2 text-blue-700 text-sm">
            Sort the cards from <strong>least effective (1)</strong> to <strong>most effective (4)</strong> techniques.
            Drag and drop to reorder.
          </p>
        </div>
      </div>

      {/* Add the power level legend */}
      <PowerLevelLegend />

      {submitted && (
        <div className={`p-4 mb-6 rounded-md flex items-start ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          {isCorrect ? (
            <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
          ) : (
            <XCircle className="text-red-500 h-5 w-5 mt-0.5 flex-shrink-0" />
          )}
          <div className="ml-2">
            <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? 'Correct!' : 'Not quite right!'}
            </p>
            <p className={`text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect 
                ? "You've ordered the techniques correctly from least to most effective."
                : "Try to order the techniques from least effective (power level 1) to most effective (power level 4)."}
            </p>
          </div>
        </div>
      )}

      {!submitted ? (
        <DraggableCardList cards={cards} onSort={handleSort} />
      ) : (
        <div className="space-y-4">
          {[...cards].sort((a, b) => a.power - b.power).map((card) => (
            <QuizCard key={card.id} card={card} showPower={true} />
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-center">
        {!submitted ? (
          <Button onClick={handleSubmit} className="bg-copilot-purple hover:bg-purple-600">
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleReset} className="bg-copilot-blue hover:bg-blue-600">
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizView;
