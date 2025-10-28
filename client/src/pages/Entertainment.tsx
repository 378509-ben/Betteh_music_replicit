import { Music, Mic, Radio, Headphones, Speaker, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Entertainment() {
  const services = [
    {
      icon: Headphones,
      title: 'Professional DJ Services',
      description: 'Experienced DJs who know how to read the crowd and keep the energy flowing.',
      features: [
        'Custom playlist curation',
        'Professional mixing and transitions',
        'MC services available',
        'All genres covered',
      ],
    },
    {
      icon: Mic,
      title: 'Live Bands',
      description: 'Talented musicians delivering authentic live performances across all genres.',
      features: [
        'Rock, jazz, pop, and more',
        'Customizable setlists',
        'Professional sound setup',
        'Experienced performers',
      ],
    },
    {
      icon: Speaker,
      title: 'Sound System Rental',
      description: 'Top-tier audio equipment for crystal-clear sound at any venue size.',
      features: [
        'Line array speakers',
        'Subwoofers and monitors',
        'Professional mixing consoles',
        'Technical support included',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Lighting & Effects',
      description: 'Create the perfect atmosphere with professional lighting solutions.',
      features: [
        'LED stage lighting',
        'Moving head lights',
        'Fog and haze machines',
        'Custom light shows',
      ],
    },
    {
      icon: Music,
      title: 'Event Planning',
      description: 'Complete event coordination to ensure seamless entertainment flow.',
      features: [
        'Timeline coordination',
        'Technical planning',
        'Vendor management',
        'On-site support',
      ],
    },
    {
      icon: Radio,
      title: 'Karaoke Systems',
      description: 'Professional karaoke setups for interactive entertainment.',
      features: [
        'Extensive song library',
        'High-quality microphones',
        'Easy-to-use interface',
        'Host services available',
      ],
    },
  ];

  const eventTypes = [
    'Weddings',
    'Corporate Events',
    'Private Parties',
    'Festivals',
    'School Dances',
    'Holiday Parties',
    'Fundraisers',
    'Product Launches',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-entertainment-hero-title">
            Entertainment <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-entertainment-hero-subtitle">
            Comprehensive solutions for every type of event
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-heading">
              What We Provide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-service entertainment and equipment for any occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6" data-testid={`text-service-desc-${index}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-sm"
                        data-testid={`text-service-feature-${index}-${fIndex}`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-event-types-heading">
              Perfect For Any Event
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've provided entertainment for all types of occasions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {eventTypes.map((type, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-elevate transition-all"
                data-testid={`card-event-type-${index}`}
              >
                <p className="font-medium" data-testid={`text-event-type-${index}`}>{type}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Highlight */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Headphones className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-featured-title">
                  Premium DJ Packages
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-featured-desc">
                  Our most popular service combines professional DJs with top-tier sound equipment and lighting. Perfect for weddings, corporate events, and parties of all sizes.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    '4-8 hour performance packages',
                    'Pre-event consultation included',
                    'Backup equipment on-site',
                    'Professional liability insurance',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3" data-testid={`text-featured-feature-${index}`}>
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button size="lg" data-testid="button-featured-contact">
                    Request a Quote
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-background/50" data-testid="card-package-basic">
                  <div className="text-2xl font-bold text-primary mb-2">Basic</div>
                  <div className="text-sm text-muted-foreground mb-4">Up to 4 hours</div>
                  <div className="text-3xl font-bold mb-1">$800</div>
                  <div className="text-xs text-muted-foreground">Starting at</div>
                </Card>
                <Card className="p-6 text-center bg-background/50" data-testid="card-package-premium">
                  <div className="text-2xl font-bold text-primary mb-2">Premium</div>
                  <div className="text-sm text-muted-foreground mb-4">Up to 6 hours</div>
                  <div className="text-3xl font-bold mb-1">$1,200</div>
                  <div className="text-xs text-muted-foreground">Starting at</div>
                </Card>
                <Card className="p-6 text-center bg-background/50 col-span-2" data-testid="card-package-ultimate">
                  <div className="text-2xl font-bold text-primary mb-2">Ultimate</div>
                  <div className="text-sm text-muted-foreground mb-4">8+ hours with lighting</div>
                  <div className="text-3xl font-bold mb-1">$2,000+</div>
                  <div className="text-xs text-muted-foreground">Custom packages available</div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-heading">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discuss your entertainment needs and receive a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-contact">
                Get a Quote
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" data-testid="button-cta-gallery">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
