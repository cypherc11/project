import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Globe } from "lucide-react";
import techBackground from "@/assets/tech-background.jpg";

const AboutSection = () => {
  const achievements = [
    { icon: Users, value: "100+", label: "Clients satisfaits" },
    { icon: Award, value: "500+", label: "Projets réalisés" },
    { icon: Globe, value: "50+", label: "Pays desservis" },
    { icon: CheckCircle, value: "99.9%", label: "Taux de disponibilité" },
  ];

  const values = [
    "Excellence technique et innovation constante",
    "Support client personnalisé 24/7",
    "Solutions sur mesure adaptées à vos besoins",
    "Engagement pour la sécurité et la performance",
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 bg-gradient-primary px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground mb-6 shadow-medium">
          <Users className="w-4 h-4" />
          <span>À Propos de Nous</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Votre partenaire technologique de confiance
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Chez DeltaUpdate, nous ne créons pas seulement des solutions techniques - nous façonnons l'avenir
              de vos déploiements. Spécialisés dans les technologies de mise à jour delta, nous transformons
              vos défis les plus complexes en solutions élégantes et performantes.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre approche unique allie innovation, expertise technique et créativité pour développer
              des solutions qui dépassent vos attentes. De la compression intelligente aux déploiements
              zero-downtime, nous mettons la technologie au service de votre vision.
            </p>

            {/* Values List */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="primary-gradient font-semibold shadow-medium hover:shadow-large transition-all duration-300"
                >
                  Rencontrer l'équipe
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="animate-fade-in-up">
            <div className="relative">
              {/* Background Image */}
              <div className="rounded-2xl overflow-hidden shadow-large">
                <img
                  src={techBackground}
                  alt="Tech background"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -left-8 right-8">
                <div className="bg-card border border-border rounded-xl p-6 shadow-large">
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Icon className="h-6 w-6 text-primary mr-2" />
                            <div className="text-2xl font-bold primary-gradient bg-clip-text">
                              {achievement.value}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {achievement.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;