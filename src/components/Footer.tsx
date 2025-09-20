import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter, Mail, ArrowUp, MessageCircle } from "lucide-react";
import LogoD from '../assets/logoD.png';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Développement Web', href: '#services' },
      { name: 'Cybersecurite de base', href: '#services' },
      { name: 'Gestion reseau et infrastructure IT', href: '#services' },
      { name: 'Implementtation et formation logiciel', href: '#services' },
      { name: 'Maintenance & Support', href: '#services' }
    ],
    company: [
      { name: 'À Propos', href: '#about' },
      { name: 'Nos Services', href: '#services' },
      { name: 'Réalisations', href: '#projects' },
      { name: 'Offres', href: '#offers' },
      { name: 'Contact', href: '#contact' },
      //mettre le lien de mon blog
      { name: 'Blog', href: '#blog' }
    ],
    legal: [
      { name: 'Mentions Légales', href: '#legal' },
      { name: 'Politique de Confidentialité', href: '#privacy' },
      { name: 'CGV', href: '#terms' },
      { name: 'Cookies', href: '#cookies' }
    ],
    support: [
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://www.githup.com/cypherc11", label: 'GitHub', color: 'hover:text-gray-800' },
    { icon: Linkedin, href: "https://cm.linkedin.com/in/ahmed-fadil-42b09933a", label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "https://wa.me/237697995579", label: 'Whatzapp', color: 'hover:text-blue-700' },
    { icon: Mail, href: "mailto:delta-it.cm@proton.me", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-muted to-card border-t border-border">
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
            {/*completer avec formSubtmit*/}
            <form action="">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:border-primary/50 focus:outline-none transition-colors duration-300"
                />
                <Button type="submit" className="primary-gradient text-white font-semibold shadow-medium hover:shadow-large transition-all duration-300">
                  S'abonner
                </Button>
              </div>
            </form>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-3 animate-fade-in">
              <img
                src={LogoD}
                alt="Delta IT Logo"
                className="h-20 w-auto object-contain filter drop-shadow-lg"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Gagnez en efficacité, et passer à une nouvelle ère.
              Optimisez les performances et réduisez vos charges avec des technologies de pointe et
              une expertise de qualité.
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
                    rel="noopener noreferrer"
                    target="_blank"
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
          <p className="text-muted-foreground text-sm items-center">
            © 2025 Deltacm IT. Tous droits réservés.
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