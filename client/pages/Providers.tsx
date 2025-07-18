import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  Star,
  Shield,
  Award,
  MessageSquare,
  Phone,
  Filter,
  SlidersHorizontal,
} from "lucide-react";

export default function Providers() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const providers = [
    {
      id: 1,
      name: "Ahmed Bennani",
      service: "Plomberie",
      city: "Casablanca",
      rating: 4.9,
      reviews: 147,
      verified: true,
      proClub: false,
      price: "150",
      avatar: "/placeholder.svg",
      description: "Spécialiste en plomberie avec 15 ans d'expérience",
      completedJobs: 147,
      responseTime: "< 1h",
    },
    {
      id: 2,
      name: "Fatima El Ouardi",
      service: "Ménage",
      city: "Rabat",
      rating: 4.8,
      reviews: 203,
      verified: true,
      proClub: true,
      price: "80",
      avatar: "/placeholder.svg",
      description: "Service de ménage professionnel et soigné",
      completedJobs: 203,
      responseTime: "< 30min",
    },
    {
      id: 3,
      name: "Mohammed Tazi",
      service: "Électricité",
      city: "Marrakech",
      rating: 4.7,
      reviews: 89,
      verified: true,
      proClub: false,
      price: "200",
      avatar: "/placeholder.svg",
      description: "Électricien certifié, interventions rapides",
      completedJobs: 89,
      responseTime: "< 2h",
    },
    {
      id: 4,
      name: "Aicha Benali",
      service: "Peinture",
      city: "Fès",
      rating: 4.6,
      reviews: 124,
      verified: true,
      proClub: true,
      price: "180",
      avatar: "/placeholder.svg",
      description: "Peintre professionnelle, travail de qualité",
      completedJobs: 124,
      responseTime: "< 4h",
    },
    {
      id: 5,
      name: "Youssef Chakir",
      service: "Jardinage",
      city: "Agadir",
      rating: 4.5,
      reviews: 67,
      verified: true,
      proClub: false,
      price: "120",
      avatar: "/placeholder.svg",
      description: "Jardinier expérimenté, entretien d'espaces verts",
      completedJobs: 67,
      responseTime: "< 1 jour",
    },
    {
      id: 6,
      name: "Laila Fassi",
      service: "Menuiserie",
      city: "Tanger",
      rating: 4.9,
      reviews: 156,
      verified: true,
      proClub: true,
      price: "250",
      avatar: "/placeholder.svg",
      description: "Menuisière artisane, meubles sur mesure",
      completedJobs: 156,
      responseTime: "< 6h",
    },
  ];

  const cities = [
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
  ];

  const services = [
    "Plomberie",
    "Électricité",
    "Ménage",
    "Peinture",
    "Menuiserie",
    "Jardinage",
    "Bricolage",
    "Services Funéraires",
  ];

  const filteredProviders = providers.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = !selectedCity || provider.city === selectedCity;
    const matchesService =
      !selectedService || provider.service === selectedService;

    return matchesSearch && matchesCity && matchesService;
  });

  const sortedProviders = [...filteredProviders].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      case "price":
        return parseInt(a.price) - parseInt(b.price);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {language === "ar" ? "جميع مقدمي الخدمات" : "Tous les prestataires"}
          </h1>
          <p className="text-muted-foreground">
            {language === "ar"
              ? "اعثر على أفضل مقدمي الخدمات المتاحين في منطقتك"
              : "Trouvez les meilleurs prestataires disponibles dans votre région"}
          </p>
        </div>

        {/* Search & Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              {language === "ar" ? "البحث والتصفية" : "Recherche et filtres"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder={
                      language === "ar"
                        ? "ابحث عن اسم أو خدمة..."
                        : "Rechercher nom ou service..."
                    }
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      language === "ar" ? "اختر المدينة" : "Choisir ville"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">
                    {language === "ar" ? "جميع المدن" : "Toutes les villes"}
                  </SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedService}
                onValueChange={setSelectedService}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      language === "ar" ? "نوع الخدمة" : "Type de service"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">
                    {language === "ar" ? "جميع الخدمات" : "Tous les services"}
                  </SelectItem>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">
                    {language === "ar" ? "أفضل تقييم" : "Meilleure note"}
                  </SelectItem>
                  <SelectItem value="reviews">
                    {language === "ar" ? "أكثر تقييماً" : "Plus d'avis"}
                  </SelectItem>
                  <SelectItem value="price">
                    {language === "ar" ? "أقل سعراً" : "Prix croissant"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {language === "ar"
              ? `${sortedProviders.length} مقدم خدمة متاح`
              : `${sortedProviders.length} prestataire(s) trouvé(s)`}
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProviders.map((provider) => (
            <Card
              key={provider.id}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={provider.avatar} alt={provider.name} />
                      <AvatarFallback>{provider.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
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
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {provider.service}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {provider.city}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {provider.description}
                </p>

                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                  <div>
                    <div className="flex items-center justify-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">
                        {provider.rating}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {provider.reviews} {language === "ar" ? "تقييم" : "avis"}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {provider.completedJobs}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {language === "ar" ? "مهام" : "missions"}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {provider.responseTime}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {language === "ar" ? "وقت الرد" : "réponse"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">
                      {language === "ar" ? "من" : "À partir de"}
                    </div>
                    <div className="font-bold text-primary">
                      {provider.price} DH
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <Link to={`/provider/${provider.id}`}>
                      {language === "ar" ? "عرض الملف" : "Voir profil"}
                    </Link>
                  </Button>
                  <Button size="sm" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {language === "ar" ? "اتصال" : "Contacter"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === "ar"
                ? "لا تجد ما تبحث عنه؟"
                : "Vous ne trouvez pas ce que vous cherchez ?"}
            </h3>
            <p className="mb-6 opacity-90">
              {language === "ar"
                ? "انشر طلبك وسنجد لك أفضل المختصين"
                : "Publiez votre demande et nous trouverons les meilleurs spécialistes"}
            </p>
            <Button size="lg" variant="secondary">
              {language === "ar" ? "انشر طلب" : "Publier une demande"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
