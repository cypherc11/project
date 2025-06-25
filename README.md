# Delta IT - Site Vitrine Professionnel

Site vitrine moderne et professionnel pour Delta IT, société de services informatiques spécialisée dans l'accompagnement des PME.

## 🚀 Configuration EmailJS

Pour activer l'envoi d'emails depuis le formulaire de contact, vous devez configurer EmailJS :

### 1. Créer un compte EmailJS
1. Rendez-vous sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez votre service email (Gmail, Outlook, etc.)

### 2. Configuration du service
1. Dans votre dashboard EmailJS, créez un nouveau service email
2. Notez votre **Service ID**

### 3. Création du template
1. Créez un nouveau template email avec ces variables :
   - `{{from_name}}` - Nom du contact
   - `{{from_email}}` - Email du contact  
   - `{{company_name}}` - Nom de l'entreprise
   - `{{phone}}` - Téléphone
   - `{{service_type}}` - Type de service demandé
   - `{{message}}` - Message du contact
   - `{{to_email}}` - Votre email de réception

2. Notez votre **Template ID**

### 4. Récupérer votre User ID
1. Dans Account > General, copiez votre **User ID** (Public Key)

### 5. Configuration des variables d'environnement
Modifiez le fichier `.env.local` avec vos vraies valeurs :

```env
VITE_EMAILJS_USER_ID=votre_user_id_ici
VITE_EMAILJS_SERVICE_ID=votre_service_id_ici  
VITE_EMAILJS_TEMPLATE_ID=votre_template_id_ici
```

## 🛠️ Installation et Développement

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 📧 Template EmailJS Recommandé

```html
Nouveau message depuis le site Delta IT

De: {{from_name}} ({{from_email}})
Entreprise: {{company_name}}
Téléphone: {{phone}}
Service demandé: {{service_type}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact du site Delta IT.
```

## 🎨 Fonctionnalités

- ✅ Design responsive et moderne
- ✅ Animations fluides et micro-interactions
- ✅ Formulaire de contact avec EmailJS
- ✅ Navigation smooth entre les pages
- ✅ Architecture modulaire et maintenable
- ✅ Optimisé pour les performances

## 📱 Pages

- **Accueil** - Présentation et services
- **Nos Services** - Détail des offres
- **À Propos** - Mission et engagements  
- **Contact** - Formulaire et coordonnées

---

**Delta IT** - Votre partenaire informatique de confiance