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
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Crown,
  Upload,
  FileText,
  Building,
  Shield,
  CreditCard,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function ClubProRegister() {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Professional services
    services: [] as string[],
    experience: "",
    // Required documents
    patenteFile: null as File | null,
    rcFile: null as File | null,
    assuranceFile: null as File | null,
    iceNumber: "",
    // Payment
    paymentMethod: "",
    acceptClubTerms: false,
    acceptPayment: false,
  });

  const services = [
    "plumbing",
    "electrical",
    "cleaning",
    "painting",
    "carpentry",
    "gardening",
    "masonry",
    "roofing",
    "flooring",
    "heating",
    "air_conditioning",
  ];

  const handleInputChange = (field: string, value: string | boolean | File | File[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
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

    // Simulate API call for verification and payment
    setTimeout(() => {
      setIsLoading(false);
      setStep(4); // Show success step
    }, 3000);
  };

  const getStepTitle = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return language === "ar" ? "الخدمات والخبرة" : "Services et expérience";
      case 2:
        return language === "ar"
          ? "الوثائق المطلوبة"
          : "Documents requis";
      case 3:
        return language === "ar" ? "الدفع" : "Paiement";
      case 4:
        return language === "ar" ? "تأكيد الانضمام" : "Confirmation d'adhésion";
      default:
        return "";
    }
  };

  if (step === 4) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-background to-orange-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl text-orange-600">
              {language === "ar"
                ? "مرحباً بك في Club Pro!"
                : "Bienvenue dans Club Pro !"}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                {language === "ar"
                  ? "تم استلام طلبك بنجاح. سيتم مراجعة الوثائق خلال 48-72 ساعة."
                  : "Votre demande a été reçue avec succès. Les documents seront examinés sous 48-72 heures."}
              </AlertDescription>
            </Alert>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
              <h4 className="font-medium text-orange-900 mb-2">
                {language === "ar" ? "ما التالي؟" : "Que se passe-t-il ensuite ?"}
              </h4>
              <ul className="text-sm text-orange-700 space-y-1 text-left">
                <li>✓ {language === "ar" ? "مراجعة الوثائق" : "Examen des documents"}</li>
                <li>✓ {language === "ar" ? "تأكيد الدفع" : "Confirmation du paiement"}</li>
                <li>✓ {language === "ar" ? "تفعيل الحساب" : "Activation du compte"}</li>
                <li>✓ {language === "ar" ? "الوصول للمشاريع الحصرية" : "Accès aux projets exclusifs"}</li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/login">
                  {language === "ar" ? "تسجيل الدخول" : "Se connecter"}
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/club-pro">
                  {language === "ar" ? "معرفة المزيد عن Club Pro" : "En savoir plus sur Club Pro"}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-background to-orange-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Crown className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {language === "ar" ? "انضم إلى Club Pro" : "Rejoindre Club Pro"}
            </h1>
            <p className="text-muted-foreground">
              {language === "ar"
                ? "اشتراك سنوي 500 درهم للوصول لمشاريع عالية القيمة"
                : "Abonnement annuel 500 DH pour accéder aux projets de haute valeur"}
            </p>
          </div>

          {/* Pricing Info */}
          <Card className="mb-8 border-orange-200 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">500 DH/an</div>
                <p className="text-muted-foreground mb-4">
                  {language === "ar"
                    ? "اشتراك سنوي للوصول لمشاريع 5,000 - 50,000 درهم"
                    : "Abonnement annuel pour accéder aux projets de 5,000 - 50,000 DH"}
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{language === "ar" ? "مشاريع حصرية" : "Projets exclusifs"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{language === "ar" ? "عمولة مخفضة" : "Commission réduite"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{language === "ar" ? "أولوية في البحث" : "Priorité dans la recherche"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{language === "ar" ? "دعم مخصص" : "Support dédié"}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNumber
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-12 h-1 mx-2 ${
                        step > stepNumber ? "bg-gradient-to-r from-yellow-400 to-orange-500" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2 text-center">
              <p className="text-sm text-muted-foreground">
                {getStepTitle(step)} - {language === "ar" ? "خطوة" : "Étape"} {step}/3
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{getStepTitle(step)}</CardTitle>
              <CardDescription>
                {step === 1 &&
                  (language === "ar"
                    ? "اختر خدماتك وسنوات خبرتك"
                    : "Sélectionnez vos services et années d'expérience")}
                {step === 2 &&
                  (language === "ar"
                    ? "ارفع الوثائق المطلوبة للتحقق من صحة عملك"
                    : "Téléchargez les documents requis pour vérifier votre activité")}
                {step === 3 &&
                  (language === "ar"
                    ? "اختر طريقة الدفع لاشتراك Club Pro"
                    : "Choisissez votre méthode de paiement pour l'abonnement Club Pro")}
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
                {/* Step 1: Services & Experience */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>
                        {language === "ar" ? "الخدمات المقدمة" : "Services proposés"} *
                      </Label>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleInputChange("services", [...formData.services, service]);
                                } else {
                                  handleInputChange(
                                    "services",
                                    formData.services.filter((s) => s !== service),
                                  );
                                }
                              }}
                            />
                            <Label htmlFor={service} className="text-sm">
                              {language === "ar" ? service : service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">
                        {language === "ar" ? "سنوات الخبرة" : "Années d'expérience"} *
                      </Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) => handleInputChange("experience", value)}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              language === "ar" ? "اختر خبرتك" : "Sélectionnez votre expérience"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">
                            1-3 {language === "ar" ? "سنوات" : "ans"}
                          </SelectItem>
                          <SelectItem value="3-5">
                            3-5 {language === "ar" ? "سنوات" : "ans"}
                          </SelectItem>
                          <SelectItem value="5-10">
                            5-10 {language === "ar" ? "سنوات" : "ans"}
                          </SelectItem>
                          <SelectItem value="10+">
                            {language === "ar" ? "أكثر من 10 سنوات" : "Plus de 10 ans"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Required Documents */}
                {step === 2 && (
                  <div className="space-y-6">
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        {language === "ar"
                          ? "جميع الوثائق التالية مطلوبة للانضمام إلى Club Pro"
                          : "Tous les documents suivants sont requis pour rejoindre Club Pro"}
                      </AlertDescription>
                    </Alert>

                    {/* Patente */}
                    <div className="space-y-2">
                      <Label htmlFor="patente">
                        {language === "ar" ? "البراءة المهنية (Patente)" : "Patente professionnelle"} *
                      </Label>
                      <Input
                        id="patente"
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={(e) => handleFileUpload("patenteFile", e.target.files?.[0] || null)}
                        required
                      />
                    </div>

                    {/* RC */}
                    <div className="space-y-2">
                      <Label htmlFor="rc">
                        {language === "ar" ? "السجل التجاري (RC)" : "Registre de Commerce (RC)"} *
                      </Label>
                      <Input
                        id="rc"
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={(e) => handleFileUpload("rcFile", e.target.files?.[0] || null)}
                        required
                      />
                    </div>

                    {/* Assurance */}
                    <div className="space-y-2">
                      <Label htmlFor="assurance">
                        {language === "ar" ? "وثيقة التأمين المهني" : "Assurance professionnelle"} *
                      </Label>
                      <Input
                        id="assurance"
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={(e) => handleFileUpload("assuranceFile", e.target.files?.[0] || null)}
                        required
                      />
                    </div>

                    {/* ICE Number */}
                    <div className="space-y-2">
                      <Label htmlFor="ice">
                        {language === "ar" ? "رقم التسجيل الموحد (ICE)" : "Numéro ICE (Identifiant Commun de l'Entreprise)"} *
                      </Label>
                      <Input
                        id="ice"
                        placeholder={language === "ar" ? "مثال: 123456789012345" : "ex: 123456789012345"}
                        value={formData.iceNumber}
                        onChange={(e) => handleInputChange("iceNumber", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <div className="space-y-6">
                    <Alert>
                      <CreditCard className="h-4 w-4" />
                      <AlertDescription>
                        {language === "ar"
                          ? "اشتراك Club Pro: 500 درهم سنوياً"
                          : "Abonnement Club Pro : 500 DH par an"}
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-2">
                      <Label>
                        {language === "ar" ? "طريقة الدفع" : "Méthode de paiement"} *
                      </Label>
                      <Select
                        value={formData.paymentMethod}
                        onValueChange={(value) => handleInputChange("paymentMethod", value)}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              language === "ar"
                                ? "اختر طريقة الدفع"
                                : "Sélectionnez la méthode de paiement"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">
                            {language === "ar" ? "بطاقة بنكية" : "Carte bancaire"}
                          </SelectItem>
                          <SelectItem value="bank_transfer">
                            {language === "ar" ? "تحويل بنكي" : "Virement bancaire"}
                          </SelectItem>
                          <SelectItem value="mobile_money">
                            {language === "ar" ? "المحفظة الإلكترونية" : "Portefeuille mobile"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="clubTerms"
                          checked={formData.acceptClubTerms}
                          onCheckedChange={(checked) =>
                            handleInputChange("acceptClubTerms", checked as boolean)
                          }
                        />
                        <Label htmlFor="clubTerms" className="text-sm">
                          {language === "ar" ? (
                            <>
                              أوافق على{" "}
                              <Link to="/club-pro/terms" className="text-primary hover:underline">
                                شروط وأحكام Club Pro
                              </Link>
                            </>
                          ) : (
                            <>
                              J'accepte les{" "}
                              <Link to="/club-pro/terms" className="text-primary hover:underline">
                                conditions d'utilisation Club Pro
                              </Link>
                            </>
                          )}
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="payment"
                          checked={formData.acceptPayment}
                          onCheckedChange={(checked) =>
                            handleInputChange("acceptPayment", checked as boolean)
                          }
                        />
                        <Label htmlFor="payment" className="text-sm">
                          {language === "ar"
                            ? "أؤكد موافقتي على دفع 500 درهم سنوياً لاشتراك Club Pro"
                            : "Je confirme accepter de payer 500 DH par an pour l'abonnement Club Pro"}
                        </Label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={handlePrevious}>
                      {language === "ar" ? "السابق" : "Précédent"}
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button
                      type="submit"
                      className={`${step === 1 ? "ml-auto" : ""} bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600`}
                      disabled={
                        (step === 1 && (formData.services.length === 0 || !formData.experience)) ||
                        (step === 2 &&
                          (!formData.patenteFile ||
                            !formData.rcFile ||
                            !formData.assuranceFile ||
                            !formData.iceNumber))
                      }
                    >
                      {language === "ar" ? "التالي" : "Suivant"}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                      disabled={
                        !formData.paymentMethod ||
                        !formData.acceptClubTerms ||
                        !formData.acceptPayment ||
                        isLoading
                      }
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          {language === "ar" ? "جاري المعالجة..." : "Traitement..."}
                        </div>
                      ) : (
                        <>
                          <Crown className="mr-2 h-4 w-4" />
                          {language === "ar" ? "انضم إلى Club Pro" : "Rejoindre Club Pro"}
                        </>
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
              {language === "ar" ? "لديك حساب بالفعل؟ " : "Vous avez déjà un compte ? "}
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
