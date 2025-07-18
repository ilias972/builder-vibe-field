import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Star,
  Shield,
  Award,
  Clock,
  Users,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Skeleton for provider cards
export function ProviderCardSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Skeleton className="w-16 h-16 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-16 rounded-full" />
            </div>
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-full" />
            <div className="grid grid-cols-4 gap-4 pt-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-3 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Skeleton className="h-9 flex-1" />
          <Skeleton className="h-9 flex-1" />
        </div>
      </CardContent>
    </Card>
  );
}

// Loading spinner with message
export function LoadingSpinner({ message }: { message?: string }) {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
      </div>
      {message && (
        <p className="mt-4 text-muted-foreground text-center">{message}</p>
      )}
    </div>
  );
}

// Search loading state
export function SearchLoadingState() {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="h-6 w-6 text-primary animate-pulse" />
            <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-ping" />
          </div>
          <span className="text-lg font-medium">
            {language === "ar"
              ? "جاري البحث عن أفضل الخدمات..."
              : "Recherche des meilleurs services..."}
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <ProviderCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

// Success animation
export function SuccessAnimation({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping" />
      </div>
      <p className="mt-4 text-center font-medium text-green-700">{message}</p>
    </div>
  );
}

// Error state
export function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <AlertCircle className="h-8 w-8 text-red-600" />
      </div>
      <p className="text-center text-muted-foreground mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-primary hover:underline font-medium"
        >
          {language === "ar" ? "حاول مرة أخرى" : "Réessayer"}
        </button>
      )}
    </div>
  );
}

// Floating action button with animation
export function FloatingActionButton({
  onClick,
  icon: Icon,
  label,
  variant = "primary",
}: {
  onClick: () => void;
  icon: any;
  label: string;
  variant?: "primary" | "emergency";
}) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-24 right-4 z-40 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
        variant === "emergency"
          ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
          : "bg-primary hover:bg-primary/90 text-primary-foreground"
      }`}
      title={label}
    >
      <Icon className="h-6 w-6" />
      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 hover:scale-100 transition-transform duration-300" />
    </button>
  );
}

// Progress steps
export function ProgressSteps({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
              index < currentStep
                ? "bg-green-500 text-white"
                : index === currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            {index < currentStep ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              index + 1
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-12 h-1 mx-2 transition-all duration-500 ${
                index < currentStep ? "bg-green-500" : "bg-muted"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Animated counter
export function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(value * progress));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

// Tooltip with animation
export function AnimatedTooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  const [visible, setVisible] = React.useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap animate-in fade-in-50 slide-in-from-bottom-1">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}
