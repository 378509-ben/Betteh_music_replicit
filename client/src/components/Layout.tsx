import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Link } from 'wouter';
import { Music, Play, Pause, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMusicPlayer } from '@/hooks/useMusicPlayer';

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [showPreloader, setShowPreloader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPlaying, togglePlay } = useMusicPlayer();

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/entertainment', label: 'Entertainment' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/staff', label: 'Staff' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  return (
    <>
      {showPreloader && (
        <div className="preloader" data-testid="preloader">
          <p>Loading the vibe... please wait</p>
        </div>
      )}

      <div className="wave-animation" data-testid="wave-animation" />

      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <a className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary hover-elevate px-4 py-2 rounded-md" data-testid="link-home-logo">
                <Music className="w-6 h-6" />
                Betteh Music
              </a>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <a
                    className={`px-4 py-2 rounded-md font-medium uppercase text-sm tracking-wide transition-all hover-elevate ${
                      isActive(href)
                        ? 'bg-primary/20 text-primary'
                        : 'text-foreground/80 hover:text-foreground'
                    }`}
                    data-testid={`link-nav-${label.toLowerCase()}`}
                  >
                    {label}
                  </a>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                onClick={togglePlay}
                variant="default"
                size="default"
                className="hidden md:flex items-center gap-2"
                data-testid="button-music-toggle"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Mute Music
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Launch Music
                  </>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-2">
                {navLinks.map(({ href, label }) => (
                  <Link key={href} href={href}>
                    <a
                      className={`px-4 py-3 rounded-md font-medium uppercase text-sm tracking-wide transition-all hover-elevate ${
                        isActive(href)
                          ? 'bg-primary/20 text-primary'
                          : 'text-foreground/80'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-${label.toLowerCase()}`}
                    >
                      {label}
                    </a>
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    togglePlay();
                    setMobileMenuOpen(false);
                  }}
                  variant="default"
                  className="w-full mt-2"
                  data-testid="button-mobile-music"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Mute Music
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Launch Music
                    </>
                  )}
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-card border-t border-card-border">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
                <Music className="w-5 h-5" />
                Betteh Music
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Bringing the best music entertainment to your events. Professional DJ services, live bands, and equipment rental.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>
                      <a className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-${label.toLowerCase()}`}>
                        {label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li data-testid="text-footer-email">info@bettehmusic.com</li>
                <li data-testid="text-footer-phone">+1 (555) 123-4567</li>
                <li data-testid="text-footer-address">123 Music Street, Los Angeles, CA</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-card-border text-center text-muted-foreground text-sm">
            <p data-testid="text-copyright">&copy; {new Date().getFullYear()} Betteh Music. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
