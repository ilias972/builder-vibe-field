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

    // Emergency/SOS
    "sos.title": "Service d'Urgence 24/7",
    "sos.subtitle": "Intervention rapide partout au Maroc",
    "sos.description":
      "Plomberie, électricité, serrurerie - Intervention rapide",
    "sos.call_button": "Appeler SOS",
    "sos.emergency_numbers": "Numéros d'urgence officiels",
    "sos.police": "Police",
    "sos.fire_medical": "Pompiers/SAMU",
    "sos.gendarmerie": "Gendarmerie",

    // Club Pro
    "clubpro.title": "Club Pro",
    "clubpro.subtitle": "Accès exclusif aux projets de haute valeur",
    "clubpro.price": "50 DH/mois",
    "clubpro.commitment": "Engagement 1 an - 600 DH au total",
    "clubpro.projects_range": "Projets de 5,000 - 50,000 DH",
    "clubpro.exclusive_projects": "Projets exclusifs",
    "clubpro.reduced_commission": "Commission réduite",
    "clubpro.priority_search": "Priorité dans la recherche",
    "clubpro.dedicated_support": "Support dédié",
    "clubpro.requirements": "Exigences d'adhésion",
    "clubpro.documents_required": "Documents requis",
    "clubpro.join_button": "Rejoindre Club Pro",

    // How it works
    "how_it_works.title": "Comment ça marche",
    "how_it_works.step1_title": "Décrivez votre besoin",
    "how_it_works.step1_desc": "Publiez votre projet en quelques clics",
    "how_it_works.step2_title": "Recevez des propositions",
    "how_it_works.step2_desc": "Les prestataires qualifiés vous contactent",
    "how_it_works.step3_title": "Choisissez et réservez",
    "how_it_works.step3_desc": "Sélectionnez le meilleur prestataire",
    "how_it_works.step4_title": "Paiement sécurisé",
    "how_it_works.step4_desc": "Votre argent est protégé jusqu'à validation",

    // Become Provider
    "become_provider.title": "Devenir Prestataire",
    "become_provider.subtitle": "Développez votre activité avec Khadamat",
    "become_provider.benefits": "Avantages",
    "become_provider.benefit1": "Accès à de nouveaux clients",
    "become_provider.benefit2": "Paiements sécurisés garantis",
    "become_provider.benefit3": "Outils de gestion inclus",
    "become_provider.benefit4": "Support client dédié",
    "become_provider.requirements": "Exigences",
    "become_provider.requirement1": "Vérification d'identité",
    "become_provider.requirement2": "Documents professionnels",
    "become_provider.requirement3": "Évaluation des compétences",
    "become_provider.start_button": "Commencer l'inscription",

    // Footer
    "footer.about": "À Propos",
    "footer.terms": "CGU",
    "footer.privacy": "Confidentialité",
    "footer.faq": "FAQ",
    "footer.support": "Support",
    "footer.careers": "Carrières",
    "footer.press": "Presse",
    "footer.partners": "Partenaires",
    "footer.company": "Entreprise",
    "footer.support_legal": "Support & Légal",
    "footer.copyright": "© 2024 Khadamat. Tous droits réservés.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.providers": "مقدمو الخدمات",
    "nav.project": "مشروع",
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
    "home.search_location": "��ين؟",
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

    // Emergency/SOS
    "sos.title": "خدمة الطوارئ 24/7",
    "sos.subtitle": "تدخل سريع في جميع أنحاء المغرب",
    "sos.description": "سباكة، كهرباء، أقفال - تدخل سريع",
    "sos.call_button": "اتصل بالطوارئ",
    "sos.emergency_numbers": "أرقام الطوارئ الرسمية",
    "sos.police": "الشرطة",
    "sos.fire_medical": "الإطفاء/الإسعاف",
    "sos.gendarmerie": "الدرك الملكي",

    // Club Pro
    "clubpro.title": "Club Pro",
    "clubpro.subtitle": "وصول حصري للمشاريع ع��لية القيمة",
    "clubpro.price": "500 درهم/سنة",
    "clubpro.projects_range": "مشاريع من 5,000 - 50,000 درهم",
    "clubpro.exclusive_projects": "مشاريع حصرية",
    "clubpro.reduced_commission": "عمولة مخفضة",
    "clubpro.priority_search": "أولوية في البحث",
    "clubpro.dedicated_support": "��عم مخصص",
    "clubpro.requirements": "متطلبات العضوية",
    "clubpro.documents_required": "الوثائق المطلوبة",
    "clubpro.join_button": "انضم إلى Club Pro",

    // How it works
    "how_it_works.title": "كيف يعمل",
    "how_it_works.step1_title": "صف احتياجك",
    "how_it_works.step1_desc": "انشر مشروعك في بضع نقرات",
    "how_it_works.step2_title": "تلقى عروضاً",
    "how_it_works.step2_desc": "مقدمو الخدمات المؤهلون يتواصلون معك",
    "how_it_works.step3_title": "اختر واحجز",
    "how_it_works.step3_desc": "اختر أفضل مقدم خدمة",
    "how_it_works.step4_title": "دفع آمن",
    "how_it_works.step4_desc": "أموالك محمية حتى التحقق",

    // Become Provider
    "become_provider.title": "كن مقدم خدم��",
    "become_provider.subtitle": "طور نشاطك التجاري مع خدمات",
    "become_provider.benefits": "المزايا",
    "become_provider.benefit1": "الوصول لعملاء جدد",
    "become_provider.benefit2": "مدفوعات آمنة مضمونة",
    "become_provider.benefit3": "أدوات إدارة مدمجة",
    "become_provider.benefit4": "دعم عملاء مخصص",
    "become_provider.requirements": "المتطلبات",
    "become_provider.requirement1": "التحقق من الهوية",
    "become_provider.requirement2": "وثائق مهنية",
    "become_provider.requirement3": "تقييم المهارات",
    "become_provider.start_button": "ابدأ التسجيل",

    // Footer
    "footer.about": "حولنا",
    "footer.terms": "الشروط والأحكام",
    "footer.privacy": "الخصوصية",
    "footer.faq": "الأسئلة الشائعة",
    "footer.support": "الدعم",
    "footer.careers": "الوظائف",
    "footer.press": "الصحافة",
    "footer.partners": "الشركاء",
    "footer.company": "الشركة",
    "footer.support_legal": "الدعم والقانون",
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
