import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Lightbulb,
  Target,
  Mail,
} from "lucide-react";

export default function Careers() {
  const { language } = useLanguage();

  const jobs = [
    {
      id: 1,
      title:
        language === "ar"
          ? "مطور تطبيقات محمولة"
          : "Développeur d'applications mobiles",
      department: language === "ar" ? "التقنية" : "Technique",
      location: "Casablanca",
      type: language === "ar" ? "دوام كامل" : "Temps plein",
      description:
        language === "ar"
          ? "نبحث عن مطور تطبيقات محم��لة ماهر لتطوير تطبيقنا المحمول"
          : "Nous recherchons un développeur mobile expérimenté pour développer notre application mobile",
      requirements: [
        "React Native / Flutter",
        "3+ " + (language === "ar" ? "سنوات خبرة" : "années d'expérience"),
        "TypeScript/JavaScript",
      ],
    },
    {
      id: 2,
      title: language === "ar" ? "مصمم UX/UI" : "Designer UX/UI",
      department: language === "ar" ? "التصميم" : "Design",
      location: "Rabat",
      type: language === "ar" ? "دوام كامل" : "Temps plein",
      description:
        language === "ar"
          ? "انضم إلى فريقنا لتصميم تجارب مستخدم استثنائية"
          : "Rejoignez notre équipe pour concevoir des expériences utilisateur exceptionnelles",
      requirements: [
        "Figma, Adobe XD",
        "2+ " + (language === "ar" ? "سنوات خبرة" : "années d'expérience"),
        language === "ar" ? "تصميم متجاوب" : "Design responsive",
      ],
    },
    {
      id: 3,
      title:
        language === "ar" ? "مسؤول خدمة العملاء" : "Responsable Service Client",
      department: language === "ar" ? "خدمة العملاء" : "Service Client",
      location: "Marrakech",
      type: language === "ar" ? "دوام كامل" : "Temps plein",
      description:
        language === "ar"
          ? "ساعد في تقديم خدمة عملاء استثنائية لمستخدمينا"
          : "Aidez à fournir un service client exceptionnel à nos utilisateurs",
      requirements: [
        language === "ar" ? "ثنائي اللغة" : "Bilingue FR/AR",
        language === "ar"
          ? "مهارات تواصل ممتازة"
          : "Excellentes compétences de communication",
        language === "ar"
          ? "خبرة في خدمة العملاء"
          : "Expérience en service client",
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: language === "ar" ? "تأمين صحي" : "Assurance santé",
      description:
        language === "ar"
          ? "تغطية صحية شاملة لك ولعائلتك"
          : "Couverture santé complète pour vous et votre famille",
    },
    {
      icon: Lightbulb,
      title:
        language === "ar" ? "التطوير المهني" : "Développement professionnel",
      description:
        language === "ar"
          ? "فرص التدريب والنمو المستمر"
          : "Opportunités de formation et de croissance continue",
    },
    {
      icon: Users,
      title: language === "ar" ? "فريق متنوع" : "Équipe diverse",
      description:
        language === "ar"
          ? "بيئة عمل شاملة ومتنوعة"
          : "Environnement de travail inclusif et diversifié",
    },
    {
      icon: Target,
      title: language === "ar" ? "مكافآت تنافسية" : "Rémunération compétitive",
      description:
        language === "ar"
          ? "راتب تنافسي مع حوافز الأداء"
          : "Salaire compétitif avec primes de performance",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {language === "ar"
              ? "انضم إلى فريق خدمات"
              : "Rejoignez l'équipe Khadamat"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "ar"
              ? "ساعدنا في بناء مستقبل الخدمات في المغرب وكن جزءاً من رحلة مثيرة"
              : "Aidez-nous à construire l'avenir des services au Maroc et faites partie d'un voyage passionnant"}
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            {language === "ar" ? "لماذا خدمات؟" : "Pourquoi Khadamat ?"}
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

        {/* Open Positions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            {language === "ar" ? "الوظائف المتاحة" : "Postes ouverts"}
          </h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <Button>
                      {language === "ar" ? "تقدم الآن" : "Postuler"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">
                      {language === "ar" ? "المتطلبات:" : "Exigences :"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center">
              {language === "ar" ? "عملية التقديم" : "Processus de candidature"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">
                  {language === "ar"
                    ? "قدم طلبك"
                    : "Soumettez votre candidature"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "أرسل سيرتك الذاتية وخطاب التغطية"
                    : "Envoyez votre CV et lettre de motivation"}
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "المقابلة" : "Entretien"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "مقابلة مع فريقنا لمناقشة خبراتك"
                    : "Entretien avec notre équipe pour discuter de votre expérience"}
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "انضم إلى الفريق" : "Rejoignez l'équipe"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "ابدأ رحلتك معنا"
                    : "Commencez votre parcours avec nous"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {language === "ar"
                ? "لم تجد الوظيفة المناسبة؟"
                : "Vous ne trouvez pas le bon poste ?"}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              {language === "ar"
                ? "أرسل لنا سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة"
                : "Envoyez-nous votre CV et nous vous contacterons lorsqu'une opportunité appropriée se présente"}
            </p>
            <Button size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              {language === "ar" ? "أرسل سيرتك الذاتية" : "Envoyer votre CV"}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              careers@khadamat.ma
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
