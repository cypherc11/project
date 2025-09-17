import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Code, Shield, Sparkles } from 'lucide-react';

export interface SectionProps {
  onSelect?: (content: string) => void;
}

const HeroSection = ({ onSelect }: SectionProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const Click = (content: string) => {
    if (onSelect) {
      onSelect(content);
    }
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: '0s', position: 'top-20 left-10' },
    { Icon: Shield, delay: '0.5s', position: 'top-40 right-20' },
    { Icon: Zap, delay: '1s', position: 'top-60 left-1/4' },
    { Icon: Sparkles, delay: '1.5s', position: 'top-32 right-1/3' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary-glow)) 0%, transparent 50%)`,
          transition: 'background 0.3s ease',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-20 animate-float`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-12 h-12 text-primary" />
        </div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-secondary px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground mb-8 animate-fade-in shadow-medium">
            <Sparkles className="w-4 h-4" />
            <span>Solutions IT Innovantes</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Votre partenaire technologique
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Gagnez en efficacité, et passer à une nouvelle ère.
              Optimisez les performances et réduisez vos charges avec des technologies de pointe et
              une expertise de qualité.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#services">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold">
                Découvrir nos Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            
            
              <Button 
              variant="outline" 
              size="lg" 
              onClick={() => Click(" un devis Gratuit")}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                Demander un devis Gratuit
              </Button>
            
            
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {[
              { number: '20+', label: 'Projets Réalisés' },
              { number: '98%', label: 'Clients Satisfaits' },
              { number: '2+', label: 'Années d\'Expérience' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;