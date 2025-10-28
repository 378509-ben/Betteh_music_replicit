import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSchema, type InsertContact } from '@shared/schema';

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-contact-hero-title">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-contact-hero-subtitle">
            Let's discuss how we can make your event extraordinary
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - 60% */}
            <div className="lg:col-span-3">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6" data-testid="text-form-heading">
                  Send Us a Message
                </h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="Your name"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage data-testid="error-name" />
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
                            <Input
                              {...field}
                              type="email"
                              placeholder="your.email@example.com"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage data-testid="error-email" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              value={field.value || ''}
                              type="tel"
                              placeholder="(555) 123-4567"
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage data-testid="error-phone" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || ''}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-event-type">
                                <SelectValue placeholder="Select event type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="wedding">Wedding</SelectItem>
                              <SelectItem value="corporate">Corporate Event</SelectItem>
                              <SelectItem value="private">Private Party</SelectItem>
                              <SelectItem value="festival">Festival</SelectItem>
                              <SelectItem value="school">School Dance</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage data-testid="error-event-type" />
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
                              {...field}
                              rows={6}
                              placeholder="Tell us about your event..."
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage data-testid="error-message" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            {/* Contact Information - 40% */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-info-email-label">Email</h3>
                    <a
                      href="mailto:info@bettehmusic.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      info@bettehmusic.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-info-phone-label">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-info-address-label">Address</h3>
                    <p className="text-muted-foreground" data-testid="text-info-address">
                      123 Music Street<br />
                      Los Angeles, CA 90028
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-info-hours-label">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p data-testid="text-info-hours-weekday">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p data-testid="text-info-hours-weekend">Sat - Sun: By Appointment</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-card to-card/50">
                <h3 className="font-semibold mb-3" data-testid="text-social-heading">Follow Us</h3>
                <div className="flex gap-3">
                  {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social, index) => (
                    <Button
                      key={social}
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      data-testid={`button-social-${social.toLowerCase()}`}
                    >
                      <span className="text-xs">{social[0]}</span>
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-location-heading">
              Find Us
            </h2>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="aspect-video flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg" data-testid="text-map-placeholder">Map location would be displayed here</p>
                  <p className="text-sm mt-2">123 Music Street, Los Angeles, CA 90028</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
