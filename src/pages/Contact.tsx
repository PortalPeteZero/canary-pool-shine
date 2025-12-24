import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import pacificBlueImage from "@/assets/installations/pacific-blue/pacific-blue-1.jpg";

const islands = [
  "Tenerife",
  "Gran Canaria",
  "Lanzarote",
  "Fuerteventura",
  "La Palma",
  "La Gomera",
  "El Hierro",
];

const poolTypes = [
  "Private Residential",
  "Community/Shared",
  "Hotel/Resort",
  "Commercial",
  "Other",
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().optional(),
  island: z.string().min(1, "Please select an island"),
  poolType: z.string().min(1, "Please select a pool type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  consent: z.boolean().refine((val) => val === true, "You must agree to be contacted"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      island: "",
      poolType: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // In production, this would send to a backend
    console.log("Form submitted:", { ...data, email: "[REDACTED]", phone: "[REDACTED]" });
    
    toast({
      title: "Enquiry Received",
      description: "We'll be in touch within 24 hours.",
    });
    
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Get a Quote | ECO Finish Pool Coatings | Canary Detect</title>
        <meta 
          name="description" 
          content="Contact Canary Detect for ECO Finish pool coating quotes. Serving all Canary Islands including Tenerife, Gran Canaria, Lanzarote, and Fuerteventura." 
        />
      </Helmet>

      {/* Hero with image background */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={pacificBlueImage}
            alt="Beautiful ECO Finish pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/70" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3 animate-fade-up">
              Free Consultation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Get a Free Quote
            </h1>
            <p className="text-lg text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Send us your details and we'll be in touch within 24 hours to discuss your pool transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content - Light */}
      <section className="py-10 md:py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-5 md:space-y-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Location</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Serving all Canary Islands
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Phone</h3>
                    <a 
                      href="tel:+34646022695"
                      className="text-sm md:text-base text-foreground hover:text-primary transition-colors"
                    >
                      +34 646 02 26 95
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Email</h3>
                    <a 
                      href="mailto:info@canary-detect.com"
                      className="text-sm md:text-base text-foreground hover:text-primary transition-colors break-all"
                    >
                      info@canary-detect.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-14 p-4 md:p-6 rounded-xl bg-surface-light border border-border/40">
                <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">What happens next?</h3>
                <ol className="space-y-3 md:space-y-4 text-xs md:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    We'll review your enquiry within 24 hours
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    We'll arrange a free on-site consultation
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    You'll receive a detailed, no-obligation quote
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="p-5 md:p-8 lg:p-12 rounded-xl bg-card border border-border/40 shadow-card">
                {isSubmitted ? (
                  <div className="text-center py-10 md:py-16">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <CheckCircle2 className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                      Thank You!
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                      Your enquiry has been received. We'll be in touch within 24 hours 
                      to discuss your ECO Finish options.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" size="default">
                      Send Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5 md:mb-8">
                      Send Us Your Details
                    </h2>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="+34 600 000 000" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="island"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Island *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select your island" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {islands.map((island) => (
                                      <SelectItem key={island} value={island}>
                                        {island}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="poolType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pool Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select pool type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {poolTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your pool and what you're looking for..."
                                  className="min-h-[120px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="consent"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal text-muted-foreground">
                                  I agree to be contacted by Canary Detect regarding my enquiry. *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                          Send Enquiry
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
