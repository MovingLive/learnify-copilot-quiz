
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
      description: "Learn how to get the most out of GitHub Copilot's auto-completion features",
      icon: "Code",
      cards: [
        {
          id: "auto-1",
          text: "Wait for Copilot's suggestions",
          power: 1,
          explanation: "Passive approach limits effectiveness. Being more proactive with your prompts can lead to better suggestions."
        },
        {
          id: "auto-2",
          text: "Use descriptive function names and parameters",
          power: 2,
          explanation: "Clear naming improves suggestions by giving Copilot more context about your intent."
        },
        {
          id: "auto-3",
          text: "Add descriptive comments",
          power: 3,
          explanation: "Comments provide context that helps Copilot understand the purpose of your code and generate more relevant suggestions."
        },
        {
          id: "auto-4",
          text: "Include input/output examples in comments",
          power: 4,
          explanation: "Examples help generate precise code by giving Copilot concrete cases to work with."
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
