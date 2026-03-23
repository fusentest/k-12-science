
import Navigation from '../components/Navigation';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Courses</h1>
        <p className="text-muted-foreground">Course catalog coming soon...</p>
      </div>
    </div>
  );
}