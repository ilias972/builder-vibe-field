import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Bell,
  MessageSquare,
  Star,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  Gift,
  Users,
  Shield,
  X,
  Settings,
} from "lucide-react";

interface Notification {
  id: string;
  type: "message" | "booking" | "payment" | "review" | "system" | "promotion";
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  avatar?: string;
  actionUrl?: string;
  priority: "low" | "medium" | "high";
}

export function NotificationButton() {
  const { language } = useLanguage();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Mock notifications
  const mockNotifications: Notification[] = [
    {
      id: "1",
      type: "message",
      title: language === "ar" ? "رسالة جديدة" : "Nouveau message",
      message:
        language === "ar"
          ? "Ahmed Bennani أرسل لك رسالة"
          : "Ahmed Bennani vous a envoyé un message",
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      read: false,
      avatar: "/placeholder.svg",
      priority: "high",
    },
    {
      id: "2",
      type: "booking",
      title: language === "ar" ? "حجز جديد" : "Nouvelle réservation",
      message:
        language === "ar"
          ? "تم تأكيد حجزك لخدمة السباكة"
          : "Votre réservation de plomberie a été confirmée",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: false,
      priority: "high",
    },
    {
      id: "3",
      type: "payment",
      title: language === "ar" ? "دفع مكتمل" : "Paiement effectué",
      message:
        language === "ar"
          ? "تم استلام دفعة 200 درهم"
          : "Paiement de 200 DH reçu",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      read: true,
      priority: "medium",
    },
    {
      id: "4",
      type: "review",
      title: language === "ar" ? "تقييم جديد" : "Nouvel avis",
      message:
        language === "ar"
          ? "حصلت على تقييم 5 نجوم!"
          : "Vous avez reçu un avis 5 étoiles !",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      read: true,
      priority: "medium",
    },
    {
      id: "5",
      type: "promotion",
      title: language === "ar" ? "عرض خاص" : "Offre spéciale",
      message:
        language === "ar"
          ? "خصم 20% على خدمات Club Pro"
          : "20% de réduction sur les services Club Pro",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      read: false,
      priority: "low",
    },
  ];

  useEffect(() => {
    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter((n) => !n.read).length);
  }, [language]);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
    setUnreadCount(0);
  };

  const deleteNotification = (id: string) => {
    const notification = notifications.find((n) => n.id === id);
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    if (notification && !notification.read) {
      setUnreadCount((prev) => Math.max(0, prev - 1));
    }
  };

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "message":
        return MessageSquare;
      case "booking":
        return Clock;
      case "payment":
        return DollarSign;
      case "review":
        return Star;
      case "promotion":
        return Gift;
      case "system":
        return Shield;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "message":
        return "text-blue-500";
      case "booking":
        return "text-orange-500";
      case "payment":
        return "text-green-500";
      case "review":
        return "text-yellow-500";
      case "promotion":
        return "text-purple-500";
      case "system":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return language === "ar" ? "الآن" : "Maintenant";
    if (minutes < 60)
      return language === "ar"
        ? `منذ ${minutes} دقيقة`
        : `Il y a ${minutes}min`;
    if (hours < 24)
      return language === "ar" ? `منذ ${hours} ساعة` : `Il y a ${hours}h`;
    return language === "ar" ? `منذ ${days} يوم` : `Il y a ${days}j`;
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                {language === "ar" ? "الإشعارات" : "Notifications"}
              </CardTitle>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={markAllAsRead}
                    className="text-xs"
                  >
                    {language === "ar" ? "تم القراءة" : "Tout lire"}
                  </Button>
                )}
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-muted-foreground">
                <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>
                  {language === "ar"
                    ? "لا توجد إشعارات"
                    : "Aucune notification"}
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                {notifications.map((notification) => {
                  const Icon = getNotificationIcon(notification.type);
                  return (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-accent/50 cursor-pointer transition-colors border-l-2 ${
                        !notification.read
                          ? "bg-primary/5 border-l-primary"
                          : "border-l-transparent"
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-full bg-accent ${getNotificationColor(notification.type)}`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4
                              className={`text-sm font-medium ${
                                !notification.read ? "font-semibold" : ""
                              }`}
                            >
                              {notification.title}
                            </h4>
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-muted-foreground">
                                {formatTime(notification.timestamp)}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteNotification(notification.id);
                                }}
                                className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                          )}
                        </div>
                        {notification.avatar && (
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback>
                              {notification.message[0]}
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
          {notifications.length > 0 && (
            <div className="p-3 border-t">
              <Button variant="ghost" size="sm" className="w-full">
                {language === "ar"
                  ? "عرض جميع الإشعارات"
                  : "Voir toutes les notifications"}
              </Button>
            </div>
          )}
        </Card>
      </PopoverContent>
    </Popover>
  );
}

// Toast notification component
export function useToast() {
  const [toasts, setToasts] = useState<
    Array<{
      id: string;
      title: string;
      message: string;
      type: "success" | "error" | "warning" | "info";
    }>
  >([]);

  const addToast = (
    title: string,
    message: string,
    type: "success" | "error" | "warning" | "info" = "info",
  ) => {
    const id = Math.random().toString(36);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
}

export function ToastContainer({
  toasts,
  removeToast,
}: {
  toasts: Array<{
    id: string;
    title: string;
    message: string;
    type: "success" | "error" | "warning" | "info";
  }>;
  removeToast: (id: string) => void;
}) {
  const getToastIcon = (type: string) => {
    switch (type) {
      case "success":
        return CheckCircle;
      case "error":
        return AlertTriangle;
      case "warning":
        return AlertTriangle;
      default:
        return Bell;
    }
  };

  const getToastColor = (type: string) => {
    switch (type) {
      case "success":
        return "border-green-500 bg-green-50 text-green-800";
      case "error":
        return "border-red-500 bg-red-50 text-red-800";
      case "warning":
        return "border-yellow-500 bg-yellow-50 text-yellow-800";
      default:
        return "border-blue-500 bg-blue-50 text-blue-800";
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => {
        const Icon = getToastIcon(toast.type);
        return (
          <Card
            key={toast.id}
            className={`border-l-4 animate-in slide-in-from-right ${getToastColor(toast.type)}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Icon className="h-5 w-5 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium">{toast.title}</h4>
                  <p className="text-sm opacity-90">{toast.message}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeToast(toast.id)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

// In-app notification banner
export function NotificationBanner() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Gift className="h-5 w-5" />
            <span className="text-sm font-medium">
              {language === "ar"
                ? "🎉 احصل على خصم 20% على أول خدمة من Club Pro!"
                : "🎉 Obtenez 20% de réduction sur votre premier service Club Pro !"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="text-xs bg-white/20 hover:bg-white/30"
            >
              {language === "ar" ? "تعرف أكثر" : "En savoir plus"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-primary-foreground hover:bg-white/20 h-6 w-6 p-0"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
