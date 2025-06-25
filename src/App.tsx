import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AccueilPage from './pages/AccueilPage';
import ServicesPage from './pages/ServicesPage';
import AProposPage from './pages/AProposPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'apropos':
        return <AProposPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <AccueilPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;