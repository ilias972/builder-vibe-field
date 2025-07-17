import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Send,
  Phone,
  Video,
  PhoneOff,
  VideoOff,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  FileText,
  DollarSign,
  Clock,
  Shield,
  Paperclip,
  Image as ImageIcon,
} from "lucide-react";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: "text" | "proposal" | "system";
  proposal?: {
    amount: number;
    description: string;
    status: "pending" | "accepted" | "rejected";
  };
}

interface MessagingProps {
  providerId: string;
  providerName: string;
  providerAvatar: string;
  isProvider?: boolean;
}

export function Messaging({
  providerId,
  providerName,
  providerAvatar,
  isProvider = false,
}: MessagingProps) {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      senderId: "system",
      content:
        language === "ar"
          ? "مرحباً! يمكنك الآن التواصل مع مقدم الخدمة بأمان."
          : "Bonjour ! Vous pouvez maintenant communiquer avec le prestataire en toute sécurité.",
      timestamp: new Date(),
      type: "system",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [proposalAmount, setProposalAmount] = useState("");
  const [proposalDescription, setProposalDescription] = useState("");
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCallActive]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: isProvider ? providerId : "client",
      content: newMessage,
      timestamp: new Date(),
      type: "text",
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  const sendProposal = () => {
    if (!proposalAmount || !proposalDescription.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: isProvider ? providerId : "client",
      content: `Proposition: ${proposalAmount} DH - ${proposalDescription}`,
      timestamp: new Date(),
      type: "proposal",
      proposal: {
        amount: parseInt(proposalAmount),
        description: proposalDescription,
        status: "pending",
      },
    };

    setMessages((prev) => [...prev, message]);
    setProposalAmount("");
    setProposalDescription("");
  };

  const startCall = (video: boolean = false) => {
    setIsCallActive(true);
    setIsVideoCall(video);
    setCallDuration(0);

    if (video && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Error accessing media devices:", err));
    }
  };

  const endCall = () => {
    setIsCallActive(false);
    setIsVideoCall(false);
    setIsMuted(false);
    setIsCameraOff(false);

    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const formatCallDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(language === "ar" ? "ar-MA" : "fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={providerAvatar} alt={providerName} />
              <AvatarFallback>{providerName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{providerName}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {language === "ar" ? "متصل" : "En ligne"}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => startCall(false)}
              disabled={isCallActive}
            >
              <Phone className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => startCall(true)}
              disabled={isCallActive}
            >
              <Video className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {/* Video Call Overlay */}
      {isCallActive && (
        <div className="absolute inset-0 bg-black z-50 flex flex-col">
          <div className="flex-1 relative">
            {isVideoCall ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-900">
                <div className="text-center text-white">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={providerAvatar} alt={providerName} />
                    <AvatarFallback className="text-2xl">
                      {providerName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{providerName}</h3>
                  <p className="text-gray-300">
                    {language === "ar" ? "مكالمة صوتية" : "Appel audio"}
                  </p>
                </div>
              </div>
            )}

            {/* Call Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className={isMuted ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {isMuted ? (
                  <MicOff className="h-4 w-4" />
                ) : (
                  <Mic className="h-4 w-4" />
                )}
              </Button>

              {isVideoCall && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsCameraOff(!isCameraOff)}
                  className={isCameraOff ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {isCameraOff ? (
                    <CameraOff className="h-4 w-4" />
                  ) : (
                    <Camera className="h-4 w-4" />
                  )}
                </Button>
              )}

              <Button
                variant="destructive"
                size="sm"
                onClick={endCall}
                className="bg-red-600 hover:bg-red-700"
              >
                <PhoneOff className="h-4 w-4" />
              </Button>
            </div>

            {/* Call Duration */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{formatCallDuration(callDuration)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Messages Area */}
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.senderId === "system"
                ? "justify-center"
                : message.senderId === (isProvider ? providerId : "client")
                  ? "justify-end"
                  : "justify-start"
            }`}
          >
            {message.type === "system" ? (
              <div className="bg-muted text-muted-foreground text-sm px-3 py-2 rounded-full">
                {message.content}
              </div>
            ) : message.type === "proposal" ? (
              <Card
                className={`max-w-sm ${
                  message.senderId === (isProvider ? providerId : "client")
                    ? "bg-primary text-primary-foreground"
                    : ""
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold">
                      {language === "ar" ? "اقتراح سعر" : "Proposition de prix"}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">
                      {message.proposal?.amount} DH
                    </div>
                    <p className="text-sm opacity-90">
                      {message.proposal?.description}
                    </p>
                    {message.proposal?.status === "pending" &&
                      message.senderId !==
                        (isProvider ? providerId : "client") && (
                        <div className="flex gap-2 mt-3">
                          <Button variant="secondary" size="sm">
                            {language === "ar" ? "قبول" : "Accepter"}
                          </Button>
                          <Button variant="outline" size="sm">
                            {language === "ar" ? "رفض" : "Refuser"}
                          </Button>
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div
                className={`max-w-sm px-3 py-2 rounded-lg ${
                  message.senderId === (isProvider ? providerId : "client")
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {formatTime(message.timestamp)}
                </p>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </CardContent>

      {/* Message Input */}
      <div className="border-t p-4 space-y-3">
        {/* Proposal Section */}
        {!isProvider && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                <DollarSign className="mr-2 h-4 w-4" />
                {language === "ar" ? "اقتراح مبلغ" : "Proposer un montant"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {language === "ar"
                    ? "اقتراح مهمة جديدة"
                    : "Proposer une nouvelle mission"}
                </DialogTitle>
                <DialogDescription>
                  {language === "ar"
                    ? "حدد المبلغ واشرح المهمة بالتفصيل"
                    : "Définissez le montant et décrivez la mission en détail"}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="amount">
                    {language === "ar" ? "المبلغ (بالدرهم)" : "Montant (en DH)"}
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    value={proposalAmount}
                    onChange={(e) => setProposalAmount(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label htmlFor="description">
                    {language === "ar"
                      ? "وصف المهمة"
                      : "Description de la mission"}
                  </Label>
                  <Textarea
                    id="description"
                    value={proposalDescription}
                    onChange={(e) => setProposalDescription(e.target.value)}
                    placeholder={
                      language === "ar"
                        ? "اشرح ما تحتاجه بالتفصيل..."
                        : "Décrivez ce dont vous avez besoin en détail..."
                    }
                    rows={3}
                  />
                </div>
                <Button onClick={sendProposal} className="w-full">
                  {language === "ar"
                    ? "إرسال الاقتراح"
                    : "Envoyer la proposition"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Message Input */}
        <div className="flex space-x-2">
          <div className="flex space-x-1">
            <Button variant="ghost" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ImageIcon className="h-4 w-4" />
            </Button>
          </div>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={
              language === "ar" ? "اكتب رسالتك..." : "Tapez votre message..."
            }
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="flex-1"
          />
          <Button onClick={sendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Security Notice */}
        <div className="flex items-center justify-center text-xs text-muted-foreground">
          <Shield className="mr-1 h-3 w-3" />
          {language === "ar"
            ? "المحادثات محمية ومراقبة للأمان"
            : "Conversations protégées et surveillées pour la sécurité"}
        </div>
      </div>
    </Card>
  );
}
