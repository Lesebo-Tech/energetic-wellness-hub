import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  image?: string;
  onBook?: () => void;
}

const ServiceCard = ({ title, description, duration, price, image, onBook }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-spa-lavender/20">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-spa-purple group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-spa-purple">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-xs">ZAR</span>
            <span className="font-semibold">{price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="spa" 
          className="w-full"
          onClick={onBook}
        >
          Book This Service
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;