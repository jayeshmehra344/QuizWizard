
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Award, User, Settings, ChevronRight, 
  TrendingUp, Clock, Medal, Brain, BarChart3, History, 
  CheckCircle, Calendar, Trophy, Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Sample user data
const userData = {
  name: "Alex Johnson",
  username: "alexj",
  avatar: "👨‍💻",
  joinDate: "January 2025",
  level: 42,
  totalScore: 24680,
  quizzesTaken: 137,
  accuracy: 78,
  categories: [
    { name: "Science", progress: 85, quizzes: 42, badge: "Expert" },
    { name: "Technology", progress: 92, quizzes: 38, badge: "Master" },
    { name: "History", progress: 65, quizzes: 23, badge: "Advanced" },
    { name: "Geography", progress: 45, quizzes: 14, badge: "Intermediate" },
    { name: "Mathematics", progress: 72, quizzes: 20, badge: "Proficient" },
  ],
  achievements: [
    { name: "Knowledge Seeker", description: "Complete 100 quizzes", icon: "🔍", completed: true },
    { name: "Perfect Score", description: "Get 100% on any quiz", icon: "🎯", completed: true },
    { name: "Science Wizard", description: "Master the Science category", icon: "🧪", completed: true },
    { name: "History Buff", description: "Complete 50 History quizzes", icon: "📜", completed: false, progress: 46 },
    { name: "Geography Explorer", description: "Visit all continent categories", icon: "🌍", completed: false, progress: 5, total: 7 },
    { name: "Math Genius", description: "Solve 1000 math questions", icon: "🧮", completed: false, progress: 724, total: 1000 },
  ],
  recentActivity: [
    { type: "quiz", category: "Technology", score: 90, date: "Today", name: "Blockchain Basics" },
    { type: "achievement", name: "Science Expert", date: "Yesterday" },
    { type: "quiz", category: "Science", score: 75, date: "2 days ago", name: "Quantum Physics" },
    { type: "quiz", category: "History", score: 80, date: "3 days ago", name: "World War II" },
    { type: "badge", name: "Tech Master", category: "Technology", date: "5 days ago" },
    { type: "quiz", category: "Mathematics", score: 65, date: "1 week ago", name: "Advanced Calculus" },
  ]
};

const Profile = () => {
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
        {/* Profile Header */}
        <div className="tech-card p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-quiz-purple opacity-10 blur-3xl rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-quiz-neon opacity-5 blur-3xl rounded-full -ml-10 -mb-10"></div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="text-6xl bg-quiz-dark-purple/30 p-6 rounded-full glowing">
              {userData.avatar}
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold neo-text mb-2">
                    {userData.name}
                  </h1>
                  <p className="text-white/70 mb-4">
                    @{userData.username} • Joined {userData.joinDate}
                  </p>
                </div>
                
                <button className="group inline-flex items-center glass-effect px-3 py-2 rounded-lg text-white/80 hover:text-white transition-colors mt-2 md:mt-0">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-white/70 text-sm mb-1">Level</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-xl font-bold text-white">{userData.level}</span>
                    <TrendingUp className="h-4 w-4 text-quiz-neon mb-1" />
                  </div>
                </div>
                
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-white/70 text-sm mb-1">Total Score</h3>
                  <div className="text-xl font-bold text-white">{userData.totalScore.toLocaleString()}</div>
                </div>
                
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-white/70 text-sm mb-1">Quizzes</h3>
                  <div className="text-xl font-bold text-white">{userData.quizzesTaken}</div>
                </div>
                
                <div className="glass-effect p-4 rounded-lg">
                  <h3 className="text-white/70 text-sm mb-1">Accuracy</h3>
                  <div className="text-xl font-bold text-white">{userData.accuracy}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Category Progress */}
            <div className="tech-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Category Progress</h2>
                <Link to="/categories" className="text-quiz-purple hover:text-quiz-neon transition-colors text-sm flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="space-y-5">
                {userData.categories.map((category, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <span className="text-white font-medium">{category.name}</span>
                        {category.badge && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-quiz-purple/20 rounded-full text-white/90">
                            {category.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-white/70 text-sm">{category.progress}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={category.progress} className="h-2 flex-grow" />
                      <span className="text-white/70 text-xs whitespace-nowrap">{category.quizzes} quizzes</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <div>
                  <h3 className="text-white font-medium mb-1">Overall Completion</h3>
                  <div className="text-sm text-white/70">You've made great progress across 5 categories</div>
                </div>
                <div className="text-2xl font-bold text-quiz-neon">72%</div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="tech-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Activity</h2>
                <button className="text-quiz-purple hover:text-quiz-neon transition-colors text-sm flex items-center">
                  View Full History <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {userData.recentActivity.map((activity, index) => {
                  let icon;
                  let content;
                  
                  if (activity.type === 'quiz') {
                    icon = <Brain className="h-5 w-5 text-blue-400" />;
                    content = (
                      <>
                        <div>
                          <p className="text-white font-medium">{activity.name}</p>
                          <p className="text-sm text-white/70">{activity.category} • Score: {activity.score}%</p>
                        </div>
                      </>
                    );
                  } else if (activity.type === 'achievement') {
                    icon = <Trophy className="h-5 w-5 text-yellow-400" />;
                    content = (
                      <div>
                        <p className="text-white font-medium">Achievement Unlocked: {activity.name}</p>
                      </div>
                    );
                  } else if (activity.type === 'badge') {
                    icon = <Medal className="h-5 w-5 text-quiz-purple" />;
                    content = (
                      <div>
                        <p className="text-white font-medium">New Badge: {activity.name}</p>
                        <p className="text-sm text-white/70">{activity.category} category</p>
                      </div>
                    );
                  }
                  
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 glass-effect rounded-lg">
                      <div className="bg-quiz-dark-purple/30 p-2 rounded-lg">
                        {icon}
                      </div>
                      <div className="flex-grow">
                        {content}
                      </div>
                      <div className="text-right text-sm text-white/70">{activity.date}</div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-quiz-purple hover:text-quiz-neon transition-colors">
                  Load More
                </button>
              </div>
            </div>
          </div>
          
          {/* Side Column */}
          <div className="space-y-8">
            {/* Stats Summary */}
            <div className="tech-card p-6">
              <h2 className="text-2xl font-bold mb-4">Your Stats</h2>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 glass-effect rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-quiz-purple" />
                    <span className="text-white">Total Time</span>
                  </div>
                  <span className="text-white font-medium">42h 27m</span>
                </div>
                
                <div className="flex items-center justify-between p-3 glass-effect rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-white">Correct Answers</span>
                  </div>
                  <span className="text-white font-medium">2,347</span>
                </div>
                
                <div className="flex items-center justify-between p-3 glass-effect rounded-lg">
                  <div className="flex items-center gap-3">
                    <Medal className="h-5 w-5 text-yellow-400" />
                    <span className="text-white">Achievements</span>
                  </div>
                  <span className="text-white font-medium">18/24</span>
                </div>
                
                <div className="flex items-center justify-between p-3 glass-effect rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <span className="text-white">Daily Streak</span>
                  </div>
                  <span className="text-white font-medium">14 days</span>
                </div>
              </div>
              
              <div className="mt-6 glass-effect p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-medium">Personal Best</h3>
                  <Star className="h-4 w-4 text-yellow-400" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Technology Quiz</span>
                  <span className="text-quiz-neon font-medium">98%</span>
                </div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="tech-card p-6">
              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              
              <div className="grid grid-cols-2 gap-3">
                {userData.achievements.slice(0, 4).map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`glass-effect p-4 rounded-lg text-center ${!achievement.completed ? 'opacity-70' : ''}`}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h3 className="text-white text-sm font-medium mb-1">{achievement.name}</h3>
                    {achievement.completed ? (
                      <span className="inline-block px-2 py-0.5 bg-quiz-purple/30 text-white/90 rounded-full text-xs">Completed</span>
                    ) : (
                      <>
                        {achievement.progress && achievement.total && (
                          <div className="text-xs text-white/70">{achievement.progress}/{achievement.total}</div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-quiz-purple hover:text-quiz-neon transition-colors flex items-center justify-center w-full">
                  View All Achievements <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Comparison */}
            <div className="tech-card p-6">
              <h2 className="text-xl font-bold mb-4">How You Compare</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Score Percentile</span>
                    <span className="text-sm text-white">Top 15%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-white/10" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Quiz Completion</span>
                    <span className="text-sm text-white">Top 8%</span>
                  </div>
                  <Progress value={92} className="h-2 bg-white/10" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Accuracy Rate</span>
                    <span className="text-sm text-white">Top 22%</span>
                  </div>
                  <Progress value={78} className="h-2 bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
