import { useState } from "react";
import { Bot, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm AIDbot, your emergency medical assistant. How can I help you today? If this is an emergency, please use the SOS button above.",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand you need assistance. Let me help you with that. Can you provide more details about the situation?",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Card className="bg-gradient-to-br from-medical/5 to-primary/5 border-primary/20">
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-full">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">AIDbot Assistant</h3>
            <p className="text-xs text-success">Online & Ready to Help</p>
          </div>
        </div>
      </div>
      
      <ScrollArea className="h-80 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 animate-slide-up ${
                message.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`p-2 rounded-full ${
                message.sender === "user" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-medical text-medical-foreground"
              }`}>
                {message.sender === "user" ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
              </div>
              <div className={`flex-1 max-w-xs ${
                message.sender === "user" ? "text-right" : ""
              }`}>
                <div className={`p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-card border border-border"
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t border-border/50">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about first aid, symptoms, or emergency procedures..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            variant="medical"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};