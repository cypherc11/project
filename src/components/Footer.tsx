import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fadeInUp">
            <h3 className="text-xl font-bold mb-4">Delta IT</h3>
            <p className="text-gray-300">
              Votre partenaire informatique de confiance pour la croissance de votre PME.
            </p>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-[#2CA58D] transition-colors duration-300 cursor-pointer">Sites Web & Présence en Ligne</li>
              <li className="hover:text-[#2CA58D] transition-colors duration-300 cursor-pointer">Cybersécurité</li>
              <li className="hover:text-[#2CA58D] transition-colors duration-300 cursor-pointer">Support Informatique</li>
              <li className="hover:text-[#2CA58D] transition-colors duration-300 cursor-pointer">Formation & Logiciels</li>
            </ul>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center hover:text-[#2CA58D] transition-colors duration-300">
                <Mail size={16} className="mr-2" />
                <span>delta-it@proton.me</span>
              </div>
              <div className="flex items-center hover:text-[#2CA58D] transition-colors duration-300">
                <Phone size={16} className="mr-2" />
                <span>+237 697 99 55 79</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <p>&copy; 2025 Delta IT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;