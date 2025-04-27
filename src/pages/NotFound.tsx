
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { BookOpen, Award, User, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen quiz-gradient flex flex-col">
      {/* Navigation Bar */}
      <nav className="backdrop-blur-md bg-black/30 border-b border-quiz-purple/20 px-4 py-3 w-full z-50">
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

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="tech-card p-10 text-center max-w-md">
          <div className="text-9xl mb-4 font-bold neo-text">404</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">Page Not Found</h1>
          <p className="text-white/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-quiz-purple hover:bg-quiz-dark-purple text-white flex items-center mx-auto">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
