
import React from 'react';
import { Award, RotateCcw, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultScreen = ({ score, totalQuestions, onRestart }: ResultScreenProps) => {
  const percentage = (score / totalQuestions) * 100;
  
  const getMessage = () => {
    if (percentage >= 80) {
      return "Amazing job! You're a quiz master! 🎉";
    } else if (percentage >= 60) {
      return "Great effort! You're doing well! 🌟";
    } else if (percentage >= 40) {
      return "Good try! Keep learning! 📚";
    } else {
      return "Don't worry! Practice makes perfect! 💪";
    }
  };
  
  return (
    <div className="animate-fade-in text-center">
      <div className="mb-8">
        <Award className="h-16 w-16 text-quiz-purple mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold mb-2 neo-text">
          Quiz Completed!
        </h2>
      </div>
      
      <div className="mb-8 relative glass-effect p-8 rounded-xl">
        <div className="text-5xl md:text-6xl font-bold text-quiz-purple animate-pulse-soft">
          {score} / {totalQuestions}
        </div>
        <div className="text-lg text-white/70 mt-2">
          ({percentage.toFixed(0)}%)
        </div>
      </div>
      
      <div className="my-8 py-4 px-5 glass-effect rounded-lg">
        <p className="text-lg md:text-xl font-medium text-white">
          {getMessage()}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={onRestart}
          className="bg-quiz-purple hover:bg-quiz-dark-purple text-white flex items-center justify-center"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
        
        <Button
          variant="outline"
          className="border-quiz-purple text-white hover:bg-quiz-purple/20"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Result
        </Button>
      </div>
    </div>
  );
};

export default ResultScreen;
