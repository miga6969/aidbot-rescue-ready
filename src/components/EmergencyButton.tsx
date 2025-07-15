import { AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export const EmergencyButton = () => {
  const handleEmergencyCall = () => {
    // In a real app, this would trigger emergency services
    toast.error("Emergency Alert Activated! Contacting local responders...", {
      duration: 5000,
    });
  };

  return (
    <Card className="bg-gradient-to-br from-emergency/10 to-emergency/5 border-emergency/20 p-8 text-center animate-fade-in">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Emergency Assistance</h2>
          <p className="text-muted-foreground">
            In case of medical emergency, press the SOS button below
          </p>
        </div>
        
        <Button
          variant="emergency"
          size="emergency"
          onClick={handleEmergencyCall}
          className="mx-auto"
        >
          <AlertTriangle className="h-8 w-8" />
        </Button>
        
        <div className="space-y-2">
          <p className="text-sm font-semibold text-emergency">SOS</p>
          <p className="text-xs text-muted-foreground">
            This will alert local first responders and activate AI guidance
          </p>
        </div>
        
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="outline" size="sm">
            <Phone className="h-4 w-4 mr-2" />
            Call 911
          </Button>
          <Button variant="outline" size="sm">
            Emergency Contacts
          </Button>
        </div>
      </div>
    </Card>
  );
};