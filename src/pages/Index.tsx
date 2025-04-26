
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, User, ArrowRight, Brain, Zap, Globe, Star } from 'lucide-react';
import Quiz from '../components/Quiz';

const Index = () => {
  return (
    <div className="min-h-screen quiz-gradient overflow-hidden relative">
      {/* 3D animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-quiz-purple opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-quiz-neon opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-quiz-dark-blue/50 opacity-30 backdrop-blur-3xl"></div>

      {/* Navigation Bar */}
      <nav className="backdrop-blur-md bg-black/30 border-b border-quiz-purple/20 px-4 py-3 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-quiz-purple" />
            <span className="text-2xl font-bold neo-text">
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
        <header className="py-16 md:py-24 px-4 text-center relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in neo-text">
              Challenge Your Mind with QuizWiz
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in">
              Explore thousands of quizzes across different categories.
              Test your knowledge, compete with others, and track your progress!
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
              <Link 
                to="/categories" 
                className="px-6 py-3 bg-quiz-purple hover:bg-quiz-dark-purple text-white rounded-lg transition-all duration-300 transform hover:scale-105 group flex items-center"
              >
                Explore Categories
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/leaderboard" 
                className="px-6 py-3 bg-black/30 backdrop-blur-sm hover:bg-white/10 text-white border border-white/20 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Leaderboard
              </Link>
            </div>
          </div>

          {/* Floating 3D elements */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 hidden lg:block">
            <div className="text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🧠</div>
          </div>
          <div className="absolute top-1/3 right-10 transform -translate-y-1/2 hidden lg:block">
            <div className="text-5xl animate-float" style={{ animationDelay: '1.2s' }}>🚀</div>
          </div>
          <div className="absolute bottom-10 left-1/4 hidden lg:block">
            <div className="text-5xl animate-float" style={{ animationDelay: '0.8s' }}>🔍</div>
          </div>
          <div className="absolute bottom-20 right-1/4 hidden lg:block">
            <div className="text-5xl animate-float" style={{ animationDelay: '1.5s' }}>🏆</div>
          </div>
        </header>
        
        {/* Featured Categories */}
        <section className="py-10 px-4 max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center neo-text">Featured Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Science', icon: <Brain className="h-8 w-8 text-teal-400" />, desc: 'From quantum physics to biology', gradient: 'from-teal-500/20 to-blue-500/20' },
              { name: 'History', icon: <Globe className="h-8 w-8 text-amber-400" />, desc: 'Ancient civilizations to modern times', gradient: 'from-amber-500/20 to-red-500/20' },
              { name: 'Technology', icon: <Zap className="h-8 w-8 text-quiz-neon" />, desc: 'Cutting-edge tech knowledge', gradient: 'from-quiz-purple/20 to-pink-500/20' }
            ].map((category, idx) => (
              <Link 
                key={category.name} 
                to={`/category/${category.name.toLowerCase()}`}
                className="tech-card overflow-hidden card-3d"
              >
                <div className={`bg-gradient-to-br ${category.gradient} p-6 h-full flex flex-col`}>
                  <div className="glass-effect p-3 rounded-lg inline-block mb-4 self-start">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-white/70 mb-4">{category.desc}</p>
                  
                  <div className="mt-auto flex items-center text-quiz-purple hover:text-quiz-neon transition-colors group">
                    Start Quiz <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Try A Sample Quiz */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect p-6 md:p-10 rounded-2xl border border-quiz-purple/30">
              <div className="text-center mb-10">
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-quiz-purple/20 text-white/90 text-sm mb-4">
                  <Star className="h-4 w-4 mr-2" />
                  Try a Sample Quiz
                </div>
                <h2 className="text-3xl font-bold mb-4 neo-text">Test Your Knowledge</h2>
                <p className="text-white/70 max-w-lg mx-auto">
                  Get a feel for our quizzes with this sample. Answer the questions and see how you score!
                </p>
              </div>
              
              <Quiz />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
