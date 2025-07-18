import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Users, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import spaAboutImage from "../assets/spa-about.jpg";
import therapistImage from "../assets/therapist-1.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "We believe in treating the whole person - mind, body, and spirit - to achieve true wellness and balance."
    },
    {
      icon: Leaf,
      title: "Natural Healing",
      description: "Using organic, sustainably sourced products and time-tested techniques to promote natural healing."
    },
    {
      icon: Users,
      title: "Expert Care",
      description: "Our certified therapists bring years of experience and passion to every treatment session."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality services and exceeding our clients' expectations."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Master Therapist & Founder",
      experience: "15+ years",
      specialties: ["Swedish Massage", "Deep Tissue", "Aromatherapy"]
    },
    {
      name: "Elena Rodriguez",
      role: "Wellness Specialist",
      experience: "10+ years", 
      specialties: ["Hot Stone", "Prenatal", "Reflexology"]
    },
    {
      name: "Marcus Johnson",
      role: "Therapeutic Massage Expert",
      experience: "12+ years",
      specialties: ["Sports Massage", "Deep Tissue", "Injury Recovery"]
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
              About <span className="text-transparent bg-clip-text bg-gradient-primary">EnerSpa</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your sanctuary for wellness, relaxation, and rejuvenation in the heart of the city.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Founded in 2015 with a vision to create a haven of tranquility in our busy world, EnerSpa has grown to become the city's premier wellness destination. We believe that true beauty and wellness come from within, and our mission is to help you discover and nurture that inner radiance.
              </p>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Our spa combines ancient healing traditions with modern techniques, creating a unique experience that addresses the needs of today's wellness-conscious individuals. Every treatment is carefully designed to restore balance, reduce stress, and promote overall wellbeing.
              </p>
              <Link to="/services">
                <Button variant="spa" size="lg">
                  Explore Our Services
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={spaAboutImage} 
                alt="Serene spa interior with soft lighting and natural elements"
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Meet Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={therapistImage} 
                        alt={`${member.name} - Professional spa therapist`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      <strong>Experience:</strong> {member.experience}
                    </p>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.specialties.map((specialty, i) => (
                          <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the EnerSpa Difference
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have discovered their path to wellness with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="spa-cta" size="lg" className="text-lg px-8 py-4">
                  Book Your First Session
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="spa-outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Get in Touch
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

export default About;