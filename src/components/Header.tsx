import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#0A2342] hover:text-[#2CA58D] transition-colors duration-300 cursor-pointer"
                  onClick={() => handlePageChange('accueil')}>
                  Delta IT
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'services', label: 'Nos Services' },
                { id: 'apropos', label: 'À Propos' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    currentPage === item.id
                      ? 'text-[#2CA58D] bg-[#2CA58D]/10 shadow-sm'
                      : 'text-[#343A40] hover:text-[#2CA58D] hover:bg-[#2CA58D]/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#343A40] hover:text-[#2CA58D] p-2 transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { id: 'accueil', label: 'Accueil' },
              { id: 'services', label: 'Nos Services' },
              { id: 'apropos', label: 'À Propos' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item.id
                    ? 'text-[#2CA58D] bg-[#2CA58D]/10'
                    : 'text-[#343A40] hover:text-[#2CA58D] hover:bg-[#2CA58D]/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;