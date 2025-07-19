import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Handshake,
  Building2,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  Mail,
  Phone,
  Globe,
  Award,
} from "lucide-react";

export default function Partners() {
  const { language } = useLanguage();

  const partnerCategories = [
    {
      title: language === "ar" ? "البنوك والتمويل" : "Banques et Finance",
      description:
        language === "ar"
          ? "شراكات مع البنوك المغربية لتسهيل المدفوعات"
          : "Partenariats avec les banques marocaines pour faciliter les paiements",
      icon: Building2,
      partners: [
        "Attijariwafa Bank",
        "BMCE Bank",
        "Banque Populaire",
        "CIH Bank",
      ],
    },
    {
      title: language === "ar" ? "شركات التأمين" : "Compagnies d'assurance",
      description:
        language === "ar"
          ? "تأمين شامل للخدمات والمسؤولية المدنية"
          : "Assurance complète pour les services et responsabilité civile",
      icon: Award,
      partners: ["Wafa Assurance", "Atlanta", "AXA Maroc", "MAMDA"],
    },
    {
      title:
        language === "ar" ? "شركات التكنولوجيا" : "Entreprises technologiques",
      description:
        language === "ar"
          ? "شراكات تقنية لتطوير المنصة"
          : "Partenariats technologiques pour le développement de la plateforme",
      icon: Globe,
      partners: ["Microsoft Azure", "AWS", "Google Cloud", "Twilio"],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: language === "ar" ? "نمو الأعمال" : "Croissance des affaires",
      description:
        language === "ar"
          ? "وصول إلى قاعدة عملاء واسعة ونشطة"
          : "Accès à une large base de clients actifs",
    },
    {
      icon: Users,
      title: language === "ar" ? "شبكة واسعة" : "Réseau étendu",
      description:
        language === "ar"
          ? "الاستفادة من شبكتنا الواسعة من المقدمين"
          : "Bénéficiez de notre vaste réseau de prestataires",
    },
    {
      icon: CheckCircle,
      title: language === "ar" ? "ضمان الجودة" : "Garantie qualité",
      description:
        language === "ar"
          ? "نظام تقييم وضمان جودة متقدم"
          : "Système d'évaluation et de garantie qualité avancé",
    },
    {
      icon: Star,
      title: language === "ar" ? "علامة تجارية قوية" : "Marque forte",
      description:
        language === "ar"
          ? "ارتباط بعلامة تجارية رائدة في السوق"
          : "Association avec une marque leader sur le marché",
    },
  ];

  const partnershipTypes = [
    {
      title: language === "ar" ? "شراكة تجارية" : "Partenariat commercial",
      description:
        language === "ar"
          ? "تعاون في الخدمات والعروض التجارية"
          : "Collaboration sur les services et offres commerciales",
      features: [
        language === "ar" ? "عمولات مجزية" : "Commissions attractives",
        language === "ar" ? "دعم تسويقي" : "Support marketing",
        language === "ar" ? "تدريب الفرق" : "Formation des équipes",
      ],
    },
    {
      title: language === "ar" ? "شراكة تقنية" : "Partenariat technologique",
      description:
        language === "ar"
          ? "تكامل تقني وتطوير حلول مشتركة"
          : "Intégration technique et développement de solutions communes",
      features: [
        "API " + (language === "ar" ? "متقدمة" : "avancées"),
        language === "ar" ? "دعم تقني" : "Support technique",
        language === "ar" ? "تطوير مشترك" : "Développement conjoint",
      ],
    },
    {
      title: language === "ar" ? "شراكة استراتيجية" : "Partenariat stratégique",
      description:
        language === "ar"
          ? "تعاون طويل المدى وتطوير السوق"
          : "Collaboration à long terme et développement du marché",
      features: [
        language === "ar" ? "استراتيجية مشتركة" : "Stratégie commune",
        language === "ar" ? "استثمارات مشتركة" : "Investissements conjoints",
        language === "ar" ? "تطوير المنتج" : "Développement produit",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Handshake className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {language === "ar" ? "شركاؤنا" : "Nos partenaires"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "ar"
              ? "نتعاون مع أفضل الشركات في المغرب لتقديم خدمات استثنائية"
              : "Nous collaborons avec les meilleures entreprises du Maroc pour offrir des services exceptionnels"}
          </p>
        </div>

        {/* Partner Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            {language === "ar" ? "فئات الشراكة" : "Catégories de partenaires"}
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <category.icon className="h-6 w-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 bg-muted rounded"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{partner}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            {language === "ar"
              ? "فوائد الشراكة معنا"
              : "Avantages du partenariat"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <benefit.icon className="h-8 w-8 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            {language === "ar" ? "أنواع الشراكة" : "Types de partenariat"}
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">
                {language === "ar" ? "شريك نشط" : "Partenaires actifs"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <p className="text-muted-foreground">
                {language === "ar" ? "خدمة مكتملة" : "Services complétés"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">
                {language === "ar" ? "رضا الشركاء" : "Satisfaction partenaires"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">
                {language === "ar" ? "دعم متواصل" : "Support continu"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How to Become Partner */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center">
              {language === "ar"
                ? "كيف تصبح شريكاً؟"
                : "Comment devenir partenaire ?"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "تواصل معنا" : "Contactez-nous"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "أرسل طلب شراكة"
                    : "Envoyez une demande de partenariat"}
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "المراجعة" : "Évaluation"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "نراجع ملفك وأهدافك"
                    : "Nous évaluons votre profil et objectifs"}
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "المفاوضات" : "Négociations"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "نناقش شروط الشراكة"
                    : "Nous discutons des termes du partenariat"}
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "بداية الشراكة" : "Lancement"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "نبدأ العمل المشترك"
                    : "Nous lançons notre collaboration"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card>
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">
              {language === "ar"
                ? "مهتم بالشراكة معنا؟"
                : "Intéressé par un partenariat ?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === "ar"
                ? "تواصل مع فريق الشراكات لمناقشة الفرص المتاحة"
                : "Contactez notre équipe partenariats pour discuter des opportunités"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                partnerships@khadamat.ma
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                +212 5XX-XXX-XXX
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
