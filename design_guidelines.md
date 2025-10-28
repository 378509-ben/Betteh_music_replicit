# Betteh Music - Design Guidelines

## Design Approach

**Reference-Based with Custom Aesthetic**: This music/entertainment platform has a distinct existing visual identity with dark gradient backgrounds and electric blue accents. Draw inspiration from music streaming platforms like Spotify and SoundCloud for modern music-focused UX patterns, while maintaining the established cosmic/electric aesthetic.

## Core Design Principles

1. **Immersive Music Experience**: Create an atmospheric, engaging environment that reflects the energy and emotion of music
2. **Fluid Navigation**: Seamless transitions between pages with persistent audio playback
3. **Visual Rhythm**: Use animations and spacing that feel musical and dynamic
4. **Accessibility**: Ensure all interactive elements are keyboard navigable and screen-reader friendly

## Typography System

**Primary Font**: Inter or Poppins (Google Fonts)
- **Hero Headlines**: 3xl-5xl (48-64px), font-bold, tracking-tight
- **Section Headers**: 2xl-3xl (32-48px), font-semibold
- **Subheadings**: xl-2xl (24-32px), font-medium
- **Body Text**: base-lg (16-18px), font-normal, leading-relaxed for readability
- **Navigation**: base (16px), font-medium, uppercase tracking-wide
- **Captions/Meta**: sm (14px), font-normal, opacity-80

**Secondary Font** (Optional accent): Outfit or Raleway for special headings

## Layout System

**Spacing Scale**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Container padding: px-6 md:px-12 lg:px-20
- Section vertical spacing: py-16 md:py-20 lg:py-24
- Component gaps: gap-6 to gap-12 depending on density
- Maximum content width: max-w-7xl for wide sections, max-w-4xl for content sections

**Grid System**:
- Gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-6
- Staff cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 with gap-8
- Feature sections: Alternating two-column layouts (image/content splits)

## Page-Specific Layouts

### Home Page
**Hero Section** (80vh):
- Full-width immersive hero with large background image (live music performance, DJ setup, or concert atmosphere)
- Centered content with hero headline, subheadline, and primary CTA
- Music player toggle button with blur backdrop
- Subtle wave animation overlay at top

**Feature Sections** (5-6 sections):
1. **What We Offer**: 3-column grid showcasing services (DJ, Live Bands, Equipment)
2. **Latest Events**: Horizontal scrolling card carousel with upcoming shows
3. **Why Choose Us**: Alternating content/image rows highlighting unique value
4. **Featured Artists**: Grid of artist/staff highlights with hover effects
5. **Testimonials**: 2-column testimonial cards with quotes and names
6. **CTA Section**: Bold call-to-action with contact form preview/link

### About Page
- Hero section with compelling mission statement (50vh)
- Two-column layout: Story on left, key stats/milestones on right
- Timeline section showing company history with vertical timeline design
- Team preview section linking to staff page

### Entertainment Page
- Grid showcase of service categories
- Each category card: Icon, title, description, "Learn More" link
- Highlighted featured service with larger card/banner treatment
- Equipment rental section with image gallery grid

### Gallery Page
- Masonry or standard grid layout for photos (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Lightbox modal for full-size image viewing
- Filter categories at top (Events, Equipment, Venues, Team)
- Lazy loading for performance

### Staff Page
- Grid of team member cards (4 columns on desktop, 2 on tablet, 1 on mobile)
- Each card: Photo, name, role, brief bio, social links
- Hover effect revealing additional information

### Contact Page
**Two-Column Layout**:
- **Left (60%)**: Contact form with fields for name, email, phone, event type, message
- **Right (40%)**: Contact information (address, phone, email, hours), embedded map placeholder, social media links

**Form Design**:
- Clean, spacious input fields with floating labels
- Proper validation states (error/success)
- Submit button with loading state
- Success/error message display after submission

## Component Library

### Navigation Header
- Sticky header with blur backdrop (backdrop-blur-md)
- Logo/brand on left, nav links centered or right-aligned
- Mobile: Hamburger menu with slide-out drawer
- Active page indicator with underline or background highlight

### Buttons
- **Primary**: Solid background with accent color, rounded-lg, px-8 py-3, font-semibold
- **Secondary**: Outline style with border-2, same padding
- **Ghost**: Transparent with hover background
- All buttons: transition-all duration-200, hover scale and brightness changes

### Cards
- Rounded corners (rounded-xl or rounded-2xl)
- Subtle shadow or border (shadow-lg or border border-white/10)
- Padding: p-6 to p-8
- Hover: transform scale-105 transition

### Music Player Component
- Fixed or floating position (bottom-right or integrated in header)
- Play/pause toggle with icon transition
- Volume control (optional)
- Current track display (if applicable)
- Minimize/maximize functionality

### Footer
- Dark background matching header
- Three-column layout: Brand/description, Quick Links, Social/Contact
- Newsletter signup form (optional)
- Copyright and legal links at bottom

### Modal/Lightbox
- Backdrop overlay with blur (backdrop-blur-sm bg-black/80)
- Centered content with close button
- Smooth fade-in/out transitions

## Animations & Interactions

**Page Transitions**: Smooth fade-in on route change (200-300ms)

**Scroll Animations**: Subtle fade-up on scroll for section reveals (use Intersection Observer)

**Wave Effect**: Persistent animated gradient bar at top of viewport (3-5px height, horizontal moving gradient)

**Preloader**: Full-screen loader with fade-out after 1.5-2s, disappears completely

**Hover States**:
- Cards: lift slightly (translate-y-1) with shadow increase
- Links: underline or color change
- Images: slight zoom on gallery items (scale-110)

**Button Interactions**: Already handled by Button component

## Images

**Large Hero Image**: Yes - homepage hero section
- **Description**: Dynamic concert/performance photo with crowd energy or DJ/musician in action, atmospheric lighting with blue/purple tones
- **Placement**: Full-width hero background (80vh) with overlay gradient for text readability

**Additional Images**:
1. **About Page**: Team photo or studio/venue interior image
2. **Gallery Page**: 20-30 event photos, equipment shots, venue spaces, team in action
3. **Staff Page**: Individual headshots for each team member (professional but approachable)
4. **Entertainment Page**: Category-specific images (DJ setup, live band, sound equipment, lighting rigs)

**Image Treatment**: 
- Overlay gradients on hero images for text contrast
- Consistent aspect ratios within galleries (16:9 or 4:3)
- Lazy loading for performance
- WebP format with fallbacks

## Accessibility Considerations

- Maintain color contrast ratios of 4.5:1 minimum for text
- All interactive elements keyboard accessible (tab navigation)
- Form inputs with clear labels and error messages
- Alt text for all images
- ARIA labels for icon-only buttons
- Focus visible states for all interactive elements
- Semantic HTML structure maintained in React components

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2 columns, hamburger or full nav)
- Desktop: > 1024px (full multi-column layouts)

**Mobile-First Adjustments**:
- Reduce hero height to 60vh on mobile
- Stack all multi-column layouts to single column
- Larger touch targets for buttons (min 44x44px)
- Simplified navigation with drawer menu

This design creates an immersive, professional music/entertainment platform that balances visual impact with usability, perfect for converting the existing static site into a dynamic React application.