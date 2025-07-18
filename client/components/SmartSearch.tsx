import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Clock,
  TrendingUp,
  Star,
  Users,
  X,
} from "lucide-react";

interface SmartSearchProps {
  onSearch: (query: string, location: string) => void;
}

export function SmartSearch({ onSearch }: SmartSearchProps) {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "plombier urgence",
    "électricien",
    "ménage hebdomadaire",
  ]);

  const searchRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  const serviceSuggestions = [
    { name: "Plomberie", icon: "🔧", trending: true },
    { name: "Électricité", icon: "⚡", trending: true },
    { name: "Ménage", icon: "🏠", trending: false },
    { name: "Peinture", icon: "🎨", trending: false },
    { name: "Jardinage", icon: "🌱", trending: true },
    { name: "Menuiserie", icon: "🔨", trending: false },
  ];

  const popularLocations = [
    { name: "Casablanca", count: "2,500+ prestataires" },
    { name: "Rabat", count: "1,800+ prestataires" },
    { name: "Marrakech", count: "1,200+ prestataires" },
    { name: "Fès", count: "800+ prestataires" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add to recent searches
    if (searchTerm && !recentSearches.includes(searchTerm)) {
      setRecentSearches((prev) => [searchTerm, ...prev.slice(0, 4)]);
    }

    onSearch(searchTerm, location);
    setShowSuggestions(false);
    setShowLocationSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const handleLocationClick = (locationName: string) => {
    setLocation(locationName);
    setShowLocationSuggestions(false);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setShowLocationSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form onSubmit={handleSearchSubmit} className="relative">
      <div className="bg-card rounded-2xl p-6 shadow-lg border">
        <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-4">
          {/* Smart Search Input */}
          <div className="lg:col-span-3 md:col-span-1 relative" ref={searchRef}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder={
                  language === "ar"
                    ? "ابحث عن خدمة (مثل: سباك، كهربائي، تنظيف...)"
                    : "Rechercher un service (ex: plombier, électricien, ménage...)"
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                className="pl-10 h-12 text-lg"
              />
              {searchTerm && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Search Suggestions Dropdown */}
            {showSuggestions && (
              <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
                <CardContent className="p-0">
                  {/* Popular Services */}
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-sm">
                        {language === "ar"
                          ? "خدمات شائعة"
                          : "Services populaires"}
                      </h4>
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceSuggestions.map((service, index) => (
                        <div
                          key={index}
                          onClick={() => handleSuggestionClick(service.name)}
                          className="flex items-center gap-2 p-2 hover:bg-accent rounded-md cursor-pointer transition-colors"
                        >
                          <span className="text-lg">{service.icon}</span>
                          <span className="text-sm">{service.name}</span>
                          {service.trending && (
                            <Badge variant="secondary" className="text-xs">
                              {language === "ar" ? "شائع" : "Populaire"}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-sm">
                          {language === "ar"
                            ? "عمليات البحث الأخيرة"
                            : "Recherches récentes"}
                        </h4>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={clearRecentSearches}
                          className="text-xs"
                        >
                          {language === "ar" ? "مسح" : "Effacer"}
                        </Button>
                      </div>
                      <div className="space-y-1">
                        {recentSearches.map((search, index) => (
                          <div
                            key={index}
                            onClick={() => handleSuggestionClick(search)}
                            className="flex items-center gap-2 p-2 hover:bg-accent rounded-md cursor-pointer transition-colors"
                          >
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{search}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Smart Location Input */}
          <div
            className="lg:col-span-1 md:col-span-1 relative"
            ref={locationRef}
          >
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder={
                  language === "ar" ? "المدينة أو الحي" : "Ville ou quartier"
                }
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => setShowLocationSuggestions(true)}
                className="pl-10 h-12"
              />
              {location && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setLocation("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Location Suggestions Dropdown */}
            {showLocationSuggestions && (
              <Card className="absolute top-full left-0 right-0 mt-2 z-50">
                <CardContent className="p-4">
                  <div className="mb-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start"
                      onClick={() => {
                        navigator.geolocation.getCurrentPosition(
                          (position) => {
                            setLocation("Ma position");
                            setShowLocationSuggestions(false);
                          },
                          () => {
                            alert(
                              language === "ar"
                                ? "لا يمكن الحصول على الموقع"
                                : "Impossible d'obtenir la localisation",
                            );
                          },
                        );
                      }}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      {language === "ar"
                        ? "استخدام موقعي الحالي"
                        : "Utiliser ma position"}
                    </Button>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-medium text-sm mb-2">
                      {language === "ar" ? "مدن شائعة" : "Villes populaires"}
                    </h4>
                    {popularLocations.map((loc, index) => (
                      <div
                        key={index}
                        onClick={() => handleLocationClick(loc.name)}
                        className="flex items-center justify-between p-2 hover:bg-accent rounded-md cursor-pointer transition-colors"
                      >
                        <span className="text-sm font-medium">{loc.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {loc.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Enhanced Search Button */}
          <div className="lg:col-span-1 md:col-span-1">
            <Button
              type="submit"
              size="lg"
              className="h-12 w-full relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <Search className="mr-2 h-5 w-5" />
                {language === "ar" ? "بحث" : "Rechercher"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Button>
          </div>
        </div>

        {/* Quick Access Tags */}
        <div className="mt-4 pt-4 border-t">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground mr-2">
              {language === "ar" ? "بحث سريع:" : "Recherche rapide:"}
            </span>
            {["Plombier urgence", "Ménage", "Électricien", "Peinture"].map(
              (tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => handleSuggestionClick(tag)}
                >
                  {tag}
                </Badge>
              ),
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
