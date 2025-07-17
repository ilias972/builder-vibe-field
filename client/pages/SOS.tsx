import { useState } from "react";
import { Link } from "react-router-dom";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  MapPin,
  Clock,
  AlertTriangle,
  Zap,
  Wrench,
  Home,
  Shield,
  Car,
  Flame,
  Droplets,
  Lock,
  Heart,
  Users,
  PhoneCall,
} from "lucide-react";

export default function SOS() {
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [step, setStep] = useState(1);

  const emergencyServices = [
    {
      id: "plumbing",
      nameAr: "طوارئ السباكة",
      nameFr: "Urgence Plomberie",
      icon: Droplets,
      color: "bg-blue-100 text-blue-600",
      price: "300-500 DH",
      description: {
        ar: "تسريب المياه، انفجار الأنابيب، انسداد المجاري",
        fr: "Fuites d'eau, rupture de canalisations, débouchage urgent",
      },
      examples: {
        ar: ["تسريب مياه", "انفجار أنبوب", "انسداد المرحاض"],
        fr: ["Fuite d'eau", "Canalisation éclatée", "WC bouché"],
      },
    },
    {
      id: "electrical",
      nameAr: "طوارئ الكهرباء",
      nameFr: "Urgence Électricité",
      icon: Zap,
      color: "bg-yellow-100 text-yellow-600",
      price: "250-400 DH",
      description: {
        ar: "انقطاع الكهرباء، دارة قصيرة، مشاكل التوصيل",
        fr: "Panne électrique, court-circuit, problèmes de connexion",
      },
      examples: {
        ar: ["انقطاع الكهرباء", "شرارة كهربائية", "عطل في اللوحة"],
        fr: ["Panne électrique", "Étincelles", "Problème tableau électrique"],
      },
    },
    {
      id: "locksmith",
      nameAr: "طوارئ الأقفال",
      nameFr: "Urgence Serrurerie",
      icon: Lock,
      color: "bg-gray-100 text-gray-600",
      price: "200-350 DH",
      description: {
        ar: "فقدان المفاتيح، كسر الأقفال، الإغلاق الخطأ",
        fr: "Clés perdues, serrures cassées, porte claquée",
      },
      examples: {
        ar: ["فقدان المفاتيح", "كسر القفل", "باب مغلق"],
        fr: ["Clés perdues", "Serrure cassée", "Porte bloquée"],
      },
    },
    {
      id: "heating",
      nameAr: "طوارئ التدفئة",
      nameFr: "Urgence Chauffage",
      icon: Flame,
      color: "bg-orange-100 text-orange-600",
      price: "350-600 DH",
      description: {
        ar: "عطل المرجل، تسريب الغاز، مشاكل التدفئة",
        fr: "Panne chaudière, fuite de gaz, problèmes de chauffage",
      },
      examples: {
        ar: ["عطل المرجل", "تسريب غاز", "عدم وجود تدفئة"],
        fr: ["Panne chaudière", "Fuite gaz", "Pas de chauffage"],
      },
    },
    {
      id: "glass",
      nameAr: "طوارئ الزجاج",
      nameFr: "Urgence Vitrerie",
      icon: Home,
      color: "bg-green-100 text-green-600",
      price: "200-400 DH",
      description: {
        ar: "كسر النوافذ، الأبواب الزجاجية، واجهات المحلات",
        fr: "Vitres cassées, portes vitrées, devantures de magasins",
      },
      examples: {
        ar: ["نافذة مكسورة", "باب زجاجي مكسور", "واجهة محل"],
        fr: ["Vitre cassée", "Porte vitrée brisée", "Devanture magasin"],
      },
    },
    {
      id: "security",
      nameAr: "طوارئ الأمن",
      nameFr: "Urgence Sécurité",
      icon: Shield,
      color: "bg-red-100 text-red-600",
      price: "400-800 DH",
      description: {
        ar: "كاميرات المراقبة، أنظمة الإنذار، الأمن",
        fr: "Caméras de surveillance, systèmes d'alarme, sécurité",
      },
      examples: {
        ar: ["عطل الكا��يرات", "مشكل الإنذار", "كسر الأمان"],
        fr: ["Panne caméras", "Problème alarme", "Sécurité compromise"],
      },
    },
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep(2);
  };

  const handleEmergencyCall = () => {
    // This would integrate with the emergency call system
    alert(
      language === "ar"
        ? "جاري الاتصال بخدمة الطوارئ..."
        : "Connexion au service d'urgence en cours...",
    );
  };

  const handleSubmitRequest = () => {
    // This would submit the emergency request
    const requestData = {
      service: selectedService,
      location,
      description,
      phone: contactPhone,
      timestamp: new Date().toISOString(),
    };
    console.log("Emergency request:", requestData);
    alert(
      language === "ar"
        ? "تم إرسال طلب الطوارئ. سيتم الاتصال بك خلال دقائق."
        : "Demande d'urgence envoyée. Vous serez contacté dans quelques minutes.",
    );
  };

  const selectedServiceData = emergencyServices.find(
    (s) => s.id === selectedService,
  );

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
            {language === "ar" ? "خدمة الطوارئ 24/7" : "Service d'Urgence 24/7"}
          </h1>
          <p className="text-muted-foreground text-lg">
            {language === "ar"
              ? "تدخل فوري في جميع أنحاء المغرب"
              : "Intervention immédiate partout au Maroc"}
          </p>
          <Badge variant="destructive" className="text-lg px-4 py-2 mt-4">
            <Phone className="mr-2 h-5 w-5" />
            {language === "ar" ? "نشط الآن" : "Actif maintenant"}
          </Badge>
        </div>

        {/* Emergency Contact Banner */}
        <Card className="border-red-200 bg-red-50 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-red-700 mb-2">
                  {language === "ar" ? "حالة طوارئ قصوى؟" : "Urgence extrême ?"}
                </h3>
                <p className="text-red-600">
                  {language === "ar"
                    ? "اتصل فوراً للحصول على مساعدة فورية"
                    : "Appelez immédiatement pour une aide instantanée"}
                </p>
              </div>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={handleEmergencyCall}
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                {language === "ar" ? "اتصال طوارئ" : "Appel d'urgence"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">
              {language === "ar" ? "ما نوع الطوارئ؟" : "Quel type d'urgence ?"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyServices.map((service) => (
                <Card
                  key={service.id}
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary"
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`inline-flex p-4 rounded-2xl mb-4 mx-auto ${service.color}`}
                    >
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === "ar" ? service.nameAr : service.nameFr}
                    </CardTitle>
                    <CardDescription>
                      {language === "ar"
                        ? service.description.ar
                        : service.description.fr}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {language === "ar" ? "التكلفة:" : "Tarif:"}
                        </span>
                        <Badge variant="outline">{service.price}</Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">
                          {language === "ar" ? "أمثلة:" : "Exemples:"}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {(language === "ar"
                            ? service.examples.ar
                            : service.examples.fr
                          ).map((example, index) => (
                            <li key={index}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step === 2 && selectedServiceData && (
          <div className="max-w-2xl mx-auto">
            <Button variant="ghost" onClick={() => setStep(1)} className="mb-4">
              ← {language === "ar" ? "العودة" : "Retour"}
            </Button>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${selectedServiceData.color}`}
                  >
                    <selectedServiceData.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>
                      {language === "ar"
                        ? selectedServiceData.nameAr
                        : selectedServiceData.nameFr}
                    </CardTitle>
                    <CardDescription>
                      {language === "ar" ? "طلب طوارئ" : "Demande d'urgence"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="location">
                    {language === "ar"
                      ? "الموقع الدقيق"
                      : "Localisation exacte"}{" "}
                    *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder={
                        language === "ar"
                          ? "الحي، الشارع، رقم المنزل..."
                          : "Quartier, rue, numéro..."
                      }
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">
                    {language === "ar"
                      ? "رقم الهاتف للاتصال"
                      : "Numéro de contact"}{" "}
                    *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="phone"
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+212 6XX XX XX XX"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">
                    {language === "ar"
                      ? "وصف المشكلة"
                      : "Description du problème"}{" "}
                    *
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={
                      language === "ar"
                        ? "اشرح المشكلة بالتفصيل..."
                        : "Décrivez le problème en détail..."
                    }
                    rows={4}
                    required
                  />
                </div>

                {/* Estimated Response Time */}
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">
                          {language === "ar"
                            ? "وقت الاستجابة المتوقع"
                            : "Temps de réponse estimé"}
                        </p>
                        <p className="text-sm text-green-600">
                          {language === "ar" ? "15-30 دقيقة" : "15-30 minutes"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Price Information */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-800">
                          {language === "ar"
                            ? "التكلفة المتوقعة"
                            : "Coût estimé"}
                        </p>
                        <p className="text-sm text-blue-600">
                          {language === "ar"
                            ? "يشمل التنقل والتدخل"
                            : "Inclut déplacement et intervention"}
                        </p>
                      </div>
                      <Badge className="bg-blue-600 text-white">
                        {selectedServiceData.price}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  onClick={handleSubmitRequest}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  size="lg"
                  disabled={!location || !contactPhone || !description}
                >
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  {language === "ar"
                    ? "إرسال طلب الطوارئ"
                    : "Envoyer la demande d'urgence"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {language === "ar"
                    ? "بالضغط على الإرسال، توافق على شروط الخدمة الطارئة"
                    : "En envoyant, vous acceptez les conditions du service d'urgence"}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar" ? "متاح 24/7" : "Disponible 24/7"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "خدمة الطوارئ متاحة طوال اليوم"
                  : "Service d'urgence disponible à toute heure"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar" ? "فريق محترف" : "Équipe professionnelle"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "خبراء معتمدون ومدربون"
                  : "Experts certifiés et formés"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">
                {language === "ar" ? "خدمة مؤمنة" : "Service assuré"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "تأمين شامل لجميع التدخلات"
                  : "Assurance complète pour toutes interventions"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
