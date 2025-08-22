import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { 
  CalendarIcon, 
  Home, 
  Building, 
  Package, 
  MapPin, 
  ArrowRight, 
  Shield, 
  Clock, 
  Truck, 
  Users,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localMovingImage from "@/assets/local-moving.jpg";
import longDistanceImage from "@/assets/long-distance.jpg";
import officeRelocationImage from "@/assets/office-relocation.jpg";

interface QuoteFormData {
  serviceType: string;
  fullName: string;
  phone: string;
  email: string;
  pickup: string;
  delivery: string;
  moveType: string;
  propertyType: string;
  cargoSize: string;
  moveDate?: Date;
  notes: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    {
      id: "local-moves",
      icon: Home,
      title: "Local Moves",
      description: "Quick, efficient relocations within cities or towns.",
      image: localMovingImage,
      features: [
        "Same-day service available",
        "Professional packing materials",
        "Furniture assembly & disassembly",
        "Local route expertise",
        "Affordable hourly rates",
        "Trained local teams"
      ],
      benefits: [
        "Fast and efficient service within your city",
        "Knowledge of local traffic patterns and regulations",
        "Flexible scheduling including weekends",
        "Specialized equipment for apartment moves"
      ],
      coverage: "Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and surrounding areas"
    },
    {
      id: "long-distance",
      icon: MapPin,
      title: "Long-Distance Moves",
      description: "Reliable long-distance and cross-border moves across Africa.",
      image: longDistanceImage,
      features: [
        "Cross-border expertise",
        "Real-time GPS tracking",
        "Secure storage solutions",
        "Customs documentation",
        "Insurance coverage",
        "Dedicated move coordinator"
      ],
      benefits: [
        "Extensive network across African countries",
        "Experience with international regulations",
        "Secure transportation with tracking",
        "Professional customs handling"
      ],
      coverage: "Kenya, Uganda, Tanzania, Rwanda, Burundi, South Sudan, Ethiopia, and beyond"
    },
    {
      id: "office-relocation",
      icon: Building,
      title: "Office Relocation",
      description: "Expert handling of office moves with minimal business downtime.",
      image: officeRelocationImage,
      features: [
        "Weekend & after-hours moves",
        "IT equipment specialists",
        "Minimal business disruption",
        "Project management",
        "Modular furniture expertise",
        "Employee coordination"
      ],
      benefits: [
        "Dedicated project manager for coordination",
        "Specialized handling of sensitive equipment",
        "Flexible scheduling to minimize downtime",
        "Post-move setup and organization"
      ],
      coverage: "Corporate districts across all major African cities"
    },
    {
      id: "packing-unpacking",
      icon: Package,
      title: "Packing & Unpacking",
      description: "Complete packing, moving, and unpacking for a stress-free experience.",
      image: localMovingImage,
      features: [
        "Professional packing materials",
        "Fragile item specialists",
        "Complete unpacking service",
        "Room organization",
        "Debris removal",
        "Custom crating for valuables"
      ],
      benefits: [
        "High-quality packing materials and techniques",
        "Specialized care for fragile and valuable items",
        "Complete unpacking and setup service",
        "Eco-friendly packing options available"
      ],
      coverage: "Available with all moving services across our network"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const service = services.find(s => s.id === selectedService);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Submitted!",
      description: `We'll contact you within 24 hours with your ${service?.title} quote.`,
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setDate(undefined);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional Moving Services
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Choose from our comprehensive range of moving services designed to meet 
            every relocation need across Africa.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Moving Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Click on any service below to learn more and request a personalized quote.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-2 animate-fade-in ${
                    selectedService === service.id 
                      ? 'border-primary shadow-lg' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <CardHeader>
                    <div className="relative mb-4">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-all duration-300"></div>
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Service Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Why Choose Milele Movers:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <Shield className="h-3 w-3 text-primary mr-2 mt-1 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Coverage Area */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Coverage Area:</h4>
                      <p className="text-sm text-muted-foreground">{service.coverage}</p>
                    </div>
                    
                    <Button 
                      variant="cta" 
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service.id);
                        setTimeout(() => {
                          document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      Get Quote for {service.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      {selectedService && (
        <section className="py-20 bg-muted/30" id="quote-form">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Request Quote for {services.find(s => s.id === selectedService)?.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll contact you within 24 hours with a personalized quote.
              </p>
            </div>

            <Card className="bg-background border-none shadow-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="serviceType" value={selectedService} />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                        className="bg-muted/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+254 700 123 456"
                        required
                        className="bg-muted/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted/50"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="pickup">Pickup Location *</Label>
                      <Input
                        id="pickup"
                        name="pickup"
                        placeholder="Enter pickup address"
                        required
                        className="bg-muted/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery">Delivery Location *</Label>
                      <Input
                        id="delivery"
                        name="delivery"
                        placeholder="Enter delivery address"
                        required
                        className="bg-muted/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Move Type *</Label>
                      <Select name="moveType" required>
                        <SelectTrigger className="bg-muted/50">
                          <SelectValue placeholder="Select move type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="local">Local Move</SelectItem>
                          <SelectItem value="long-distance">Long-Distance Move</SelectItem>
                          <SelectItem value="cross-border">Cross-Border Move</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Property Type *</Label>
                      <Select name="propertyType" required>
                        <SelectTrigger className="bg-muted/50">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="office">Office</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Estimated Cargo Size *</Label>
                      <Select name="cargoSize" required>
                        <SelectTrigger className="bg-muted/50">
                          <SelectValue placeholder="Select cargo size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (1-2 rooms)</SelectItem>
                          <SelectItem value="medium">Medium (3-4 rooms)</SelectItem>
                          <SelectItem value="large">Large (5+ rooms)</SelectItem>
                          <SelectItem value="custom">Custom Size</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Move Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-muted/50",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Tell us about any special requirements, fragile items, or other details..."
                      rows={4}
                      className="bg-muted/50"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="button"
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setSelectedService(null)}
                    >
                      Back to Services
                    </Button>
                    <Button 
                      type="submit" 
                      variant="hero" 
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Get My Quote
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We'll contact you within 24 hours with your personalized quote.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Milele Movers?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Fully Insured</h3>
                <p className="text-sm text-muted-foreground">
                  Complete insurance coverage for your peace of mind
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">On-Time Service</h3>
                <p className="text-sm text-muted-foreground">
                  Punctual service with real-time tracking updates
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Modern Fleet</h3>
                <p className="text-sm text-muted-foreground">
                  Well-maintained vehicles with GPS tracking
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">
                  Trained professionals with 10+ years experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;