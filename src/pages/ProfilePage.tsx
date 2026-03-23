
import Navigation from '../components/Navigation';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Profile</h1>
        <p className="text-muted-foreground">Profile settings coming soon...</p>
      </div>
    </div>
  );
}