import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { 
  Sparkles, 
  Heart, 
  Users, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle2,
  Calendar
} from "lucide-react";
import spaHero from "@/assets/spa-hero.jpg";
import spaAbout from "@/assets/spa-about.jpg";
import therapist1 from "@/assets/therapist-1.jpg";
import spaProducts from "@/assets/spa-products.jpg";

const Index = () => {
  const services = [
    {
      title: "Body Treatments",
      description: "Rejuvenating body treatments including exfoliation, wraps, and moisturizing therapies.",
      duration: "60-90 min",
      price: "120",
      image: spaProducts
    },
    {
      title: "Massage Therapy",
      description: "Professional therapeutic massages including Swedish, deep tissue, and hot stone treatments.",
      duration: "60-120 min", 
      price: "95",
      image: spaAbout
    },
    {
      title: "Aromatherapy",
      description: "Relaxing aromatherapy sessions using essential oils to restore balance and tranquility.",
      duration: "75 min",
      price: "110",
      image: spaProducts
    },
    {
      title: "Wellness Consultation",
      description: "Personalized wellness consultations to create your perfect relaxation journey.",
      duration: "30 min",
      price: "50",
      image: therapist1
    }
  ];

  const testimonials = [
    {
      name: "Emma Wilson",
      rating: 5,
      comment: "Absolutely incredible experience. The therapists are so skilled and the atmosphere is pure tranquility.",
      service: "Aromatherapy Massage"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Best spa in the city! I come here monthly for stress relief and it never disappoints.",
      service: "Deep Tissue Massage"
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The perfect place to unwind. The staff is professional and the facilities are top-notch.",
      service: "Couples Massage"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${spaHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Relax Your Body & Mind
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Experience ultimate tranquility with our personalized massage therapy 
              and wellness treatments designed to restore your inner balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Link to="/register">
                <Button variant="spa-glow" size="lg" className="text-lg px-8 py-4">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="spa-outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Services
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm opacity-80">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Certified Therapists
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Premium Products
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Peaceful Environment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-background to-spa-cream/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-spa-purple mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our range of therapeutic treatments designed to rejuvenate your body, 
              calm your mind, and restore your natural energy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                duration={service.duration}
                price={service.price}
                image={service.image}
                onBook={() => {}}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-full w-80 h-80 mx-auto shadow-elegant">
                <img 
                  src={spaAbout} 
                  alt="Spa Treatment Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 w-20 h-20 bg-spa-lavender/30 rounded-full animate-float"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-spa-purple-light/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="text-primary font-semibold text-lg">About Us</span>
                <h2 className="text-4xl font-bold text-spa-purple mt-2 mb-4">
                  Incredible & Relaxing Spa
                </h2>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Energetic Spa & Wellness, we believe that true beauty and wellness come from within. 
                Our expert therapists use time-honored techniques combined with modern innovations to 
                create transformative experiences that heal, restore, and energize.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-spa-lavender rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-spa-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-purple">Holistic Care</h4>
                    <p className="text-sm text-muted-foreground">Complete wellness approach</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-spa-lavender rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-spa-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-purple">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Certified professionals</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about">
                <Button variant="spa" size="lg">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-spa-purple text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of satisfied clients who have experienced the transformative power of our spa treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-spa-gold fill-current" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-4">"{testimonial.comment}"</p>
                <div className="border-t border-primary-foreground/20 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm opacity-70">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-spa-lavender/20 to-spa-cream/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-16 h-16 text-spa-purple mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-spa-purple mb-4">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your personalized spa experience today and discover the perfect balance of relaxation and rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="spa" size="lg" className="text-lg px-8 py-4">
                  Book Your Session
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="spa-outline" size="lg" className="text-lg px-8 py-4">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
