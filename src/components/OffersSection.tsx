import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Rocket, Star, Target } from "lucide-react";
//import { OffersSectionProps } from "@/lib/utils";

export interface OffersSectionProps {
  onOfferSelect?: (offerTitle: string) => void;
};

const OffersSection = ({ onOfferSelect }: OffersSectionProps) => {
  
  const offers = [
    {
      title: "Delta WEB",
      subtitle: "Creation d'une landing page",
      price: "300€ ",
      //period: "/mois",
      description: "Idéal pour les petites entreprises qui souhaitent optimiser presence en ligne.",
      icon: Zap,
      featured: false,
      features: [
        "Generation du contenu textuel et visuel",
        "SEO de base",
        "hebergement pour la premiere annee",
        "Nom de domaine + adresse mail professionnelle",
        "certificat SSL inclut",
        "3 revisions du site a la demande du client",
        "support sur 3 mois"
      ]
    },
    {
      title: "Maintenance Gold",
      subtitle: "Le plus populaire",
      price: "150€",
      period: "/mois",
      description: "Solution de  maintenance proactive.",
      icon: Shield,
      featured: false,
      features: [
        "Mises à jour delta OS et logiciel",
        "installation de logiciel de base selon les besoins du client",
        "Support prioritaire 24/7",
        "Maintenance preventive sur site",
        "Diagnostic pontuel de panne",
        "systeme de sauvegarde automatique des donnees cloud ou local",
        "Support a distance illimite",
      ]
    },
    {
      title: "IA Perform",
      subtitle: "Solution IA sur mesure",
      price: "500€",
      period: "/mois",
      description: "Solution enterprise avec fonctionnalités avancées et support dédié.",
      icon: Rocket,
      featured: false,
      features: [
        "Access a tous nos SaaS IA",
        "Integration d'un process IA dans vos projet",
        "Manager dédié",
        "choix du model IA",
        "bot d'analyse de donnee strategique par IA",
        "Formation équipe",
        "Support téléphonique"
      ]
    }
  ];

  const handleOfferClick = (offerTitle: string) => {
    if (onOfferSelect) {
      onOfferSelect(offerTitle);
    }
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-secondary px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground mb-6 shadow-medium">
            <Target className="w-4 h-4" />
            <span>Nos Offres</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Les plus demander
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choisissez la solution qui correspond le mieux à vos besoins
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card 
                key={offer.title} 
                className={`group relative hover:shadow-large transition-all duration-300 border-2 bg-card animate-fade-in-up overflow-hidden ${
                  offer.featured 
                    ? 'border-primary/50 shadow-medium scale-105' 
                    : 'border-border hover:border-primary/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured Badge */}
                {offer.featured && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="primary-gradient text-white text-center py-2 text-sm font-semibold">
                      <Star className="inline h-4 w-4 mr-1" />
                      Le plus populaire
                    </div>
                  </div>
                )}

                <CardHeader className={`text-center pb-4 ${offer.featured ? 'pt-12' : 'pt-6'}`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    offer.featured 
                      ? 'primary-gradient' 
                      : 'bg-muted'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${offer.featured ? 'text-foreground' : 'text-foreground'}`} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {offer.title}
                  </CardTitle>
                  
                  <Badge variant="secondary" className="mb-4">
                    {offer.subtitle}
                  </Badge>
                  
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${offer.featured ? 'primary-gradient bg-clip-text' : 'text-foreground'}`}>
                      {offer.price}
                    </span>
                    <span className="text-muted-foreground">{offer.period}</span>
                  </div>
                  
                  <CardDescription className="text-muted-foreground">
                    {offer.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className={`h-4 w-4 mr-3 flex-shrink-0 ${
                          offer.featured ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handleOfferClick(offer.title)}
                    className={`w-full font-semibold transition-all duration-300 ${
                      offer.featured
                        ? 'primary-gradient text-white shadow-medium hover:shadow-large'
                        : 'border-2 hover:border-primary/50'
                    }`}
                    variant={offer.featured ? 'default' : 'outline'}
                    size="lg"
                  >
                    {offer.featured ? 'Commencer maintenant' : 'Choisir cette offre'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Sans engagement • Annulation à tout moment
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Besoin d'une solution sur mesure ?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contactez notre équipe pour une offre personnalisée adaptée à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleOfferClick('Solution sur mesure')}
                variant="outline" 
                size="lg" 
                className="primary-gradient font-semibold shadow-medium hover:shadow-large transition-all duration-300"
              >
                Demander un devis personnalisé
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;