import React, { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle, Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    besoin: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
        from_name: formData.nom,
        from_email: formData.email,
        company_name: formData.entreprise,
        phone: formData.telephone,
        service_type: formData.besoin,
        message: formData.message,
        to_email: 'delta-it.cm@proton.me' // Votre email de réception
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      setSubmitStatus('success');
      setFormData({
        nom: '',
        entreprise: '',
        email: '',
        telephone: '',
        besoin: '',
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
    <div className="bg-[#F8F9FA] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6 animate-fadeInUp">
            Contactez-nous
          </h1>
          <p className="text-xl text-[#343A40] max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Discutons de votre projet. Obtenez un devis ou planifiez une consultation gratuite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fadeInUp">
            {/* Messages de statut */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-[#343A40] mb-2 group-focus-within:text-[#2CA58D] transition-colors duration-300">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA58D] focus:border-transparent transition-all duration-300 hover:border-[#2CA58D]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-[#343A40] mb-2 group-focus-within:text-[#2CA58D] transition-colors duration-300">
                    Nom de l'entreprise *
                  </label>
                  <input
                    type="text"
                    name="entreprise"
                    required
                    value={formData.entreprise}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA58D] focus:border-transparent transition-all duration-300 hover:border-[#2CA58D]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-[#343A40] mb-2 group-focus-within:text-[#2CA58D] transition-colors duration-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA58D] focus:border-transparent transition-all duration-300 hover:border-[#2CA58D]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-[#343A40] mb-2 group-focus-within:text-[#2CA58D] transition-colors duration-300">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA58D] focus:border-transparent transition-all duration-300 hover:border-[#2CA58D]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-[#343A40] mb-2 group-focus-within:text-[#2CA58D] transition-colors duration-300">
                  Votre besoin *
                </label>
                <select
                  name="besoin"
                  required
                  value={formData.besoin}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA58D] focus:border-transparent transition-all duration-300 hover:border-[#2CA58D]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Sélectionnez votre besoin</option>
                  <option value="site-web">Site Web & Présence en Ligne</option>
                  <option value="cybersecurite">Cybersécurité</option>
                  <option value="support">Support & Dépannage</option>
                  <option value="logiciels">Formation & Logiciels</option>
                  <option value="infrastructure">Réseau & Infrastructure</option>
                  <option value="audit">Audit gratuit</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-[#343A40] mb-2 group-focus-within:text-[#2CA58D] transition-colors duration-300">
                  Votre message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA58D] focus:border-transparent transition-all duration-300 hover:border-[#2CA58D]/50 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Décrivez votre projet ou vos besoins..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2CA58D] hover:bg-[#2CA58D]/90 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-[#0A2342] mb-6">
                Nos Coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <MapPin size={24} className="text-[#2CA58D] mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-[#0A2342] group-hover:text-[#2CA58D] transition-colors duration-300">Adresse</h4>
                    <p className="text-[#343A40] group-hover:text-[#0A2342] transition-colors duration-300">
                      Cameroun<br />
                      Douala - Bonaberi
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Mail size={24} className="text-[#2CA58D] mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-[#0A2342] group-hover:text-[#2CA58D] transition-colors duration-300">Email</h4>
                    <a 
                      href="mailto:delta-it.cm@proton.me"
                      className="text-[#343A40] group-hover:text-[#2CA58D] transition-colors duration-300 hover:underline"
                    >
                      delta-it.cm@proton.me
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Phone size={24} className="text-[#2CA58D] mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-[#0A2342] group-hover:text-[#2CA58D] transition-colors duration-300">Téléphone</h4>
                    <a 
                      href="tel:+237697995579"
                      className="text-[#343A40] group-hover:text-[#2CA58D] transition-colors duration-300 hover:underline"
                    >
                      +237 697 99 55 79
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0A2342] to-[#2CA58D] text-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-4">
                Audit Gratuit
              </h3>
              <p className="mb-6">
                Profitez d'un audit gratuit de vos besoins informatiques. Nos experts analysent votre infrastructure et vous proposent des solutions adaptées.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="hover:scale-110 transition-transform duration-300" />
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;