
import React from 'react';
import { Card } from '@/data/quizData';
import { Card as CardUI } from "@/components/ui/card";
import { Battery } from 'lucide-react';

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
            <Battery className="w-5 h-5 mr-1" />
            <span className="font-semibold">{card.power}</span>
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
