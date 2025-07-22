import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Phone,
  MapPin,
  AlertTriangle,
  Shield,
  Flame,
  Heart,
  PhoneCall,
  Clock,
  Users,
  Car,
  Building,
  Camera,
  Mic,
  HelpCircle,
} from "lucide-react";

export default function SOS() {
  const { t, language } = useLanguage();
  const [selectedEmergency, setSelectedEmergency] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [isCallActive, setIsCallActive] = useState(false);

  const emergencyServices = [
    {
      id: "police",
      nameAr: "الشرطة",
      nameFr: "Police",
      number: "19",
      icon: Shield,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      description: {
        ar: "الإبلاغ عن جرائم، حوادث، أو طلب المساعدة الأمنية",
        fr: "Signaler des crimes, accidents ou demander une assistance sécuritaire",
      },
      examples: {
        ar: ["سرقة", "اعتداء", "حادث سير", "مشكل أمني"],
        fr: ["Vol", "Agression", "Accident", "Problème de sécurité"],
      },
    },
    {
      id: "fire",
      nameAr: "الحماية المدنية",
      nameFr: "Pompiers",
      number: "15",
      icon: Flame,
      color: "bg-red-100 text-red-600 border-red-200",
      description: {
        ar: "حرائق، حوادث، إنقاذ، أو حالات طوارئ مدنية",
        fr: "Incendies, accidents, sauvetages ou urgences civiles",
      },
      examples: {
        ar: ["حريق", "انهيار مبنى", "إنقاذ شخص", "تس��يب غاز"],
        fr: ["Incendie", "Effondrement", "Sauvetage", "Fuite de gaz"],
      },
    },
    {
      id: "ambulance",
      nameAr: "الإسعاف",
      nameFr: "SAMU / Ambulance",
      number: "15",
      icon: Heart,
      color: "bg-green-100 text-green-600 border-green-200",
      description: {
        ar: "حالات طبية طارئة تحتاج تدخل فوري",
        fr: "Urgences médicales nécessitant une intervention immédiate",
      },
      examples: {
        ar: ["نوبة قلبية", "حادث خطير", "فقدان وعي", "حالة طبية طارئة"],
        fr: [
          "Crise cardiaque",
          "Accident grave",
          "Perte de conscience",
          "Urgence médicale",
        ],
      },
    },
    {
      id: "gendarmerie",
      nameAr: "الدرك الملكي",
      nameFr: "Gendarmerie Royale",
      number: "177",
      icon: Shield,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      description: {
        ar: "للمناطق الريفية والطرق السريعة",
        fr: "Pour les zones rurales et autoroutes",
      },
      examples: {
        ar: ["حوادث الطرق", "مشاكل ريفية", "أمن الطرق"],
        fr: ["Accidents routiers", "Problèmes ruraux", "Sécurité routière"],
      },
    },
  ];

  const handleEmergencyCall = (service: any) => {
    setSelectedEmergency(service.id);
    setIsCallActive(true);

    // In a real app, this would initiate an actual emergency call
    setTimeout(() => {
      alert(
        language === "ar"
          ? `جاري الاتصال بـ ${service.nameAr} (${service.number})...`
          : `Connexion avec ${service.nameFr} (${service.number})...`,
      );
      setIsCallActive(false);
    }, 2000);
  };

  const handleQuickCall = (number: string, serviceName: string) => {
    // This would make an actual call in a real app
    window.open(`tel:${number}`);
    alert(
      language === "ar"
        ? `اتصال بـ ${serviceName}: ${number}`
        : `Appel vers ${serviceName}: ${number}`,
    );
  };

  const sendLocationToEmergency = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          alert(
            language === "ar"
              ? `تم إرسال موقعك: ${lat.toFixed(6)}, ${lng.toFixed(6)}`
              : `Localisation envoyée: ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
          );
        },
        () => {
          alert(
            language === "ar"
              ? "لا يمكن الحصول على الموقع"
              : "Impossible d'obtenir la localisation",
          );
        },
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Emergency Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-500 text-white rounded-full p-4 animate-pulse">
              <AlertTriangle className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-red-600 mb-2">
            {t("sos.title")}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t("sos.subtitle")}
          </p>
          <Badge variant="destructive" className="text-lg px-4 py-2 mt-4">
            <Phone className="mr-2 h-5 w-5" />
            {language === "ar" ? "متاح 24/7" : "Disponible 24/7"}
          </Badge>
        </div>

        {/* Quick Call Section */}
        <Card className="border-red-200 bg-red-50 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-red-700 mb-4 text-center">
              {language === "ar" ? "اتصال سريع" : "Appel rapide"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emergencyServices.map((service) => (
                <Button
                  key={service.id}
                  variant="outline"
                  className="h-20 flex flex-col gap-2 bg-white border-2 hover:bg-red-50"
                  onClick={() =>
                    handleQuickCall(
                      service.number,
                      language === "ar" ? service.nameAr : service.nameFr,
                    )
                  }
                >
                  <service.icon className="h-6 w-6" />
                  <div className="text-center">
                    <div className="font-bold text-lg">{service.number}</div>
                    <div className="text-xs">
                      {language === "ar" ? service.nameAr : service.nameFr}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Services Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {emergencyServices.map((service) => (
            <Card
              key={service.id}
              className={`transition-all duration-300 hover:shadow-lg border-2 ${service.color}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${service.color}`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {language === "ar" ? service.nameAr : service.nameFr}
                      </CardTitle>
                      <CardDescription className="font-bold text-lg">
                        {service.number}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    24/7
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {language === "ar"
                    ? service.description.ar
                    : service.description.fr}
                </p>

                <div className="mb-4">
                  <p className="font-medium mb-2">
                    {language === "ar" ? "حالات الاستخدام:" : "Cas d'usage:"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(language === "ar"
                      ? service.examples.ar
                      : service.examples.fr
                    ).map((example, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => handleEmergencyCall(service)}
                    disabled={isCallActive}
                  >
                    <PhoneCall className="mr-2 h-4 w-4" />
                    {language === "ar" ? "اتصال" : "Appeler"}
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          {language === "ar"
                            ? "تفاصيل الطوارئ"
                            : "Détails de l'urgence"}
                        </DialogTitle>
                        <DialogDescription>
                          {language === "ar"
                            ? "قدم معلومات إضافية لخدمات الطوارئ"
                            : "Fournissez des informations supplémentaires aux services d'urgence"}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label>
                            {language === "ar"
                              ? "الموقع الدقيق"
                              : "Localisation exacte"}
                          </Label>
                          <div className="flex gap-2">
                            <Input
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              placeholder={
                                language === "ar"
                                  ? "اكتب موقعك..."
                                  : "Décrivez votre localisation..."
                              }
                            />
                            <Button
                              variant="outline"
                              onClick={sendLocationToEmergency}
                            >
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div>
                          <Label>
                            {language === "ar"
                              ? "وصف الحالة"
                              : "Description de la situation"}
                          </Label>
                          <Textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={
                              language === "ar"
                                ? "اشرح ما يحدث..."
                                : "Décrivez ce qui se passe..."
                            }
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label>
                            {language === "ar"
                              ? "رقم الاتصال"
                              : "Numéro de contact"}
                          </Label>
                          <Input
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            placeholder="+212 6XX XX XX XX"
                          />
                        </div>

                        <Button
                          className="w-full"
                          onClick={() => handleEmergencyCall(service)}
                        >
                          <PhoneCall className="mr-2 h-4 w-4" />
                          {language === "ar"
                            ? `اتصال بـ ${service.nameAr}`
                            : `Appeler ${service.nameFr}`}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar"
                  ? "مشاركة الموقع"
                  : "Partage de localisation"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "نرسل موقعك تلقائياً لخدمات الطوارئ"
                  : "Nous envoyons automatiquement votre position aux secours"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar" ? "اتصال مباشر" : "Appel direct"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "اتصال فوري بالأرقام الرسمية"
                  : "Connexion immédiate aux numéros officiels"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar" ? "متاح دائماً" : "Toujours disponible"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "خدمة متاحة 24 ساعة، 7 أيام في الأسبوع"
                  : "Service disponible 24h/24, 7j/7"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">
                  {language === "ar" ? "تنويه مهم" : "Information importante"}
                </h3>
                <div className="text-sm text-yellow-700 space-y-2">
                  <p>
                    {language === "ar"
                      ? "• هذه الخدمة مخصصة للطوارئ الحقيقية فقط"
                      : "• Ce service est réservé aux urgences réelles uniquement"}
                  </p>
                  <p>
                    {language === "ar"
                      ? "• استخدام خاطئ قد يعرضك للمساءلة القانونية"
                      : "• Un usage abusif peut entraîner des poursuites légales"}
                  </p>
                  <p>
                    {language === "ar"
                      ? "• في حالة عدم الطوارئ، اتصل بالخدمات العادية"
                      : "• Pour les non-urgences, contactez les services habituels"}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <HelpCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar" ? "ليس حالة طوارئ؟" : "Pas une urgence ?"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "ar"
                  ? "للمساعدة في المهام العادية، تصف�� خدماتنا"
                  : "Pour de l'aide avec vos tâches quotidiennes, explorez nos services"}
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="/">
                    {language === "ar"
                      ? "تصفح الخدمات"
                      : "Parcourir les services"}
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/providers">
                    {language === "ar"
                      ? "البحث عن مقدمي الخدمات"
                      : "Trouver des prestataires"}
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
