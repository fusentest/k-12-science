
import Navigation from '../components/Navigation';

export default function LessonPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Lesson</h1>
        <p className="text-muted-foreground">Lesson content coming soon...</p>
      </div>
    </div>
  );
}