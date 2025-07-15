import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Users, 
  BookOpen, 
  Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const quickActions = [
  {
    icon: Stethoscope,
    title: "Symptom Checker",
    description: "AI-powered symptom analysis",
    color: "medical",
    action: () => toast.info("Symptom checker activated"),
  },
  {
    icon: MapPin,
    title: "Find Hospitals",
    description: "Locate nearest emergency facilities",
    color: "primary",
    action: () => toast.info("Searching for nearby hospitals..."),
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    description: "Quick access to emergency numbers",
    color: "emergency",
    action: () => toast.info("Emergency contacts opened"),
  },
  {
    icon: Users,
    title: "Family Safety",
    description: "Check on family members",
    color: "success",
    action: () => toast.info("Family safety check initiated"),
  },
  {
    icon: BookOpen,
    title: "Quick Reference",
    description: "Essential first aid guide",
    color: "default",
    action: () => toast.info("Quick reference guide opened"),
  },
  {
    icon: Zap,
    title: "Emergency Mode",
    description: "Activate full emergency protocol",
    color: "emergency",
    action: () => toast.error("Emergency mode activated!"),
  },
];

export const QuickActions = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
        <p className="text-sm text-muted-foreground">Fast access to emergency tools</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {quickActions.map((action, index) => (
          <Card 
            key={index} 
            className="p-4 hover:shadow-md transition-all duration-200 cursor-pointer group animate-fade-in"
            onClick={action.action}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center space-y-2">
              <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${
                action.color === "medical" ? "bg-gradient-medical" :
                action.color === "emergency" ? "bg-gradient-emergency" :
                action.color === "success" ? "bg-gradient-success" :
                action.color === "primary" ? "bg-gradient-primary" :
                "bg-secondary"
              }`}>
                <action.icon className={`h-6 w-6 ${
                  action.color === "default" ? "text-foreground" : "text-white"
                }`} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {action.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};