import { Link } from "react-router-dom";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spa-purple text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Energetic</h1>
                <p className="text-sm opacity-80 -mt-1">Spa & Wellness</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Experience ultimate relaxation and rejuvenation at our luxury spa. 
              We offer personalized massage therapy and wellness treatments to restore your body and mind.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Services
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
              <Link to="/dashboard" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 opacity-70" />
                <span className="text-primary-foreground/80 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 opacity-70" />
                <span className="text-primary-foreground/80 text-sm">info@energeticspa.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 opacity-70 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Wellness Avenue<br />
                  Spa District, SD 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Energetic Spa & Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;