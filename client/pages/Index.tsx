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
import { SmartSearch } from "@/components/SmartSearch";
import { RecommendationsSection } from "@/components/FavoritesSystem";
import {
  Search,
  MapPin,
  Star,
  Shield,
  CreditCard,
  MessageSquare,
  CheckCircle,
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Leaf,
  Home,
  Users,
  Clock,
  Phone,
  Award,
} from "lucide-react";

export default function Index() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  // Dynamic services based on 30km radius provider availability
  const getServicesInArea = (userLocation: string) => {
    // Mock data - in real app, this would be an API call
    const allServices = [
      {
        key: "plumbing",
        icon: Wrench,
        color: "bg-blue-100 text-blue-600",
        providers: 45,
      },
      {
        key: "electrical",
        icon: Zap,
        color: "bg-yellow-100 text-yellow-600",
        providers: 38,
      },
      {
        key: "cleaning",
        icon: Home,
        color: "bg-green-100 text-green-600",
        providers: 52,
      },
      {
        key: "painting",
        icon: Paintbrush,
        color: "bg-purple-100 text-purple-600",
        providers: 23,
      },
      {
        key: "carpentry",
        icon: Hammer,
        color: "bg-orange-100 text-orange-600",
        providers: 31,
      },
      {
        key: "gardening",
        icon: Leaf,
        color: "bg-emerald-100 text-emerald-600",
        providers: 19,
      },
      {
        key: "handyman",
        icon: Wrench,
        color: "bg-gray-100 text-gray-600",
        providers: 27,
      },
      {
        key: "funeral",
        icon: Users,
        color: "bg-slate-100 text-slate-600",
        providers: 8,
      },
    ];

    // Return top 6 services with most providers in area
    return allServices.sort((a, b) => b.providers - a.providers).slice(0, 6);
  };

  const services = getServicesInArea(location) || [];

  const featuredProviders = [
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
    },
  ];

  const testimonials = [
    {
      name: "Sara Alami",
      city: "Casablanca",
      service: "Plomberie",
      rating: 5,
      comment:
        "Service rapide et professionnel. Le plombier était très compétent et a résolu mon problème en moins d'une heure.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Youssef Benali",
      city: "Rabat",
      service: "Électricité",
      rating: 5,
      comment:
        "Excellent service ! Le paiement sécurisé et la messagerie intégrée m'ont donné confiance. Je recommande vivement.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Khadija Mansouri",
      city: "Marrakech",
      service: "Ménage",
      rating: 5,
      comment:
        "Parfait ! La prestataire était ponctuelle et très professionnelle. La plateforme est très facile à utiliser.",
      avatar: "/placeholder.svg",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to search results
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(location)}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t("home.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("home.subtitle")}
            </p>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="bg-card rounded-2xl p-6 shadow-lg max-w-4xl mx-auto"
            >
              <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-4">
                <div className="lg:col-span-3 md:col-span-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      placeholder={t("home.search_placeholder")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12 text-lg"
                    />
                  </div>
                </div>
                <div className="lg:col-span-1 md:col-span-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      placeholder={t("home.search_location")}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 h-12"
                      list="moroccan-cities"
                    />
                    <datalist id="moroccan-cities">
                      <option value="Casablanca" />
                      <option value="Rabat" />
                      <option value="Marrakech" />
                      <option value="Fès" />
                      <option value="Tanger" />
                      <option value="Agadir" />
                      <option value="Meknès" />
                      <option value="Oujda" />
                      <option value="Tétouan" />
                      <option value="Salé" />
                      <option value="Kenitra" />
                      <option value="El Jadida" />
                      <option value="Béni Mellal" />
                      <option value="Khouribga" />
                      <option value="Nador" />
                      <option value="Settat" />
                      <option value="Mohammedia" />
                      <option value="Larache" />
                      <option value="Ksar El Kébir" />
                      <option value="Guelmim" />
                    </datalist>
                  </div>
                </div>
                <div className="lg:col-span-1 md:col-span-1">
                  <Button type="submit" size="lg" className="h-12 w-full">
                    {t("home.search_button")}
                  </Button>
                </div>
              </div>
            </form>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Prestataires
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Missions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.8/5</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.popular_services")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service) => (
              <Link
                key={service.key}
                to={`/services/${service.key}`}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-4 rounded-2xl mb-4 ${service.color}`}
                    >
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold">
                      {t(`service.${service.key}`)}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {service.providers}{" "}
                      {language === "ar" ? "مقدم خدم��" : "prestataires"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.featured_providers")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProviders.map((provider) => (
              <Card
                key={provider.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage
                          src={provider.avatar}
                          alt={provider.name}
                        />
                        <AvatarFallback>{provider.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold flex items-center gap-2">
                          {provider.name}
                          {provider.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Shield className="h-3 w-3 mr-1" />
                              {t("common.verified")}
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

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">
                          {provider.rating}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({provider.reviews} {t("common.reviews")})
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        {t("common.from")}
                      </div>
                      <div className="font-bold text-primary">
                        {provider.price} {t("common.dh")}
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
                        {t("common.view_profile")}
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link to={`/contact/${provider.id}`}>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {t("common.contact")}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.how_it_works")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Recherchez</h3>
              <p className="text-sm text-muted-foreground">
                Trouvez le prestataire qui correspond à vos besoins
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Contactez</h3>
              <p className="text-sm text-muted-foreground">
                Échangez via notre messagerie sécurisée
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Payez</h3>
              <p className="text-sm text-muted-foreground">
                Paiement sécurisé avec notre système d'acompte
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Validez</h3>
              <p className="text-sm text-muted-foreground">
                Confirmez la prestation et libérez le paiement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary" />
                  Paiement Sécurisé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Votre argent est protégé jusqu'à la validation de la
                  prestation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                  Messagerie Intégrée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Communiquez directement sans partager vos coordonnées
                  personnelles
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2 text-primary" />
                  Prestataires Vérifiés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tous nos prestataires sont vérifiés avec pièce d'identité
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.testimonials")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.service} • {testimonial.city}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("home.join_providers")}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {t("home.join_providers_desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/become-provider">
                <Users className="mr-2 h-5 w-5" />
                Devenir Prestataire
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/club-pro">
                <Award className="mr-2 h-5 w-5" />
                Club Pro
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-12 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Service d'Urgence 24/7
              </h3>
              <p className="opacity-90">
                Plomberie, électricité, serrurerie - Intervention rapide partout
                au Maroc
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/sos">
                <Phone className="mr-2 h-5 w-5" />
                Appeler SOS
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
