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
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Shield,
  UserCheck,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function Login() {
  const { language } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    alert(language === "ar" ? "تم تسجيل الدخول بنجاح!" : "Connexion réussie !");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const benefits = [
    {
      icon: Shield,
      titleAr: "حساب آمن",
      titleFr: "Compte sécurisé",
      descriptionAr: "بياناتك محمية بأعلى معايير الأمان",
      descriptionFr:
        "Vos données sont protégées par les plus hauts standards de sécurité",
    },
    {
      icon: MessageSquare,
      titleAr: "تواصل مباشر",
      titleFr: "Communication directe",
      descriptionAr: "تواصل مع مقدمي الخدمات عبر الرسائل الآمنة",
      descriptionFr:
        "Communiquez avec les prestataires via des messages sécurisés",
    },
    {
      icon: UserCheck,
      titleAr: "ملف شخصي",
      titleFr: "Profil personnalisé",
      descriptionAr: "احفظ تفضيلاتك وتاريخ طلباتك",
      descriptionFr: "Sauvegardez vos préférences et historique de commandes",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Login Form */}
            <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  {language === "ar" ? "تسجيل الدخول" : "Connexion"}
                </CardTitle>
                <CardDescription>
                  {language === "ar"
                    ? "ادخل إلى حسابك للوصول لجميع الخدمات"
                    : "Connectez-vous à votre compte pour accéder à tous les services"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="email" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="email">
                      <Mail className="mr-2 h-4 w-4" />
                      {language === "ar" ? "بالإيميل" : "Par e-mail"}
                    </TabsTrigger>
                    <TabsTrigger value="phone">
                      <Phone className="mr-2 h-4 w-4" />
                      {language === "ar" ? "بالهاتف" : "Par téléphone"}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="email">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="email">
                          {language === "ar"
                            ? "البريد الإلكتروني"
                            : "Adresse e-mail"}
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="email"
                            type="email"
                            placeholder={
                              language === "ar"
                                ? "أدخل بريدك الإلكتروني"
                                : "Entrez votre e-mail"
                            }
                            value={formData.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="password">
                          {language === "ar" ? "كلمة المرور" : "Mot de passe"}
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder={
                              language === "ar"
                                ? "أدخل كلمة المرور"
                                : "Entrez votre mot de passe"
                            }
                            value={formData.password}
                            onChange={(e) =>
                              handleChange("password", e.target.value)
                            }
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember"
                            checked={formData.rememberMe}
                            onCheckedChange={(checked) =>
                              handleChange("rememberMe", checked as boolean)
                            }
                          />
                          <Label htmlFor="remember" className="text-sm">
                            {language === "ar"
                              ? "تذكرني"
                              : "Se souvenir de moi"}
                          </Label>
                        </div>
                        <Link
                          to="/forgot-password"
                          className="text-sm text-primary hover:underline"
                        >
                          {language === "ar"
                            ? "نسيت كلمة المرور؟"
                            : "Mot de passe oublié ?"}
                        </Link>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        {language === "ar" ? "تسجيل الدخول" : "Se connecter"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="phone">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="phone-login">
                          {language === "ar"
                            ? "رقم الهاتف"
                            : "Numéro de téléphone"}
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="phone-login"
                            type="tel"
                            placeholder="+212 6XX XX XX XX"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        {language === "ar"
                          ? "إرسال رمز التحقق"
                          : "Envoyer code de vérification"}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        {language === "ar"
                          ? "سنرسل لك رمز تحقق عبر SMS"
                          : "Nous vous enverrons un code de vérification par SMS"}
                      </p>
                    </form>
                  </TabsContent>
                </Tabs>

                {/* Social Login */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        {language === "ar" ? "أو" : "Ou"}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>

                {/* Register Link */}
                <div className="text-center mt-6">
                  <p className="text-muted-foreground">
                    {language === "ar"
                      ? "ليس لديك حساب؟ "
                      : "Vous n'avez pas de compte ? "}
                    <Link
                      to="/register"
                      className="text-primary hover:underline font-medium"
                    >
                      {language === "ar" ? "سجل الآن" : "Inscrivez-vous"}
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === "ar"
                    ? "لماذا Khadamat؟"
                    : "Pourquoi Khadamat ?"}
                </h2>
                <p className="text-muted-foreground">
                  {language === "ar"
                    ? "انضم إلى آلاف المغاربة الذين يثقون في Khadamat للحصول على أفضل الخدمات"
                    : "Rejoignez des milliers de Marocains qui font confiance à Khadamat pour leurs meilleurs services"}
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {language === "ar" ? benefit.titleAr : benefit.titleFr}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "ar"
                          ? benefit.descriptionAr
                          : benefit.descriptionFr}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-sm opacity-90">
                        {language === "ar" ? "مقدم خدمة" : "Prestataires"}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">50K+</div>
                      <div className="text-sm opacity-90">
                        {language === "ar" ? "عميل راض" : "Clients satisfaits"}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">4.8/5</div>
                      <div className="text-sm opacity-90">
                        {language === "ar" ? "تقييم" : "Note moyenne"}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">
                        {language === "ar" ? "دعم العملاء" : "Support client"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
