import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  CalendarIcon,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  if (date) {
    formData.append("preferredmovedate", format(date, "PPP"));
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyeeYj_w-Wusy6-s3loCt5Pk5ZVAXovAhlKqnJ-8AkZoENeZxFPIJMwOU2X4t42zkWNfA/exec",
      {
        method: "POST",
        body: formData, // Important: No headers, browser handles it.
      }
    );

    if (response.ok) {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 24 hours with your personalized quote.",
      });
      form.reset();
      setDate(undefined);
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "There was a problem submitting your request. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
  // Render the contact form and details

  return (
    <section className="py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to move? Get a personalized quote tailored to your specific needs. Fill out the form below and we'll contact you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">+254 700 123 456</p>
                    <p className="text-muted-foreground">+254 733 987 654</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">quotes@milelemovers.com</p>
                    <p className="text-muted-foreground">info@milelemovers.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">
                      123 Moving Street<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM<br />
                      Sun: Emergency only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-none shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Request Your Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="Enter your full name" required className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phonenumber">Phone Number *</Label>
                      <Input id="phonenumber" name="phonenumber" type="tel" placeholder="+254 700 123 456" required className="bg-background" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-background" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="pickuplocation">Pickup Location *</Label>
                      <Input id="pickuplocation" name="pickuplocation" placeholder="Enter pickup address" required className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliverylocation">Delivery Location *</Label>
                      <Input id="deliverylocation" name="deliverylocation" placeholder="Enter delivery address" required className="bg-background" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Move Type *</Label>
                      <Select name="moveType" required>
                        <SelectTrigger className="bg-background">
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
                        <SelectTrigger className="bg-background">
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
                      <Select name="estimatedCargosize" required>
                        <SelectTrigger className="bg-background">
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
                              "w-full justify-start text-left font-normal bg-background",
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
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      placeholder="Tell us about any special requirements, fragile items, or other details..."
                      rows={4}
                      className="bg-background"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : <>Get My Quote <Send className="ml-2 h-5 w-5" /></>}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We'll contact you within 24 hours with your personalized quote.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;