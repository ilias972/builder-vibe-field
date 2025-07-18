import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Search,
  Users,
  MessageSquare,
  User,
  Crown,
  Phone,
  Briefcase,
} from "lucide-react";

export function MobileTabBar() {
  const { language } = useLanguage();
  const location = useLocation();

  const tabs = [
    {
      path: "/",
      icon: Home,
      labelAr: "الرئيسية",
      labelFr: "Accueil",
    },
    {
      path: "/search",
      icon: Search,
      labelAr: "بحث",
      labelFr: "Recherche",
    },
    {
      path: "/project",
      icon: Briefcase,
      labelAr: "مشروع",
      labelFr: "Projet",
    },
    {
      path: "/club-pro",
      icon: Crown,
      labelAr: "برو",
      labelFr: "Pro",
      special: true,
    },
    {
      path: "/sos",
      icon: Phone,
      labelAr: "طوارئ",
      labelFr: "SOS",
      emergency: true,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Spacer for fixed bottom bar */}
      <div className="h-20 md:hidden" />

      {/* Mobile Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-background/95 backdrop-blur-md border-t border-border">
          <div className="grid grid-cols-5 py-2">
            {tabs.map((tab) => {
              const active = isActive(tab.path);
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={`flex flex-col items-center justify-center py-2 px-1 transition-all duration-200 ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`p-2 rounded-full transition-all duration-200 ${
                        active
                          ? tab.emergency
                            ? "bg-destructive text-destructive-foreground"
                            : tab.special
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                              : "bg-primary/10"
                          : tab.emergency
                            ? "bg-destructive/20"
                            : tab.special
                              ? "bg-gradient-to-r from-yellow-100 to-orange-100"
                              : "hover:bg-accent"
                      }`}
                    >
                      <tab.icon
                        className={`h-5 w-5 ${
                          active
                            ? tab.emergency || tab.special
                              ? "text-current"
                              : "text-primary"
                            : "text-current"
                        }`}
                      />
                    </div>

                    {/* Active indicator */}
                    {active && (
                      <div
                        className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                          tab.emergency
                            ? "bg-destructive"
                            : tab.special
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                              : "bg-primary"
                        }`}
                      />
                    )}

                    {/* Emergency badge */}
                    {tab.emergency && (
                      <Badge
                        variant="destructive"
                        className="absolute -top-2 -right-2 text-xs px-1"
                      >
                        24/7
                      </Badge>
                    )}

                    {/* Pro badge */}
                    {tab.special && (
                      <Badge className="absolute -top-2 -right-2 text-xs px-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        PRO
                      </Badge>
                    )}
                  </div>

                  <span
                    className={`text-xs mt-1 font-medium transition-all duration-200 ${
                      active
                        ? tab.emergency
                          ? "text-destructive"
                          : tab.special
                            ? "text-orange-600"
                            : "text-primary"
                        : "text-current"
                    }`}
                  >
                    {language === "ar" ? tab.labelAr : tab.labelFr}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
