import { Header } from "@/components/Header";
import { EmergencyButton } from "@/components/EmergencyButton";
import { AIChat } from "@/components/AIChat";
import { FirstAidLessons } from "@/components/FirstAidLessons";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section with Emergency Button */}
        <section className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Emergency Response AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant first aid guidance, emergency response, and life-saving education 
              powered by advanced AI technology.
            </p>
          </div>
          
          <EmergencyButton />
        </section>

        {/* Quick Actions */}
        <section>
          <QuickActions />
        </section>

        {/* AI Chat Interface */}
        <section className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <AIChat />
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-success/10 to-medical/10 rounded-lg p-6 border border-success/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                🚨 Emergency Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time first responder alerts</li>
                <li>• AI-guided emergency procedures</li>
                <li>• Location-based emergency services</li>
                <li>• 24/7 emergency support</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-medical/10 rounded-lg p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                📚 Learning Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Interactive first aid lessons</li>
                <li>• Certification programs</li>
                <li>• AI-powered skill assessment</li>
                <li>• Progress tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* First Aid Lessons */}
        <section>
          <FirstAidLessons />
        </section>
      </main>
      
      <footer className="bg-card/50 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 AIDbot Rescue. Professional emergency AI for life-saving situations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
