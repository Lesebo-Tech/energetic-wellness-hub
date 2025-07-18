import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Star, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Swedish Massage",
      duration: "60 minutes",
      price: "$120",
      description: "Classic relaxation massage using long strokes and gentle pressure to reduce stress and tension.",
      features: ["Full body relaxation", "Stress reduction", "Improved circulation"],
      rating: 4.9
    },
    {
      title: "Deep Tissue Massage",
      duration: "75 minutes", 
      price: "$150",
      description: "Therapeutic massage targeting deeper muscle layers to address chronic pain and tension.",
      features: ["Pain relief", "Muscle recovery", "Improved mobility"],
      rating: 4.8
    },
    {
      title: "Aromatherapy Massage",
      duration: "90 minutes",
      price: "$180",
      description: "Relaxing massage combined with essential oils to enhance mood and wellbeing.",
      features: ["Mood enhancement", "Stress relief", "Skin nourishment"],
      rating: 4.9
    },
    {
      title: "Hot Stone Therapy",
      duration: "90 minutes",
      price: "$200",
      description: "Heated stones placed on key points to melt away tension and promote deep relaxation.",
      features: ["Deep relaxation", "Muscle tension relief", "Energy balancing"],
      rating: 4.7
    },
    {
      title: "Couples Massage",
      duration: "60 minutes",
      price: "$220",
      description: "Side-by-side relaxation experience perfect for sharing wellness with your loved one.",
      features: ["Shared experience", "Bonding time", "Dual relaxation"],
      rating: 4.8
    },
    {
      title: "Prenatal Massage",
      duration: "60 minutes",
      price: "$140",
      description: "Gentle, specialized massage designed for expecting mothers to reduce pregnancy discomfort.",
      features: ["Safe for pregnancy", "Reduces swelling", "Relieves back pain"],
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-spa-sage/20">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our comprehensive range of wellness treatments designed to restore your mind, body, and spirit.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="h-full bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/register">
                    <Button variant="spa" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our expert therapists are here to help you achieve the ultimate state of relaxation and rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="spa-cta" size="lg" className="text-lg px-8 py-4">
                  Book Your Session
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="spa-outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;