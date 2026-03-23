
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, BookOpen, Code, Sparkles, Target, Trophy, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Learning</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Learn Computer Science with Your
              <span className="gradient-primary bg-clip-text text-transparent"> AI Teacher</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive K-12 computer science curriculum powered by artificial intelligence. 
              Personalized lessons, instant feedback, and adaptive learning paths.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Learn with AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of education with personalized, adaptive learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">AI-Powered Teaching</h3>
              <p className="text-muted-foreground">
                Your personal AI teacher adapts to your learning style and pace, providing instant explanations and guidance.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Personalized Path</h3>
              <p className="text-muted-foreground">
                Curriculum adjusts based on your progress, strengths, and areas for improvement for optimal learning.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Hands-On Coding</h3>
              <p className="text-muted-foreground">
                Practice real coding with interactive exercises, projects, and instant feedback on your solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Curriculum for Every Grade
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From kindergarten to high school, we have the perfect path for every student
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="text-2xl font-bold text-primary mb-2">K-5</div>
              <h3 className="text-lg font-bold text-foreground mb-3">Elementary</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Visual programming basics</li>
                <li>• Logic and problem solving</li>
                <li>• Creative coding projects</li>
                <li>• Digital citizenship</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="text-2xl font-bold text-primary mb-2">6-8</div>
              <h3 className="text-lg font-bold text-foreground mb-3">Middle School</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Text-based programming</li>
                <li>• Web development basics</li>
                <li>• Game development</li>
                <li>• Algorithms and data</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="text-2xl font-bold text-primary mb-2">9-12</div>
              <h3 className="text-lg font-bold text-foreground mb-3">High School</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Advanced programming</li>
                <li>• Data structures & algorithms</li>
                <li>• Software engineering</li>
                <li>• AI and machine learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-3">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Interactive Lessons</div>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-3">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-card p-12 rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of students learning computer science with AI guidance
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 AI CS Academy. Empowering the next generation of coders.</p>
        </div>
      </footer>
    </div>
  );
}