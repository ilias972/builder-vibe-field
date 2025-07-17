import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Wrench,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Wrench className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-primary">Khadamat</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              La plateforme marocaine de référence pour tous vos besoins en
              services essentiels. Prestataires vérifiés, paiements sécurisés.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t("nav.services")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/services/plumbing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("service.plumbing")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/electrical"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("service.electrical")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cleaning"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("service.cleaning")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/painting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("service.painting")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/carpentry"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("service.carpentry")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.careers")}
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.press")}
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.partners")}
                </Link>
              </li>
              <li>
                <Link
                  to="/club-pro"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Club Pro
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="font-semibold mb-4">Support & Légal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/support"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.support")}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                contact@khadamat.ma
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                +212 5 22 XX XX XX
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Casablanca, Maroc
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
