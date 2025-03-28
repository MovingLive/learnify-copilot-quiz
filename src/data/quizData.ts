
export interface Card {
  id: string;
  text: string;
  power: number;
  explanation: string;
}

export interface Theme {
  id: string;
  title: string;
  description: string;
  icon: string;
  cards: Card[];
}

export interface QuizData {
  themes: Theme[];
}

const quizData: QuizData = {
  themes: [
    {
      id: "auto-completion",
      title: "Auto-completion",
      description: "Apprend à tirer le meilleur parti des fonctions d'autocomplétion de GitHub Copilot.",
      icon: "Code",
      cards: [
        {
          id: "auto-1",
          text: "Attendre les suggestions de copilot",
          power: 1,
          explanation: "Une approche passive limite l'efficacité. En étant plus proactif dans tes prompts, tu obtiendras de meilleures suggestions."
        },
        {
          id: "auto-2",
          text: "Utiliser des noms de fonctions et des paramètres descriptifs",
          power: 2,
          explanation: "La clarté des noms améliore les suggestions en donnant à Copilot plus de contexte sur ton intention."
        },
        {
          id: "auto-3",
          text: "Ajouter des commentaires descriptifs avant la fonction",
          power: 3,
          explanation: "Les commentaires fournissent un contexte qui aide Copilot à comprendre l'objectif de votre code et à générer des suggestions plus pertinentes."
        },
        {
          id: "auto-4",
          text: "Inclure des exemples d'entrée/sortie dans les commentaires",
          power: 4,
          explanation: "Les exemples aident à générer un code précis en fournissant à Copilot des cas concrets sur lesquels travailler."
        }
      ]
    },
    {
      id: "copilot-chat",
      title: "Copilot Chat",
      description: "Master GitHub Copilot's chat interface for maximum productivity",
      icon: "MessageCircle",
      cards: [
        {
          id: "chat-1",
          text: "Ask general questions without context",
          power: 1,
          explanation: "Generic questions yield generic answers. More specific questions with context lead to better responses."
        },
        {
          id: "chat-2",
          text: "Ask for explanations of code snippets",
          power: 2,
          explanation: "Using Copilot to understand code is helpful, but it's even better when you provide specific questions about the code."
        },
        {
          id: "chat-3",
          text: "Use slash commands like /explain, /tests, /fix",
          power: 3,
          explanation: "Slash commands give Copilot specific instructions on what you want it to do with your code."
        },
        {
          id: "chat-4",
          text: "Combine code selection with specific, contextual questions",
          power: 4,
          explanation: "Selecting code and asking specific questions about it gives Copilot the most context to provide accurate, helpful responses."
        }
      ]
    },
    {
      id: "contextual-prompting",
      title: "Contextual Prompting",
      description: "Learn how to craft effective prompts that get better results",
      icon: "MessageSquare",
      cards: [
        {
          id: "prompt-1",
          text: "Use one-word prompts",
          power: 1,
          explanation: "Single-word prompts give very little context, resulting in generic suggestions."
        },
        {
          id: "prompt-2",
          text: "Describe the functionality you want",
          power: 2,
          explanation: "Describing functionality helps Copilot understand your goal, but may still lack specifics."
        },
        {
          id: "prompt-3",
          text: "Include technical specifications and constraints",
          power: 3,
          explanation: "Adding technical details gives Copilot clear parameters to work within."
        },
        {
          id: "prompt-4",
          text: "Provide examples and edge cases in your prompts",
          power: 4,
          explanation: "Examples and edge cases give Copilot a complete picture of what you need, leading to more accurate code generation."
        }
      ]
    },
    {
      id: "workflow-integration",
      title: "Workflow Integration",
      description: "Integrate GitHub Copilot into your development workflow efficiently",
      icon: "GitBranch",
      cards: [
        {
          id: "workflow-1",
          text: "Use Copilot only for complicated algorithms",
          power: 1,
          explanation: "Limiting Copilot to just complex tasks misses many opportunities for productivity gains."
        },
        {
          id: "workflow-2",
          text: "Let Copilot handle repetitive coding tasks",
          power: 2,
          explanation: "Using Copilot for routine tasks saves time, but it can do much more than just repetitive work."
        },
        {
          id: "workflow-3",
          text: "Use Copilot to explore alternative implementations",
          power: 3,
          explanation: "Having Copilot generate different approaches can help you discover better solutions."
        },
        {
          id: "workflow-4",
          text: "Combine Copilot with test-driven development",
          power: 4,
          explanation: "Writing tests first, then using Copilot to implement code that passes those tests is a powerful workflow."
        }
      ]
    }
  ]
};

export default quizData;
