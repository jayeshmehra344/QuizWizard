
import React from 'react';

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
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-quiz-dark-purple">
        Your Score
      </h2>
      
      <div className="mb-6 relative">
        <div className="text-5xl md:text-6xl font-bold text-quiz-purple animate-pulse-soft">
          {score} / {totalQuestions}
        </div>
        <div className="text-lg text-gray-600 mt-2">
          ({percentage.toFixed(0)}%)
        </div>
      </div>
      
      <div className="my-6 py-4 px-5 bg-quiz-light-purple rounded-lg">
        <p className="text-lg md:text-xl font-medium text-quiz-dark-purple">
          {getMessage()}
        </p>
      </div>
      
      <button
        onClick={onRestart}
        className="mt-6 py-3 px-8 bg-quiz-purple hover:bg-quiz-dark-purple text-white rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        Try Again
      </button>
    </div>
  );
};

export default ResultScreen;
