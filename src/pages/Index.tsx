
import React from 'react';
import Quiz from '../components/Quiz';

const Index = () => {
  return (
    <div className="min-h-screen quiz-gradient flex flex-col">
      <header className="py-6 md:py-8 px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-quiz-dark-purple">
          Fun Quiz Time!
        </h1>
        <p className="mt-2 text-gray-600">
          Test your knowledge with these fun questions!
        </p>
      </header>
      
      <main className="flex-grow flex items-center justify-center px-4 pb-10">
        <Quiz />
      </main>
      
      <footer className="py-4 text-center text-gray-500 text-sm">
        <p>Made with ❤️ for learning</p>
      </footer>
    </div>
  );
};

export default Index;
