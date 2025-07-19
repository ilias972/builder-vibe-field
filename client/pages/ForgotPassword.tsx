import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { KeyRound, Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-xl">
              {language === "ar"
                ? "تم إرسال البريد الإلكتروني"
                : "Email envoyé"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <Mail className="h-4 w-4" />
              <AlertDescription>
                {language === "ar"
                  ? `تم إرسال رابط إعادة تعيين كلمة المرور إلى ${email}. يرجى التحقق من صندوق الوارد الخاص بك.`
                  : `Un lien de réinitialisation du mot de passe a été envoyé à ${email}. Veuillez vérifier votre boîte de réception.`}
              </AlertDescription>
            </Alert>

            <div className="space-y-4 mt-6">
              <Button asChild className="w-full">
                <Link to="/login">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {language === "ar"
                    ? "العودة إلى تسجيل الدخول"
                    : "Retour à la connexion"}
                </Link>
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {language === "ar"
                    ? "لم تتلق البريد الإلكتروني؟"
                    : "Vous n'avez pas reçu l'email ?"}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto"
                  onClick={() => setIsSubmitted(false)}
                >
                  {language === "ar" ? "إعادة الإرسال" : "Renvoyer"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <KeyRound className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl">
            {language === "ar" ? "نسيت كلمة المرور؟" : "Mot de passe oublié ?"}
          </CardTitle>
          <p className="text-muted-foreground">
            {language === "ar"
              ? "أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة تعيين كلمة المرور"
              : "Entrez votre email et nous vous enverrons un lien pour réinitialiser votre mot de passe"}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                {language === "ar" ? "البريد الإلكتروني" : "Adresse email"}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={
                  language === "ar"
                    ? "أدخل بريدك الإلكتروني"
                    : "Entrez votre email"
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-left"
                dir="ltr"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  {language === "ar" ? "جاري الإرسال..." : "Envoi en cours..."}
                </div>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  {language === "ar"
                    ? "إرسال رابط إعادة التعيين"
                    : "Envoyer le lien de réinitialisation"}
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {language === "ar"
                ? "العودة إلى تسجيل الدخول"
                : "Retour à la connexion"}
            </Link>
          </div>

          <div className="mt-6 text-center border-t pt-6">
            <p className="text-sm text-muted-foreground">
              {language === "ar" ? "ليس لديك حساب؟" : "Pas encore de compte ?"}
            </p>
            <Link to="/register" className="text-primary hover:underline">
              {language === "ar" ? "إنشاء حساب جديد" : "Créer un compte"}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
