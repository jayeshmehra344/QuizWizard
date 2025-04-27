
import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import ResultScreen from './ResultScreen';
import { quizQuestions } from '../data/questions';
import { Progress } from '@/components/ui/progress';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowFeedback(false);
    setQuizCompleted(false);
  };

  return (
    <div className="max-w-xl mx-auto px-4">
      <div className="quiz-card p-6 md:p-8">
        {!quizCompleted ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between text-sm text-black mb-2">
                <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                <span>Score: {score}</span>
              </div>
              
              <Progress value={progress} className="h-2" />
            </div>
            
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={handleAnswerSelect}
              showFeedback={showFeedback}
            />
          </>
        ) : (
          <ResultScreen
            score={score}
            totalQuestions={quizQuestions.length}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
