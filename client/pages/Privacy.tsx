import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, UserCheck } from "lucide-react";

export default function Privacy() {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">
            {language === "ar"
              ? "سياسة الخصوصية"
              : "Politique de confidentialité"}
          </h1>
          <p className="text-muted-foreground">
            {language === "ar"
              ? "��خر تحديث: 1 يناير 2024"
              : "Dernière mise à jour : 1er janvier 2024"}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                {language === "ar"
                  ? "1. المعلومات التي نجمعها"
                  : "1. Informations que nous collectons"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "نجمع المعلومات التالية: معلومات الهوية (رقم CIN، جواز السفر)، معلومات الاتصال، معلومات الخدمة، وبيانات الاستخدام."
                  : "Nous collectons les informations suivantes : informations d'identité (numéro CIN, passeport), informations de contact, informations de service, et données d'utilisation."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                {language === "ar"
                  ? "2. التحقق من الهوية"
                  : "2. Vérification d'identité"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "للعملاء: التحقق بواسطة رقم الهوية الوطنية أو جواز السفر. للمقدمين: مستندات إضافية (PDF, PNG, JPEG) والتحقق من الوجه مطلوب."
                  : "Pour les clients : vérification par numéro de CIN ou passeport. Pour les prestataires : documents supplémentaires (PDF, PNG, JPEG) et vérification faciale requise."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                {language === "ar"
                  ? "3. كيف نستخدم معلوماتك"
                  : "3. Comment nous utilisons vos informations"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  {language === "ar"
                    ? "التحقق من الهوية والسلامة"
                    : "Vérification d'identité et sécurité"}
                </li>
                <li>
                  {language === "ar"
                    ? "معالجة المدفوعات"
                    : "Traitement des paiements"}
                </li>
                <li>
                  {language === "ar"
                    ? "تحسين خدماتنا"
                    : "Amélioration de nos services"}
                </li>
                <li>
                  {language === "ar"
                    ? "التواصل معك"
                    : "Communication avec vous"}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                {language === "ar"
                  ? "4. حماية البيانات"
                  : "4. Protection des données"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "نستخدم تشفير SSL/TLS، تخزين آمن، وضوابط وصول صارمة لحماية معلوماتك الشخصية."
                  : "Nous utilisons le chiffrement SSL/TLS, un stockage sécurisé, et des contrôles d'accès stricts pour protéger vos informations personnelles."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar"
                  ? "5. مشاركة المعلومات"
                  : "5. Partage d'informations"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "لا نبيع أو نؤجر معلوماتك الشخصية. قد نشارك معلومات محدودة مع مقدمي الخدمات للتحقق من الهوية والسلامة."
                  : "Nous ne vendons ni ne louons vos informations personnelles. Nous pouvons partager des informations limitées avec les prestataires pour la vérification d'identité et la sécurité."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "6. حقوقك" : "6. Vos droits"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  {language === "ar"
                    ? "الوصول إلى بياناتك"
                    : "Accès à vos données"}
                </li>
                <li>
                  {language === "ar"
                    ? "تصحيح المعلومات"
                    : "Correction d'informations"}
                </li>
                <li>
                  {language === "ar" ? "حذف الحساب" : "Suppression de compte"}
                </li>
                <li>
                  {language === "ar"
                    ? "نقل البيانات"
                    : "Portabilité des données"}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "7. الاتصال بنا" : "7. Nous contacter"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {language === "ar"
                  ? "للأس��لة حول هذه السياسة أو لممارسة حقوقك، اتصل بنا على:"
                  : "Pour toute question sur cette politique ou pour exercer vos droits, contactez-nous à :"}
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">Email: privacy@khadamat.ma</p>
                <p>
                  {language === "ar"
                    ? "الهاتف: +212 5XX-XXX-XXX"
                    : "Téléphone : +212 5XX-XXX-XXX"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
