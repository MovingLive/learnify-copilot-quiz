import { Button } from "@/components/ui/button";
import { Card, Theme } from "@/data/quizData";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  Shuffle,
  TrendingDown,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import DraggableCardList from "./DraggableCardList";
import QuizCard from "./QuizCard";

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
        title: "Bravo!",
        description:
          "Tu as correctement classé les techniques de la moins efficace à la plus efficace!",
      });
      onComplete(theme.id);
    } else {
      toast({
        title: "Pas tout à fait juste",
        description:
          "Essaye de classer les techniques de la moins efficace (niveau de puissance 1) à la plus efficace (niveau de puissance 4).",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    handleShuffle();
    setSubmitted(false);
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux thèmes
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleShuffle}
          disabled={submitted}
        >
          <Shuffle className="h-4 w-4 mr-2" />
          Réorganiser
        </Button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-2xl font-bold mb-2">{theme.title}</h2>
        <p className="text-gray-600 mb-4">{theme.description}</p>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-md flex items-start">
          <HelpCircle className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
          <p className="ml-2 text-blue-700 text-sm">
            Classe les cartes de <strong>la moins efficace (1)</strong> à la{" "}
            <strong>plus efficace (4)</strong>. Drag and drop pour réorganiser.
          </p>
        </div>
      </div>

      {submitted && (
        <div
          className={`p-4 mb-6 rounded-md flex items-start ${
            isCorrect
              ? "bg-green-50 border border-green-200"
              : "bg-red-50 border border-red-200"
          }`}
        >
          {isCorrect ? (
            <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
          ) : (
            <XCircle className="text-red-500 h-5 w-5 mt-0.5 flex-shrink-0" />
          )}
          <div className="ml-2">
            <p
              className={`font-medium ${
                isCorrect ? "text-green-700" : "text-red-700"
              }`}
            >
              {isCorrect ? "Correct!" : "Not quite right!"}
            </p>
            <p
              className={`text-sm ${
                isCorrect ? "text-green-600" : "text-red-600"
              }`}
            >
              {isCorrect
                ? "Bravo! Tu as classé correctement les techniques, de la moins efficace à la plus efficace."
                : "Essaye de classer les techniques de la moins efficace (niveau de puissance 1) à la plus efficace (niveau de puissance 4)."}
            </p>
          </div>
        </div>
      )}

      {!submitted ? (
        <>
          <div className="mb-2 rounded-md py-2 px-3 bg-gray-50 text-gray-500 text-sm font-medium text-center border border-dashed border-gray-300">
            <TrendingDown className="inline-block h-4 w-4 mr-1" />
            Moins efficace{" "}
            <span className="ml-1 text-yellow-500">
              <Zap className="inline-block h-4 w-4" />
            </span>
          </div>
          <DraggableCardList cards={cards} onSort={handleSort} />
          <div className="mt-2 rounded-md py-2 px-3 bg-gray-50 text-gray-500 text-sm font-medium text-center border border-dashed border-gray-300">
            <TrendingUp className="inline-block h-4 w-4 mr-1" />
            Plus efficace{" "}
            <span className="ml-1 text-yellow-500">
              <Zap className="inline-block h-4 w-4" />
              <Zap className="inline-block h-4 w-4" />
              <Zap className="inline-block h-4 w-4" />
              <Zap className="inline-block h-4 w-4" />
            </span>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          {[...cards]
            .sort((a, b) => a.power - b.power)
            .map((card) => (
              <QuizCard key={card.id} card={card} showPower={true} />
            ))}
        </div>
      )}

      <div className="mt-6 flex justify-center">
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            className="bg-copilot-purple hover:bg-purple-600"
          >
            Valider
          </Button>
        ) : isCorrect ? (
          <Button
            onClick={onBack}
            className="bg-copilot-blue hover:bg-blue-600"
          >
            Thème suivant
          </Button>
        ) : (
          <Button
            onClick={handleReset}
            className="bg-copilot-blue hover:bg-blue-600"
          >
            Ré-essayer
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizView;
