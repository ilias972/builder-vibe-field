import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.providers": "Prestataires",
    "nav.project": "Projet",
    "nav.b2b": "Entreprises",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.login": "Connexion",
    "nav.register": "Inscription",
    "nav.become_provider": "Devenir Prestataire",

    // Homepage
    "home.title": "Trouvez le bon prestataire au Maroc",
    "home.subtitle":
      "Plombiers, électriciens, et tous les services essentiels près de chez vous",
    "home.search_placeholder": "Quel service recherchez-vous ?",
    "home.search_location": "Où ?",
    "home.search_button": "Rechercher",
    "home.popular_services": "Services Populaires",
    "home.featured_providers": "Prestataires en Vedette",
    "home.testimonials": "Témoignages",
    "home.how_it_works": "Comment ça marche",
    "home.join_providers": "Rejoignez nos prestataires",
    "home.join_providers_desc":
      "Développez votre activité avec notre plateforme sécurisée",

    // Services
    "service.plumbing": "Plomberie",
    "service.electrical": "Électricité",
    "service.cleaning": "Ménage",
    "service.painting": "Peinture",
    "service.carpentry": "Menuiserie",
    "service.gardening": "Jardinage",
    "service.funeral": "Services Funéraires",
    "service.handyman": "Bricolage",

    // Common
    "common.verified": "Vérifié",
    "common.rating": "Note",
    "common.reviews": "Avis",
    "common.from": "À partir de",
    "common.dh": "DH",
    "common.mission": "Mission",
    "common.missions": "Missions",
    "common.view_profile": "Voir le profil",
    "common.contact": "Contacter",
    "common.book_now": "Réserver maintenant",

    // Badges
    "badge.verified_provider": "Prestataire Vérifié",
    "badge.verified_client": "Client Vérifié",
    "badge.pro_club": "Club Pro B2B",
    "badge.emergency": "Service d'Urgence",

    // Footer
    "footer.about": "À Propos",
    "footer.terms": "CGU",
    "footer.privacy": "Confidentialité",
    "footer.faq": "FAQ",
    "footer.support": "Support",
    "footer.careers": "Carrières",
    "footer.press": "Presse",
    "footer.partners": "Partenaires",
    "footer.copyright": "© 2024 Khadamat. Tous droits réservés.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.providers": "مقدمو الخدمات",
    "nav.b2b": "الشركات",
    "nav.about": "حولنا",
    "nav.contact": "اتصل بنا",
    "nav.login": "تسجيل الدخول",
    "nav.register": "إنشاء حساب",
    "nav.become_provider": "كن مقدم خدمة",

    // Homepage
    "home.title": "اعثر على مقدم الخدمة المناسب في المغرب",
    "home.subtitle": "سباكون، كهربائيون، وجميع الخدمات الأساسية بالقرب منك",
    "home.search_placeholder": "أي خدمة تبحث عنها؟",
    "home.search_location": "أين؟",
    "home.search_button": "بحث",
    "home.popular_services": "الخدمات الشائعة",
    "home.featured_providers": "مقدمو الخدمات المميزون",
    "home.testimonials": "شهادات العملاء",
    "home.how_it_works": "كيف يعمل",
    "home.join_providers": "انضم إلى مقدمي الخدمات",
    "home.join_providers_desc": "طور نشاطك التجاري مع منصتنا الآمنة",

    // Services
    "service.plumbing": "السباكة",
    "service.electrical": "الكهرباء",
    "service.cleaning": "التنظيف",
    "service.painting": "الطلاء",
    "service.carpentry": "النجارة",
    "service.gardening": "البستنة",
    "service.funeral": "الخدمات الجنائزية",
    "service.handyman": "أعمال الصيانة",

    // Common
    "common.verified": "موثق",
    "common.rating": "التقييم",
    "common.reviews": "المراجعات",
    "common.from": "ابتداء من",
    "common.dh": "درهم",
    "common.mission": "مهمة",
    "common.missions": "مهام",
    "common.view_profile": "عرض الملف الشخصي",
    "common.contact": "اتصال",
    "common.book_now": "احجز الآن",

    // Badges
    "badge.verified_provider": "مقدم خدمة موثق",
    "badge.verified_client": "عميل موثق",
    "badge.pro_club": "نادي المحترفين",
    "badge.emergency": "خدمة طوارئ",

    // Footer
    "footer.about": "حولنا",
    "footer.terms": "الشروط والأحكام",
    "footer.privacy": "الخصوصية",
    "footer.faq": "الأسئلة الشائعة",
    "footer.support": "الدعم",
    "footer.careers": "الوظائف",
    "footer.press": "الصحافة",
    "footer.partners": "الشركاء",
    "footer.copyright": "© 2024 خدمات. جميع الحقوق محفوظة.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div
        className={language === "ar" ? "rtl" : "ltr"}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
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
