import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HeadphonesIcon,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function Support() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const categories = [
    {
      value: "account",
      label: language === "ar" ? "مشاكل الحساب" : "Problèmes de compte",
    },
    {
      value: "payment",
      label: language === "ar" ? "مشاكل الدفع" : "Problèmes de paiement",
    },
    {
      value: "booking",
      label: language === "ar" ? "مشاكل الحجز" : "Problèmes de réservation",
    },
    {
      value: "technical",
      label: language === "ar" ? "مشاكل تقنية" : "Problèmes techniques",
    },
    { value: "other", label: language === "ar" ? "أخرى" : "Autre" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Support form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <HeadphonesIcon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">
            {language === "ar" ? "مركز الدعم" : "Centre de support"}
          </h1>
          <p className="text-muted-foreground">
            {language === "ar"
              ? "نحن هنا لمساعدتك في أي وقت"
              : "Nous sommes là pour vous aider à tout moment"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {language === "ar" ? "دردشة مباشرة" : "Chat en direct"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "ar"
                    ? "احصل على إجابة فورية لأسئلتك"
                    : "Obtenez une réponse immédiate à vos questions"}
                </p>
                <Button className="w-full">
                  {language === "ar" ? "بدء الدردشة" : "Démarrer le chat"}
                </Button>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {language === "ar" ? "متاح 24/7" : "Disponible 24/7"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  {language === "ar" ? "الهاتف" : "Téléphone"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "ar"
                    ? "تحدث مع أحد ممثلي خدمة العملاء"
                    : "Parlez à un représentant du service client"}
                </p>
                <p className="font-mono text-lg font-medium mb-2">
                  +212 5XX-XXX-XXX
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {language === "ar" ? "8:00 - 20:00" : "8h00 - 20h00"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  {language === "ar" ? "البريد الإلكتروني" : "Email"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "ar"
                    ? "أرسل لنا رسالة مفصلة"
                    : "Envoyez-nous un message détaillé"}
                </p>
                <p className="font-mono text-sm font-medium mb-2">
                  support@khadamat.ma
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {language === "ar" ? "رد خلال 24 ساعة" : "Réponse sous 24h"}
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertCircle className="h-5 w-5" />
                  {language === "ar" ? "حالة طارئة؟" : "Urgence ?"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-700 mb-4">
                  {language === "ar"
                    ? "للحالات الطارئة، استخدم زر SOS 24/7"
                    : "Pour les urgences, utilisez le bouton SOS 24/7"}
                </p>
                <Button variant="destructive" className="w-full">
                  SOS 24/7
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === "ar"
                    ? "أرسل لنا رسالة"
                    : "Envoyez-nous un message"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {language === "ar" ? "الاسم الكامل" : "Nom complet"} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {language === "ar" ? "البريد الإلكتروني" : "Email"} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">
                      {language === "ar"
                        ? "فئة المشكلة"
                        : "Catégorie du problème"}{" "}
                      *
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        handleInputChange("category", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            language === "ar"
                              ? "اختر فئة"
                              : "Sélectionner une catégorie"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {language === "ar" ? "موضوع الرسالة" : "Sujet"} *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      placeholder={
                        language === "ar"
                          ? "مثال: مشكلة في الدفع"
                          : "ex: Problème de paiement"
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {language === "ar"
                        ? "وصف تفصيلي للمشكلة"
                        : "Description détaillée du problème"}{" "}
                      *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder={
                        language === "ar"
                          ? "اشرح مشكلتك بالتفصيل..."
                          : "Décrivez votre problème en détail..."
                      }
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {language === "ar" ? "إرسال الرسالة" : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Common Issues */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            {language === "ar" ? "المشاكل الشائعة" : "Problèmes courants"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === "ar"
                    ? "مشاكل تسجيل الدخول"
                    : "Problèmes de connexion"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "تحقق من بريدك الإلكتروني وكلمة المرور"
                    : "Vérifiez votre email et mot de passe"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === "ar" ? "مشاكل الدفع" : "Problèmes de paiement"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "تأكد من صحة معلومات البطاقة"
                    : "Vérifiez les informations de votre carte"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === "ar"
                    ? "التحقق من الهوية"
                    : "Vérification d'identité"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "تأكد من وضوح الوثائق المرفقة"
                    : "Assurez-vous que les documents sont clairs"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
