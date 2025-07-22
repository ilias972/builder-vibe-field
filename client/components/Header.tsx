import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { NotificationButton } from "@/components/NotificationSystem";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Wrench,
  Building2,
  Users,
  Phone,
  UserCheck,
  Shield,
  Search,
  Briefcase,
  Home,
} from "lucide-react";

export function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { key: "plumbing", icon: Wrench },
    { key: "electrical", icon: Wrench },
    { key: "cleaning", icon: Wrench },
    { key: "painting", icon: Wrench },
    { key: "carpentry", icon: Wrench },
    { key: "gardening", icon: Wrench },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8ebc21d185f04cd5b5868041c20fe8f4%2F804314fe3d0144a791f0476fb3bee0d8?format=webp&width=800"
              alt="Khadamat Logo"
              className="h-8 w-8 object-cover rounded-full"
            />
            <span className="text-xl font-bold text-primary">Khadamat</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/project"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    {t("nav.project", "Projet")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/club-pro"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Building2 className="mr-2 h-4 w-4" />
                    Club Pro
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />

            {/* Emergency Badge */}
            <Link to="/sos">
              <Badge
                variant="destructive"
                className="hidden md:flex cursor-pointer hover:bg-destructive/90 transition-colors"
              >
                <Phone className="mr-1 h-3 w-3" />
                SOS 24/7
              </Badge>
            </Link>

            {/* Auth buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">{t("nav.login")}</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/register">
                  <UserCheck className="mr-2 h-4 w-4" />
                  {t("nav.register")}
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background p-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/project"
                className="flex items-center space-x-3 rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Briefcase className="h-4 w-4" />
                {t("nav.project", "Projet")}
              </Link>
              <Link
                to="/club-pro"
                className="flex items-center space-x-3 rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Building2 className="h-4 w-4" />
                Club Pro
              </Link>

              <hr className="my-2" />
              <Link
                to="/login"
                className="rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.login")}
              </Link>
              <Link
                to="/register"
                className="rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <UserCheck className="mr-2 h-4 w-4 inline" />
                {t("nav.register")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
