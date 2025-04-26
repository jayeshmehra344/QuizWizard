
import React from 'react';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  showFeedback: boolean;
}

const QuestionCard = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer, 
  showFeedback 
}: QuestionCardProps) => {
  
  const getOptionClass = (index: number) => {
    if (!showFeedback) {
      return selectedAnswer === index ? 'selected' : '';
    }
    
    if (index === question.correctAnswer) {
      return 'correct';
    }
    
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return 'incorrect';
    }
    
    return '';
  };
  
  return (
    <div className="animate-fade-in mb-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
        {question.question}
      </h2>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && onSelectAnswer(index)}
            disabled={showFeedback}
            className={`option-button ${getOptionClass(index)}`}
          >
            <span className="inline-block w-7 h-7 mr-3 text-center rounded-full bg-quiz-light-purple">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
