import { Shield, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Shield className="h-8 w-8 text-primary" />
            <Heart className="h-4 w-4 text-emergency absolute -top-1 -right-1" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">AIDbot Rescue</h1>
            <p className="text-xs text-muted-foreground">Emergency Response AI</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Get Premium
          </Button>
        </div>
      </div>
    </header>
  );
};