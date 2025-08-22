import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Milele Movers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over a decade, we've been Africa's most trusted moving company, 
            helping families and businesses relocate with confidence and care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Mission & Values
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Milele Movers, we understand that moving is more than just transporting belongings — 
              it's about moving lives, dreams, and futures. Our experienced team of professionals 
              is dedicated to making your move as smooth and stress-free as possible.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With our comprehensive insurance coverage, state-of-the-art tracking systems, 
              and commitment to excellence, we've earned the trust of over 1,000 families 
              and businesses across Africa.
            </p>
            <Button variant="cta" size="lg">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-none shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Fully Insured</h4>
                <p className="text-sm text-muted-foreground">
                  Complete insurance coverage for your peace of mind
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-none shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">On-Time</h4>
                <p className="text-sm text-muted-foreground">
                  Punctual service with real-time tracking updates
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-none shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Care</h4>
                <p className="text-sm text-muted-foreground">
                  We handle your belongings like our own
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-none shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Certified</h4>
                <p className="text-sm text-muted-foreground">
                  Licensed and certified moving professionals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;