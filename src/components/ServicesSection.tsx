import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Monitor, Globe, Smartphone, Gauge, Rocket, ArrowRight, Settings } from "lucide-react";
import { useState } from 'react';

const ServicesSection = () => {

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Monitor,
      title: 'Développement Web',
      description: 'Création de sites web modernes, responsives et performants adaptés à vos besoins.',
      features: ['Design Responsive', 'SEO Optimisé', 'Performance Web', 'CMS Sur Mesure'],
      link: '',
      gradient: 'from-primary to-primary-glow',
      delay: '0s',
      plus: 'description par rapport au produit'
    },
    {
      icon: Gauge,
      title: 'Solution IA',
      description: 'Conception et integration de solution par intelligence artificille.',
      features: ['ChatBot IA', 'Automatisation IA', 'Integration IA', 'application IA'],
      gradient: 'from-primary to-secondary',
      delay: '0.2s'
    },
    {
      icon: Smartphone,
      title: 'Gestion reseau et infrastructure IT',
      description: 'Mise en place et maintenance de votre infrastructure IT et configuration des communication reseau',
      features: ['LAN', 'WLAN', 'Installation bais information', 'Configurationde serveur interne'],
      link: '',
      gradient: 'from-secondary to-secondary-glow',
      delay: '0.4s',
      plus: 'description par rapport au produit'
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Support technique et maintenance continue de vos systèmes.',
      features: ['Support 24/7', 'Maintenance', 'Updates', 'Formation'],
      link: '',
      gradient: 'from-accent to-primary',
      delay: '0.6s',
      plus: 'description par rapport au produit'
    },
    {
      icon: Shield,
      title: 'Cybersecurite de base',
      description: 'Protection et sécurisation de vos systèmes et données d\'entreprise.',
      features: ['Audit Sécurité', 'Firewall Setup', 'Backup Solutions', 'Monitoring 24/7'],
      link: '',
      gradient: 'from-primary to-accent-glow',
      delay: '0.8s',
      plus: 'description par rapport au produit'
    },
    
    {
      icon: Globe,
      title: 'implementation et formation logiciel',
      description: 'progresser grace a des logiciel adapter a vos besoin et soyer plus productif.',
      features: ['AWS/Azure', 'Odoo', 'Autocards', 'Scalabilité'],
      link: '',
      gradient: 'from-secondary to-accent',
      delay: '1s',
      plus: 'description par rapport au produit'
    },
    
  ];
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary px-4 py-2 rounded-full text-sm font-medium text-primary-foreground mb-6 shadow-glow">
            <Settings className="w-4 h-4" />
            <span>Nos Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Delta Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions technologiques innovantes pour optimiser vos déploiements et améliorer vos performances
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 bg-card animate-fade-in-up"
                style={{ animationDelay: service.delay }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Animated border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg`}>
                  <div className="bg-card rounded-lg h-full w-full" />
                </div>

                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-medium group-hover:shadow-glow`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-prima mb-2">
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
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-medium">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Prêt à optimiser vos déploiements ?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez notre équipe d'experts pour discuter de vos besoins et découvrir comment DeltaUpdate peut transformer vos processus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button
                  size="lg"
                  className="primary-gradient text-white font-semibold shadow-medium hover:shadow-large transition-all duration-300"
                >
                  Demander une consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#offers">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold border-2 hover:bg-muted/50 transition-all duration-300"
                >
                  Voir nos tarifs
                </Button>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;