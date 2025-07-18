import { useLanguage } from "@/contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  Star,
  MapPin,
  Award,
  Clock,
  Heart,
  CheckCircle,
  TrendingUp,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export default function About() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      labelAr: "مقدم خدمة",
      labelFr: "Prestataires",
    },
    {
      icon: CheckCircle,
      value: "50,000+",
      labelAr: "مهمة مكتملة",
      labelFr: "Missions réalisées",
    },
    {
      icon: Star,
      value: "4.8/5",
      labelAr: "تقييم العملاء",
      labelFr: "Satisfaction client",
    },
    {
      icon: MapPin,
      value: "60+",
      labelAr: "مدينة",
      labelFr: "Villes",
    },
  ];

  const values = [
    {
      icon: Shield,
      titleAr: "الأمان والثقة",
      titleFr: "Sécurité et confiance",
      descriptionAr: "نضمن أمان جميع المعاملات ونتحقق من هوية كل مقدم خدمة",
      descriptionFr:
        "Nous garantissons la sécurité de toutes les transactions et vérifions l'identité de chaque prestataire",
    },
    {
      icon: Heart,
      titleAr: "خدمة متميزة",
      titleFr: "Service d'excellence",
      descriptionAr: "نسعى لتقديم أفضل تجربة ممكنة لعملائنا ومقدمي الخدمات",
      descriptionFr:
        "Nous nous efforçons d'offrir la meilleure expérience possible à nos clients et prestataires",
    },
    {
      icon: TrendingUp,
      titleAr: "النمو والتطوير",
      titleFr: "Croissance et développement",
      descriptionAr: "نساعد مقدمي الخدمات على تنمية أعمالهم وزيادة دخلهم",
      descriptionFr:
        "Nous aidons les prestataires à développer leur activité et augmenter leurs revenus",
    },
    {
      icon: Clock,
      titleAr: "السرعة والكفاءة",
      titleFr: "Rapidité et efficacité",
      descriptionAr: "نوفر خدمات سريعة ومتاحة 24/7 لجميع احتياجاتكم",
      descriptionFr:
        "Nous fournissons des services rapides et disponibles 24/7 pour tous vos besoins",
    },
  ];

  const team = [
    {
      name: "Omar Alami",
      position: language === "ar" ? "الرئيس التنفيذي" : "CEO & Fondateur",
      image: "/placeholder.svg",
      description:
        language === "ar"
          ? "خبرة 15 سنة في التكنولوجيا والأعمال"
          : "15 ans d'expérience en technologie et business",
    },
    {
      name: "Aicha Benali",
      position: language === "ar" ? "مديرة التكنولوجيا" : "CTO",
      image: "/placeholder.svg",
      description:
        language === "ar"
          ? "خبيرة في التطوير والأمن الرقمي"
          : "Experte en développement et sécurité numérique",
    },
    {
      name: "Youssef Tazi",
      position: language === "ar" ? "مدير العمليات" : "COO",
      image: "/placeholder.svg",
      description:
        language === "ar"
          ? "متخصص في إد��رة العمليات والجودة"
          : "Spécialiste en gestion des opérations et qualité",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {language === "ar" ? "حول Khadamat" : "À propos de Khadamat"}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {language === "ar"
                ? "نحن الرائدون في تقديم منصة موثوقة لربط العملاء بأفضل مقدمي الخدمات في المغرب"
                : "Nous sommes le leader dans la fourniture d'une plateforme fiable reliant les clients aux meilleurs prestataires au Maroc"}
            </p>
            <Badge className="text-lg px-6 py-2">
              {language === "ar"
                ? "موثوق منذ 2020"
                : "De confiance depuis 2020"}
            </Badge>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {language === "ar" ? stat.labelAr : stat.labelFr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              {language === "ar" ? "مهمتنا" : "Notre mission"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "ar"
                ? "مهمتنا هي تبسيط الحياة اليومية للمغاربة من خلال توفير منصة رقمية آمنة وموثوقة تربط بين الأشخاص الذين يحتاجون لخدمات منزلية ومهنية مع أفضل مقدمي الخدمات المؤهلين والمتخصصين. نسعى لبناء مجتمع من الثقة والجودة حيث يمكن لكل مغربي الحصول على الخدمة المناسبة في الوقت المناسب وبالسعر العادل."
                : "Notre mission est de simplifier la vie quotidienne des Marocains en fournissant une plateforme numérique sécurisée et fiable qui connecte les personnes ayant besoin de services domestiques et professionnels avec les meilleurs prestataires qualifiés et spécialisés. Nous nous efforçons de construire une communauté de confiance et de qualité où chaque Marocain peut obtenir le service approprié au bon moment et au prix juste."}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === "ar" ? "قيمنا" : "Nos valeurs"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">
                    {language === "ar" ? value.titleAr : value.titleFr}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? value.descriptionAr
                      : value.descriptionFr}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {language === "ar" ? "فريقنا" : "Notre équipe"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "ar"
                ? "فريق من الخبراء المتفانين لجعل Khadamat أفضل منصة خدمات في المغرب"
                : "Une équipe d'experts dévoués pour faire de Khadamat la meilleure plateforme de services au Maroc"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === "ar" ? "قصتنا" : "Notre histoire"}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {language === "ar" ? "البداية" : "Les débuts"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === "ar"
                    ? "بدأت فكرة Khadamat في عام 2020 عندما واجه مؤسسونا صعوبة في العثور على مقدمي خدمات موثوقين في المغرب. أدركنا أن هناك حاجة ماسة لمنصة تجمع بين العملاء ومقدمي الخدمات المؤهلين."
                    : "L'idée de Khadamat a germé en 2020 lorsque nos fondateurs ont eu du mal à trouver des prestataires de services fiables au Maroc. Nous avons réalisé qu'il y avait un besoin urgent d'une plateforme reliant clients et prestataires qualifiés."}
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  {language === "ar"
                    ? "النمو والتطور"
                    : "Croissance et évolution"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "ar"
                    ? "منذ إطلاق المنصة، نمونا بسرعة لنصبح الخيار الأول للعائلات المغربية. اليوم، نفتخر بشبكة تضم أكثر من 10,000 مقدم خدمة متحقق منهم عبر 60 مدينة مغربية."
                    : "Depuis le lancement de la plateforme, nous avons rapidement grandi pour devenir le premier choix des familles marocaines. Aujourd'hui, nous sommes fiers d'un réseau de plus de 10 000 prestataires vérifiés dans 60 villes marocaines."}
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    2020
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {language === "ar" ? "سنة التأسيس" : "Année de création"}
                  </p>
                  <div className="text-4xl font-bold text-primary mb-2">
                    100K+
                  </div>
                  <p className="text-muted-foreground">
                    {language === "ar" ? "عميل راض" : "Clients satisfaits"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                {language === "ar"
                  ? "هل لديك أسئلة؟ نحن هنا للمساعدة"
                  : "Des questions ? Nous sommes là pour vous aider"}
              </h3>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                {language === "ar"
                  ? "فريق دعم العملاء متاح 24/7 للإجابة على جميع استفساراتكم ومساعدتكم في استخدام المنصة"
                  : "Notre équipe de support client est disponible 24/7 pour répondre à toutes vos questions et vous aider à utiliser la plateforme"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Phone className="mr-2 h-5 w-5" />
                  {language === "ar" ? "اتصل بنا" : "Nous appeler"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {language === "ar" ? "راسلنا" : "Nous écrire"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
