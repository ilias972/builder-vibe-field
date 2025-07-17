import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
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
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Wrench className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-primary">Khadamat</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  {t("nav.services")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <NavigationMenuLink key={service.key} asChild>
                        <Link
                          to={`/services/${service.key}`}
                          className="flex items-center space-x-3 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <service.icon className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">
                              {t(`service.${service.key}`)}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/providers"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {t("nav.providers")}
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

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {t("nav.about")}
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
                className="hidden md:flex animate-pulse cursor-pointer hover:bg-destructive/90 transition-colors"
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
              <Button size="sm" asChild>
                <Link to="/become-provider">
                  <Shield className="mr-2 h-4 w-4" />
                  {t("nav.become_provider")}
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
                to="/services"
                className="flex items-center space-x-3 rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Wrench className="h-4 w-4" />
                {t("nav.services")}
              </Link>
              <Link
                to="/providers"
                className="flex items-center space-x-3 rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                {t("nav.providers")}
              </Link>
              <Link
                to="/club-pro"
                className="flex items-center space-x-3 rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Building2 className="h-4 w-4" />
                Club Pro
              </Link>
              <Link
                to="/about"
                className="rounded-md p-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.about")}
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
              <Link
                to="/become-provider"
                className="rounded-md bg-primary p-2 text-sm font-medium text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Shield className="mr-2 h-4 w-4 inline" />
                {t("nav.become_provider")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
