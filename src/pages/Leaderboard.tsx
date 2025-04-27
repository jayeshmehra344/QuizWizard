
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, User, ChevronDown, Search, TrendingUp, Filter, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const leaderboardData = [
  { rank: 1, name: 'Alex Johnson', score: 9850, country: 'United States', avatar: '👨‍💻', categories: ['Science', 'Technology'], badge: 'Champion' },
  { rank: 2, name: 'Sophia Lee', score: 9720, country: 'Canada', avatar: '👩‍🎓', categories: ['Mathematics', 'Science'], badge: 'Expert' },
  { rank: 3, name: 'Miguel Rodriguez', score: 9680, country: 'Spain', avatar: '👨‍🔬', categories: ['Geography', 'History'], badge: 'Master' },
  { rank: 4, name: 'Emily Chen', score: 9510, country: 'Australia', avatar: '👩‍💼', categories: ['Literature', 'Arts'], badge: 'Scholar' },
  { rank: 5, name: 'Raj Patel', score: 9350, country: 'India', avatar: '👨‍🎓', categories: ['Technology', 'General Knowledge'], badge: 'Prodigy' },
  { rank: 6, name: 'Anna Müller', score: 9240, country: 'Germany', avatar: '👩‍🚀', categories: ['Science', 'Mathematics'], badge: 'Genius' },
  { rank: 7, name: 'Kenji Tanaka', score: 9120, country: 'Japan', avatar: '👨‍🏫', categories: ['History', 'Geography'], badge: 'Wizard' },
  { rank: 8, name: 'Olivia Williams', score: 9040, country: 'UK', avatar: '👩‍🔬', categories: ['Technology', 'Science'], badge: 'Maven' },
  { rank: 9, name: 'Carlos Mendez', score: 8980, country: 'Mexico', avatar: '👨‍💼', categories: ['Arts', 'Literature'], badge: 'Virtuoso' },
  { rank: 10, name: 'Aisha Okafor', score: 8890, country: 'Nigeria', avatar: '👩‍🏫', categories: ['General Knowledge', 'History'], badge: 'Savant' },
  { rank: 11, name: 'Lars Svensson', score: 8820, country: 'Sweden', avatar: '👨‍🚀', categories: ['Science', 'Mathematics'], badge: 'Intellectual' },
  { rank: 12, name: 'Mei Lin', score: 8780, country: 'China', avatar: '👩‍💻', categories: ['Technology', 'Geography'], badge: 'Sage' },
];

const categories = ['All Categories', 'Science', 'Technology', 'Mathematics', 'History', 'Geography', 'Arts', 'Literature', 'General Knowledge'];
const timeframes = ['All Time', 'This Month', 'This Week', 'Today'];

const Leaderboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedTimeframe, setSelectedTimeframe] = useState('All Time');

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

      <div className="pt-20 pb-10 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="tech-card p-6 mb-6 lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <Filter className="h-5 w-5 text-quiz-purple" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-white/90 mb-2 block">
                    Category
                  </label>
                  <select
                    className="w-full p-3 rounded-lg bg-quiz-dark border border-quiz-purple/30 text-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-white/90 mb-2 block">
                    Timeframe
                  </label>
                  <div className="space-y-2">
                    {timeframes.map((timeframe) => (
                      <label key={timeframe} className="flex items-center glass-effect p-3 rounded-lg cursor-pointer">
                        <input
                          type="radio"
                          name="timeframe"
                          value={timeframe}
                          checked={selectedTimeframe === timeframe}
                          onChange={() => setSelectedTimeframe(timeframe)}
                          className="h-4 w-4 text-quiz-purple border-quiz-purple/30 focus:ring-quiz-purple"
                        />
                        <span className="ml-3 text-white">{timeframe}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <Button className="w-full bg-quiz-purple hover:bg-quiz-purple/80 text-white">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="tech-card p-6">
              <h3 className="text-lg font-bold mb-4">Your Ranking</h3>
              <div className="glass-effect p-4 rounded-lg mb-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🥈</div>
                  <div>
                    <p className="text-white font-medium">Global Rank: #42</p>
                    <p className="text-white/70 text-sm">Top 5% of all players</p>
                  </div>
                </div>
              </div>
              
              <h4 className="text-md font-medium text-white/90 mb-2">Category Rankings</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between glass-effect p-2 rounded-lg">
                  <span className="text-white/90">Science</span>
                  <span className="text-quiz-neon">#18</span>
                </div>
                <div className="flex items-center justify-between glass-effect p-2 rounded-lg">
                  <span className="text-white/90">Technology</span>
                  <span className="text-quiz-neon">#7</span>
                </div>
                <div className="flex items-center justify-between glass-effect p-2 rounded-lg">
                  <span className="text-white/90">History</span>
                  <span className="text-quiz-neon">#124</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Leaderboard */}
          <div className="lg:w-3/4">
            <header className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 neo-text">
                Global Leaderboard
              </h1>
              <p className="text-white/70 mb-6">
                Compete with the best minds worldwide! See who's leading in our {selectedCategory !== 'All Categories' ? selectedCategory : ''} quiz challenges {selectedTimeframe !== 'All Time' ? `for ${selectedTimeframe.toLowerCase()}` : ''}.
              </p>
              
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-3 bg-quiz-dark/80 border border-quiz-purple/30 rounded-lg focus:ring-quiz-purple focus:border-quiz-purple text-white placeholder-gray-400"
                  placeholder="Search users..."
                />
              </div>
            </header>
            
            <div className="tech-card overflow-hidden relative card-3d">
              {/* Top 3 Players */}
              <div className="flex flex-col md:flex-row justify-around py-8 px-6 border-b border-white/10 bg-quiz-dark-purple/10 backdrop-blur-sm">
                {leaderboardData.slice(0, 3).map((user, index) => {
                  const medalColors = ['text-yellow-400', 'text-gray-300', 'text-amber-700'];
                  const medalSizes = ['text-5xl', 'text-4xl', 'text-4xl'];
                  const medals = ['🥇', '🥈', '🥉'];
                  
                  return (
                    <div key={index} className={`flex flex-col items-center ${index === 1 ? 'order-first md:order-none' : ''}`}>
                      <div className={`${medalSizes[index]} mb-2`}>{medals[index]}</div>
                      <div className={`text-4xl mb-2 ${index === 0 ? 'animate-float' : ''}`}>{user.avatar}</div>
                      <h3 className="text-lg font-bold text-white mb-1">{user.name}</h3>
                      <p className="text-quiz-purple mb-1">{user.score.toLocaleString()} pts</p>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-quiz-purple/20 text-white/90">{user.badge}</span>
                    </div>
                  );
                })}
              </div>
              
              {/* Rest of Leaderboard */}
              <ScrollArea className="h-[calc(100vh-400px)]">
                <div className="px-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-4 px-2 text-left text-white/70 font-normal">Rank</th>
                        <th className="py-4 px-2 text-left text-white/70 font-normal">Player</th>
                        <th className="py-4 px-2 text-right text-white/70 font-normal">Score</th>
                        <th className="py-4 px-2 text-right text-white/70 font-normal hidden md:table-cell">Top Categories</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.map((user, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-quiz-purple/10 transition-colors">
                          <td className="py-4 px-2">
                            <span className={`inline-block w-8 text-center ${user.rank <= 3 ? 'text-quiz-neon font-bold' : 'text-white/90'}`}>
                              {user.rank}
                            </span>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center">
                              <div className="text-2xl mr-3">{user.avatar}</div>
                              <div>
                                <p className="text-white font-medium">{user.name}</p>
                                <p className="text-white/50 text-sm">{user.country}</p>
                              </div>
                              {user.badge && (
                                <span className="ml-3 px-2 py-0.5 text-xs rounded-full bg-quiz-purple/20 text-white/90">
                                  {user.badge}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-2 text-right font-mono text-quiz-purple">
                            {user.score.toLocaleString()}
                          </td>
                          <td className="py-4 px-2 text-right hidden md:table-cell">
                            <div className="flex justify-end gap-1">
                              {user.categories.map((category, idx) => (
                                <span key={idx} className="px-2 py-1 text-xs rounded-full bg-quiz-dark-purple/50 text-white">
                                  {category}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="text-white border-quiz-purple hover:bg-quiz-purple/20">
                Load More Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
