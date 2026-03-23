
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, BarChart3, User, GraduationCap } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AI CS Academy</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/dashboard')
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Dashboard</span>
            </Link>
            
            <Link
              to="/courses"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/courses')
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="font-medium">Courses</span>
            </Link>
            
            <Link
              to="/progress"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/progress')
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="font-medium">Progress</span>
            </Link>
            
            <Link
              to="/profile"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/profile')
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <User className="w-4 h-4" />
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}