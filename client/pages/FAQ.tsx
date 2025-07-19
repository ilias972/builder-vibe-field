import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HelpCircle, Search, MessageSquare, Phone } from "lucide-react";

export default function FAQ() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      id: "1",
      question:
        language === "ar"
          ? "كيف يمكنني التسجيل في المنصة؟"
          : "Comment puis-je m'inscrire sur la plateforme ?",
      answer:
        language === "ar"
          ? "للعملاء: اختر 'تسجيل' وقدم رقم الهوية الوطنية أو جواز السفر للتحقق. للمقدمين: اختر 'كن مقدم خدمة' وقدم المستندات المطلوبة والتحقق من الوجه."
          : "Pour les clients : choisissez 'Inscription' et fournissez votre numéro CIN ou passeport pour vérification. Pour les prestataires : choisissez 'Devenir prestataire' et fournissez les documents requis et la vérification faciale.",
      category: "account",
    },
    {
      id: "2",
      question:
        language === "ar"
          ? "كيف تعمل عملية الدفع؟"
          : "Comment fonctionne le processus de paiement ?",
      answer:
        language === "ar"
          ? "نستخدم نظام ضمان آمن. يتم حجز المبلغ عند الحجز ولا يتم دفعه للمقدم إلا بعد إتمام الخدمة بنجاح."
          : "Nous utilisons un système d'entiercement sécurisé. Le montant est bloqué lors de la réservation et n'est versé au prestataire qu'après completion réussie du service.",
      category: "payment",
    },
    {
      id: "3",
      question:
        language === "ar" ? "ما هو Club Pro؟" : "Qu'est-ce que le Club Pro ?",
      answer:
        language === "ar"
          ? "Club Pro هو اشتراك سنوي بـ 300 درهم يمنح المقدمين المؤهلين الوصول لمشاريع عالية القيمة (5,000-50,000 درهم). يتطلب 50+ مهمة مكتملة وتقييم 4.2/5."
          : "Club Pro est un abonnement annuel de 300 DH qui donne aux prestataires qualifiés accès à des projets de haute valeur (5,000-50,000 DH). Nécessite 50+ missions complétées et une note de 4.2/5.",
      category: "clubpro",
    },
    {
      id: "4",
      question:
        language === "ar"
          ? "كيف يمكنني الإبلاغ عن مشكلة؟"
          : "Comment puis-je signaler un problème ?",
      answer:
        language === "ar"
          ? "يمكنك استخدام نظام المراسلة المدمج، الاتصال بخدمة العملاء، أو في الحالات الطارئة استخدام زر SOS 24/7."
          : "Vous pouvez utiliser le système de messagerie intégré, contacter le service client, ou en cas d'urgence utiliser le bouton SOS 24/7.",
      category: "support",
    },
    {
      id: "5",
      question:
        language === "ar"
          ? "ما هي متطلبات التحقق من الهوية؟"
          : "Quelles sont les exigences de vérification d'identité ?",
      answer:
        language === "ar"
          ? "العمل��ء: رقم الهوية الوطنية أو جواز السفر. المقدمون: نفس المتطلبات + مستند واحد على الأقل (PDF/PNG/JPEG) + التحقق من الوجه."
          : "Clients : numéro CIN ou passeport. Prestataires : mêmes exigences + au moins un document (PDF/PNG/JPEG) + vérification faciale.",
      category: "verification",
    },
    {
      id: "6",
      question:
        language === "ar"
          ? "كيف يمكنني إلغاء حجز؟"
          : "Comment puis-je annuler une réservation ?",
      answer:
        language === "ar"
          ? "يمكن إلغاء الحجوزات حتى 24 ساعة قبل موعد الخدمة مع استرداد كامل. بعد ذلك، تطبق شروط الإلغاء."
          : "Les réservations peuvent être annulées jusqu'à 24 heures avant le service avec remboursement complet. Après, les conditions d'annulation s'appliquent.",
      category: "booking",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const categories = [
    { id: "account", name: language === "ar" ? "الحساب" : "Compte" },
    { id: "payment", name: language === "ar" ? "الدفع" : "Paiement" },
    { id: "clubpro", name: "Club Pro" },
    { id: "support", name: language === "ar" ? "الدعم" : "Support" },
    { id: "verification", name: language === "ar" ? "التحقق" : "Vérification" },
    { id: "booking", name: language === "ar" ? "الحجز" : "Réservation" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">
            {language === "ar"
              ? "الأسئلة الشائعة"
              : "Questions fréquemment posées"}
          </h1>
          <p className="text-muted-foreground">
            {language === "ar"
              ? "ابحث عن إجابات لأسئلتك الأكثر شيوعاً"
              : "Trouvez des réponses à vos questions les plus courantes"}
          </p>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder={
                  language === "ar"
                    ? "ابحث في الأسئلة الشائعة..."
                    : "Rechercher dans les FAQ..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer hover:bg-accent transition-colors"
              onClick={() => {
                const element = document.getElementById(
                  `category-${category.id}`,
                );
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <CardContent className="p-4 text-center">
                <h3 className="font-medium">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Accordion */}
        <Card>
          <CardHeader>
            <CardTitle>
              {language === "ar" ? "جميع الأسئلة" : "Toutes les questions"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  id={`category-${faq.category}`}
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              {language === "ar"
                ? "لم تجد إجابتك؟"
                : "Vous ne trouvez pas votre réponse ?"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              {language === "ar"
                ? "فريق الدعم لدينا متاح لمساعدتك"
                : "Notre équipe de support est disponible pour vous aider"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Card className="flex-1">
                <CardContent className="p-4 text-center">
                  <MessageSquare className="h-8 w-8 mx-auto text-primary mb-2" />
                  <h4 className="font-medium mb-1">
                    {language === "ar" ? "دردشة مباشرة" : "Chat en direct"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" ? "متاح 24/7" : "Disponible 24/7"}
                  </p>
                </CardContent>
              </Card>
              <Card className="flex-1">
                <CardContent className="p-4 text-center">
                  <Phone className="h-8 w-8 mx-auto text-primary mb-2" />
                  <h4 className="font-medium mb-1">
                    {language === "ar" ? "هاتف" : "Téléphone"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    +212 5XX-XXX-XXX
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
