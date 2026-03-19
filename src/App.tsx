import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import AcceptedDevices from "./pages/AcceptedDevices";
import Phones from "./pages/Phones";
import Laptops from "./pages/Laptops";
import Tablets from "./pages/Tablets";
import GamingConsoles from "./pages/GamingConsoles";
import Cameras from "./pages/Cameras";
import Drones from "./pages/Drones";
import SmartWatches from "./pages/SmartWatches";
import Headphones from "./pages/Headphones";
import OtherDevices from "./pages/OtherDevices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accepted-devices" element={<AcceptedDevices />} />

          {/* Category Pages */}
          <Route path="/phones" element={<Phones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/gaming-consoles" element={<GamingConsoles />} />
          <Route path="/cameras" element={<Cameras />} />
          <Route path="/drones" element={<Drones />} />
          <Route path="/smart-watches" element={<SmartWatches />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/other-devices" element={<OtherDevices />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;