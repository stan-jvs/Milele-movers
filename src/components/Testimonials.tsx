import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      location: "Nairobi, Kenya",
      rating: 5,
      text: "Milele Movers made our international move from Nairobi to Lagos seamless. Their team was professional, punctual, and handled our belongings with extreme care. Highly recommended!",
      moveType: "Long-distance"
    },
    {
      name: "David Okonkwo",
      location: "Lagos, Nigeria",
      rating: 5,
      text: "Outstanding office relocation service! They moved our entire company over a weekend with zero downtime. Their project management was exceptional.",
      moveType: "Office Relocation"
    },
    {
      name: "Amina Hassan",
      location: "Dar es Salaam, Tanzania",
      rating: 5,
      text: "From packing to unpacking, everything was perfect. The team was courteous and efficient. Our fragile items arrived without a scratch!",
      moveType: "Local Move"
    },
    {
      name: "Robert Banda",
      location: "Lusaka, Zambia",
      rating: 5,
      text: "I've moved 3 times with Milele Movers. Each time, they exceed expectations. Fair pricing, excellent service, and genuine care for customers.",
      moveType: "Repeat Customer"
    },
    {
      name: "Grace Mutindi",
      location: "Kampala, Uganda",
      rating: 5,
      text: "The best moving experience I've ever had. They provided storage solutions when needed and kept me updated throughout the entire process.",
      moveType: "Long-distance"
    },
    {
      name: "Michael Tembo",
      location: "Accra, Ghana",
      rating: 5,
      text: "Professional, reliable, and trustworthy. Milele Movers handled our cross-border move with expertise. Every detail was taken care of.",
      moveType: "Cross-border"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what families and businesses 
            across Africa say about their moving experience with us.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-gradient-card border-none shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {testimonial.moveType}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="flex-shrink-0 w-80 bg-gradient-card border-none shadow-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {testimonial.moveType}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">Successful Moves</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <p className="text-muted-foreground">On-Time Delivery</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;