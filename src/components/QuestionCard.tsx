
import React from 'react';
import { Question } from '../data/questions';
import { CheckCircle, XCircle } from 'lucide-react';

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
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">
        {question.question}
      </h2>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const optionClass = getOptionClass(index);
          
          return (
            <button
              key={index}
              onClick={() => !showFeedback && onSelectAnswer(index)}
              disabled={showFeedback}
              className={`option-button ${optionClass}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="inline-block w-7 h-7 mr-3 text-center rounded-full bg-quiz-purple/30 text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </div>
                
                {showFeedback && index === question.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                
                {showFeedback && selectedAnswer === index && index !== question.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
