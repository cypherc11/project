import React from 'react';
import { 
  Monitor, 
  Shield, 
  Settings, 
  Users, 
  Network, 
  ArrowRight,
  Award,
  Clock,
  Zap
} from 'lucide-react';

interface AccueilPageProps {
  setCurrentPage: (page: string) => void;
}

const AccueilPage: React.FC<AccueilPageProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: Monitor,
      title: "Présence en Ligne & Sites Web",
      description: "Développement, hébergement et optimisation de votre présence digitale"
    },
    {
      icon: Shield,
      title: "Cybersécurité Essentielle",
      description: "Protection complète contre les menaces informatiques"
    },
    {
      icon: Settings,
      title: "Support & Dépannage",
      description: "Assistance technique réactive pour maintenir votre productivité"
    },
    {
      icon: Users,
      title: "Formation & Logiciels",
      description: "Implémentation et formation sur vos outils métier"
    },
    {
      icon: Network,
      title: "Réseau & Infrastructure",
      description: "Mise en place et maintenance de votre infrastructure IT"
    }
  ];

  const avantages = [
    {
      icon: Award,
      title: "Expertise PME",
      description: "Spécialisés dans les besoins spécifiques des petites et moyennes entreprises"
    },
    {
      icon: Zap,
      title: "Approche Complète",
      description: "Une solution globale pour tous vos besoins informatiques"
    },
    {
      icon: Clock,
      title: "Support Réactif",
      description: "Intervention rapide pour minimiser les interruptions"
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Protection avancée contre les cybermenaces"
    }
  ];

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2342] to-[#2CA58D] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Votre Partenaire Informatique pour la Croissance des PME
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Des solutions informatiques complètes et sur-mesure pour vous permettre de vous concentrer sur votre cœur de métier. De la cybersécurité au support technique, nous gérons votre IT.
            </p>
            <button
              onClick={() => handlePageChange('services')}
              className="bg-[#2CA58D] hover:bg-[#2CA58D]/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: '0.4s' }}
            >
              Découvrir nos services
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4 animate-fadeInUp">
              Nos Services
            </h2>
            <p className="text-xl text-[#343A40] max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Une gamme complète de services informatiques adaptés aux besoins des PME
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#2CA58D]/10 rounded-lg mb-6 group-hover:bg-[#2CA58D]/20 transition-colors duration-300">
                  <service.icon size={32} className="text-[#2CA58D] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A2342] mb-4 group-hover:text-[#2CA58D] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#343A40]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4 animate-fadeInUp">
              Une Valeur Ajoutée Réelle pour Votre Entreprise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center animate-fadeInUp group" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="flex items-center justify-center w-16 h-16 bg-[#0A2342]/10 rounded-lg mb-6 mx-auto group-hover:bg-[#0A2342]/20 transition-all duration-300 transform group-hover:scale-110">
                  <avantage.icon size={32} className="text-[#0A2342] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A2342] mb-4 group-hover:text-[#2CA58D] transition-colors duration-300">
                  {avantage.title}
                </h3>
                <p className="text-[#343A40]">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeInUp">
            Prêt à optimiser votre informatique ?
          </h2>
          <p className="text-xl mb-8 text-gray-100 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Contactez-nous pour un audit gratuit de vos besoins informatiques
          </p>
          <button
            onClick={() => handlePageChange('contact')}
            className="bg-[#2CA58D] hover:bg-[#2CA58D]/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
};

export default AccueilPage;