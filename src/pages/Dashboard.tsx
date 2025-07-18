import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { 
  Calendar, 
  Clock, 
  User, 
  Star, 
  MessageCircle, 
  Heart,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Plus,
  Send
} from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Hello! I'm EnerBot, your wellness assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const [activeBookings] = useState([
    {
      id: 1,
      service: "Deep Tissue Massage",
      therapist: "Sarah Johnson",
      date: "2024-01-20",
      time: "2:00 PM",
      duration: "60 min",
      status: "confirmed"
    },
    {
      id: 2,
      service: "Aromatherapy Session",
      therapist: "Emily Davis",
      date: "2024-01-25",
      time: "10:30 AM",
      duration: "90 min",
      status: "pending"
    }
  ]);

  const [recentHistory] = useState([
    {
      id: 1,
      service: "Swedish Massage",
      therapist: "Maria Rodriguez",
      date: "2024-01-15",
      rating: 5,
      review: "Absolutely wonderful experience! Very relaxing."
    },
    {
      id: 2,
      service: "Hot Stone Therapy",
      therapist: "Sarah Johnson",
      date: "2024-01-10",
      rating: 4,
      review: "Great service, felt very rejuvenated."
    }
  ]);

  const [wellnessScore] = useState(85);

  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Simulate AI responses
  const getAIResponse = (userMessage: string) => {
    const responses = [
      "That's a great question! For stress relief, I recommend our Swedish massage or aromatherapy treatments. Both are excellent for reducing cortisol levels and promoting relaxation.",
      "Based on your wellness goals, I suggest trying our deep tissue massage if you're experiencing muscle tension, or our hot stone therapy for overall relaxation.",
      "I'd be happy to help you book an appointment! What type of treatment are you most interested in?",
      "For overall wellness, consider incorporating regular massage sessions into your routine. Even monthly sessions can significantly improve your stress levels and muscle health.",
      "That sounds perfect for your wellness journey! Would you like me to check our available appointment times for this week?",
      "Great choice! Our certified therapists specialize in personalized treatments to address your specific needs. When would you prefer to schedule your session?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) {
      toast({
        title: "Please enter a message",
        description: "Type your question before sending.",
        variant: "destructive"
      });
      return;
    }

    // Add user message
    const userMsg = {
      id: Date.now(),
      type: "user",
      message: currentMessage,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMsg]);
    setCurrentMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: "bot",
        message: getAIResponse(currentMessage),
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-spa-cream/20">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-card rounded-lg p-6 shadow-soft border border-spa-lavender/20">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-spa-purple mb-2">
                    Welcome back, Sarah! ✨
                  </h1>
                  <p className="text-muted-foreground">
                    Your wellness journey continues. Ready for your next relaxing session?
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                    <Heart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-sm text-spa-purple font-semibold">Wellness Score</div>
                  <div className="text-2xl font-bold text-spa-purple">{wellnessScore}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-card border-spa-lavender/20">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-spa-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-spa-purple">2</div>
                <div className="text-sm text-muted-foreground">Upcoming Sessions</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-spa-lavender/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-spa-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-spa-purple">18</div>
                <div className="text-sm text-muted-foreground">Total Hours</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-spa-lavender/20">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 text-spa-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-spa-purple">4.8</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-spa-lavender/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-spa-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-spa-purple">15</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-spa-lavender/20">
              <TabsTrigger value="bookings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Current Bookings
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                History
              </TabsTrigger>
              <TabsTrigger value="wellness" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Wellness Plan
              </TabsTrigger>
              <TabsTrigger value="chat" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                EnerBot Chat
              </TabsTrigger>
            </TabsList>

            {/* Current Bookings */}
            <TabsContent value="bookings" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-spa-purple">Your Upcoming Sessions</h2>
                <Button variant="spa">
                  <Plus className="w-4 h-4 mr-2" />
                  Book New Session
                </Button>
              </div>
              
              <div className="space-y-4">
                {activeBookings.map((booking) => (
                  <Card key={booking.id} className="bg-gradient-card border-spa-lavender/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-spa-lavender rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-spa-purple" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-spa-purple">{booking.service}</h3>
                            <p className="text-sm text-muted-foreground">with {booking.therapist}</p>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                              <span>📅 {booking.date}</span>
                              <span>🕐 {booking.time}</span>
                              <span>⏱️ {booking.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={booking.status === "confirmed" ? "default" : "secondary"}
                            className={booking.status === "confirmed" ? "bg-green-100 text-green-800" : ""}
                          >
                            {booking.status === "confirmed" ? (
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                            ) : (
                              <Clock className="w-3 h-3 mr-1" />
                            )}
                            {booking.status}
                          </Badge>
                          <Button variant="spa-outline" size="sm">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* History */}
            <TabsContent value="history" className="space-y-6">
              <h2 className="text-2xl font-semibold text-spa-purple">Session History</h2>
              
              <div className="space-y-4">
                {recentHistory.map((session) => (
                  <Card key={session.id} className="bg-gradient-card border-spa-lavender/20">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-spa-lavender rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-spa-purple">{session.service}</h3>
                            <p className="text-sm text-muted-foreground">with {session.therapist}</p>
                            <p className="text-sm text-muted-foreground">📅 {session.date}</p>
                            <div className="flex items-center mt-2">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < session.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">"{session.review}"</p>
                          </div>
                        </div>
                        <Button variant="spa-outline" size="sm">
                          Book Again
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Wellness Plan */}
            <TabsContent value="wellness" className="space-y-6">
              <h2 className="text-2xl font-semibold text-spa-purple">Your Wellness Journey</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-spa-lavender/20">
                  <CardHeader>
                    <CardTitle className="text-spa-purple">Wellness Goals</CardTitle>
                    <CardDescription>Track your relaxation and wellness objectives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Stress Reduction</span>
                        <div className="w-24 bg-spa-lavender/30 rounded-full h-2">
                          <div className="bg-gradient-primary h-2 rounded-full" style={{width: "80%"}}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Muscle Tension Relief</span>
                        <div className="w-24 bg-spa-lavender/30 rounded-full h-2">
                          <div className="bg-gradient-primary h-2 rounded-full" style={{width: "65%"}}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Overall Wellness</span>
                        <div className="w-24 bg-spa-lavender/30 rounded-full h-2">
                          <div className="bg-gradient-primary h-2 rounded-full" style={{width: "75%"}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-spa-lavender/20">
                  <CardHeader>
                    <CardTitle className="text-spa-purple">Recommended Services</CardTitle>
                    <CardDescription>Based on your preferences and history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-spa-lavender/20 rounded-lg">
                        <span className="text-sm font-medium">Aromatherapy Massage</span>
                        <Button variant="spa" size="sm">Book</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-spa-lavender/20 rounded-lg">
                        <span className="text-sm font-medium">Reflexology</span>
                        <Button variant="spa" size="sm">Book</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-spa-lavender/20 rounded-lg">
                        <span className="text-sm font-medium">Couples Massage</span>
                        <Button variant="spa" size="sm">Book</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* EnerBot Chat */}
            <TabsContent value="chat" className="space-y-6">
              <h2 className="text-2xl font-semibold text-spa-purple">Chat with EnerBot</h2>
              
              <Card className="bg-gradient-card border-spa-lavender/20">
                <CardHeader>
                  <CardTitle className="text-spa-purple flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    AI Wellness Assistant
                  </CardTitle>
                  <CardDescription>
                    Get personalized recommendations and answers to your wellness questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-background/50 rounded-lg p-4 mb-4 overflow-y-auto" id="chat-container">
                    <div className="space-y-4">
                      {chatMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex items-start space-x-2 ${
                            msg.type === "user" ? "justify-end" : ""
                          }`}
                        >
                          {msg.type === "bot" && (
                            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                              <MessageCircle className="w-4 h-4 text-primary-foreground" />
                            </div>
                          )}
                          <div
                            className={`rounded-lg p-3 max-w-xs ${
                              msg.type === "bot"
                                ? "bg-spa-blue/20"
                                : "bg-primary/10"
                            }`}
                          >
                            <p className="text-sm">{msg.message}</p>
                          </div>
                          {msg.type === "user" && (
                            <div className="w-8 h-8 bg-spa-blue rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-primary" />
                            </div>
                          )}
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div className="bg-spa-blue/20 rounded-lg p-3 max-w-xs">
                            <p className="text-sm">EnerBot is typing...</p>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask EnerBot anything about wellness..."
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      variant="spa" 
                      disabled={isTyping || !currentMessage.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;