import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  UserCheck,
  Phone,
  Shield,
  CheckCircle,
  Eye,
  EyeOff,
  CreditCard,
} from "lucide-react";

export default function Register() {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    idType: "",
    idNumber: "",
    acceptTerms: false,
    acceptMarketing: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call for verification
    setTimeout(() => {
      setIsLoading(false);
      setStep(4); // Show success step
    }, 2000);
  };

  const getStepTitle = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return language === "ar"
          ? "معلومات شخصية"
          : "Informations personnelles";
      case 2:
        return language === "ar" ? "رقم الهاتف" : "Numéro de téléphone";
      case 3:
        return language === "ar"
          ? "التحقق من الهوية"
          : "Vérification d'identité";
      case 4:
        return language === "ar"
          ? "تأكيد التسجيل"
          : "Confirmation d'inscription";
      default:
        return "";
    }
  };

  if (step === 4) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-xl text-green-600">
              {language === "ar"
                ? "تم إنشاء الحساب بنجاح!"
                : "Compte créé avec succès !"}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                {language === "ar"
                  ? "تم إرسال طلب التحقق من الهوية. ستتلقى إشعاراً خلال 24-48 ساعة."
                  : "Demande de vérification d'identité envoyée. Vous recevrez une notification sous 24-48 heures."}
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/login">
                  {language === "ar" ? "تسجيل الدخول" : "Se connecter"}
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/">
                  {language === "ar" ? "العودة للرئيسية" : "Retour à l'accueil"}
                </Link>
              </Button>
            </div>

            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-medium text-orange-900 mb-2">
                {language === "ar"
                  ? "هل تريد تقديم خدمات؟"
                  : "Vous souhaitez proposer des services ?"}
              </h4>
              <p className="text-sm text-orange-700 mb-3">
                {language === "ar"
                  ? "يمكنك الانضمام إلى Club Pro لتقديم خدماتك والوصول لمشاريع عالية القيمة"
                  : "Vous pouvez rejoindre Club Pro pour proposer vos services et accéder à des projets de haute valeur"}
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/club-pro/register">
                  <Shield className="mr-2 h-4 w-4" />
                  {language === "ar" ? "انضم إلى Club Pro" : "Rejoindre Club Pro"}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <UserCheck className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              {language === "ar" ? "إنشاء حساب" : "Créer un compte"}
            </h1>
            <p className="text-muted-foreground">
              {language === "ar"
                ? "انضم إلى خدمات للوصول إلى أفضل الخدمات المنزلية"
                : "Rejoignez Khadamat pour accéder aux meilleurs services à domicile"}
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNumber
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-12 h-1 mx-2 ${
                        step > stepNumber ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2 text-center">
              <p className="text-sm text-muted-foreground">
                {getStepTitle(step)} - {language === "ar" ? "خطوة" : "Étape"}{" "}
                {step}/3
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{getStepTitle(step)}</CardTitle>
              <CardDescription>
                {step === 1 &&
                  (language === "ar"
                    ? "أدخل معلوماتك الشخصية الأساسية"
                    : "Entrez vos informations personnelles de base")}
                {step === 2 &&
                  (language === "ar"
                    ? "التسجيل ممكن فقط برقم الهاتف"
                    : "L'inscription est possible uniquement par téléphone")}
                {step === 3 &&
                  (language === "ar"
                    ? "تحقق من هويتك باستخدام وثيقة رسمية"
                    : "Vérifiez votre identité avec un document officiel")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={
                  step === 3
                    ? handleSubmit
                    : (e) => {
                        e.preventDefault();
                        handleNext();
                      }
                }
              >
                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
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
                      <div className="space-y-2">
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

                    <div className="space-y-2">
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
                          className="absolute right-2 top-1/2 -translate-y-1/2"
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

                    <div className="space-y-2">
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
                  </div>
                )}

                {/* Step 2: Phone Number */}
                {step === 2 && (
                  <div className="space-y-4">
                    <Alert>
                      <Phone className="h-4 w-4" />
                      <AlertDescription>
                        {language === "ar"
                          ? "التسجيل ممكن فقط برقم الهاتف. سيتم إرسال رمز التحقق عبر SMS."
                          : "L'inscription est possible uniquement par téléphone. Un code de vérification sera envoyé par SMS."}
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        {language === "ar" ? "رقم الهاتف" : "Numéro de téléphone"} *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          className="pl-10"
                          placeholder="+212 6XX-XXX-XXX"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {language === "ar"
                          ? "سيتم استخدام هذا الرقم كبريد إلكتروني للحساب"
                          : "Ce numéro sera utilisé comme email pour le compte"}
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: Identity Verification */}
                {step === 3 && (
                  <div className="space-y-6">
                    <Alert>
                      <CreditCard className="h-4 w-4" />
                      <AlertDescription>
                        {language === "ar"
                          ? "يجب التحقق من الهوية باستخدام رقم الهوية الوطنية أو جواز السفر"
                          : "Vérification d'identité requise avec numéro CIN ou passeport"}
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="idType">
                          {language === "ar"
                            ? "نوع الوثيقة"
                            : "Type de document"}{" "}
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
                                  : "Sélectionnez le type de document"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cin">
                              {language === "ar"
                                ? "بطاقة الهوية الوطنية (CIN)"
                                : "Carte d'Identité Nationale (CIN)"}
                            </SelectItem>
                            <SelectItem value="passport">
                              {language === "ar" ? "جواز السفر" : "Passeport"}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
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
                          placeholder={
                            formData.idType === "cin"
                              ? language === "ar"
                                ? "مثال: A123456"
                                : "ex: A123456"
                              : language === "ar"
                                ? "مثال: AB1234567"
                                : "ex: AB1234567"
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
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
                              </Link>{" "}
                              و{" "}
                              <Link
                                to="/privacy"
                                className="text-primary hover:underline"
                              >
                                سياسة الخصوصية
                              </Link>
                            </>
                          ) : (
                            <>
                              J'accepte les{" "}
                              <Link
                                to="/terms"
                                className="text-primary hover:underline"
                              >
                                conditions d'utilisation
                              </Link>{" "}
                              et la{" "}
                              <Link
                                to="/privacy"
                                className="text-primary hover:underline"
                              >
                                politique de confidentialité
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
                            ? "أوافق على تلقي العروض والأخبار عبر SMS"
                            : "J'accepte de recevoir des offres et actualités par SMS"}
                        </Label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevious}
                    >
                      {language === "ar" ? "السابق" : "Précédent"}
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button
                      type="submit"
                      className={step === 1 ? "ml-auto" : ""}
                      disabled={
                        (step === 1 &&
                          (!formData.firstName ||
                            !formData.lastName ||
                            !formData.password ||
                            !formData.confirmPassword ||
                            formData.password !== formData.confirmPassword)) ||
                        (step === 2 && !formData.phone)
                      }
                    >
                      {language === "ar" ? "التالي" : "Suivant"}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={
                        !formData.idType ||
                        !formData.idNumber ||
                        !formData.acceptTerms ||
                        isLoading
                      }
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          {language === "ar"
                            ? "جاري التحقق..."
                            : "Vérification..."}
                        </div>
                      ) : language === "ar" ? (
                        "إنشاء الحساب"
                      ) : (
                        "Créer le compte"
                      )}
                    </Button>
                  )}
                </div>
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
