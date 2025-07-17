import { useState } from "react";
import { Link } from "react-router-dom";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  Camera,
  Shield,
  Award,
  CheckCircle,
  FileText,
  CreditCard,
  MapPin,
  Clock,
  Star,
  Users,
  DollarSign,
  AlertCircle,
  Phone,
  Mail,
  Building,
  Briefcase,
} from "lucide-react";

export default function BecomeProvider() {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",

    // Professional Info
    companyName: "",
    experience: "",
    description: "",
    hourlyRate: "",
    emergencyAvailable: false,

    // Documents
    idDocument: null,
    professionalLicense: null,
    insurance: null,
    bankStatement: null,

    // Verification
    acceptTerms: false,
    profilePhoto: null,
  });

  const services = [
    { key: "plumbing", nameAr: "السباكة", nameFr: "Plomberie" },
    { key: "electrical", nameAr: "الكهرباء", nameFr: "Électricité" },
    { key: "cleaning", nameAr: "التنظيف", nameFr: "Ménage" },
    { key: "painting", nameAr: "الطلاء", nameFr: "Peinture" },
    { key: "carpentry", nameAr: "النجارة", nameFr: "Menuiserie" },
    { key: "gardening", nameAr: "البستنة", nameFr: "Jardinage" },
    { key: "handyman", nameAr: "أعمال الصيانة", nameFr: "Bricolage" },
    {
      key: "funeral",
      nameAr: "الخدمات الجنائزية",
      nameFr: "Services Funéraires",
    },
  ];

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

  const handleServiceToggle = (serviceKey: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceKey)
        ? prev.filter((s) => s !== serviceKey)
        : [...prev, serviceKey],
    );
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Provider application:", { ...formData, selectedServices });
    alert(
      language === "ar"
        ? "تم إرسال طلبكم بنجاح! سيتم التواصل معكم خلال 48 ساعة."
        : "Candidature envoyée avec succès ! Nous vous contactons sous 48h.",
    );
  };

  return (
    <div className="min-h-screen bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary text-primary-foreground rounded-full p-4">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">
              {language === "ar" ? "كن مقدم خدمة" : "Devenir Prestataire"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {language === "ar"
                ? "انضم إلى شبكة خدمات واطور مشروعك المهني"
                : "Rejoignez le réseau Khadamat et développez votre activité"}
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "دخل إضافي" : "Revenus supplémentaires"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "احصل على مهام يومية وزد دخلك"
                    : "Recevez des missions quotidiennes"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "دفع آمن" : "Paiement sécurisé"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "نضمن لك الحصول على أموالك"
                    : "Nous garantissons vos paiements"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "عملاء كثيرون" : "Large clientèle"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "الوصول إلى آلاف العملاء"
                    : "Accès à des milliers de clients"}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {language === "ar"
                    ? `الخطوة ${step} من 4`
                    : `Étape ${step} sur 4`}
                </CardTitle>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i <= step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {language === "ar"
                        ? "المعلومات الشخصية"
                        : "Informations personnelles"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">
                          {language === "ar" ? "الاسم الأول" : "Prénom"} *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">
                          {language === "ar" ? "اسم العائلة" : "Nom de famille"}{" "}
                          *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">
                        {language === "ar" ? "البريد الإلكتروني" : "E-mail"} *
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
                    <div>
                      <Label htmlFor="phone">
                        {language === "ar" ? "رقم الهاتف" : "Téléphone"} *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+212 6XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">
                      {language === "ar" ? "العنوان" : "Adresse"} *
                    </Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label>{language === "ar" ? "المدينة" : "Ville"} *</Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) =>
                        handleInputChange("city", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            language === "ar"
                              ? "اختر مدينتك"
                              : "Sélectionnez votre ville"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {moroccanCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={handleNext} className="w-full">
                    {language === "ar" ? "التالي" : "Suivant"}
                  </Button>
                </div>
              )}

              {/* Step 2: Services & Professional Info */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {language === "ar"
                        ? "الخدمات والمعلومات المهنية"
                        : "Services et informations professionnelles"}
                    </h3>

                    <div className="mb-6">
                      <Label className="text-base font-medium">
                        {language === "ar"
                          ? "الخدمات التي تقدمها"
                          : "Services que vous proposez"}{" "}
                        *
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                        {services.map((service) => (
                          <div
                            key={service.key}
                            className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                              selectedServices.includes(service.key)
                                ? "border-primary bg-primary/5"
                                : "border-muted hover:border-primary/50"
                            }`}
                            onClick={() => handleServiceToggle(service.key)}
                          >
                            <div className="text-sm font-medium text-center">
                              {language === "ar"
                                ? service.nameAr
                                : service.nameFr}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName">
                          {language === "ar"
                            ? "اسم الشركة/العمل"
                            : "Nom d'entreprise (optionnel)"}
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) =>
                            handleInputChange("companyName", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="experience">
                          {language === "ar"
                            ? "سنوات الخبرة"
                            : "Années d'expérience"}{" "}
                          *
                        </Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) =>
                            handleInputChange("experience", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue
                              placeholder={
                                language === "ar"
                                  ? "اختر الخبرة"
                                  : "Sélectionnez"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">
                              {language === "ar"
                                ? "أقل من سنة"
                                : "Moins d'1 an"}
                            </SelectItem>
                            <SelectItem value="1-3">
                              {language === "ar" ? "1-3 سنوات" : "1-3 ans"}
                            </SelectItem>
                            <SelectItem value="3-5">
                              {language === "ar" ? "3-5 سنوات" : "3-5 ans"}
                            </SelectItem>
                            <SelectItem value="5-10">
                              {language === "ar" ? "5-10 سنوات" : "5-10 ans"}
                            </SelectItem>
                            <SelectItem value="10+">
                              {language === "ar"
                                ? "أكثر من 10 سنو��ت"
                                : "Plus de 10 ans"}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">
                        {language === "ar"
                          ? "وصف خدماتك"
                          : "Description de vos services"}{" "}
                        *
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        placeholder={
                          language === "ar"
                            ? "اشرح خبرتك ونوع الخدمات التي تقدمها..."
                            : "Décrivez votre expertise et les services que vous proposez..."
                        }
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="hourlyRate">
                        {language === "ar"
                          ? "التسعيرة بالساعة (درهم)"
                          : "Tarif horaire (DH)"}{" "}
                        *
                      </Label>
                      <Input
                        id="hourlyRate"
                        type="number"
                        value={formData.hourlyRate}
                        onChange={(e) =>
                          handleInputChange("hourlyRate", e.target.value)
                        }
                        placeholder="150"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="emergency"
                        checked={formData.emergencyAvailable}
                        onCheckedChange={(checked) =>
                          handleInputChange("emergencyAvailable", checked)
                        }
                      />
                      <Label htmlFor="emergency">
                        {language === "ar"
                          ? "متاح لخدمات الطوارئ (24/7)"
                          : "Disponible pour les urgences (24/7)"}
                      </Label>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      className="flex-1"
                    >
                      {language === "ar" ? "السابق" : "Précédent"}
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="flex-1"
                      disabled={selectedServices.length === 0}
                    >
                      {language === "ar" ? "التالي" : "Suivant"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Documents Upload */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {language === "ar"
                        ? "الوثائق المطلوبة"
                        : "Documents requis"}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {language === "ar"
                        ? "يرجى رفع جميع الوثائق المطلوبة للتحقق من هويتكم ومؤهلاتكم المهنية"
                        : "Veuillez télécharger tous les documents requis pour vérifier votre identité et qualifications"}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* ID Document */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center">
                          <FileText className="h-5 w-5 mr-2" />
                          {language === "ar"
                            ? "وثيقة الهوية"
                            : "Pièce d'identité"}{" "}
                          *
                        </CardTitle>
                        <CardDescription>
                          {language === "ar"
                            ? "CIN أو جواز السفر"
                            : "CIN ou passeport"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <Button variant="outline" size="sm">
                            {language === "ar" ? "رفع الملف" : "Télécharger"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Professional License */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center">
                          <Award className="h-5 w-5 mr-2" />
                          {language === "ar"
                            ? "الرخصة المهنية"
                            : "Licence professionnelle"}
                        </CardTitle>
                        <CardDescription>
                          {language === "ar"
                            ? "شهادة مهنية أو ترخيص عمل"
                            : "Certificat ou autorisation d'exercer"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <Button variant="outline" size="sm">
                            {language === "ar" ? "رفع الملف" : "Télécharger"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Insurance */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          {language === "ar"
                            ? "شهادة التأمين"
                            : "Assurance responsabilité"}{" "}
                          *
                        </CardTitle>
                        <CardDescription>
                          {language === "ar"
                            ? "تأمين المسؤولية المهنية"
                            : "Assurance professionnelle valide"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <Button variant="outline" size="sm">
                            {language === "ar" ? "رفع الملف" : "Télécharger"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Bank Statement */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center">
                          <CreditCard className="h-5 w-5 mr-2" />
                          {language === "ar"
                            ? "كشف حساب بنكي"
                            : "Relevé bancaire"}{" "}
                          *
                        </CardTitle>
                        <CardDescription>
                          {language === "ar"
                            ? "RIB أو كشف حساب حديث"
                            : "RIB ou relevé récent"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <Button variant="outline" size="sm">
                            {language === "ar" ? "رفع الملف" : "Télécharger"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      className="flex-1"
                    >
                      {language === "ar" ? "السابق" : "Précédent"}
                    </Button>
                    <Button onClick={handleNext} className="flex-1">
                      {language === "ar" ? "التالي" : "Suivant"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Final Verification */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {language === "ar"
                        ? "التحقق النهائي"
                        : "Vérification finale"}
                    </h3>
                  </div>

                  {/* Profile Photo */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center">
                        <Camera className="h-5 w-5 mr-2" />
                        {language === "ar" ? "صورة شخصية" : "Photo de profil"} *
                      </CardTitle>
                      <CardDescription>
                        {language === "ar"
                          ? "صورة واضحة لوجهك ستظهر في ملفك الشخصي"
                          : "Photo claire de votre visage qui apparaîtra sur votre profil"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                        <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <Button variant="outline" size="sm">
                          {language === "ar"
                            ? "التقط صورة"
                            : "Prendre une photo"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) =>
                          handleInputChange("acceptTerms", checked)
                        }
                      />
                      <Label
                        htmlFor="terms"
                        className="text-sm leading-relaxed"
                      >
                        {language === "ar" ? (
                          <>
                            أوافق على{" "}
                            <Link
                              to="/terms"
                              className="text-primary hover:underline"
                            >
                              الشروط والأحكام
                            </Link>{" "}
                            و{" "}
                            <Link
                              to="/privacy"
                              className="text-primary hover:underline"
                            >
                              سياسة الخصوصية
                            </Link>
                            . أفهم أن جميع المعلومات المقدمة ستخضع للتحقق.
                          </>
                        ) : (
                          <>
                            J'accepte les{" "}
                            <Link
                              to="/terms"
                              className="text-primary hover:underline"
                            >
                              conditions générales
                            </Link>{" "}
                            et la{" "}
                            <Link
                              to="/privacy"
                              className="text-primary hover:underline"
                            >
                              politique de confidentialité
                            </Link>
                            . Je comprends que toutes les informations fournies
                            seront vérifiées.
                          </>
                        )}
                      </Label>
                    </div>
                  </div>

                  {/* Processing Time Info */}
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-800">
                            {language === "ar"
                              ? "وقت المعالجة"
                              : "Temps de traitement"}
                          </p>
                          <p className="text-sm text-blue-600">
                            {language === "ar"
                              ? "سيتم مراجعة طلبكم خلال 48-72 ساعة"
                              : "Votre candidature sera examinée sous 48-72h"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      className="flex-1"
                    >
                      {language === "ar" ? "السابق" : "Précédent"}
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="flex-1"
                      disabled={!formData.acceptTerms}
                    >
                      {language === "ar"
                        ? "إرسال الطلب"
                        : "Envoyer la candidature"}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">
                  {language === "ar" ? "هل تحتاج مساعدة؟" : "Besoin d'aide ?"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "ar"
                    ? "فريقنا متاح لمساعدتكم في عملية التسجيل"
                    : "Notre équipe est là pour vous aider dans le processus d'inscription"}
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    {language === "ar" ? "اتصل بنا" : "Nous appeler"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    {language === "ar" ? "راسلنا" : "Nous écrire"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
