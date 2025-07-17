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
  UserCheck,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
} from "lucide-react";

export default function Register() {
  const { t, language } = useLanguage();
  const [userType, setUserType] = useState<"client" | "provider">("client");
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
    address: "",
    idType: "",
    idNumber: "",
    language: language,
    acceptTerms: false,
    acceptMarketing: false,
  });

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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the registration logic
    console.log("Registration data:", formData);
    alert("Inscription réussie ! Vérification en cours...");
  };

  return (
    <div className="min-h-screen bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {language === "ar" ? "إنشاء حساب جديد" : "Créer un compte"}
            </h1>
            <p className="text-muted-foreground">
              {language === "ar"
                ? "انضم إلى منصة خدمات واحصل على أفضل الخدمات"
                : "Rejoignez Khadamat et accédez aux meilleurs services"}
            </p>
          </div>

          {/* User Type Selection */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-center">
                {language === "ar" ? "نوع الحساب" : "Type de compte"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs
                value={userType}
                onValueChange={(value) =>
                  setUserType(value as "client" | "provider")
                }
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="client"
                    className="flex items-center gap-2"
                  >
                    <UserCheck className="h-4 w-4" />
                    {language === "ar" ? "عميل" : "Client"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="provider"
                    className="flex items-center gap-2"
                  >
                    <Shield className="h-4 w-4" />
                    {language === "ar" ? "مقدم خدمة" : "Prestataire"}
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {language === "ar"
                    ? `الخطوة ${step} من 3`
                    : `Étape ${step} sur 3`}
                </CardTitle>
                <div className="flex space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i <= step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
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
                        {language === "ar"
                          ? "رقم الهاتف"
                          : "Numéro de téléphone"}{" "}
                        *
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

                    <div>
                      <Label htmlFor="password">
                        {language === "ar" ? "كلمة المرور" : "Mot de passe"} *
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
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

                    <div>
                      <Label htmlFor="confirmPassword">
                        {language === "ar"
                          ? "تأكيد كلمة المرور"
                          : "Confirmer le mot de passe"}{" "}
                        *
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        required
                      />
                    </div>

                    <Button
                      type="button"
                      onClick={handleNext}
                      className="w-full"
                    >
                      {language === "ar" ? "التالي" : "Suivant"}
                    </Button>
                  </div>
                )}

                {/* Step 2: Location & Language */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="city">
                        {language === "ar" ? "المدينة" : "Ville"} *
                      </Label>
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

                    <div>
                      <Label htmlFor="address">
                        {language === "ar" ? "العنوان" : "Adresse"}
                      </Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        placeholder={
                          language === "ar"
                            ? "الحي، الشارع..."
                            : "Quartier, rue..."
                        }
                      />
                    </div>

                    <div>
                      <Label>
                        {language === "ar"
                          ? "اللغة المفضلة"
                          : "Langue préférée"}
                      </Label>
                      <Select
                        value={formData.language}
                        onValueChange={(value) =>
                          handleInputChange("language", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="ar">العربية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        className="flex-1"
                      >
                        {language === "ar" ? "السابق" : "Précédent"}
                      </Button>
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1"
                      >
                        {language === "ar" ? "التالي" : "Suivant"}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Identity Verification */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        {language === "ar"
                          ? "التحقق من الهوية"
                          : "Vérification d'identité"}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {language === "ar"
                          ? "للحفاظ على أمان المنصة، نحتاج للتحقق من هويتك"
                          : "Pour la sécurité de la plateforme, nous devons vérifier votre identité"}
                      </p>
                    </div>

                    <div>
                      <Label>
                        {language === "ar" ? "نوع الوثيقة" : "Type de document"}{" "}
                        *
                      </Label>
                      <Select
                        value={formData.idType}
                        onValueChange={(value) =>
                          handleInputChange("idType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              language === "ar"
                                ? "اختر نوع الوثيقة"
                                : "Sélectionnez le type"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cin">
                            {language === "ar"
                              ? "البطاقة الوطنية (CIN)"
                              : "Carte d'identité nationale (CIN)"}
                          </SelectItem>
                          <SelectItem value="passport">
                            {language === "ar" ? "جواز السفر" : "Passeport"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="idNumber">
                        {language === "ar"
                          ? "رقم الوثيقة"
                          : "Numéro du document"}{" "}
                        *
                      </Label>
                      <Input
                        id="idNumber"
                        value={formData.idNumber}
                        onChange={(e) =>
                          handleInputChange("idNumber", e.target.value)
                        }
                        required
                      />
                    </div>

                    {/* Document Upload */}
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          {language === "ar"
                            ? "ارفع صورة الوثيقة"
                            : "Télécharger la photo du document"}
                        </p>
                        <Button variant="outline" size="sm">
                          {language === "ar"
                            ? "اختر ملف"
                            : "Choisir un fichier"}
                        </Button>
                      </div>

                      <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                        <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          {language === "ar"
                            ? "التحقق بالوجه"
                            : "Vérification faciale"}
                        </p>
                        <Button variant="outline" size="sm">
                          {language === "ar"
                            ? "التقط صورة"
                            : "Prendre une photo"}
                        </Button>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.acceptTerms}
                          onCheckedChange={(checked) =>
                            handleInputChange("acceptTerms", checked as boolean)
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
                                الشروط والأحكام
                              </Link>
                            </>
                          ) : (
                            <>
                              J'accepte les{" "}
                              <Link
                                to="/terms"
                                className="text-primary hover:underline"
                              >
                                conditions générales d'utilisation
                              </Link>
                            </>
                          )}
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="marketing"
                          checked={formData.acceptMarketing}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "acceptMarketing",
                              checked as boolean,
                            )
                          }
                        />
                        <Label htmlFor="marketing" className="text-sm">
                          {language === "ar"
                            ? "أوافق على تلقي العروض والأخبار"
                            : "J'accepte de recevoir des offres et actualités"}
                        </Label>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        className="flex-1"
                      >
                        {language === "ar" ? "السابق" : "Précédent"}
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1"
                        disabled={!formData.acceptTerms}
                      >
                        {language === "ar" ? "إنشاء الحساب" : "Créer le compte"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              {language === "ar"
                ? "لديك حساب بالفعل؟ "
                : "Vous avez déjà un compte ? "}
              <Link to="/login" className="text-primary hover:underline">
                {language === "ar" ? "تسجيل الدخول" : "Se connecter"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
