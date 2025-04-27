
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, Award, User, ChevronLeft, Clock, Trophy, BarChart, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import Quiz from '@/components/Quiz';

const difficultyLevels = [
  { value: 'easy', label: 'Easy', color: 'bg-green-500' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
  { value: 'hard', label: 'Hard', color: 'bg-red-500' },
];

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('medium');
  const [showFilters, setShowFilters] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  
  // Format the category name for display
  const formatCategoryName = (id: string = '') => {
    return id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const categoryName = formatCategoryName(categoryId);
  
  const getCategoryIcon = () => {
    switch (categoryId) {
      case 'science': return <div className="h-16 w-16 rounded-full bg-teal-500/20 flex items-center justify-center"><span className="text-2xl">🔬</span></div>;
      case 'history': return <div className="h-16 w-16 rounded-full bg-amber-500/20 flex items-center justify-center"><span className="text-2xl">📜</span></div>;
      case 'technology': return <div className="h-16 w-16 rounded-full bg-quiz-purple/20 flex items-center justify-center"><span className="text-2xl">💻</span></div>;
      case 'mathematics': return <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center"><span className="text-2xl">🧮</span></div>;
      case 'geography': return <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center"><span className="text-2xl">🌍</span></div>;
      default: return <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center"><span className="text-2xl">❓</span></div>;
    }
  };

  return (
    <div className="min-h-screen quiz-gradient">
      {/* Navigation Bar */}
      <nav className="backdrop-blur-md bg-indigo-800 border-b border-quiz-purple/20 px-4 py-3 fixed w-full top-0 z-50">
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

      <div className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        {!startQuiz ? (
          <>
            <div className="mb-6">
              <Link to="/categories" className="inline-flex items-center text-white/70 hover:text-quiz-purple transition-colors">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Categories
              </Link>
            </div>
            
            <div className="tech-card p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {getCategoryIcon()}
                
                <div className="flex-grow">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 neo-text">
                    {categoryName} Quiz
                  </h1>
                  <p className="text-white/70 mb-4">
                    Challenge yourself with our curated {categoryName.toLowerCase()} questions, ranging from basic concepts to advanced topics.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/70">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-quiz-purple" />
                      <span>10 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-2 text-quiz-neon" />
                      <span>150 points possible</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-blue-400" />
                      <span>Top 10% pass rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="tech-card p-8 mb-6">
                  <h2 className="text-xl font-bold mb-4">Quiz Preview</h2>
                  <p className="text-white/70 mb-6">
                    This quiz contains 10 questions covering various aspects of {categoryName}. You'll have 10 minutes to complete the quiz, and you'll receive instant feedback on your answers.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="glass-effect p-4 rounded-lg">
                      <p className="text-white/90 font-medium">Sample Question:</p>
                      <p className="text-white mt-2">What is the primary function of a cell's mitochondria?</p>
                    </div>
                    
                    <div className="glass-effect p-4 rounded-lg">
                      <p className="text-white/90 font-medium">Topics Covered:</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {['Basic Concepts', 'Advanced Theory', 'Problem Solving', 'Real-world Applications'].map((topic) => (
                          <span key={topic} className="px-3 py-1 bg-quiz-purple/20 text-white rounded-full text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-quiz-purple hover:bg-quiz-purple/80 text-white"
                    onClick={() => setStartQuiz(true)}
                  >
                    Start Quiz Now
                  </Button>
                </div>
              </div>
              
              <div className="tech-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Settings</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center text-white/70 hover:text-quiz-purple"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-white/90 mb-2 block">
                      Difficulty Level
                    </label>
                    <RadioGroup 
                      value={selectedDifficulty} 
                      onValueChange={setSelectedDifficulty}
                      className="flex flex-col space-y-2"
                    >
                      {difficultyLevels.map((level) => (
                        <label 
                          key={level.value}
                          className="flex items-center space-x-3 glass-effect p-3 rounded-lg cursor-pointer"
                        >
                          <RadioGroupItem value={level.value} id={`difficulty-${level.value}`} />
                          <span className={`w-3 h-3 rounded-full ${level.color}`}></span>
                          <span className="text-white">{level.label}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  {showFilters && (
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <div>
                        <label className="text-sm font-medium text-white/90 mb-2 block">
                          Time Limit
                        </label>
                        <div className="glass-effect p-3 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-white/70">5 minutes</span>
                            <span className="text-sm text-white/70">20 minutes</span>
                          </div>
                          <input
                            type="range"
                            min="5"
                            max="20"
                            step="5"
                            defaultValue="10"
                            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-quiz-dark-purple"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-white/90 mb-2 block">
                          Options
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3 glass-effect p-3 rounded-lg cursor-pointer">
                            <Checkbox id="shuffle" />
                            <span className="text-white">Shuffle Questions</span>
                          </label>
                          <label className="flex items-center space-x-3 glass-effect p-3 rounded-lg cursor-pointer">
                            <Checkbox id="instant-feedback" defaultChecked />
                            <span className="text-white">Instant Feedback</span>
                          </label>
                          <label className="flex items-center space-x-3 glass-effect p-3 rounded-lg cursor-pointer">
                            <Checkbox id="save-progress" />
                            <span className="text-white">Save Progress</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-bold mb-3">Your Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-white/70">Completion</span>
                        <span className="text-sm text-white">35%</span>
                      </div>
                      <Progress value={35} className="h-2 bg-white/10" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-white/70">Accuracy</span>
                        <span className="text-sm text-white">68%</span>
                      </div>
                      <Progress value={68} className="h-2 bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="py-6">
            <Button 
              variant="ghost" 
              onClick={() => setStartQuiz(false)}
              className="mb-6 text-white/70 hover:text-quiz-purple"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Exit Quiz
            </Button>
            <Quiz />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
