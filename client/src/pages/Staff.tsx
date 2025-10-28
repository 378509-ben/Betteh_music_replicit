import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Music, Disc3, Mic2, Radio } from 'lucide-react';

export default function Staff() {
  const teamMembers = [
    {
      name: 'DJ Marcus "The Vibe"',
      role: 'Lead DJ & Music Director',
      bio: 'With 15 years of experience, Marcus brings energy and expertise to every event.',
      icon: Disc3,
    },
    {
      name: 'Sarah Chen',
      role: 'Event Coordinator',
      bio: 'Sarah ensures every detail is perfect, from planning to execution.',
      icon: Music,
    },
    {
      name: 'Mike Johnson',
      role: 'Sound Engineer',
      bio: 'Technical wizard with a passion for crystal-clear audio quality.',
      icon: Radio,
    },
    {
      name: 'DJ Luna',
      role: 'Resident DJ',
      bio: 'Specializing in electronic and house music, Luna keeps the dance floor moving.',
      icon: Disc3,
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Live Band Leader',
      bio: 'Multi-instrumentalist leading our talented live performance team.',
      icon: Mic2,
    },
    {
      name: 'Jessica Martinez',
      role: 'Lighting Designer',
      bio: 'Creates stunning visual experiences that complement every performance.',
      icon: Music,
    },
    {
      name: 'DJ Phoenix',
      role: 'Hip-Hop Specialist',
      bio: 'Bringing authentic hip-hop and urban music expertise to your events.',
      icon: Disc3,
    },
    {
      name: 'Tom Anderson',
      role: 'Technical Director',
      bio: 'Oversees all technical aspects and equipment maintenance.',
      icon: Radio,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-staff-hero-title">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-staff-hero-subtitle">
            Talented professionals passionate about creating unforgettable experiences
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 hover:-translate-y-2 group"
                data-testid={`card-staff-${index}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <member.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1" data-testid={`text-staff-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium" data-testid={`text-staff-role-${index}`}>
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-staff-bio-${index}`}>
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-join-heading">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-join-desc">
              We're always looking for talented DJs, musicians, sound engineers, and event professionals to join our growing team. If you're passionate about music and entertainment, we'd love to hear from you.
            </p>
            <div className="space-y-4">
              <p className="text-muted-foreground" data-testid="text-join-contact">
                Send your resume and portfolio to:{' '}
                <a href="mailto:careers@bettehmusic.com" className="text-primary hover:underline">
                  careers@bettehmusic.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
