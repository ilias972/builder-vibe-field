import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
  Search as SearchIcon,
  MapPin,
  Star,
  Shield,
  Award,
  MessageSquare,
  Filter,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";

export default function Search() {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [selectedService, setSelectedService] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [priceRange, setPriceRange] = useState("");

  // Mock search results
  const searchResults = [
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
      distance: "2.5 km",
    },
    {
      id: 2,
      name: "Fatima El Ouardi",
      service: "Ménage",
      city: "Casablanca",
      rating: 4.8,
      reviews: 203,
      verified: true,
      proClub: true,
      price: "80",
      avatar: "/placeholder.svg",
      description: "Service de ménage professionnel et soigné",
      completedJobs: 203,
      responseTime: "< 30min",
      distance: "1.2 km",
    },
    {
      id: 3,
      name: "Mohammed Tazi",
      service: "Électricité",
      city: "Casablanca",
      rating: 4.7,
      reviews: 89,
      verified: true,
      proClub: false,
      price: "200",
      avatar: "/placeholder.svg",
      description: "Électricien certifié, interventions rapides",
      completedJobs: 89,
      responseTime: "< 2h",
      distance: "5.1 km",
    },
    {
      id: 4,
      name: "Aicha Benali",
      service: "Peinture",
      city: "Casablanca",
      rating: 4.6,
      reviews: 124,
      verified: true,
      proClub: true,
      price: "180",
      avatar: "/placeholder.svg",
      description: "Peintre professionnelle, travail de qualité",
      completedJobs: 124,
      responseTime: "< 4h",
      distance: "3.8 km",
    },
  ];

  const services = [
    "Plomberie",
    "Électricité",
    "Ménage",
    "Peinture",
    "Menuiserie",
    "Jardinage",
    "Bricolage",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL params
    const params = new URLSearchParams();
    if (searchTerm) params.set("q", searchTerm);
    if (location) params.set("location", location);
    setSearchParams(params);
  };

  const filteredResults = searchResults.filter((result) => {
    const matchesSearch =
      !searchTerm ||
      result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      !location || result.city.toLowerCase().includes(location.toLowerCase());
    const matchesService =
      !selectedService || result.service === selectedService;
    const matchesPrice = (() => {
      if (!priceRange) return true;
      const price = parseInt(result.price);
      switch (priceRange) {
        case "0-100":
          return price <= 100;
        case "100-200":
          return price > 100 && price <= 200;
        case "200+":
          return price > 200;
        default:
          return true;
      }
    })();

    return matchesSearch && matchesLocation && matchesService && matchesPrice;
  });

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      case "price":
        return parseInt(a.price) - parseInt(b.price);
      case "distance":
        return parseFloat(a.distance) - parseFloat(b.distance);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <form
            onSubmit={handleSearch}
            className="bg-card rounded-2xl p-6 shadow-lg"
          >
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder={t("home.search_placeholder")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-lg"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder={t("home.search_location")}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              <div>
                <Button type="submit" size="lg" className="h-12 w-full">
                  {t("home.search_button")}
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Results Summary */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              {language === "ar" ? "نتائج البحث" : "Résultats de recherche"}
            </h1>
            <p className="text-muted-foreground">
              {sortedResults.length}{" "}
              {language === "ar"
                ? "نتيجة"
                : sortedResults.length > 1
                  ? "résultats trouvés"
                  : "résultat trouvé"}
              {searchTerm && (
                <>
                  {" "}
                  {language === "ar" ? "لـ" : "pour"} "{searchTerm}"
                </>
              )}
              {location && (
                <>
                  {" "}
                  {language === "ar" ? "في" : "à"} {location}
                </>
              )}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  {language === "ar" ? "التصفية" : "Filtres"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {language === "ar" ? "نوع الخدمة" : "Type de service"}
                  </label>
                  <Select
                    value={selectedService}
                    onValueChange={setSelectedService}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          language === "ar"
                            ? "جميع الخدمات"
                            : "Tous les services"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">
                        {language === "ar"
                          ? "جميع الخدمات"
                          : "Tous les services"}
                      </SelectItem>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {language === "ar" ? "نطاق السعر" : "Gamme de prix"}
                  </label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          language === "ar" ? "جميع الأسعار" : "Tous les prix"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">
                        {language === "ar" ? "جميع الأسعار" : "Tous les prix"}
                      </SelectItem>
                      <SelectItem value="0-100">0 - 100 DH</SelectItem>
                      <SelectItem value="100-200">100 - 200 DH</SelectItem>
                      <SelectItem value="200+">200+ DH</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {language === "ar" ? "ترتيب حسب" : "Trier par"}
                  </label>
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
                      <SelectItem value="distance">
                        {language === "ar" ? "الأقرب" : "Distance"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Quick Filters */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {language === "ar" ? "تصفية سريعة" : "Filtres rapides"}
                  </label>
                  <div className="space-y-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      <Shield className="mr-1 h-3 w-3" />
                      {language === "ar" ? "موثق فقط" : "Vérifiés uniquement"}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      <Award className="mr-1 h-3 w-3" />
                      {language === "ar" ? "Club Pro" : "Club Pro"}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      <Clock className="mr-1 h-3 w-3" />
                      {language === "ar"
                        ? "متاح الآن"
                        : "Disponible maintenant"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {sortedResults.length === 0 ? (
              <Card className="p-12 text-center">
                <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {language === "ar"
                    ? "لا توجد نتائج"
                    : "Aucun résultat trouvé"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "ar"
                    ? "جرب تغيير معايير البحث أو إزالة بعض المرشحات"
                    : "Essayez de modifier vos critères de recherche ou de supprimer certains filtres"}
                </p>
                <Button variant="outline">
                  {language === "ar" ? "مسح المرشحات" : "Effacer les filtres"}
                </Button>
              </Card>
            ) : (
              <div className="space-y-6">
                {sortedResults.map((result) => (
                  <Card
                    key={result.id}
                    className="hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage
                              src={result.avatar}
                              alt={result.name}
                            />
                            <AvatarFallback className="text-lg">
                              {result.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-lg">
                                {result.name}
                              </h3>
                              {result.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  <Shield className="h-3 w-3 mr-1" />
                                  {language === "ar" ? "موثق" : "Vérifié"}
                                </Badge>
                              )}
                              {result.proClub && (
                                <Badge className="text-xs bg-moroccan-gold text-foreground">
                                  <Award className="h-3 w-3 mr-1" />
                                  Pro
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground mb-1">
                              {result.service}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center mb-2">
                              <MapPin className="h-3 w-3 mr-1" />
                              {result.city} • {result.distance}
                            </p>
                            <p className="text-sm mb-4">{result.description}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                              <div>
                                <div className="flex items-center justify-center">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                  <span className="font-medium">
                                    {result.rating}
                                  </span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {result.reviews}{" "}
                                  {language === "ar" ? "تقييم" : "avis"}
                                </div>
                              </div>
                              <div>
                                <div className="font-medium">
                                  {result.completedJobs}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {language === "ar" ? "مهام" : "missions"}
                                </div>
                              </div>
                              <div>
                                <div className="font-medium">
                                  {result.responseTime}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {language === "ar" ? "وقت الرد" : "réponse"}
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-primary">
                                  {result.price} DH
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {language === "ar" ? "من" : "à partir de"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 min-w-[200px]">
                          <Button className="w-full" asChild>
                            <Link to={`/provider/${result.id}`}>
                              {language === "ar" ? "عرض الملف" : "Voir profil"}
                            </Link>
                          </Button>
                          <Button variant="outline" className="w-full">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            {language === "ar" ? "اتصال" : "Contacter"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More */}
            {sortedResults.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  {language === "ar" ? "عرض المزيد" : "Voir plus de résultats"}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* No Results CTA */}
        {sortedResults.length === 0 && (
          <Card className="mt-8 bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                {language === "ar"
                  ? "لم تجد ما تبحث عنه؟"
                  : "Vous ne trouvez pas ce que vous cherchez ?"}
              </h3>
              <p className="mb-6">
                {language === "ar"
                  ? "دعنا نساعدك! انشر طلبك وسيتواصل معك مقدمو الخدمات المناسبون"
                  : "Laissez-nous vous aider ! Publiez votre demande et les prestataires appropriés vous contactera"}
              </p>
              <Button size="lg" variant="secondary">
                {language === "ar" ? "انشر طلب" : "Publier une demande"}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
