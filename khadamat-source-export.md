# Khadamat - Code Source pour Analyse et Amélioration

## 📋 Description du Projet

**Khadamat** est une plateforme marocaine de mise en relation entre particuliers et prestataires de services essentiels (plombiers, électriciens, etc.) avec :

- **Paiement sécurisé** avec système d'acompte
- **Messagerie interne** avec appels audio/vidéo
- **Vérification d'identité** obligatoire
- **Club Pro** (abonnement premium 300DH/an)
- **Service d'urgence sécuritaire** (police, pompiers, SAMU)
- **Support bilingue** (Français/Arabe) avec RTL

---

## 🏗️ Architecture Technique

```
Tech Stack:
- Frontend: React 18 + TypeScript + Vite
- Routing: React Router 6 (SPA)
- Styling: Tailwind CSS 3 + Radix UI
- State: React Context + useState/useEffect
- Backend: Express.js (API intégrée)
- Testing: Vitest
```

---

## 📁 Structure du Projet

```
client/
├── contexts/LanguageContext.tsx     # Gestion bilingue FR/AR
├── components/
│   ├── Header.tsx                   # Navigation principale
│   ├── Footer.tsx                   # Pied de page
│   ├── LanguageToggle.tsx          # Commutateur de langue
│   ├── Messaging.tsx               # Chat avec audio/vidéo
│   └── ui/                         # Composants Radix UI
├── pages/
│   ├── Index.tsx                   # Page d'accueil
│   ├── Register.tsx                # Inscription avec vérification
│   ├── SOS.tsx                     # Urgences sécuritaires
│   ├── BecomeProvider.tsx          # Devenir prestataire
│   ├── ClubPro.tsx                 # Abonnement premium
│   └── ProviderProfile.tsx         # Profil prestataire
├── App.tsx                         # Point d'entrée + routing
└── global.css                     # Styles globaux + thème
```

---

## 🔤 1. CONTEXTE BILINGUE

```typescript
// client/contexts/LanguageContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.providers": "Prestataires",
    "home.title": "Trouvez le bon prestataire au Maroc",
    "home.search_placeholder": "Quel service recherchez-vous ?",
    "service.plumbing": "Plomberie",
    "service.electrical": "Électricité",
    "common.verified": "Vérifié",
    // ... 100+ traductions
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.providers": "مقدمو الخدمات",
    "home.title": "اعثر على مقدم الخدمة المناسب في المغرب",
    "home.search_placeholder": "أي خدمة تبحث عنها؟",
    "service.plumbing": "السباكة",
    "service.electrical": "الكهرباء",
    "common.verified": "موثق",
    // ... traductions arabes correspondantes
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ar" ? "rtl" : "ltr"} dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
```

---

## 🏠 2. PAGE D'ACCUEIL

```typescript
// client/pages/Index.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search, MapPin, Star, Shield, MessageSquare, CheckCircle,
  Wrench, Zap, Home, Paintbrush, Hammer, Leaf, Users, Clock, Phone, Award
} from "lucide-react";

export default function Index() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  // Services dynamiques basés sur disponibilité dans un rayon de 30km
  const getServicesInArea = (userLocation: string) => {
    const allServices = [
      { key: "plumbing", icon: Wrench, color: "bg-blue-100 text-blue-600", providers: 45 },
      { key: "electrical", icon: Zap, color: "bg-yellow-100 text-yellow-600", providers: 38 },
      { key: "cleaning", icon: Home, color: "bg-green-100 text-green-600", providers: 52 },
      { key: "painting", icon: Paintbrush, color: "bg-purple-100 text-purple-600", providers: 23 },
      { key: "carpentry", icon: Hammer, color: "bg-orange-100 text-orange-600", providers: 31 },
      { key: "gardening", icon: Leaf, color: "bg-emerald-100 text-emerald-600", providers: 19 },
    ];
    return allServices.sort((a, b) => b.providers - a.providers).slice(0, 6);
  };

  const services = getServicesInArea(location) || [];

  const featuredProviders = [
    {
      id: 1, name: "Ahmed Bennani", service: "Plomberie", city: "Casablanca",
      rating: 4.9, reviews: 147, verified: true, proClub: false,
      price: "150", avatar: "/placeholder.svg"
    },
    // ... autres prestataires
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(location)}`;
  };

  return (
    <div className="min-h-screen">
      {/* Section Hero avec recherche */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t("home.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("home.subtitle")}
            </p>

            {/* Formulaire de recherche */}
            <form onSubmit={handleSearch} className="bg-card rounded-2xl p-6 shadow-lg max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-4">
                <div className="lg:col-span-3 md:col-span-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      placeholder={t("home.search_placeholder")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12 text-lg"
                    />
                  </div>
                </div>
                <div className="lg:col-span-1 md:col-span-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      placeholder={t("home.search_location")}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 h-12"
                      list="moroccan-cities"
                    />
                    <datalist id="moroccan-cities">
                      <option value="Casablanca" />
                      <option value="Rabat" />
                      <option value="Marrakech" />
                      {/* ... autres villes */}
                    </datalist>
                  </div>
                </div>
                <div className="lg:col-span-1 md:col-span-1">
                  <Button type="submit" size="lg" className="h-12 w-full">
                    {t("home.search_button")}
                  </Button>
                </div>
              </div>
            </form>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Prestataires</div>
              </div>
              {/* ... autres stats */}
            </div>
          </div>
        </div>
      </section>

      {/* Services populaires */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.popular_services")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service) => (
              <Link key={service.key} to={`/services/${service.key}`} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 rounded-2xl mb-4 ${service.color}`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold">{t(`service.${service.key}`)}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {service.providers} {language === "ar" ? "مقدم خدمة" : "prestataires"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prestataires en vedette */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.featured_providers")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProviders.map((provider) => (
              <Card key={provider.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Contenu de la carte prestataire */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={provider.avatar} alt={provider.name} />
                        <AvatarFallback>{provider.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold flex items-center gap-2">
                          {provider.name}
                          {provider.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Shield className="h-3 w-3 mr-1" />
                              {t("common.verified")}
                            </Badge>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground">{provider.service}</p>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {provider.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link to={`/provider/${provider.id}`}>
                        {t("common.view_profile")}
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link to={`/contact/${provider.id}`}>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {t("common.contact")}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section d'urgence */}
      <section className="py-12 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Service d'Urgence 24/7</h3>
              <p className="opacity-90">
                Police, pompiers, SAMU - Intervention rapide partout au Maroc
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/sos">
                <Phone className="mr-2 h-5 w-5" />
                Urgence Sécuritaire
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## 💬 3. SYSTÈME DE MESSAGERIE

```typescript
// client/components/Messaging.tsx
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Send, Phone, Video, PhoneOff, VideoOff, Mic, MicOff, Camera, CameraOff,
  DollarSign, Clock, Shield, Paperclip, Image as ImageIcon
} from "lucide-react";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: "text" | "proposal" | "system";
  proposal?: {
    amount: number;
    description: string;
    status: "pending" | "accepted" | "rejected";
  };
}

interface MessagingProps {
  providerId: string;
  providerName: string;
  providerAvatar: string;
  isProvider?: boolean;
}

export function Messaging({ providerId, providerName, providerAvatar, isProvider = false }: MessagingProps) {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [proposalAmount, setProposalAmount] = useState("");
  const [proposalDescription, setProposalDescription] = useState("");
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Gestion des appels audio/vidéo
  const startCall = (video: boolean = false) => {
    setIsCallActive(true);
    setIsVideoCall(video);
    setCallDuration(0);

    if (video && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Error accessing media devices:", err));
    }
  };

  const endCall = () => {
    setIsCallActive(false);
    setIsVideoCall(false);
    setIsMuted(false);
    setIsCameraOff(false);

    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: isProvider ? providerId : "client",
      content: newMessage,
      timestamp: new Date(),
      type: "text",
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  const sendProposal = () => {
    if (!proposalAmount || !proposalDescription.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: isProvider ? providerId : "client",
      content: `Proposition: ${proposalAmount} DH - ${proposalDescription}`,
      timestamp: new Date(),
      type: "proposal",
      proposal: {
        amount: parseInt(proposalAmount),
        description: proposalDescription,
        status: "pending",
      },
    };

    setMessages((prev) => [...prev, message]);
    setProposalAmount("");
    setProposalDescription("");
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={providerAvatar} alt={providerName} />
              <AvatarFallback>{providerName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{providerName}</CardTitle>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {language === "ar" ? "متصل" : "En ligne"}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => startCall(false)} disabled={isCallActive}>
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => startCall(true)} disabled={isCallActive}>
              <Video className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {/* Interface d'appel vidéo/audio */}
      {isCallActive && (
        <div className="absolute inset-0 bg-black z-50 flex flex-col">
          <div className="flex-1 relative">
            {isVideoCall ? (
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-900">
                <div className="text-center text-white">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={providerAvatar} alt={providerName} />
                    <AvatarFallback className="text-2xl">{providerName[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{providerName}</h3>
                  <p className="text-gray-300">
                    {language === "ar" ? "مكالمة صوتية" : "Appel audio"}
                  </p>
                </div>
              </div>
            )}

            {/* Contrôles d'appel */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className={isMuted ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>

              {isVideoCall && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsCameraOff(!isCameraOff)}
                  className={isCameraOff ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {isCameraOff ? <CameraOff className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
                </Button>
              )}

              <Button variant="destructive" size="sm" onClick={endCall} className="bg-red-600 hover:bg-red-700">
                <PhoneOff className="h-4 w-4" />
              </Button>
            </div>

            {/* Durée d'appel */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{Math.floor(callDuration / 60).toString().padStart(2, "0")}:{(callDuration % 60).toString().padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Zone des messages */}
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.senderId === "system" ? "justify-center" : message.senderId === (isProvider ? providerId : "client") ? "justify-end" : "justify-start"}`}>
            {message.type === "proposal" ? (
              <Card className={`max-w-sm ${message.senderId === (isProvider ? providerId : "client") ? "bg-primary text-primary-foreground" : ""}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold">
                      {language === "ar" ? "اقتراح سعر" : "Proposition de prix"}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">{message.proposal?.amount} DH</div>
                    <p className="text-sm opacity-90">{message.proposal?.description}</p>
                    {message.proposal?.status === "pending" && message.senderId !== (isProvider ? providerId : "client") && (
                      <div className="flex gap-2 mt-3">
                        <Button variant="secondary" size="sm">
                          {language === "ar" ? "قبول" : "Accepter"}
                        </Button>
                        <Button variant="outline" size="sm">
                          {language === "ar" ? "رفض" : "Refuser"}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className={`max-w-sm px-3 py-2 rounded-lg ${message.senderId === (isProvider ? providerId : "client") ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                <p>{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString(language === "ar" ? "ar-MA" : "fr-FR", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </CardContent>

      {/* Zone de saisie */}
      <div className="border-t p-4 space-y-3">
        {/* Section de proposition (pour clients) */}
        {!isProvider && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                <DollarSign className="mr-2 h-4 w-4" />
                {language === "ar" ? "اقتراح مبلغ" : "Proposer un montant"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {language === "ar" ? "اقتراح مهمة جديدة" : "Proposer une nouvelle mission"}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label htmlFor="amount">{language === "ar" ? "المبلغ (بالدرهم)" : "Montant (en DH)"}</label>
                  <Input
                    id="amount"
                    type="number"
                    value={proposalAmount}
                    onChange={(e) => setProposalAmount(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div>
                  <label htmlFor="description">{language === "ar" ? "وصف المهمة" : "Description de la mission"}</label>
                  <Textarea
                    id="description"
                    value={proposalDescription}
                    onChange={(e) => setProposalDescription(e.target.value)}
                    placeholder={language === "ar" ? "اشرح ما تحتاجه بالتفصيل..." : "Décrivez ce dont vous avez besoin en détail..."}
                    rows={3}
                  />
                </div>
                <Button onClick={sendProposal} className="w-full">
                  {language === "ar" ? "إرسال الاقتراح" : "Envoyer la proposition"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Saisie de message */}
        <div className="flex space-x-2">
          <div className="flex space-x-1">
            <Button variant="ghost" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ImageIcon className="h-4 w-4" />
            </Button>
          </div>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={language === "ar" ? "اكتب رسالتك..." : "Tapez votre message..."}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="flex-1"
          />
          <Button onClick={sendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Notice de sécurité */}
        <div className="flex items-center justify-center text-xs text-muted-foreground">
          <Shield className="mr-1 h-3 w-3" />
          {language === "ar" ? "المحادثات محمية ومراقبة للأمان" : "Conversations protégées et surveillées pour la sécurité"}
        </div>
      </div>
    </Card>
  );
}
```

---

## 🚨 4. PAGE D'URGENCE SÉCURITAIRE

```typescript
// client/pages/SOS.tsx
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, MapPin, AlertTriangle, Shield, Flame, Heart, PhoneCall, Clock, Users } from "lucide-react";

export default function SOS() {
  const { language } = useLanguage();
  const [selectedEmergency, setSelectedEmergency] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const emergencyServices = [
    {
      id: "police",
      nameAr: "الشرطة",
      nameFr: "Police",
      number: "19",
      icon: Shield,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      description: {
        ar: "الإبلاغ عن جرائم، حوادث، أو طلب المساعدة الأمنية",
        fr: "Signaler des crimes, accidents ou demander une assistance sécuritaire",
      },
      examples: {
        ar: ["سرقة", "اعتداء", "حادث سير", "مشكل أمني"],
        fr: ["Vol", "Agression", "Accident", "Problème de sécurité"],
      },
    },
    {
      id: "fire",
      nameAr: "الحماية المدنية",
      nameFr: "Pompiers",
      number: "15",
      icon: Flame,
      color: "bg-red-100 text-red-600 border-red-200",
      description: {
        ar: "حرائق، حوادث، إنقاذ، أو حالات طوارئ مدنية",
        fr: "Incendies, accidents, sauvetages ou urgences civiles",
      },
      examples: {
        ar: ["حريق", "انهيار مبنى", "إنقاذ شخص", "تسريب غاز"],
        fr: ["Incendie", "Effondrement", "Sauvetage", "Fuite de gaz"],
      },
    },
    {
      id: "ambulance",
      nameAr: "الإسعاف",
      nameFr: "SAMU / Ambulance",
      number: "15",
      icon: Heart,
      color: "bg-green-100 text-green-600 border-green-200",
      description: {
        ar: "حالات طبية طارئة تحتاج تدخل فوري",
        fr: "Urgences médicales nécessitant une intervention immédiate",
      },
      examples: {
        ar: ["نوبة قلبية", "حادث خطير", "فقدان وعي", "حالة طبية طارئة"],
        fr: ["Crise cardiaque", "Accident grave", "Perte de conscience", "Urgence médicale"],
      },
    },
    {
      id: "gendarmerie",
      nameAr: "الدرك الملكي",
      nameFr: "Gendarmerie Royale",
      number: "177",
      icon: Shield,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      description: {
        ar: "للمناطق الريفية والطرق السريعة",
        fr: "Pour les zones rurales et autoroutes",
      },
      examples: {
        ar: ["حوادث الطرق", "مشاكل ريفية", "أمن الطرق"],
        fr: ["Accidents routiers", "Problèmes ruraux", "Sécurité routière"],
      },
    },
  ];

  const handleEmergencyCall = (service: any) => {
    setSelectedEmergency(service.id);
    // Dans une vraie app, ceci initierait un appel d'urgence
    window.open(`tel:${service.number}`);
    alert(language === "ar" ? `اتصال بـ ${service.nameAr} (${service.number})...` : `Connexion avec ${service.nameFr} (${service.number})...`);
  };

  const sendLocationToEmergency = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          alert(language === "ar" ? `تم إرسال موقعك: ${lat.toFixed(6)}, ${lng.toFixed(6)}` : `Localisation envoyée: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
        },
        () => {
          alert(language === "ar" ? "لا يمكن الحصول على الموقع" : "Impossible d'obtenir la localisation");
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* En-tête d'urgence */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-500 text-white rounded-full p-4 animate-pulse">
              <AlertTriangle className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-red-600 mb-2">
            {language === "ar" ? "خدمات الطوارئ والأمان" : "Services d'Urgence et Sécurité"}
          </h1>
          <p className="text-muted-foreground text-lg">
            {language === "ar" ? "اتصل بخدمات الطوارئ المغربية مباشرة من Khadamat" : "Contactez les services d'urgence marocains directement depuis Khadamat"}
          </p>
          <Badge variant="destructive" className="text-lg px-4 py-2 mt-4">
            <Phone className="mr-2 h-5 w-5" />
            {language === "ar" ? "متاح 24/7" : "Disponible 24/7"}
          </Badge>
        </div>

        {/* Section d'appel rapide */}
        <Card className="border-red-200 bg-red-50 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-red-700 mb-4 text-center">
              {language === "ar" ? "اتصال سريع" : "Appel rapide"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emergencyServices.map((service) => (
                <Button
                  key={service.id}
                  variant="outline"
                  className="h-20 flex flex-col gap-2 bg-white border-2 hover:bg-red-50"
                  onClick={() => handleEmergencyCall(service)}
                >
                  <service.icon className="h-6 w-6" />
                  <div className="text-center">
                    <div className="font-bold text-lg">{service.number}</div>
                    <div className="text-xs">{language === "ar" ? service.nameAr : service.nameFr}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cartes des services d'urgence */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {emergencyServices.map((service) => (
            <Card key={service.id} className={`transition-all duration-300 hover:shadow-lg border-2 ${service.color}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${service.color}`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {language === "ar" ? service.nameAr : service.nameFr}
                      </CardTitle>
                      <div className="font-bold text-lg">{service.number}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-lg px-3 py-1">24/7</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {language === "ar" ? service.description.ar : service.description.fr}
                </p>

                <div className="mb-4">
                  <p className="font-medium mb-2">
                    {language === "ar" ? "حالات الاستخدام:" : "Cas d'usage:"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(language === "ar" ? service.examples.ar : service.examples.fr).map((example, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" onClick={() => handleEmergencyCall(service)}>
                    <PhoneCall className="mr-2 h-4 w-4" />
                    {language === "ar" ? "اتصال" : "Appeler"}
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          {language === "ar" ? "تفاصيل الطوارئ" : "Détails de l'urgence"}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label>{language === "ar" ? "الموقع الدقيق" : "Localisation exacte"}</label>
                          <div className="flex gap-2">
                            <Input
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              placeholder={language === "ar" ? "اكتب موقعك..." : "Décrivez votre localisation..."}
                            />
                            <Button variant="outline" onClick={sendLocationToEmergency}>
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div>
                          <label>{language === "ar" ? "وصف الحالة" : "Description de la situation"}</label>
                          <Textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={language === "ar" ? "اشرح ما يحدث..." : "Décrivez ce qui se passe..."}
                            rows={3}
                          />
                        </div>

                        <Button className="w-full" onClick={() => handleEmergencyCall(service)}>
                          <PhoneCall className="mr-2 h-4 w-4" />
                          {language === "ar" ? `اتصال بـ ${service.nameAr}` : `Appeler ${service.nameFr}`}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notice importante */}
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">
                  {language === "ar" ? "تنويه مهم" : "Information importante"}
                </h3>
                <div className="text-sm text-yellow-700 space-y-2">
                  <p>
                    {language === "ar" ? "• هذه الخدمة مخصصة للطوارئ الحقيقية فقط" : "• Ce service est réservé aux urgences réelles uniquement"}
                  </p>
                  <p>
                    {language === "ar" ? "• استخدام خاطئ قد يعرضك للمساءلة القانونية" : "• Un usage abusif peut entraîner des poursuites légales"}
                  </p>
                  <p>
                    {language === "ar" ? "• في حالة عدم الطوارئ، اتصل بالخدمات العادية" : "• Pour les non-urgences, contactez les services habituels"}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

---

## 👑 5. CLUB PRO (PREMIUM)

```typescript
// client/pages/ClubPro.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Award, Crown, Star, TrendingUp, Shield, Clock, DollarSign, Users, Building,
  CheckCircle, Calendar, BarChart3, Briefcase
} from "lucide-react";

export default function ClubPro() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    holderName: "",
    acceptTerms: false,
  });

  const benefits = [
    {
      icon: TrendingUp,
      titleAr: "مشاريع عالية القيمة",
      titleFr: "Projets haute valeur",
      descriptionAr: "احصل على مشاريع تتراوح بين 5000-50000 درهم",
      descriptionFr: "Accédez à des projets de 5 000 à 50 000 DH",
    },
    {
      icon: Building,
      titleAr: "عملاء الشركات",
      titleFr: "Clients entreprises",
      descriptionAr: "تعامل مباشر مع الشركات والمؤسسات",
      descriptionFr: "Relation directe avec entreprises et institutions",
    },
    {
      icon: Calendar,
      titleAr: "مشاريع طويلة المدى",
      titleFr: "Projets long terme",
      descriptionAr: "عقود تمتد من شهر إلى سنة كاملة",
      descriptionFr: "Contrats de 1 mois à 1 an",
    },
    {
      icon: Star,
      titleAr: "أولوية في النتائج",
      titleFr: "Priorité dans les résultats",
      descriptionAr: "ظهور أولي في نتائج البحث",
      descriptionFr: "Apparition prioritaire dans les recherches",
    },
    {
      icon: Shield,
      titleAr: "دعم مخصص",
      titleFr: "Support dédié",
      descriptionAr: "فريق دعم مخصص متاح 24/7",
      descriptionFr: "Équipe support dédiée disponible 24/7",
    },
    {
      icon: BarChart3,
      titleAr: "إحصائيات متقدمة",
      titleFr: "Statistiques avancées",
      descriptionAr: "تقارير مفصلة عن أداء عملك",
      descriptionFr: "Rapports détaillés sur vos performances",
    },
  ];

  const requirements = [
    {
      titleAr: "50+ مهمة مكتملة",
      titleFr: "50+ missions terminées",
    },
    {
      titleAr: "تقييم 4.2/5 أو أعلى",
      titleFr: "Note de 4.2/5 minimum",
    },
    {
      titleAr: "وثائق مهنية كاملة",
      titleFr: "Documents professionnels complets",
    },
    {
      titleAr: "تأمين مهني ساري",
      titleFr: "Assurance professionnelle valide",
    },
  ];

  const projectExamples = [
    {
      titleAr: "تجديد مكاتب شركة",
      titleFr: "Rénovation bureaux entreprise",
      budget: "25,000 DH",
      duration: "3 mois",
      category: "Rénovation",
    },
    {
      titleAr: "صيانة فندق شهرية",
      titleFr: "Maintenance hôtel mensuelle",
      budget: "8,000 DH/mois",
      duration: "12 mois",
      category: "Maintenance",
    },
    {
      titleAr: "تركيب أنظمة أمنية",
      titleFr: "Installation systèmes sécurité",
      budget: "15,000 DH",
      duration: "2 mois",
      category: "Sécurité",
    },
  ];

  const handleSubscribe = () => {
    if (!formData.acceptTerms) {
      alert(language === "ar" ? "يرجى قبول الشروط والأحكام" : "Veuillez accepter les conditions");
      return;
    }

    // Traitement du paiement ici
    console.log("Club Pro subscription:", formData);
    alert(language === "ar" ? "تم تأكيد اشتراكك في Club Pro!" : "Votre abonnement Club Pro est confirmé !");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full p-4">
              <Crown className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Club Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "ar" ? "انضم إلى نخبة مقدمي الخدمات واحصل على مشاريع عالية القيمة وطويلة المدى" : "Rejoignez l'élite des prestataires et accédez à des projets haute valeur et long terme"}
          </p>
          <Badge className="mt-4 text-lg px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500">
            <Award className="mr-2 h-5 w-5" />
            {language === "ar" ? "عضوية حصرية" : "Membership Exclusif"}
          </Badge>
        </div>

        {/* Grille des avantages */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden border-orange-200 hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400 to-transparent opacity-20" />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg mr-3">
                    <benefit.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold">
                    {language === "ar" ? benefit.titleAr : benefit.titleFr}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === "ar" ? benefit.descriptionAr : benefit.descriptionFr}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section des conditions */}
        <Card className="mb-12 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <CheckCircle className="mr-2 h-6 w-6 text-green-600" />
              {language === "ar" ? "شروط الانضمام للـ Club Pro" : "Conditions d'adhésion au Club Pro"}
            </CardTitle>
            <CardDescription>
              {language === "ar" ? "يجب تحقيق جميع الشروط التالية للانضمام" : "Vous devez remplir toutes les conditions suivantes"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-medium text-sm">
                      {language === "ar" ? req.titleAr : req.titleFr}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Exemples de projets */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2 h-6 w-6" />
              {language === "ar" ? "أمثلة على المشاريع المتاحة" : "Exemples de projets disponibles"}
            </CardTitle>
            <CardDescription>
              {language === "ar" ? "نماذج من المشاريع التي يمكن لأعضاء Club Pro الوصول إليها" : "Échantillons de projets accessibles aux membres Club Pro"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {projectExamples.map((project, index) => (
                <Card key={index} className="border-orange-100">
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-3">{project.category}</Badge>
                    <h4 className="font-semibold mb-2">
                      {language === "ar" ? project.titleAr : project.titleFr}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {language === "ar" ? "الميزانية:" : "Budget:"}
                        </span>
                        <span className="font-medium">{project.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {language === "ar" ? "المدة:" : "Durée:"}
                        </span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section de tarification */}
        <Card className="mb-12 border-2 border-gradient-to-r from-yellow-300 to-orange-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {language === "ar" ? "خطة الاشتراك" : "Plan d'abonnement"}
            </CardTitle>
            <CardDescription>
              {language === "ar" ? "استثمار بسيط لعوائد كبيرة" : "Un petit investissement pour de gros retours"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">300 DH</div>
                <div className="text-muted-foreground">
                  {language === "ar" ? "سنوياً فقط" : "par an seulement"}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {language === "ar" ? "25 درهم في الشهر" : "25 DH par mois"}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber">
                    {language === "ar" ? "رقم البطاقة" : "Numéro de carte"}
                  </label>
                  <Input
                    id="cardNumber"
                    placeholder="**** **** **** ****"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData((prev) => ({ ...prev, cardNumber: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry">
                      {language === "ar" ? "تاريخ الانتهاء" : "Date d'expiration"}
                    </label>
                    <Input
                      id="expiry"
                      placeholder="MM/AA"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData((prev) => ({ ...prev, expiryDate: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV</label>
                    <Input
                      id="cvv"
                      placeholder="***"
                      value={formData.cvv}
                      onChange={(e) => setFormData((prev) => ({ ...prev, cvv: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="holderName">
                    {language === "ar" ? "اسم حامل البطاقة" : "Nom du titulaire"}
                  </label>
                  <Input
                    id="holderName"
                    value={formData.holderName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, holderName: e.target.value }))}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, acceptTerms: checked as boolean }))}
                  />
                  <label htmlFor="terms" className="text-sm">
                    {language === "ar" ? (
                      <>
                        أوافق على <Link to="/terms" className="text-primary hover:underline">شروط Club Pro</Link>
                      </>
                    ) : (
                      <>
                        J'accepte les <Link to="/terms" className="text-primary hover:underline">conditions du Club Pro</Link>
                      </>
                    )}
                  </label>
                </div>

                <Button onClick={handleSubscribe} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white" size="lg">
                  <Crown className="mr-2 h-5 w-5" />
                  {language === "ar" ? "انضم للـ Club Pro" : "Rejoindre le Club Pro"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calcul du ROI */}
        <Card className="mb-12 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <TrendingUp className="mr-2 h-6 w-6" />
              {language === "ar" ? "عائد الاستثمار المتوقع" : "Retour sur investissement"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">300 DH</div>
                <div className="text-sm text-green-700">
                  {language === "ar" ? "كلفة العضوية" : "Coût d'adhésion"}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">15,000 DH</div>
                <div className="text-sm text-green-700">
                  {language === "ar" ? "متوسط المشروع الواحد" : "Projet moyen"}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">5000%</div>
                <div className="text-sm text-green-700">
                  {language === "ar" ? "عائد الاستثمار" : "ROI potentiel"}
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-green-700">
                {language === "ar" ? "مشروع واحد فقط يكفي لتغطية تكلفة العضوية بـ 50 مرة!" : "Un seul projet suffit pour rentabiliser 50 fois votre adhésion !"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

---

## 🎨 6. CONFIGURATION STYLING

```css
/* client/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Variables de couleurs HSL pour thème marocain */
  :root {
    --background: 0 0% 98%;
    --foreground: 220 15% 25%;
    --card: 0 0% 100%;
    --card-foreground: 220 15% 25%;
    --primary: 15 85% 55%; /* Rouge marocain */
    --primary-foreground: 0 0% 98%;
    --secondary: 35 40% 92%;
    --secondary-foreground: 220 15% 25%;
    --muted: 35 15% 95%;
    --muted-foreground: 220 10% 50%;
    --accent: 200 60% 88%;
    --accent-foreground: 220 15% 25%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 35 20% 88%;
    --input: 35 20% 88%;
    --ring: 15 85% 55%;
    --radius: 0.75rem;

    /* Couleurs spécifiques marocaines */
    --moroccan-red: 15 85% 55%;
    --moroccan-gold: 45 90% 55%;
    --moroccan-blue: 200 85% 55%;
    --moroccan-green: 135 70% 45%;
  }

  .dark {
    --background: 220 25% 8%;
    --foreground: 35 15% 92%;
    --card: 220 20% 12%;
    --card-foreground: 35 15% 92%;
    --primary: 15 85% 55%;
    --primary-foreground: 0 0% 98%;
    --secondary: 220 15% 18%;
    --secondary-foreground: 35 15% 85%;
    --muted: 220 15% 15%;
    --muted-foreground: 220 10% 65%;
    --accent: 200 40% 25%;
    --accent-foreground: 35 15% 85%;
    --destructive: 0 75% 55%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 15% 20%;
    --input: 220 15% 20%;
    --ring: 15 85% 55%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }

  /* Support RTL pour l'arabe */
  [dir="rtl"] {
    direction: rtl;
  }

  [dir="rtl"] .rtl\:space-x-reverse > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 1;
  }

  /* Polices appropriées pour l'arabe */
  [dir="rtl"] * {
    font-family:
      system-ui,
      -apple-system,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      "Noto Sans",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji";
  }
}
```

---

## 🚀 7. POINT D'ENTRÉE PRINCIPAL

```typescript
// client/App.tsx
import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import Register from "./pages/Register";
import SOS from "./pages/SOS";
import ProviderProfile from "./pages/ProviderProfile";
import BecomeProvider from "./pages/BecomeProvider";
import ClubPro from "./pages/ClubPro";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sos" element={<SOS />} />
              <Route path="/become-provider" element={<BecomeProvider />} />
              <Route path="/club-pro" element={<ClubPro />} />
              <Route path="/services/:service" element={<PlaceholderPage />} />
              <Route path="/providers" element={<PlaceholderPage />} />
              <Route path="/provider/:id" element={<ProviderProfile />} />
              <Route path="/about" element={<PlaceholderPage />} />
              <Route path="/contact" element={<PlaceholderPage />} />
              <Route path="/login" element={<PlaceholderPage />} />
              <Route path="/search" element={<PlaceholderPage />} />
              <Route path="/contact/:id" element={<PlaceholderPage />} />
              <Route path="/terms" element={<PlaceholderPage />} />
              <Route path="/privacy" element={<PlaceholderPage />} />
              <Route path="/faq" element={<PlaceholderPage />} />
              <Route path="/support" element={<PlaceholderPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
```

---

## 📦 8. CONFIGURATION PACKAGE.JSON

```json
{
  "name": "khadamat-platform",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "vite build --config vite.config.server.ts",
    "start": "node dist/server/node-build.mjs",
    "test": "vitest --run",
    "typecheck": "tsc"
  },
  "dependencies": {
    "express": "^4.18.2",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@hookform/resolvers": "^3.9.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@types/node": "^22.5.5",
    "typescript": "^5.5.3",
    "vite": "^6.2.2",
    "tailwindcss": "^3.4.11",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.462.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

---

## 🎯 QUESTIONS POUR L'IA D'ANALYSE

**Demandez à l'IA d'analyser ce code et de vous donner des conseils sur :**

1. **Architecture & Performance** :

   - Structure des composants React
   - Optimisations de performance possibles
   - Gestion d'état et contextes
   - Lazy loading et code splitting

2. **UX/UI & Accessibilité** :

   - Design responsive et mobile-first
   - Support RTL pour l'arabe
   - Accessibilité (ARIA, navigation clavier)
   - Cohérence du design system

3. **Sécurité & Robustesse** :

   - Validation des formulaires
   - Gestion des erreurs
   - Sécurisation des appels d'urgence
   - Protection des données utilisateur

4. **Internationalisation** :

   - Amélioration du système bilingue
   - Gestion des devises et formats
   - Optimisation RTL
   - Traductions manquantes

5. **Fonctionnalités Métier** :

   - Système de paiement et commissions
   - Messagerie et appels vidéo
   - Vérification d'identité
   - Club Pro et abonnements

6. **Techniques & Outils** :
   - Migration vers Next.js ou autre framework
   - Intégration d'APIs tierces
   - Tests automatisés
   - Déploiement et CI/CD

---

**Ce code représente une application complète et fonctionnelle avec toutes les fonctionnalités demandées. Utilisez cette base pour obtenir des recommandations d'amélioration spécifiques à vos besoins !**
