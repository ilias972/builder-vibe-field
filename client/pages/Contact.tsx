import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Shield,
  HelpCircle,
  Users,
  Star,
} from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert(
      language === "ar"
        ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً."
        : "Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.",
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      type: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      titleAr: "اتصل بنا",
      titleFr: "Appelez-nous",
      valueAr: "+212 5 22 XX XX XX",
      valueFr: "+212 5 22 XX XX XX",
      descriptionAr: "متاح من الاثنين إلى الجمعة، 9ص-6م",
      descriptionFr: "Disponible du lundi au vendredi, 9h-18h",
    },
    {
      icon: Mail,
      titleAr: "راسلنا",
      titleFr: "Écrivez-nous",
      valueAr: "contact@khadamat.ma",
      valueFr: "contact@khadamat.ma",
      descriptionAr: "نرد خلال 24 ساعة",
      descriptionFr: "Réponse sous 24h",
    },
    {
      icon: MessageSquare,
      titleAr: "دردشة مباشرة",
      titleFr: "Chat en direct",
      valueAr: "متاح 24/7",
      valueFr: "Disponible 24/7",
      descriptionAr: "للمساعدة الفورية",
      descriptionFr: "Pour une aide immédiate",
    },
  ];

  const faqItems = [
    {
      questionAr: "كيف يمكنني العثور على مقدم خدمة موثوق؟",
      questionFr: "Comment puis-je trouver un prestataire fiable ?",
      answerAr:
        "جميع مقدمي الخدمات على منصتنا تم التحقق من هويتهم ومؤهلاتهم. يمكنك أيضاً مراجعة التقييمات والمراجعات.",
      answerFr:
        "Tous les prestataires sur notre plateforme sont vérifiés en termes d'identité et de qualifications. Vous pouvez également consulter les notes et avis.",
    },
    {
      questionAr: "هل الدفع آمن على المنصة؟",
      questionFr: "Le paiement est-il sécurisé sur la plateforme ?",
      answerAr:
        "نعم، نستخدم نظام دفع مؤمن مع حفظ الأموال حتى اكتمال الخدمة بنجاح.",
      answerFr:
        "Oui, nous utilisons un système de paiement sécurisé avec conservation des fonds jusqu'à la réalisation réussie du service.",
    },
    {
      questionAr: "ماذا لو لم أكن راضياً عن الخدمة؟",
      questionFr: "Que faire si je ne suis pas satisfait du service ?",
      answerAr:
        "يمكنك تقديم شكوى عبر المنصة وسنتدخل لحل المشكلة أو استرداد الأموال حسب الحالة.",
      answerFr:
        "Vous pouvez déposer une plainte via la plateforme et nous interviendrons pour résoudre le problème ou rembourser selon le cas.",
    },
  ];

  const offices = [
    {
      city: "Casablanca",
      address: "Boulevard Mohammed V, Casablanca 20000",
      phone: "+212 5 22 XX XX XX",
      hours: "Lun-Ven: 9h-18h",
    },
    {
      city: "Rabat",
      address: "Avenue Mohammed VI, Rabat 10000",
      phone: "+212 5 37 XX XX XX",
      hours: "Lun-Ven: 9h-18h",
    },
    {
      city: "Marrakech",
      address: "Avenue Mohammed V, Marrakech 40000",
      phone: "+212 5 24 XX XX XX",
      hours: "Lun-Ven: 9h-18h",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {language === "ar" ? "اتصل بنا" : "Contactez-nous"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "ar"
              ? "نحن هنا للمساعدة! تواصل معنا لأي استفسار أو مساعدة تحتاجها"
              : "Nous sommes là pour vous aider ! Contactez-nous pour toute question ou aide dont vous avez besoin"}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? method.titleAr : method.titleFr}
                </h3>
                <p className="font-medium text-primary mb-1">
                  {language === "ar" ? method.valueAr : method.valueFr}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? method.descriptionAr
                    : method.descriptionFr}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="mr-2 h-5 w-5" />
                {language === "ar" ? "أرسل رسالة" : "Envoyer un message"}
              </CardTitle>
              <CardDescription>
                {language === "ar"
                  ? "املأ النموذج أدناه وسنتواصل معك في أقرب وقت"
                  : "Remplissez le formulaire ci-dessous et nous vous contacterons rapidement"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">
                      {language === "ar" ? "الاسم الكامل" : "Nom complet"} *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">
                      {language === "ar" ? "رقم الهاتف" : "Téléphone"}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+212 6XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">
                    {language === "ar" ? "البريد الإلكتروني" : "E-mail"} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label>
                    {language === "ar" ? "نوع الاستفسار" : "Type de demande"}
                  </Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => handleChange("type", value)}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          language === "ar"
                            ? "اختر نوع الاستفسار"
                            : "Choisir le type"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">
                        {language === "ar"
                          ? "استفسار عام"
                          : "Question générale"}
                      </SelectItem>
                      <SelectItem value="technical">
                        {language === "ar"
                          ? "مشكلة تقنية"
                          : "Problème technique"}
                      </SelectItem>
                      <SelectItem value="payment">
                        {language === "ar"
                          ? "الدفع والفواتير"
                          : "Paiement et facturation"}
                      </SelectItem>
                      <SelectItem value="provider">
                        {language === "ar" ? "مقدم خدمة" : "Prestataire"}
                      </SelectItem>
                      <SelectItem value="partnership">
                        {language === "ar" ? "شراكة" : "Partenariat"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject">
                    {language === "ar" ? "الموضوع" : "Sujet"} *
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">
                    {language === "ar" ? "الرسالة" : "Message"} *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder={
                      language === "ar"
                        ? "اكتب رسالتك هنا..."
                        : "Écrivez votre message ici..."
                    }
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {language === "ar" ? "إرسال الرسالة" : "Envoyer le message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ & Offices */}
          <div className="space-y-6">
            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  {language === "ar"
                    ? "الأسئلة الشائعة"
                    : "Questions fréquentes"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-medium mb-2">
                      {language === "ar" ? item.questionAr : item.questionFr}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === "ar" ? item.answerAr : item.answerFr}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Offices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  {language === "ar" ? "مكاتبنا" : "Nos bureaux"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-medium mb-1">{office.city}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {office.address}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {office.phone}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {office.hours}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar" ? "دعم سريع" : "Support rapide"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "نرد على استفساراتك في أقل من ساعة"
                  : "Nous répondons à vos questions en moins d'une heure"}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar" ? "فريق خبير" : "Équipe experte"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "فريق دعم مدرب لحل جميع مشاكلك"
                  : "Équipe de support formée pour résoudre tous vos problèmes"}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar" ? "رضا العملاء" : "Satisfaction client"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "نسعى لتحقيق رضا 100% من عملائنا"
                  : "Nous visons 100% de satisfaction de nos clients"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
