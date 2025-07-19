import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Newspaper,
  Download,
  Image,
  FileText,
  Calendar,
  ExternalLink,
  Mail,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

export default function Press() {
  const { language } = useLanguage();

  const pressReleases = [
    {
      id: 1,
      date: "2024-01-15",
      title:
        language === "ar"
          ? "خدمات تحصل على تمويل بقيمة 5 مليون درهم"
          : "Khadamat lève 5 millions de dirhams en financement",
      summary:
        language === "ar"
          ? "جولة تمويل للتوسع في أسواق جديدة وتطوير التكنولوجيا"
          : "Tour de financement pour l'expansion vers de nouveaux marchés et le développement technologique",
      category: language === "ar" ? "تمويل" : "Financement",
    },
    {
      id: 2,
      date: "2023-12-10",
      title:
        language === "ar"
          ? "خدمات تصل إلى 100,000 مستخدم نشط"
          : "Khadamat atteint 100,000 utilisateurs actifs",
      summary:
        language === "ar"
          ? "نمو استثنائي في قاعدة المستخدمين خلال العام الماضي"
          : "Croissance exceptionnelle de la base d'utilisateurs au cours de l'année écoulée",
      category: language === "ar" ? "إنجازات" : "Réalisations",
    },
    {
      id: 3,
      date: "2023-11-20",
      title:
        language === "ar"
          ? "إطلاق خدمة Club Pro للمشاريع الكبيرة"
          : "Lancement du service Club Pro pour les grands projets",
      summary:
        language === "ar"
          ? "خدمة جديدة مخصصة للمشاريع عالية القيمة والعملاء المتميزين"
          : "Nouveau service dédié aux projets de haute valeur et aux clients premium",
      category: language === "ar" ? "منتج جديد" : "Nouveau produit",
    },
  ];

  const mediaKit = [
    {
      type: "logo",
      title: language === "ar" ? "شعار الشركة" : "Logo de l'entreprise",
      description:
        language === "ar"
          ? "شعار خدمات بصيغ مختلفة"
          : "Logo Khadamat en différents formats",
      files: ["PNG", "SVG", "EPS"],
    },
    {
      type: "photos",
      title: language === "ar" ? "صور الشركة" : "Photos de l'entreprise",
      description:
        language === "ar"
          ? "صور عالية الجودة للفريق والمكاتب"
          : "Photos haute résolution de l'équipe et des bureaux",
      files: ["JPG", "PNG"],
    },
    {
      type: "documents",
      title:
        language === "ar" ? "معلومات الشركة" : "Informations sur l'entreprise",
      description:
        language === "ar"
          ? "نبذة تفصيلية وإحصائيات الشركة"
          : "Présentation détaillée et statistiques de l'entreprise",
      files: ["PDF", "DOCX"],
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: language === "ar" ? "مستخدم نشط" : "Utilisateurs actifs",
    },
    {
      icon: TrendingUp,
      value: "50K+",
      label: language === "ar" ? "خدمة مكتملة" : "Services complétés",
    },
    {
      icon: Award,
      value: "4.8/5",
      label: language === "ar" ? "تقييم المستخدمين" : "Note utilisateurs",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {language === "ar" ? "غرفة الصحافة" : "Espace presse"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "ar"
              ? "آخر الأخبار والمواد الإعلامية حول خدمات"
              : "Dernières actualités et ressources médias sur Khadamat"}
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto text-primary mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Press Releases */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">
            {language === "ar" ? "البيانات الصحفية" : "Communiqués de presse"}
          </h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(release.date).toLocaleDateString(
                            language === "ar" ? "ar-MA" : "fr-FR",
                          )}
                        </Badge>
                        <Badge variant="secondary">{release.category}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {release.title}
                      </CardTitle>
                      <p className="text-muted-foreground">{release.summary}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {language === "ar" ? "قراءة" : "Lire"}
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">
            {language === "ar" ? "حقيبة إعلامية" : "Kit média"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {item.type === "logo" && <Image className="h-5 w-5" />}
                    {item.type === "photos" && <Image className="h-5 w-5" />}
                    {item.type === "documents" && (
                      <FileText className="h-5 w-5" />
                    )}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.files.map((file) => (
                      <Badge key={file} variant="outline">
                        {file}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    {language === "ar" ? "تحميل" : "Télécharger"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "حول خدمات" : "À propos de Khadamat"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {language === "ar"
                  ? "خدمات هي منصة رائدة في المغرب تربط بين العملاء ومقدمي الخدمات المحليين. تأسست في عام 2023، وتهدف إلى تسهيل الحصول على الخدمات المنزلية والمهنية بطريقة آمنة وموثوقة."
                  : "Khadamat est une plateforme leader au Maroc qui connecte les clients aux prestataires de services locaux. Fondée en 2023, elle vise à faciliter l'accès aux services domestiques et professionnels de manière sécurisée et fiable."}
              </p>
              <p className="text-muted-foreground">
                {language === "ar"
                  ? "نحن نقدم نظام دفع آمن، التحقق من الهوية، ونظام مراسلة متطور لضمان أفضل تجربة للمستخدمين."
                  : "Nous offrons un système de paiement sécurisé, la vérification d'identité, et un système de messagerie avancé pour garantir la meilleure expérience utilisateur."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "معلومات الاتصال" : "Contact presse"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    {language === "ar"
                      ? "مدير العلاقات العامة"
                      : "Responsable Relations Presse"}
                  </p>
                  <p className="text-muted-foreground">
                    {language === "ar" ? "أحمد بن علي" : "Ahmed Ben Ali"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>press@khadamat.ma</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? "للاستفسارات الإعلامية ومقابلات المدراء التنفيذيين"
                      : "Pour les demandes médias et interviews avec les dirigeants"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card>
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">
              {language === "ar"
                ? "تحتاج لمزيد من المعلومات؟"
                : "Besoin de plus d'informations ?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === "ar"
                ? "فريقنا الإعلامي متاح للإجابة على أسئلتكم وتنظيم المقابلات"
                : "Notre équipe média est disponible pour répondre à vos questions et organiser des interviews"}
            </p>
            <Button size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              {language === "ar" ? "تواصل معنا" : "Nous contacter"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
