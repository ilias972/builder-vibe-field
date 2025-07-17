import { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Messaging } from "@/components/Messaging";
import {
  Star,
  MapPin,
  Calendar,
  Shield,
  Award,
  MessageSquare,
  Phone,
  Video,
  Clock,
  CheckCircle,
  Users,
  Wrench,
} from "lucide-react";

export default function ProviderProfile() {
  const { id } = useParams();
  const { language } = useLanguage();
  const [showMessaging, setShowMessaging] = useState(false);

  // Mock provider data - would come from API
  const provider = {
    id: id || "1",
    name: "Ahmed Bennani",
    service: "Plomberie",
    city: "Casablanca",
    rating: 4.9,
    reviews: 147,
    verified: true,
    proClub: false,
    price: "150",
    avatar: "/placeholder.svg",
    description:
      "Plombier professionnel avec 15 ans d'expérience. Intervention rapide et garantie sur tous mes travaux.",
    descriptionAr:
      "سباك محترف مع 15 سنة من الخبرة. تدخل سريع وضمان على جميع أعمالي.",
    skills: ["Plomberie générale", "Dépannage urgence", "Installation"],
    skillsAr: ["سباكة عامة", "إصلاح طوارئ", "تركيب"],
    languages: ["Français", "العربية"],
    joinDate: "2019-03-15",
    completedMissions: 147,
    responseTime: "< 30 min",
    availability: "24/7",
  };

  const reviews = [
    {
      id: 1,
      clientName: "Sara Alami",
      rating: 5,
      comment:
        "Service excellent ! Ahmed a résolu mon problème de fuite rapidement et proprement.",
      commentAr: "خدمة ممتازة! أحمد حل مشكلة التسريب بسرعة ونظافة.",
      date: "2024-01-15",
      service: "Réparation fuite",
    },
    {
      id: 2,
      clientName: "Mohammed Tazi",
      rating: 5,
      comment: "Très professionnel et ponctuel. Je le recommande vivement.",
      commentAr: "محترف جداً ودقيق في المواعيد. أنصح به بشدة.",
      date: "2024-01-10",
      service: "Installation",
    },
  ];

  const portfolio = [
    {
      id: 1,
      title: "Rénovation salle de bain",
      titleAr: "تجديد الحمام",
      image: "/placeholder.svg",
      description: "Rénovation complète avec installation moderne",
      descriptionAr: "تجديد كامل مع تركيب حديث",
    },
    {
      id: 2,
      title: "Installation cuisine",
      titleAr: "تركيب المطبخ",
      image: "/placeholder.svg",
      description: "Installation complète plomberie cuisine",
      descriptionAr: "تركيب كامل لسباكة المطبخ",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Provider Header */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={provider.avatar} alt={provider.name} />
                  <AvatarFallback className="text-2xl">
                    {provider.name[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold flex items-center gap-2">
                        {provider.name}
                        {provider.verified && (
                          <Badge variant="secondary" className="text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            {language === "ar" ? "موثق" : "Vérifié"}
                          </Badge>
                        )}
                        {provider.proClub && (
                          <Badge className="text-xs bg-moroccan-gold text-foreground">
                            <Award className="h-3 w-3 mr-1" />
                            Pro
                          </Badge>
                        )}
                      </h1>
                      <p className="text-muted-foreground">
                        {provider.service}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {provider.city}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center mb-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-bold text-lg">
                          {provider.rating}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          ({provider.reviews}{" "}
                          {language === "ar" ? "تقييم" : "avis"})
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {language === "ar" ? "من" : "À partir de"}{" "}
                        {provider.price} DH
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="font-semibold">
                        {provider.completedMissions}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {language === "ar" ? "مهام" : "Missions"}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {provider.responseTime}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {language === "ar" ? "وقت الرد" : "Réponse"}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {provider.availability}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {language === "ar" ? "متاح" : "Disponible"}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {new Date(provider.joinDate).getFullYear()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {language === "ar" ? "عضو منذ" : "Membre depuis"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Button
                  onClick={() => setShowMessaging(true)}
                  className="flex-1"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {language === "ar" ? "مراسلة" : "Contacter"}
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  {language === "ar" ? "مكالمة" : "Appeler"}
                </Button>
                <Button variant="outline" className="flex-1">
                  <Video className="mr-2 h-4 w-4" />
                  {language === "ar" ? "فيديو" : "Vidéo"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Messaging Component */}
          {showMessaging && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    {language === "ar" ? "المراسلة" : "Messagerie"}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowMessaging(false)}
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Messaging
                  providerId={provider.id}
                  providerName={provider.name}
                  providerAvatar={provider.avatar}
                />
              </CardContent>
            </Card>
          )}

          {/* Tabs Content */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">
                {language === "ar" ? "حول" : "À propos"}
              </TabsTrigger>
              <TabsTrigger value="reviews">
                {language === "ar" ? "التقييمات" : "Avis"}
              </TabsTrigger>
              <TabsTrigger value="portfolio">
                {language === "ar" ? "الأعمال" : "Portfolio"}
              </TabsTrigger>
              <TabsTrigger value="availability">
                {language === "ar" ? "التوفر" : "Disponibilité"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "ar"
                      ? "حول المقدم"
                      : "À propos du prestataire"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      {language === "ar" ? "الوصف" : "Description"}
                    </h4>
                    <p className="text-muted-foreground">
                      {language === "ar"
                        ? provider.descriptionAr
                        : provider.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      {language === "ar" ? "المهارات" : "Compétences"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(language === "ar"
                        ? provider.skillsAr
                        : provider.skills
                      ).map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      {language === "ar" ? "اللغات" : "Langues"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.languages.map((lang, index) => (
                        <Badge key={index} variant="secondary">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold">
                            {review.clientName}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {review.service}
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {language === "ar" ? review.commentAr : review.comment}
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">
                        {new Date(review.date).toLocaleDateString(
                          language === "ar" ? "ar-MA" : "fr-FR",
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="portfolio" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {portfolio.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <img
                        src={item.image}
                        alt={language === "ar" ? item.titleAr : item.title}
                        className="w-full h-48 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold">
                        {language === "ar" ? item.titleAr : item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {language === "ar"
                          ? item.descriptionAr
                          : item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="availability" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "ar" ? "التوفر" : "Disponibilité"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(
                      (day, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <div className="font-semibold text-sm">{day}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            24h/24
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      {language === "ar"
                        ? "متاح للحجز الفوري"
                        : "Disponible pour réservation immédiate"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
