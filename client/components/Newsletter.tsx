import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Mail, MapPin, Bell } from "lucide-react";

export function Newsletter() {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const moroccanCities = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fès",
    "Tanger",
    "Agadir",
    "Meknès",
    "Oujda",
    "Tétouan",
    "Salé",
    "Kenitra",
    "El Jadida",
    "Béni Mellal",
    "Khouribga",
    "Nador",
    "Settat",
    "Mohammedia",
    "Larache",
    "Ksar El Kébir",
    "Guelmim",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                {language === "ar"
                  ? "تم الاشتراك بنجاح!"
                  : "Inscription réussie !"}
              </h3>
              <p className="text-muted-foreground">
                {language === "ar"
                  ? `شكراً لك! ستتلقى آخر الأخبار والمقدمين الجدد في ${city} على ${email}`
                  : `Merci ! Vous recevrez les dernières actualités et nouveaux prestataires à ${city} sur ${email}`}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Bell className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === "ar"
                ? "ابق على اطلاع بآخر الأخبار"
                : "Restez informé des dernières actualités"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "ar"
                ? "اشترك في نشرتنا الإخبارية لتتلقى آخر الأخبار والمقدمين الجدد في منطقتك"
                : "Abonnez-vous à notre newsletter pour recevoir les dernières actualités et nouveaux prestataires dans votre région"}
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-center justify-center">
                <Mail className="h-5 w-5" />
                {language === "ar"
                  ? "الاشتراك في النشرة الإخبارية"
                  : "Inscription à la newsletter"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="newsletter-email">
                    {language === "ar" ? "البريد الإلكتروني" : "Adresse email"} *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder={
                        language === "ar"
                          ? "أدخل بريدك الإلكتروني"
                          : "Entrez votre email"
                      }
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newsletter-city">
                    {language === "ar"
                      ? "مدينتك (لتلقي أخبار المنطقة)"
                      : "Votre ville (pour recevoir les actualités locales)"}{" "}
                    *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                    <Select value={city} onValueChange={setCity}>
                      <SelectTrigger className="pl-10">
                        <SelectValue
                          placeholder={
                            language === "ar"
                              ? "اختر مدينتك"
                              : "Sélectionnez votre ville"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {moroccanCities.map((cityName) => (
                          <SelectItem key={cityName} value={cityName}>
                            {cityName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Alert>
                  <Mail className="h-4 w-4" />
                  <AlertDescription>
                    {language === "ar"
                      ? "لا داعي للتسجيل في الموقع! اشترك بالنشرة فقط لتتلقى التحديثات"
                      : "Pas besoin de vous inscrire sur le site ! Abonnez-vous simplement à la newsletter pour recevoir les mises à jour"}
                  </AlertDescription>
                </Alert>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">
                    {language === "ar"
                      ? "ما ستتلقاه في النشرة:"
                      : "Ce que vous recevrez :"}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {language === "ar"
                        ? "أخبار الموقع والميزات الجديدة"
                        : "Actualités du site et nouvelles fonctionnalités"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {language === "ar"
                        ? "مقدمو خدمات جدد في منطقتك"
                        : "Nouveaux prestataires dans votre région"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {language === "ar"
                        ? "عروض وخصومات حصرية"
                        : "Offres et réductions exclusives"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {language === "ar"
                        ? "نصائح وتوجيهات مفيدة"
                        : "Conseils et astuces utiles"}
                    </li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={!email || !city || isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      {language === "ar"
                        ? "جاري الاشتراك..."
                        : "Inscription en cours..."}
                    </div>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      {language === "ar"
                        ? "الاشتراك في النشرة"
                        : "S'abonner à la newsletter"}
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  {language === "ar"
                    ? "يمكنك إلغاء الاشتراك في أي وقت. لن نشارك بريدك الإلكتروني مع أطراف ثالثة."
                    : "Vous pouvez vous désabonner à tout moment. Nous ne partagerons jamais votre email avec des tiers."}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
