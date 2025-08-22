import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, Package, MapPin, ArrowRight } from "lucide-react";
import localMovingImage from "@/assets/local-moving.jpg";
import longDistanceImage from "@/assets/long-distance.jpg";
import officeRelocationImage from "@/assets/office-relocation.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Local Moves",
      description: "Quick, efficient relocations within cities or towns.",
      image: localMovingImage,
      features: ["Same-day service available", "Professional packing", "Furniture assembly", "Local expertise"],
      cta: "Get Local Quote"
    },
    {
      icon: MapPin,
      title: "Long-Distance Moves",
      description: "Reliable long-distance and cross-border moves.",
      image: longDistanceImage,
      features: ["Cross-border expertise", "Real-time tracking", "Storage solutions", "Customs handling"],
      cta: "Plan Long Move"
    },
    {
      icon: Building,
      title: "Office Relocation",
      description: "Expert handling of office moves, with minimal downtime.",
      image: officeRelocationImage,
      features: ["Weekend moves", "IT equipment care", "Minimal downtime", "Project management"],
      cta: "Business Quote"
    },
    {
      icon: Package,
      title: "Packing & Unpacking",
      description: "Full packing, moving, and unpacking for a stress-free move.",
      image: localMovingImage,
      features: ["Professional materials", "Fragile item care", "Unpacking service", "Organization help"],
      cta: "Packing Quote"
    }
  ];

  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Moving Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're moving locally, long-distance, or relocating your office, 
            we have the expertise and resources to make your move seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group bg-gradient-card border-none shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-2 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="cta" 
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom moving solution? We're here to help!
          </p>
          <Button variant="hero" size="lg">
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;