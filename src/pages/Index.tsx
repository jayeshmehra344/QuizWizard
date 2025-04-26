
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, User } from 'lucide-react';
import Quiz from '../components/Quiz';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-quiz-blue via-quiz-light-purple to-quiz-peach">
      {/* Navigation Bar */}
      <nav className="backdrop-blur-sm bg-white/70 border-b border-white/20 px-4 py-3 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-quiz-purple" />
            <span className="text-2xl font-bold bg-gradient-to-r from-quiz-purple to-quiz-dark-purple bg-clip-text text-transparent">
              QuizWiz
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/categories" className="nav-link">
              <BookOpen className="h-5 w-5" />
              <span>Categories</span>
            </Link>
            <Link to="/leaderboard" className="nav-link">
              <Award className="h-5 w-5" />
              <span>Leaderboard</span>
            </Link>
            <Link to="/profile" className="nav-link">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20">
        <header className="py-12 md:py-16 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-quiz-dark-purple mb-4 animate-fade-in">
            Welcome to QuizWiz
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 animate-fade-in">
            Challenge yourself with thousands of quizzes across different categories.
            Learn, compete, and track your progress!
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link 
              to="/categories" 
              className="px-6 py-3 bg-quiz-purple hover:bg-quiz-dark-purple text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Categories
            </Link>
            <Link 
              to="/leaderboard" 
              className="px-6 py-3 bg-white/80 hover:bg-white text-quiz-dark-purple rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Leaderboard
            </Link>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Categories Preview */}
            {['Science', 'History', 'Technology'].map((category) => (
              <div key={category} className="quiz-card p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-quiz-dark-purple mb-3">{category}</h3>
                <p className="text-gray-600 mb-4">Test your knowledge in {category.toLowerCase()} with our curated questions.</p>
                <Link 
                  to={`/category/${category.toLowerCase()}`}
                  className="text-quiz-purple hover:text-quiz-dark-purple font-medium inline-flex items-center"
                >
                  Start Quiz <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
