import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  Star,
  MapPin,
  Clock,
  TrendingUp,
  Users,
  Bookmark,
  Share2,
  Eye,
  MessageSquare,
} from "lucide-react";

interface Provider {
  id: string;
  name: string;
  service: string;
  rating: number;
  reviews: number;
  city: string;
  avatar: string;
  price: string;
  verified: boolean;
  proClub: boolean;
}

export function FavoriteButton({
  providerId,
  size = "sm",
}: {
  providerId: string;
  size?: "sm" | "lg";
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleFavorite = () => {
    setIsAnimating(true);
    setIsFavorite(!isFavorite);

    // Save to localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      const updated = favorites.filter((id: string) => id !== providerId);
      localStorage.setItem("favorites", JSON.stringify(updated));
    } else {
      favorites.push(providerId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(providerId));
  }, [providerId]);

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={toggleFavorite}
      className={`transition-all duration-300 ${
        isAnimating ? "scale-125" : "scale-100"
      } ${
        isFavorite
          ? "text-red-500 hover:text-red-600"
          : "text-muted-foreground hover:text-red-500"
      }`}
    >
      <Heart
        className={`h-4 w-4 transition-all duration-300 ${
          isFavorite ? "fill-current" : ""
        }`}
      />
    </Button>
  );
}

export function RecommendationCard({ provider }: { provider: Provider }) {
  const { language } = useLanguage();
  const [viewCount, setViewCount] = useState(
    Math.floor(Math.random() * 100) + 20,
  );

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarImage src={provider.avatar} alt={provider.name} />
                <AvatarFallback>{provider.name[0]}</AvatarFallback>
              </Avatar>
              {provider.verified && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <Star className="h-2 w-2 text-white fill-current" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm flex items-center gap-1">
                {provider.name}
                {provider.proClub && (
                  <Badge className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    PRO
                  </Badge>
                )}
              </h4>
              <p className="text-xs text-muted-foreground">
                {provider.service}
              </p>
              <p className="text-xs text-muted-foreground flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {provider.city}
              </p>
            </div>
          </div>
          <FavoriteButton providerId={provider.id} />
        </div>

        <div className="flex items-center justify-between text-xs mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{provider.rating}</span>
            <span className="text-muted-foreground">({provider.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Eye className="h-3 w-3" />
            <span>{viewCount}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-primary font-semibold">
            {language === "ar" ? "من" : "À partir de"} {provider.price} DH
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Share2 className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <MessageSquare className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function RecommendationsSection() {
  const { language } = useLanguage();
  const [recommendations, setRecommendations] = useState<Provider[]>([]);

  const mockRecommendations: Provider[] = [
    {
      id: "1",
      name: "Ahmed Bennani",
      service: "Plomberie",
      rating: 4.9,
      reviews: 147,
      city: "Casablanca",
      avatar: "/placeholder.svg",
      price: "150",
      verified: true,
      proClub: false,
    },
    {
      id: "2",
      name: "Fatima El Ouardi",
      service: "Ménage",
      rating: 4.8,
      reviews: 203,
      city: "Rabat",
      avatar: "/placeholder.svg",
      price: "80",
      verified: true,
      proClub: true,
    },
    {
      id: "3",
      name: "Mohammed Tazi",
      service: "Électricité",
      rating: 4.7,
      reviews: 89,
      city: "Marrakech",
      avatar: "/placeholder.svg",
      price: "200",
      verified: true,
      proClub: false,
    },
  ];

  useEffect(() => {
    // Simulate API call for personalized recommendations
    setTimeout(() => {
      setRecommendations(mockRecommendations);
    }, 1000);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          {language === "ar" ? "مقترح لك" : "Recommandé pour vous"}
          <Badge variant="secondary" className="text-xs">
            {language === "ar" ? "جديد" : "Nouveau"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recommendations.length === 0 ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-muted rounded-full" />
                  <div className="flex-1 space-y-1">
                    <div className="h-3 bg-muted rounded w-24" />
                    <div className="h-2 bg-muted rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {recommendations.map((provider) => (
              <RecommendationCard key={provider.id} provider={provider} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function QuickActionsPanel() {
  const { language } = useLanguage();

  const quickActions = [
    {
      icon: Heart,
      labelAr: "المفضلة",
      labelFr: "Favoris",
      path: "/favorites",
      count: 5,
    },
    {
      icon: Clock,
      labelAr: "الأخيرة",
      labelFr: "Récents",
      path: "/recent",
      count: 3,
    },
    {
      icon: Bookmark,
      labelAr: "محفوظة",
      labelFr: "Sauvegardés",
      path: "/saved",
      count: 8,
    },
    {
      icon: MessageSquare,
      labelAr: "الرسائل",
      labelFr: "Messages",
      path: "/messages",
      count: 2,
      hasNew: true,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">
          {language === "ar" ? "إجراءات سريعة" : "Actions rapides"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-3 flex flex-col items-center gap-2 relative"
            >
              <div className="relative">
                <action.icon className="h-5 w-5" />
                {action.hasNew && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </div>
              <span className="text-xs">
                {language === "ar" ? action.labelAr : action.labelFr}
              </span>
              {action.count > 0 && (
                <Badge
                  variant="secondary"
                  className="absolute -top-1 -right-1 text-xs"
                >
                  {action.count}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
