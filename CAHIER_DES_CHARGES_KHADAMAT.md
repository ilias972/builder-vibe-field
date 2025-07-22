# 📋 CAHIER DES CHARGES COMPLET - PLATEFORME KHADAMAT

## 🎯 **DESCRIPTION GÉNÉRALE**

**Khadamat** est une plateforme marketplace marocaine bilingue (Français/Arabe) qui connecte les clients aux prestataires de services locaux avec un système de paiement sécurisé par escrow et une vérification d'identité obligatoire.

---

## 🏗️ **ARCHITECTURE TECHNIQUE**

### **Stack Technologique**

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: Tailwind CSS + Radix UI
- **Routing**: React Router 6 (SPA)
- **State Management**: Context API + Local State
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

### **Structure des Fichiers**

```
/client
  /components
    /ui/              # Composants Radix UI
    Header.tsx        # Navigation principale
    Footer.tsx        # Pied de page
    Newsletter.tsx    # Inscription newsletter
    SmartSearch.tsx   # Recherche intelligente
    Messaging.tsx     # Système de messagerie
    MobileTabBar.tsx  # Navigation mobile
  /contexts
    LanguageContext.tsx  # Gestion bilingue FR/AR
  /pages
    Index.tsx         # Page d'accueil
    Register.tsx      # Inscription utilisateurs
    ClubPro.tsx      # Page Club Pro
    ClubProRegister.tsx  # Inscription Club Pro
    SOS.tsx          # Page urgences
    Project.tsx      # Publication projets
    [autres pages...]
  App.tsx            # Application principale
  global.css         # Styles globaux
```

---

## 👥 **TYPES D'UTILISATEURS**

### **1. CLIENTS**

- **Inscription**: Nom, prénom, téléphone, CIN/Passeport + vérification faciale
- **Fonctionnalités**:
  - Recherche et réservation de services
  - Publication de projets
  - Messagerie avec prestataires
  - Paiement sécurisé par escrow
  - Évaluation des prestataires
  - Accès aux urgences SOS 24/7

### **2. PRESTATAIRES**

- **Inscription**: Mêmes données que clients + vérification faciale (devient photo de profil)
- **Fonctionnalités**:
  - Réception et réponse aux demandes
  - Gestion du profil professionnel
  - Système de messagerie
  - Réception des paiements
  - Possibilité d'adhérer au Club Pro

### **3. MEMBRES CLUB PRO** (Prestataires uniquement)

- **Coût**: 50 DH/mois avec engagement 1 an (600 DH total)
- **Documents obligatoires**:
  - Patente professionnelle
  - Registre de Commerce (RC)
  - Assurance professionnelle
  - Numéro ICE (Identifiant Commun Entreprise)
- **Avantages**:
  - Accès aux projets de 5,000-50,000 DH
  - Priorité dans les résultats de recherche
  - Commission réduite
  - Support dédié 24/7
  - Statistiques avancées

---

## 🔐 **SYSTÈME D'INSCRIPTION ET VÉRIFICATION**

### **Processus d'Inscription (4 étapes)**

1. **Sélection du type de compte** (Client ou Prestataire)
2. **Informations personnelles** (Nom, prénom, mot de passe)
3. **Numéro de téléphone** (Uniquement par SMS - pas d'email)
4. **Vérification d'identité + faciale**:
   - CIN ou Passeport (numéro obligatoire)
   - Vérification faciale obligatoire pour tous
   - **Prestataires**: Photo faciale = photo de profil automatique
   - **Clients**: Photo faciale pour sécurité uniquement

### **Documents de Vérification**

- **Clients & Prestataires**: CIN ou Passeport
- **Club Pro (en plus)**: Patente + RC + Assurance + ICE

---

## 🌍 **SYSTÈME BILINGUE**

### **Langues Supportées**

- **Français** (par défaut)
- **العربية** avec support RTL complet

### **Traductions Complètes**

- Interface utilisateur complète
- Contenus dynamiques
- Messages d'erreur et confirmations
- Emails et SMS (si applicable)

---

## 🧭 **NAVIGATION ET STRUCTURE**

### **Header (Barre de Navigation)**

- **Logo**: Logo circulaire Khadamat
- **Navigation**:
  - Accueil
  - Projet
  - Club Pro
- **Actions**:
  - Toggle langue (FR/AR)
  - Badge SOS 24/7 (sans clignotement)
  - Connexion
  - Inscription

### **Pages Principales**

- **Accueil** (`/`) - Page d'accueil avec recherche intelligente
- **Inscription** (`/register`) - Inscription unifiée
- **Projet** (`/project`) - Publication de projets clients
- **Club Pro** (`/club-pro`) - Présentation Club Pro
- **Club Pro Inscription** (`/club-pro/register`) - Adhésion Club Pro
- **SOS** (`/sos`) - Urgences 24/7
- **Support** (`/support`) - Centre d'aide
- **À propos** (`/about`) - Présentation entreprise

### **Pages Légales**

- **CGU** (`/terms`) - Conditions d'utilisation
- **Confidentialité** (`/privacy`) - Politique de confidentialité
- **FAQ** (`/faq`) - Questions fréquentes

### **Pages Corporate**

- **Carrières** (`/careers`) - Offres d'emploi
- **Presse** (`/press`) - Kit média et communiqués
- **Partenaires** (`/partners`) - Partenariats

### **Navigation Mobile**

- **Tab Bar fixe** avec 5 onglets:
  1. Accueil
  2. Recherche
  3. Projet
  4. Club Pro (badge PRO)
  5. SOS (badge 24/7)

---

## 🔍 **FONCTIONNALITÉS PRINCIPALES**

### **1. Recherche Intelligente**

- **Autocomplete** en temps réel
- **Suggestions** de services populaires
- **Recherche vocale** (FR/AR)
- **Filtres**: Prix, distance, note, disponibilité
- **Géolocalisation** automatique (rayon 30km)

### **2. Système de Projets**

- **Publication** par les clients
- **Informations requises**:
  - Métier recherché
  - Description détaillée
  - Photos du lieu (optionnel)
  - Date de début
  - Ville
- **Réponses** des prestataires avec propositions

### **3. Messagerie Intégrée**

- **Chat temps réel** entre clients et prestataires
- **Appels audio/vidéo** via WebRTC
- **Partage de fichiers** (documents, photos)
- **Traduction automatique** FR↔AR
- **Historique** des conversations

### **4. Système de Paiement Escrow**

- **Blocage** du montant à la réservation
- **Libération** après validation du service
- **Méthodes**: Carte bancaire, virement, mobile money
- **Commission** prélevée sur chaque transaction
- **Remboursement** automatique en cas d'annulation

### **5. Service d'Urgence SOS 24/7**

- **Numéros officiels** Maroc:
  - Police: 19
  - Pompiers/SAMU: 15
  - Gendarmerie: 177
- **Appel direct** depuis l'application
- **Géolocalisation** automatique
- **Services privés** d'urgence (plomberie, électricité)

### **6. Newsletter**

- **Inscription** sans compte obligatoire
- **Localisation** par ville
- **Contenu**:
  - Nouveaux prestataires dans la région
  - Actualités de la plateforme
  - Offres exclusives
  - Conseils et astuces

---

## 💰 **MODÈLE ÉCONOMIQUE**

### **Commission Standard**

- **Pourcentage** sur chaque transaction complétée
- **Paiement** retenu jusqu'à validation du service

### **Club Pro**

- **Coût**: 50 DH/mois (engagement 1 an = 600 DH total)
- **Commission réduite** pour les membres
- **Accès exclusif** aux projets haute valeur

### **Services Additionnels**

- **Vérification express** des documents
- **Publicité** mise en avant des profils
- **Formation** des prestataires

---

## 🎨 **DESIGN SYSTEM**

### **Couleurs Principales**

```css
Primary: #E97B47 (Orange Maroc)
Secondary: #2B5D6B (Bleu profond)
Success: #22C55E
Warning: #F59E0B
Error: #EF4444
Background: #FFFFFF
Surface: #F8FAFC
```

### **Typographie**

- **Titres**: Police système (Inter/SF Pro)
- **Corps**: Police système
- **Arabe**: Support RTL natif

### **Composants UI**

- **Cartes** avec ombres subtiles
- **Boutons** avec états hover/focus
- **Formulaires** avec validation temps réel
- **Badges** pour statuts et certifications
- **Modales** pour actions importantes

---

## 📱 **RESPONSIVE DESIGN**

### **Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Navigation Mobile**

- **Tab Bar** fixe en bas
- **Menu hamburger** pour options secondaires
- **Gestures** tactiles (swipe, pinch, tap)

### **Optimisations**

- **Images** adaptatives (WebP + fallback)
- **Lazy loading** des contenus
- **Offline** cache pour pages essentielles
- **Performance** 90+ score Lighthouse

---

## 🔒 **SÉCURITÉ ET CONFORMITÉ**

### **Vérification d'Identité**

- **Documents** officiels obligatoires
- **Vérification faciale** avec liveness detection
- **Validation manuelle** par équipe sécurité

### **Protection des Données**

- **Chiffrement** SSL/TLS
- **Conformité** RGPD/loi marocaine
- **Droit à l'oubli** implémenté
- **Audit** de sécurité régulier

### **Système de Confiance**

- **Évaluations** bidirectionnelles
- **Signalement** de comportements inappropriés
- **Suspension** automatique des comptes problématiques
- **Assurance** responsabilité civile

---

## 🌐 **INTÉGRATIONS TIERCES**

### **Paiements**

- **Banques** marocaines (CIH, BMCE, Attijariwafa)
- **Mobile Money** (Orange Money, Maroc Telecom)
- **Cartes** internationales (Visa, Mastercard)

### **Communication**

- **SMS** pour vérifications
- **Email** pour notifications importantes
- **Push** notifications (si app mobile future)

### **Géolocalisation**

- **Maps** pour localisation des services
- **Géofencing** pour rayon de service 30km
- **Adresses** autocomplete

---

## 📊 **ANALYTICS ET MONITORING**

### **Métriques Business**

- **Nombre** d'inscriptions (clients/prestataires)
- **Volume** de transactions
- **Taux** de conversion
- **Satisfaction** utilisateurs (NPS)

### **Métriques Techniques**

- **Performance** (Core Web Vitals)
- **Disponibilité** (uptime 99.9%)
- **Erreurs** et crashes
- **Usage** des fonctionnalités

---

## 🚀 **ROADMAP ET ÉVOLUTIONS**

### **Phase 1** (Actuelle)

- ✅ Plateforme web responsive
- ✅ Inscription et vérification
- ✅ Système de projets
- ✅ Club Pro
- ✅ SOS 24/7

### **Phase 2** (Future)

- 📱 Application mobile native
- 🤖 Chatbot IA pour support
- 📈 Analytics avancées
- 🔔 Notifications push
- 💳 Wallet intégré

### **Phase 3** (Long terme)

- 🌍 Expansion régionale (Afrique)
- 🏢 Version entreprise dédiée
- 📊 Marketplace B2B
- 🎓 Formation en ligne
- 🤝 Partenariats institutionnels

---

## 📞 **SUPPORT ET MAINTENANCE**

### **Support Client**

- **Chat** en direct 24/7
- **Email** support@khadamat.ma
- **Téléphone** +212 5XX-XXX-XXX
- **FAQ** automatisée

### **Maintenance Technique**

- **Déploiement** continu (CI/CD)
- **Monitoring** 24/7
- **Backup** quotidien
- **Updates** sécurité automatiques

---

## 📈 **KPIs ET OBJECTIFS**

### **Objectifs Business**

- **10,000** utilisateurs actifs mois 1
- **100,000** transactions an 1
- **500** membres Club Pro an 1
- **4.5/5** satisfaction moyenne

### **Objectifs Techniques**

- **< 2s** temps de chargement
- **99.9%** disponibilité
- **< 0.1%** taux d'erreur
- **90+** score Lighthouse

---

## 🏛️ **CONFORMITÉ LÉGALE MAROC**

### **Réglementations**

- **Loi** sur la protection des données personnelles
- **Code** de commerce électronique
- **Réglementation** bancaire (Bank Al-Maghrib)
- **Droit** du travail pour prestataires

### **Obligations**

- **Déclaration** CNDP (Commission Nationale de contrôle)
- **Registre** de commerce électronique
- **TVA** sur les commissions
- **Facturation** conforme

---

## 🎯 **CONCLUSION**

La plateforme **Khadamat** représente une solution complète et sécurisée pour connecter les clients aux prestataires de services au Maroc. Avec son système bilingue, sa vérification d'identité rigoureuse, son programme Club Pro et ses fonctionnalités d'urgence, elle répond aux besoins spécifiques du marché marocain tout en respectant les standards internationaux de qualité et de sécurité.

**Version**: 1.0  
**Date**: Décembre 2024  
**Statut**: En production

---

_Ce document constitue la spécification technique et fonctionnelle complète de la plateforme Khadamat. Il servira de référence pour le développement, la maintenance et les évolutions futures du projet._
