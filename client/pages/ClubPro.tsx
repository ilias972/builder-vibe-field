import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  Crown,
  Star,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Users,
  Building,
  CheckCircle,
  Zap,
  Calendar,
  Phone,
  CreditCard,
  Gift,
  Target,
  Briefcase,
  BarChart3,
  MessageSquare,
} from "lucide-react";

export default function ClubPro() {
  const { language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const [paymentMethod, setPaymentMethod] = useState("");
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
      description: "50 missions",
    },
    {
      titleAr: "تقييم 4.2/5 أو أعلى",
      titleFr: "Note de 4.2/5 minimum",
      description: "4.2/5",
    },
    {
      titleAr: "وثائق مهنية كاملة",
      titleFr: "Documents professionnels complets",
      description: "Documents",
    },
    {
      titleAr: "تأمين مهني ساري",
      titleFr: "Assurance professionnelle valide",
      description: "Assurance",
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
      alert(
        language === "ar"
          ? "يرجى قبول الشروط والأحكام"
          : "Veuillez accepter les conditions",
      );
      return;
    }

    // Here you would handle the payment processing
    console.log("Club Pro subscription:", { selectedPlan, formData });
    alert(
      language === "ar"
        ? "تم تأكيد اشتراكك في Club Pro! مرحباً بك في النادي المهني."
        : "Votre abonnement Club Pro est confirmé ! Bienvenue dans le club professionnel.",
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
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
            {language === "ar"
              ? "انضم إلى نخبة مقدمي الخدمات واحصل على مشاريع عالية القيمة وطويلة المدى"
              : "Rejoignez l'élite des prestataires et accédez à des projets haute valeur et long terme"}
          </p>
          <Badge className="mt-4 text-lg px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500">
            <Award className="mr-2 h-5 w-5" />
            {language === "ar" ? "عضوية حصر����" : "Membership Exclusif"}
          </Badge>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-orange-200 hover:shadow-lg transition-all"
            >
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
                  {language === "ar"
                    ? benefit.descriptionAr
                    : benefit.descriptionFr}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Requirements Section */}
        <Card className="mb-12 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <CheckCircle className="mr-2 h-6 w-6 text-green-600" />
              {language === "ar"
                ? "شروط الانضمام للـ Club Pro"
                : "Conditions d'adhésion au Club Pro"}
            </CardTitle>
            <CardDescription>
              {language === "ar"
                ? "يجب تحقيق جميع الشروط التالية للانضمام"
                : "Vous devez remplir toutes les conditions suivantes"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200"
                >
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

        {/* Project Examples */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2 h-6 w-6" />
              {language === "ar"
                ? "أمثلة على المشاريع المتاحة"
                : "Exemples de projets disponibles"}
            </CardTitle>
            <CardDescription>
              {language === "ar"
                ? "نماذج من المشاريع التي يمكن لأعضاء Club Pro الوصول إليها"
                : "Échantillons de projets accessibles aux membres Club Pro"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {projectExamples.map((project, index) => (
                <Card key={index} className="border-orange-100">
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-3">
                      {project.category}
                    </Badge>
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

        {/* Pricing Section */}
        <Card className="mb-12 border-2 border-gradient-to-r from-yellow-300 to-orange-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {language === "ar" ? "خطة الاشتراك" : "Plan d'abonnement"}
            </CardTitle>
            <CardDescription>
              {language === "ar"
                ? "استثمار بسيط لعوائد كبيرة"
                : "Un petit investissement pour de gros retours"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  50 DH/mois
                </div>
                <div className="text-muted-foreground">
                  {language === "ar" ? "التزام سنة واحدة" : "Engagement 1 an"}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {language === "ar" ? "600 درهم مجموع السنة" : "600 DH au total pour l'année"}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">
                    {language === "ar" ? "رقم البطاقة" : "Numéro de carte"}
                  </Label>
                  <Input
                    id="cardNumber"
                    placeholder="**** **** **** ****"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        cardNumber: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">
                      {language === "ar"
                        ? "تاريخ الانتهاء"
                        : "Date d'expiration"}
                    </Label>
                    <Input
                      id="expiry"
                      placeholder="MM/AA"
                      value={formData.expiryDate}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          expiryDate: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="***"
                      value={formData.cvv}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          cvv: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="holderName">
                    {language === "ar"
                      ? "اسم حامل البطاقة"
                      : "Nom du titulaire"}
                  </Label>
                  <Input
                    id="holderName"
                    value={formData.holderName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        holderName: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        acceptTerms: checked as boolean,
                      }))
                    }
                  />
                  <Label htmlFor="terms" className="text-sm">
                    {language === "ar" ? (
                      <>
                        أوافق على{" "}
                        <Link
                          to="/terms"
                          className="text-primary hover:underline"
                        >
                          شروط Club Pro
                        </Link>
                      </>
                    ) : (
                      <>
                        J'accepte les{" "}
                        <Link
                          to="/terms"
                          className="text-primary hover:underline"
                        >
                          conditions du Club Pro
                        </Link>
                      </>
                    )}
                  </Label>
                </div>

                <Button
                  onClick={handleSubscribe}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                  size="lg"
                >
                  <Crown className="mr-2 h-5 w-5" />
                  {language === "ar"
                    ? "انضم للـ Club Pro"
                    : "Rejoindre le Club Pro"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ROI Calculation */}
        <Card className="mb-12 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <TrendingUp className="mr-2 h-6 w-6" />
              {language === "ar"
                ? "عائد الاستثمار المتوقع"
                : "Retour sur investissement"}
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
                <div className="text-2xl font-bold text-green-600">
                  15,000 DH
                </div>
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
                {language === "ar"
                  ? "مشروع واحد فقط يكفي لتغطية تكلفة العضوية بـ 50 مرة!"
                  : "Un seul projet suffit pour rentabiliser 50 fois votre adhésion !"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>
              {language === "ar"
                ? "الأسئلة الشائعة"
                : "Questions fréquemment posées"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">
                  {language === "ar"
                    ? "كم مشروع يمكنني أن أحصل عليه؟"
                    : "Combien de projets puis-je obtenir ?"}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {language === "ar"
                    ? "لا يوجد حد أقصى. كلما كانت خدماتك أفضل، كلما حصلت على مشاريع أكثر."
                    : "Aucune limite. Plus vos services sont de qualité, plus vous obtiendrez de projets."}
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  {language === "ar"
                    ? "هل يمكنني إلغاء الاشتراك؟"
                    : "Puis-je annuler mon abonnement ?"}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {language === "ar"
                    ? "نعم، يمكنك إلغاء الاشتراك في أي وقت. العضوية صالحة حتى نهاية السنة المدفوعة."
                    : "Oui, vous pouvez annuler à tout moment. L'adhésion reste valide jusqu'à la fin de l'année payée."}
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  {language === "ar"
                    ? "ماذا لو لم أحصل على مشاريع؟"
                    : "Et si je n'obtiens pas de projets ?"}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {language === "ar"
                    ? "نضمن لك الحصول على مشروع واحد على الأقل في ال��هرين الأولين، أو استرداد كامل."
                    : "Nous vous garantissons au moins un projet dans les 2 premiers mois, sinon remboursement intégral."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
