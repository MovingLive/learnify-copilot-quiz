
import React from 'react';
import { Card } from '@/data/quizData';
import { Card as CardUI } from "@/components/ui/card";
import { Battery, ArrowDown, ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';

interface QuizCardProps {
  card: Card;
  isDragging?: boolean;
  showPower?: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  card, 
  isDragging = false,
  showPower = false
}) => {
  const getPowerLevelClass = (power: number) => {
    switch (power) {
      case 1: return 'power-level-1';
      case 2: return 'power-level-2';
      case 3: return 'power-level-3';
      case 4: return 'power-level-4';
      default: return 'power-level-1';
    }
  };

  const getPowerIcon = (power: number) => {
    switch (power) {
      case 1: return <ArrowDown className="w-5 h-5 text-gray-700" />;
      case 2: return <ArrowRight className="w-5 h-5 text-blue-600" />;
      case 3: return <ArrowUp className="w-5 h-5 text-purple-600" />;
      case 4: return <ArrowUpRight className="w-5 h-5 text-green-600" />;
      default: return <ArrowDown className="w-5 h-5" />;
    }
  };

  const powerClass = getPowerLevelClass(card.power);
  
  return (
    <CardUI 
      className={`p-4 cursor-grab active:cursor-grabbing card-shadow transition-all duration-200 
        ${isDragging ? 'ring-2 ring-primary shadow-lg scale-105' : ''}
        ${showPower ? powerClass : 'bg-white'}`}
    >
      <div className="flex justify-between items-start">
        <div className="text-lg font-medium">{card.text}</div>
        {showPower && (
          <div className={`flex items-center ml-2 p-1 rounded-md`}>
            {getPowerIcon(card.power)}
            <span className="font-semibold ml-1">{card.power}</span>
          </div>
        )}
      </div>
      
      {showPower && (
        <div className="mt-3 text-sm">
          <p>{card.explanation}</p>
        </div>
      )}
    </CardUI>
  );
};

export default QuizCard;
