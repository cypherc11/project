import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Gauge, Rocket, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Mise à jour Delta",
      description: "Réduisez drastiquement la taille de vos mises à jour avec notre technologie delta avancée.",
      features: ["Compression intelligente", "Déploiement optimisé", "Rollback automatique"],
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Protégez vos déploiements avec nos systèmes de sécurité de niveau entreprise.",
      features: ["Chiffrement bout-en-bout", "Vérification d'intégrité", "Audit complet"],
    },
    {
      icon: Gauge,
      title: "Performance",
      description: "Optimisez les performances de vos applications avec nos outils de monitoring.",
      features: ["Métriques en temps réel", "Alertes intelligentes", "Optimisation auto"],
    },
    {
      icon: Rocket,
      title: "Déploiement Rapide",
      description: "Accélérez vos cycles de développement avec nos solutions de déploiement.",
      features: ["CI/CD intégré", "Tests automatisés", "Déploiement zero-downtime"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions technologiques innovantes pour optimiser vos déploiements et améliorer vos performances
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 primary-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary/50 transition-colors duration-300"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl p-12 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Prêt à optimiser vos déploiements ?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez notre équipe d'experts pour discuter de vos besoins et découvrir comment DeltaUpdate peut transformer vos processus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="primary-gradient text-white font-semibold shadow-medium hover:shadow-large transition-all duration-300"
            >
              Demander une consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold border-2 hover:bg-muted/50 transition-all duration-300"
            >
              Voir nos tarifs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;