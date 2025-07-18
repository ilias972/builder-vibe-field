import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Upload, Briefcase, MapPin, Camera } from "lucide-react";
import { format } from "date-fns";

export default function Project() {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date>();
  const [selectedTrade, setSelectedTrade] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const trades = [
    "plumbing",
    "electrical",
    "painting",
    "carpentry",
    "cleaning",
    "gardening",
    "masonry",
    "roofing",
    "flooring",
    "heating",
    "air_conditioning",
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
    "Kenitra",
    "Tétouan",
    "Salé",
    "Mohammedia",
    "Khouribga",
    "Beni Mellal",
    "El Jadida",
    "Taza",
    "Nador",
  ];

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setPhotos(Array.from(files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      trade: selectedTrade,
      description: projectDescription,
      photos,
      startDate: date,
      city: selectedCity,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">
            {t("project.title", "Décrivez votre projet")}
          </h1>
          <p className="text-muted-foreground">
            {t(
              "project.subtitle",
              "Dites-nous en détail ce dont vous avez besoin pour que nos prestataires puissent vous proposer le meilleur service",
            )}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              {t("project.form_title", "Informations du projet")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Trade Selection */}
              <div className="space-y-2">
                <Label htmlFor="trade">
                  {t("project.trade", "Métier recherché")} *
                </Label>
                <Select value={selectedTrade} onValueChange={setSelectedTrade}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t(
                        "project.select_trade",
                        "Sélectionnez un métier",
                      )}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {trades.map((trade) => (
                      <SelectItem key={trade} value={trade}>
                        {t(`service.${trade}`, trade)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description">
                  {t("project.description", "Description détaillée du projet")}{" "}
                  *
                </Label>
                <Textarea
                  id="description"
                  placeholder={t(
                    "project.description_placeholder",
                    "Décrivez votre projet en détail : travaux à réaliser, matériaux souhaités, contraintes particulières...",
                  )}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label htmlFor="photos">
                  {t("project.photos", "Photos du lieu")}
                </Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <Input
                    id="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <Label
                    htmlFor="photos"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="h-6 w-6" />
                    <span className="text-sm text-muted-foreground">
                      {t(
                        "project.upload_photos",
                        "Cliquez pour ajouter des photos",
                      )}
                    </span>
                  </Label>
                  {photos.length > 0 && (
                    <p className="mt-2 text-sm text-primary">
                      {photos.length}{" "}
                      {t("project.photos_selected", "photo(s) sélectionnée(s)")}
                    </p>
                  )}
                </div>
              </div>

              {/* Start Date */}
              <div className="space-y-2">
                <Label>
                  {t("project.start_date", "Date de début souhaitée")} *
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date
                        ? format(date, "PPP")
                        : t("project.pick_date", "Choisir une date")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* City Selection */}
              <div className="space-y-2">
                <Label htmlFor="city">{t("project.city", "Ville")} *</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t(
                        "project.select_city",
                        "Sélectionnez votre ville",
                      )}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {city}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={
                  !selectedTrade ||
                  !projectDescription ||
                  !date ||
                  !selectedCity
                }
              >
                {t("project.submit", "Publier mon projet")}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          {t(
            "project.note",
            "Une fois publié, les prestataires qualifiés de votre région pourront consulter votre projet et vous envoyer leurs propositions.",
          )}
        </div>
      </div>
    </div>
  );
}
