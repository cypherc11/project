import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
//import { SectionProps, handleClick } from "@/lib/utils";
export interface SectionProps {
  onSelect?: (content: string) => void;
};

const HeroSection = ({ onSelect }: SectionProps) => {
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
  
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Delta IT</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Innovation.
              <br />
              <span className="primary-gradient bg-clip-text">
                Performance.
              </span>
              <br />
              Excellence.
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Gagnez en efficacité, et passer a une nouvelle air.
              Optimisez les performances et réduisez vos charge avec des technologie de pointe et
              une expertise de qualité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button
                  size="lg"
                  className="primary-gradient text-white font-semibold shadow-medium hover:shadow-large transition-all duration-300 group"
                >
                  Découvrir nos solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold border-2 hover:bg-muted/50 transition-all duration-300"
                  onClick={() => Click('Devis gratuit')}
                >
                  Demander un Devis gratuit
                </Button>
              

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold primary-gradient bg-clip-text">99%</div>
                <div className="text-sm text-muted-foreground">Gains de temps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold primary-gradient bg-clip-text">10x</div>
                <div className="text-sm text-muted-foreground">Plus rapide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold primary-gradient bg-clip-text">15+</div>
                <div className="text-sm text-muted-foreground">Projets déployés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold primary-gradient bg-clip-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support technique</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="animate-fade-in-up lg:pl-12">
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

              {/* Main image */}
              <div className="relative z-10">
                <div className="w-96 h-96 mx-auto rounded-full overflow-hidden shadow-large border-4 border-white/50">
                  <img
                    src={heroPortrait}
                    alt="Professional portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-primary/20 rounded-full -z-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-primary/10 rounded-full -z-10"></div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;