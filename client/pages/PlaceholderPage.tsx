import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function PlaceholderPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-md mx-auto text-center">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <Construction className="h-6 w-6 text-primary" />
            Page en Construction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Cette page est en cours de développement. Revenez bientôt pour voir
            cette fonctionnalité !
          </p>
          <Button variant="outline" onClick={() => window.history.back()}>
            Retour
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
