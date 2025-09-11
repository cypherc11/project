import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch, Users, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Marketplace",
      description: "Plateforme de vente en ligne avec système de paiement intégré et gestion des stocks en temps réel.",
      category: "E-commerce",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      stats: {
        commits: "1,247",
        team: "8",
        duration: "6 mois"
      },
      status: "Terminé"
    },
    {
      title: "Application de Gestion RH",
      description: "Solution complète pour la gestion des ressources humaines avec suivi des performances et planification.",
      category: "Enterprise",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      stats: {
        commits: "892",
        team: "5",
        duration: "4 mois"
      },
      status: "En cours"
    },
    {
      title: "Plateforme IoT",
      description: "Dashboard pour la surveillance et le contrôle d'appareils IoT avec analytics en temps réel.",
      category: "IoT",
      technologies: ["Angular", "Python", "MongoDB", "InfluxDB"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      stats: {
        commits: "654",
        team: "6",
        duration: "5 mois"
      },
      status: "Terminé"
    },
    {
      title: "App Mobile Fitness",
      description: "Application mobile de suivi fitness avec plans d'entraînement personnalisés et tracking GPS.",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Node.js", "GraphQL"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      stats: {
        commits: "1,156",
        team: "4",
        duration: "8 mois"
      },
      status: "En cours"
    },
    {
      title: "Système de Réservation",
      description: "Plateforme de réservation en ligne pour restaurants avec gestion des tables et notifications.",
      category: "SaaS",
      technologies: ["Svelte", "Express", "PostgreSQL", "WebSocket"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      stats: {
        commits: "743",
        team: "3",
        duration: "3 mois"
      },
      status: "Terminé"
    },
    {
      title: "CRM Avancé",
      description: "Système de gestion client avec automation marketing et intégration multi-canaux.",
      category: "Enterprise",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      stats: {
        commits: "2,341",
        team: "12",
        duration: "12 mois"
      },
      status: "En cours"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Terminé" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos réalisations et les solutions innovantes que nous avons développées pour nos clients
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-large transition-all duration-300 border-2 hover:border-primary/20 bg-card animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border/50">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <GitBranch className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm font-semibold text-foreground">{project.stats.commits}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Commits</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm font-semibold text-foreground">{project.stats.team}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Équipe</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm font-semibold text-foreground">{project.stats.duration}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Durée</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary/50 transition-colors duration-300"
                >
                  Voir le projet
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-card rounded-2xl p-12 border-2 border-primary/10 shadow-medium">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Vous avez un projet en tête ?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons de votre vision et transformons-la en réalité avec nos solutions sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="primary-gradient text-white font-semibold shadow-medium hover:shadow-large transition-all duration-300"
              >
                Démarrer un projet
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold border-2 hover:bg-muted/50 transition-all duration-300"
              >
                Voir notre portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;