import { Link } from 'wouter';
import { Music2, Users, Zap, Calendar, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@assets/generated_images/Concert_hero_background_image_22dea070.png';

export default function Home() {
  const services = [
    {
      icon: Music2,
      title: 'Professional DJs',
      description: 'Top-tier DJs who know how to read the crowd and keep the energy high all night long.',
    },
    {
      icon: Users,
      title: 'Live Bands',
      description: 'Talented live bands across all genres to bring authentic musical experiences to your event.',
    },
    {
      icon: Zap,
      title: 'Equipment Rental',
      description: 'State-of-the-art sound systems, lighting, and stage equipment for any size venue.',
    },
  ];

  const testimonials = [
    {
      quote: 'Betteh Music made our wedding absolutely unforgettable. The DJ was amazing!',
      author: 'Sarah & Mike',
      event: 'Wedding Reception',
    },
    {
      quote: 'Professional, punctual, and incredibly talented. Will definitely book again.',
      author: 'Corporate Events Inc.',
      event: 'Annual Gala',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
            Elevate Your Event with{' '}
            <span className="text-primary">Betteh Music</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-subtitle">
            Professional DJ services, live bands, and entertainment solutions for unforgettable experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6" data-testid="button-hero-contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/entertainment">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 backdrop-blur-sm bg-background/30" data-testid="button-hero-services">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-services-heading">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium entertainment services tailored to make your event spectacular
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-desc-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-why-heading">
                Why Choose Betteh Music?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Years of Experience',
                    description: 'Over a decade of creating memorable musical moments at events of all sizes.',
                  },
                  {
                    title: 'Professional Equipment',
                    description: 'State-of-the-art sound and lighting systems that deliver exceptional quality.',
                  },
                  {
                    title: 'Customized Playlists',
                    description: "Tailored music selections that match your event's unique vibe and audience.",
                  },
                  {
                    title: '24/7 Support',
                    description: 'Dedicated support team available around the clock for your peace of mind.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4" data-testid={`item-why-${index}`}>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" data-testid={`text-why-title-${index}`}>{item.title}</h3>
                      <p className="text-muted-foreground text-sm" data-testid={`text-why-desc-${index}`}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-8 text-center" data-testid="card-stat-events">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Events</div>
              </Card>
              <Card className="p-8 text-center" data-testid="card-stat-clients">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Satisfaction</div>
              </Card>
              <Card className="p-8 text-center" data-testid="card-stat-artists">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Artists</div>
              </Card>
              <Card className="p-8 text-center" data-testid="card-stat-experience">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-testimonials-heading">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8" data-testid={`card-testimonial-${index}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6 italic" data-testid={`text-testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div>
                    <div className="font-semibold" data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-event-${index}`}>
                      {testimonial.event}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <Card className="p-12 md:p-16 text-center bg-gradient-to-br from-card to-card/50">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-heading">
              Ready to Book Your Event?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create an unforgettable experience together. Contact us today to discuss your event needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-10 py-6" data-testid="button-cta-contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
