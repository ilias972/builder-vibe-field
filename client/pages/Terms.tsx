import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText, Scale, Shield, AlertTriangle } from "lucide-react";

export default function Terms() {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <ScrollText className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">
            {language === "ar" ? "الشروط والأحكام" : "Conditions d'utilisation"}
          </h1>
          <p className="text-muted-foreground">
            {language === "ar"
              ? "آخر تحديث: 1 يناير 2024"
              : "Dernière mise à jour : 1er janvier 2024"}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                {language === "ar"
                  ? "1. القبول بالشروط"
                  : "1. Acceptation des conditions"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "باستخدام منصة خدمات، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا."
                  : "En utilisant la plateforme Khadamat, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {language === "ar"
                  ? "2. وصف الخدمة"
                  : "2. Description du service"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "خدمات هي منصة تربط بين العملاء ومقدمي الخدمات في المغرب. نحن نقدم خدمات الوساطة والدفع الآمن والتحقق من الهوية."
                  : "Khadamat est une plateforme qui connecte les clients et les prestataires de services au Maroc. Nous offrons des services de médiation, de paiement sécurisé et de vérification d'identité."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                {language === "ar"
                  ? "3. التحقق من الهوية"
                  : "3. Vérification d'identité"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "يجب على جميع المستخدمين التحقق من هويتهم باستخدام وثائق رسمية صالحة (بطاقة الهوية الوطنية أو جواز السفر). مقدمو الخدمات مطالبون بتقديم مستندات إضافية والخضوع للتحقق من الوجه."
                  : "Tous les utilisateurs doivent vérifier leur identité avec des documents officiels valides (Carte d'Identité Nationale ou passeport). Les prestataires sont tenus de fournir des documents supplémentaires et de subir une vérification faciale."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar"
                  ? "4. السلوك المقبول"
                  : "4. Conduite acceptable"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "يجب على المستخدمين التصرف بمهنية واحترام. أي سلوك مسيء أو احتيالي أو غير قانوني سيؤدي إلى إنهاء الحساب فوراً."
                  : "Les utilisateurs doivent se comporter de manière professionnelle et respectueuse. Tout comportement abusif, frauduleux ou illégal entraînera une résiliation immédiate du compte."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar"
                  ? "5. الدفع والرسوم"
                  : "5. Paiement et frais"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "تتقاضى المنصة عمولة على كل خدمة مكتملة. جميع المدفوعات تتم من خلال نظام الضمان الآمن الخاص بنا."
                  : "La plateforme perçoit une commission sur chaque service complété. Tous les paiements sont traités via notre système d'entiercement sécurisé."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar"
                  ? "6. إخلاء المسؤولية"
                  : "6. Limitation de responsabilité"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "خدمات بمثابة وسيط فقط. نحن لسنا مسؤولين عن جودة الخدمات المقدمة أو أي أضرار قد تنجم عن الخدمات."
                  : "Khadamat agit uniquement comme intermédiaire. Nous ne sommes pas responsables de la qualité des services fournis ou de tout dommage pouvant résulter des services."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar"
                  ? "7. القانون المطبق"
                  : "7. Droit applicable"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "هذه الشروط محكومة بالقانون المغربي. أي نزاع سيتم حله في المحاكم المغربية."
                  : "Ces conditions sont régies par le droit marocain. Tout litige sera résolu devant les tribunaux marocains."}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            {language === "ar"
              ? "للأسئلة حول هذه الشروط، يرجى الاتصال بنا على support@khadamat.ma"
              : "Pour toute question concernant ces conditions, contactez-nous à support@khadamat.ma"}
          </p>
        </div>
      </div>
    </div>
  );
}
