import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Zap,
  Loader
} from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  selectedOffer?: string;
  contentOffer?: string;
}

const ContactSection = ({ selectedOffer, contentOffer }: ContactSectionProps) => {
  const [subject, setSubject] = useState("");
  //const [content, setContent] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      link: 'https://www.google.com/maps/search/iuget+bonaberi/@4.0703286,9.6229801,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D',
      details: ['Bonaberie', 'Douala, Cameroun'],
      description: "quelque metre du marche grand hangard",
      gradient: 'from-primary to-primary-glow'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      link: 'https://wa.me/+237697995579',
      details: ['+237 697 99 55 79'],
      description: "Support technique 24/7",
      gradient: 'from-secondary to-secondary-glow'
    },
    {
      icon: Mail,
      title: 'Email',
      link: 'delta-it.cm@proton.me.com',
      details: ['deltait.cm@proton.me'],
      description: "Nous répondons en moins de 24h",
      gradient: 'from-accent to-accent-glow'
    },
  ];

  useEffect(() => {
    if (selectedOffer) {
      setSubject(`Demande d'information - Offre ${selectedOffer}`);
    }
  }, [selectedOffer]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Configuration EmailJS - Remplacez par vos vraies valeurs
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const userId = import.meta.env.VITE_EMAILJS_USER_ID || 'your_user_id';
      // Paramètres du template EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company_name: formData.company,
        phone: formData.telephone,
        service_type: formData.subject,
        message: formData.message,
        to_email: 'deltaIT.cm@gmail.com' // Votre email de réception
      };
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        telephone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-accent px-4 py-2 rounded-full text-sm font-medium text-accent-foreground mb-6 shadow-glow">
            <MessageSquare className="w-4 h-4" />
            <span>Contactez-nous</span>
          </div>
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
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 hover:border-transparent transition-all duration-500 hover:shadow-large animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient border on hover*/}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg`}>
                  <div className="bg-card rounded-lg h-full w-full" />
                </div>

                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-medium group-hover:shadow-glow`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </CardTitle>

                    <CardDescription>
                      <p className='text-sm text-muded-foreground'>
                        {info.description}
                      </p>
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent >

                  <a href={info.link} target='_blank'>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {detail}
                      </p>
                    ))}
                  </a>

                </CardContent>
              </Card>
            ))}

            {/* CTA Card */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-0 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold mb-2">Besoin d'une réponse rapide ?</h3>
                <p className="mb-4 opacity-90">Appelez-nous directement pour un conseil immédiat</p>

                <a href="tel:+237697995579">
                  <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler Maintenant
                  </Button>
                </a>

              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Card className="border-2 hover:border-primary/20 transition-all duration-300 shadow-medium hover:shadow-large animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="w-6 h-6 mr-2 text-primary" />
                  Envoyez-nous un message
                </CardTitle>
                <p className="text-muted-foreground">
                  Décrivez votre projet et nous vous recontacterons dans les plus brefs délais
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/*status de l'envoie */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 animate-fadeInUp">
                    <CheckCircle size={20} className="text-green-600" />
                    <p className="text-green-800">
                      Merci ! Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeInUp">
                    <p className="text-red-800">
                      Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement par email.
                    </p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name, Email, telephone, entreprise */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="border-2 focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="border-2 focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        Telephone
                      </Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        placeholder="+237 697 99 55 79"
                        required
                        className="border-2 focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground font-medium">
                        Entreprise
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                        className="border-2 focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      Sujet *
                    </Label>
                    <Input
                      id="subject"
                      value={subject || formData.subject}                
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Objet de votre message"
                      className="border-2 focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez-nous votre projet ou vos besoins..."
                      required
                      rows={6}
                      className="border-2 focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105 py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        <span>Envoyer le Message</span>
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;