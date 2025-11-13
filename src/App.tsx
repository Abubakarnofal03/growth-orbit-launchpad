import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Check if loading screen has been shown in this session
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");
    if (hasSeenLoading) {
      setShowLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasSeenLoading", "true");
    setShowLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/case-study/:id" element={<CaseStudyDetail />} />
              <Route path="/blog" element={<Blog />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
