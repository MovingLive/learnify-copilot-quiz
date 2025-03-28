import { Card as CardUI } from "@/components/ui/card";
import { Card } from "@/data/quizData";
import { Zap } from "lucide-react";
import React from "react";

interface QuizCardProps {
  card: Card;
  isDragging?: boolean;
  showPower?: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({
  card,
  isDragging = false,
  showPower = false,
}) => {
  const getPowerLevelClass = (power: number) => {
    switch (power) {
      case 1:
        return "power-level-1";
      case 2:
        return "power-level-2";
      case 3:
        return "power-level-3";
      case 4:
        return "power-level-4";
      default:
        return "power-level-1";
    }
  };

  const renderPowerIcons = (power: number) => {
    const icons = [];
    for (let i = 0; i < power; i++) {
      icons.push(<Zap key={i} className="w-4 h-4 text-yellow-500" />);
    }
    return icons;
  };

  const powerClass = getPowerLevelClass(card.power);

  return (
    <CardUI
      className={`p-4 cursor-grab active:cursor-grabbing card-shadow transition-all duration-200
        ${isDragging ? "ring-2 ring-primary shadow-lg scale-105" : ""}
        ${showPower ? powerClass : "bg-white"}`}
    >
      <div className="flex justify-between items-start">
        <div className="text-lg font-medium">{card.text}</div>
        {showPower && (
          <div className={`flex items-center ml-2 p-1 rounded-md`}>
            <div className="flex">{renderPowerIcons(card.power)}</div>
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
