import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Mise à jour Delta", href: "#" },
      { name: "Sécurité", href: "#" },
      { name: "Performance", href: "#" },
      { name: "Déploiement", href: "#" },
    ],
    company: [
      { name: "À propos", href: "#about" },
      { name: "Équipe", href: "#" },
      { name: "Carrières", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Mentions légales", href: "#" },
      { name: "Politique de confidentialité", href: "#" },
      { name: "CGU", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@deltaupdate.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Restez informé des dernières innovations
            </h3>
            <p className="text-muted-foreground mb-8">
              Recevez nos actualités, conseils techniques et nouvelles fonctionnalités directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:border-primary/50 focus:outline-none transition-colors duration-300"
              />
              <Button className="primary-gradient text-white font-semibold shadow-medium hover:shadow-large transition-all duration-300">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold primary-gradient bg-clip-text text-transparent mb-4">
              DeltaUpdate
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Votre partenaire technologique pour des solutions de mise à jour delta innovantes et performantes. 
              Nous transformons vos défis techniques en opportunités de croissance.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 DeltaUpdate. Tous droits réservés.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Retour en haut
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;