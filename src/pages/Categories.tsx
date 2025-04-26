
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Award, User, Search, ChevronRight, 
  Brain, Globe, Calculator, Dna, Rocket, History, 
  Music, Film, Palette
} from 'lucide-react';
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categoryData = [
  { id: 'science', name: 'Science', icon: <Dna className="h-8 w-8 text-quiz-neon" />, questions: 128, color: 'from-teal-500/20 to-blue-500/20' },
  { id: 'history', name: 'History', icon: <History className="h-8 w-8 text-amber-500" />, questions: 96, color: 'from-amber-500/20 to-red-500/20' },
  { id: 'technology', name: 'Technology', icon: <Rocket className="h-8 w-8 text-quiz-purple" />, questions: 112, color: 'from-quiz-purple/20 to-pink-500/20' },
  { id: 'mathematics', name: 'Mathematics', icon: <Calculator className="h-8 w-8 text-blue-500" />, questions: 84, color: 'from-blue-500/20 to-cyan-500/20' },
  { id: 'geography', name: 'Geography', icon: <Globe className="h-8 w-8 text-green-500" />, questions: 76, color: 'from-green-500/20 to-teal-500/20' },
  { id: 'general-knowledge', name: 'General Knowledge', icon: <Brain className="h-8 w-8 text-purple-500" />, questions: 150, color: 'from-purple-500/20 to-indigo-500/20' },
  { id: 'arts', name: 'Arts & Culture', icon: <Palette className="h-8 w-8 text-rose-500" />, questions: 64, color: 'from-rose-500/20 to-orange-500/20' },
  { id: 'entertainment', name: 'Entertainment', icon: <Film className="h-8 w-8 text-indigo-500" />, questions: 92, color: 'from-indigo-500/20 to-violet-500/20' },
  { id: 'music', name: 'Music', icon: <Music className="h-8 w-8 text-pink-500" />, questions: 78, color: 'from-pink-500/20 to-red-500/20' },
];

const Categories = () => {
  return (
    <div className="min-h-screen quiz-gradient">
      {/* Navigation Bar - This will be a shared component */}
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

      <div className="pt-20 pb-10 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 neo-text">
            Explore Quiz Categories
          </h1>
          
          <div className="max-w-xl mx-auto">
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 bg-quiz-dark/80 border border-quiz-purple/30 rounded-lg focus:ring-quiz-purple focus:border-quiz-purple text-white placeholder-gray-400"
                placeholder="Search for categories..."
              />
            </div>
          </div>
        </header>

        <div className="tech-grid">
          {categoryData.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="tech-card overflow-hidden card-3d"
            >
              <div className={`bg-gradient-to-br ${category.color} p-6 md:p-8 h-full flex flex-col`}>
                <div className="mb-4 flex items-start justify-between">
                  <div className="glass-effect p-3 rounded-lg">
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium text-white/70">{category.questions} questions</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{category.name}</h3>
                <p className="text-white/70 mb-6 flex-grow">
                  Test your knowledge in {category.name.toLowerCase()} with our expert-curated questions.
                </p>
                
                <div className="mt-auto">
                  <Button variant="ghost" className="group text-white hover:text-quiz-neon">
                    Start Quiz <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
