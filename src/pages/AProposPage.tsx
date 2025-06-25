import React from 'react';
import { CheckCircle } from 'lucide-react';

interface AProposPageProps {
  setCurrentPage: (page: string) => void;
}

const AProposPage: React.FC<AProposPageProps> = ({ setCurrentPage }) => {
  const engagements = [
    "Solutions adaptées aux besoins spécifiques des PME",
    "Sécurité renforcée contre les cybermenaces",
    "Support réactif et personnalisé",
    "Transparence et communication claire",
    "Formation continue de nos équipes",
    "Veille technologique permanente"
  ];

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F8F9FA] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6 animate-fadeInUp">
            Votre Partenaire de Confiance
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">
              Notre Mission
            </h2>
            <div className="space-y-6 text-lg text-[#343A40]">
              <p className="hover:text-[#0A2342] transition-colors duration-300">
                Chez Delta IT, nous croyons que chaque PME mérite d'avoir accès aux meilleures solutions informatiques pour prospérer dans l'économie numérique d'aujourd'hui.
              </p>
              <p className="hover:text-[#0A2342] transition-colors duration-300">
                Notre mission est d'aider les petites et moyennes entreprises à prospérer en leur fournissant des solutions informatiques fiables, sécurisées et abordables.
              </p>
              <p className="hover:text-[#0A2342] transition-colors duration-300">
                Dans un contexte où les PME sont de plus en plus ciblées par les cybermenaces, nous mettons un accent particulier sur la sécurité de votre entreprise et de vos données.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-[#0A2342] mb-6">
              Nos Engagements
            </h3>
            <div className="space-y-4">
              {engagements.map((engagement, index) => (
                <div key={index} className="flex items-start space-x-3 group animate-fadeInUp" style={{ animationDelay: `${0.1 * index}s` }}>
                  <CheckCircle size={20} className="text-[#2CA58D] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[#343A40] group-hover:text-[#0A2342] transition-colors duration-300">{engagement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0A2342] to-[#2CA58D] text-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-4">
            Prêt à faire équipe avec nous ?
          </h3>
          <p className="text-lg mb-6">
            Découvrez comment nous pouvons vous aider à optimiser votre infrastructure informatique
          </p>
          <button
            onClick={() => handlePageChange('contact')}
            className="bg-white text-[#0A2342] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default AProposPage;