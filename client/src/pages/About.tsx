import { Target, Heart, Award, TrendingUp, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function About() {
  const milestones = [
    { year: '2014', event: 'Betteh Music Founded', description: 'Started with a passion for bringing quality music to events' },
    { year: '2016', event: 'First Major Festival', description: 'Provided entertainment for 10,000+ attendees' },
    { year: '2019', event: 'Equipment Expansion', description: 'Invested in state-of-the-art sound and lighting systems' },
    { year: '2024', event: 'Industry Recognition', description: 'Received "Best Entertainment Service" award' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Music',
      description: 'We live and breathe music, bringing authentic energy to every performance.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality service and entertainment.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Constantly evolving with the latest trends and technology in music entertainment.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-about-hero-title">
            About <span className="text-primary">Betteh Music</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-hero-subtitle">
            Creating unforgettable musical experiences since 2014
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-our-story-heading">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-story-para-1">
                  Betteh Music was born from a simple yet powerful idea: every event deserves exceptional entertainment. What started as a small DJ service has grown into a comprehensive music entertainment company serving clients across the region.
                </p>
                <p data-testid="text-story-para-2">
                  Over the past decade, we've had the privilege of being part of countless celebrations, corporate events, festivals, and private parties. Each event has taught us something new and reinforced our commitment to excellence.
                </p>
                <p data-testid="text-story-para-3">
                  Today, we're proud to offer a full range of services including professional DJs, live bands, and premium equipment rental. Our team of talented artists and technicians work together to ensure your event is nothing short of spectacular.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center" data-testid="card-stat-events">
                <Target className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Successful Events</div>
              </Card>
              <Card className="p-6 text-center" data-testid="card-stat-clients">
                <Heart className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">300+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center" data-testid="card-stat-team">
                <Award className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </Card>
              <Card className="p-6 text-center" data-testid="card-stat-experience">
                <Clock className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-values-heading">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-value-desc-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-timeline-heading">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our history
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6" data-testid={`item-milestone-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold" data-testid={`text-milestone-year-${index}`}>{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 p-6">
                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-milestone-event-${index}`}>
                      {milestone.event}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-milestone-desc-${index}`}>
                      {milestone.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-team-preview-heading">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Talented professionals dedicated to making your event extraordinary
            </p>
            <Link href="/staff">
              <Button size="lg" data-testid="button-view-team">
                View Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-location-heading">
              Based in Los Angeles
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-location-desc">
              Serving clients throughout Southern California and beyond. Whether you're hosting an intimate gathering or a large-scale festival, we bring the same level of professionalism and passion to every event.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" data-testid="button-contact">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
