import React from 'react';
import { Monitor, Shield, Settings, Users, Network } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: "Création et Maintenance de Sites Web & Présence en Ligne",
      details: [
        "Développement de sites web professionnels et responsive",
        "Hébergement sécurisé et maintenance technique",
        "Optimisation SEO pour améliorer votre visibilité",
        "Gestion des réseaux sociaux et de la réputation en ligne"
      ]
    },
    {
      icon: Shield,
      title: "Cybersécurité de Base",
      details: [
        "Audits de sécurité complets de votre infrastructure",
        "Installation et configuration d'antivirus et pare-feu",
        "Sensibilisation et formation des employés (hameçonnage, mots de passe)",
        "Mise en place de politiques de sécurité adaptées"
      ]
    },
    {
      icon: Settings,
      title: "Support Informatique et Dépannage",
      details: [
        "Assistance technique pour logiciels, matériel et réseau",
        "Installation et configuration de nouveaux équipements",
        "Services ponctuels ou contrats de maintenance",
        "Intervention rapide pour minimiser les interruptions"
      ]
    },
    {
      icon: Users,
      title: "Implémentation et Formation Logicielle",
      details: [
        "Aide au choix et à l'implémentation de logiciels (CRM, ERP, etc.)",
        "Formation complète des utilisateurs",
        "Accompagnement dans la transition numérique",
        "Support post-implémentation pour assurer l'adoption"
      ]
    },
    {
      icon: Network,
      title: "Gestion de Réseau et Infrastructure IT",
      details: [
        "Mise en place et maintenance de réseaux (LAN, Wi-Fi)",
        "Configuration de serveurs et gestion des accès",
        "Installation de systèmes de surveillance",
        "Optimisation des performances réseau"
      ]
    }
  ];

  return (
    <div className="bg-[#F8F9FA] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6 animate-fadeInUp">
            Nos Services
          </h1>
          <p className="text-xl text-[#343A40] max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Des solutions informatiques complètes pour accompagner votre croissance
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fadeInUp group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#2CA58D]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2CA58D]/20 transition-all duration-300 transform group-hover:scale-110">
                    <service.icon size={32} className="text-[#2CA58D] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0A2342] mb-4 group-hover:text-[#2CA58D] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="space-y-3 text-[#343A40]">
                    {service.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="flex items-start">
                        <span className="text-[#2CA58D] mr-2 mt-1">•</span>
                        <span className="hover:text-[#0A2342] transition-colors duration-300">{detail}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;