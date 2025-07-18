import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import Register from "./pages/Register";
import SOS from "./pages/SOS";
import ProviderProfile from "./pages/ProviderProfile";
import BecomeProvider from "./pages/BecomeProvider";
import ClubPro from "./pages/ClubPro";
import Providers from "./pages/Providers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Search from "./pages/Search";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sos" element={<SOS />} />
              <Route path="/services/:service" element={<PlaceholderPage />} />
              <Route path="/providers" element={<Providers />} />
              <Route path="/provider/:id" element={<ProviderProfile />} />
              <Route path="/b2b" element={<PlaceholderPage />} />
              <Route path="/club-pro" element={<ClubPro />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/become-provider" element={<BecomeProvider />} />
              <Route path="/search" element={<Search />} />
              <Route path="/contact/:id" element={<PlaceholderPage />} />
              <Route path="/terms" element={<PlaceholderPage />} />
              <Route path="/privacy" element={<PlaceholderPage />} />
              <Route path="/faq" element={<PlaceholderPage />} />
              <Route path="/support" element={<PlaceholderPage />} />
              <Route path="/careers" element={<PlaceholderPage />} />
              <Route path="/press" element={<PlaceholderPage />} />
              <Route path="/partners" element={<PlaceholderPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
