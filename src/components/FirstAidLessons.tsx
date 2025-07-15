import { Book, Play, Lock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const lessons = [
  {
    id: 1,
    title: "CPR Basics",
    duration: "5 min",
    difficulty: "Beginner",
    free: true,
    description: "Learn the fundamentals of cardiopulmonary resuscitation",
    icon: "❤️",
  },
  {
    id: 2,
    title: "Wound Care & Bleeding",
    duration: "7 min",
    difficulty: "Beginner",
    free: true,
    description: "How to treat cuts, wounds, and control bleeding",
    icon: "🩹",
  },
  {
    id: 3,
    title: "Choking Response",
    duration: "4 min",
    difficulty: "Beginner",
    free: true,
    description: "Heimlich maneuver and airway obstruction relief",
    icon: "🫁",
  },
  {
    id: 4,
    title: "Advanced CPR Techniques",
    duration: "12 min",
    difficulty: "Advanced",
    free: false,
    description: "Professional-level CPR with AED usage",
    icon: "⚡",
  },
  {
    id: 5,
    title: "Trauma Assessment",
    duration: "15 min",
    difficulty: "Advanced",
    free: false,
    description: "Complete trauma evaluation and triage",
    icon: "🏥",
  },
  {
    id: 6,
    title: "Pediatric Emergency Care",
    duration: "10 min",
    difficulty: "Intermediate",
    free: false,
    description: "Specialized care for children and infants",
    icon: "👶",
  },
];

export const FirstAidLessons = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">First Aid Lessons</h2>
          <p className="text-muted-foreground">Learn life-saving skills at your own pace</p>
        </div>
        <Button variant="default">
          <Star className="h-4 w-4 mr-2" />
          Upgrade to Premium
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in">
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="text-3xl">{lesson.icon}</div>
                {!lesson.free && (
                  <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                    Premium
                  </Badge>
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lesson.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className="text-xs">
                  {lesson.difficulty}
                </Badge>
                <span>•</span>
                <span>{lesson.duration}</span>
              </div>
              
              <Button 
                className="w-full" 
                variant={lesson.free ? "default" : "outline"}
                disabled={!lesson.free}
              >
                {lesson.free ? (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Start Lesson
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4 mr-2" />
                    Premium Required
                  </>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="bg-gradient-to-r from-primary/10 to-medical/10 border-primary/20">
        <div className="p-6 text-center space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">Unlock Premium Features</h3>
            <p className="text-muted-foreground">
              Get access to advanced lessons, certifications, and priority emergency support
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">Advanced Lessons</Badge>
            <Badge variant="outline">AI Tutoring</Badge>
            <Badge variant="outline">Certification</Badge>
            <Badge variant="outline">Priority Support</Badge>
          </div>
          
          <Button variant="default" size="lg">
            <Book className="h-4 w-4 mr-2" />
            Start Premium Trial
          </Button>
        </div>
      </Card>
    </div>
  );
};