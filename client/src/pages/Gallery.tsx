import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: 'events', alt: 'Wedding reception with DJ setup' },
    { id: 2, category: 'equipment', alt: 'Professional sound system' },
    { id: 3, category: 'events', alt: 'Corporate event live band performance' },
    { id: 4, category: 'venues', alt: 'Concert venue lighting setup' },
    { id: 5, category: 'team', alt: 'DJ performing at festival' },
    { id: 6, category: 'events', alt: 'Private party dance floor' },
    { id: 7, category: 'equipment', alt: 'LED lighting array' },
    { id: 8, category: 'venues', alt: 'Outdoor festival stage' },
    { id: 9, category: 'team', alt: 'Band performing live' },
    { id: 10, category: 'events', alt: 'School dance event' },
    { id: 11, category: 'equipment', alt: 'DJ mixing console' },
    { id: 12, category: 'venues', alt: 'Indoor venue setup' },
  ];

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'events', label: 'Events' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'venues', label: 'Venues' },
    { value: 'team', label: 'Team' },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-gallery-hero-title">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-gallery-hero-subtitle">
            A glimpse into our events, equipment, and team in action
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-card border-b border-card-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setFilter(category.value)}
                variant={filter === category.value ? 'default' : 'outline'}
                size="lg"
                data-testid={`button-filter-${category.value}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden cursor-pointer hover-elevate transition-all duration-300 group"
                onClick={() => setSelectedImage(index)}
                data-testid={`card-gallery-${item.id}`}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-sm" data-testid={`text-gallery-alt-${item.id}`}>{item.alt}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg" data-testid="text-no-results">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="modal-lightbox"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>

          <div
            className="max-w-5xl w-full aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center text-white p-8">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-lg" data-testid="text-lightbox-alt">
                {filteredItems[selectedImage]?.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
