import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@deltaupdate.com",
      description: "Nous répondons en moins de 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+33 1 23 45 67 89",
      description: "Support technique 24/7",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "123 Avenue de l'Innovation",
      description: "75001 Paris, France",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à transformer vos déploiements ? Notre équipe d'experts est là pour vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/20 transition-colors duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground">
                          {info.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground">
                      {info.details}
                    </p>
                  </CardContent>
                </Card>
              );
            })}

            {/* CTA Card */}
            <Card className="bg-muted/30 border-2 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Besoin d'une réponse rapide ?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Notre équipe commerciale est disponible pour répondre à toutes vos questions.
                </p>
                <Button className="w-full primary-gradient text-white font-semibold">
                  Planifier un appel
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Card className="border-2 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envoyez-nous un message
                </CardTitle>
                <p className="text-muted-foreground">
                  Décrivez votre projet et nous vous recontacterons dans les plus brefs délais
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-medium">
                      Prénom *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Votre prénom"
                      className="border-2 focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground font-medium">
                      Nom *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Votre nom"
                      className="border-2 focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="border-2 focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground font-medium">
                      Entreprise
                    </Label>
                    <Input
                      id="company"
                      placeholder="Nom de votre entreprise"
                      className="border-2 focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-medium">
                    Sujet *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Objet de votre message"
                    className="border-2 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet ou vos besoins..."
                    rows={6}
                    className="border-2 focus:border-primary/50 transition-colors duration-300 resize-none"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full primary-gradient text-white font-semibold shadow-medium hover:shadow-large transition-all duration-300 group"
                >
                  Envoyer le message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;