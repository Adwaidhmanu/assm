import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import RoleSelect from "./pages/role/RoleSelect";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import SetupProfile from "./pages/profile/SetupProfile";
import JobsList from "./pages/jobs/JobsList";
import NewJob from "./pages/jobs/NewJob";
import Messages from "./pages/messages/Messages";
import Payments from "./pages/payments/Payments";
import Reviews from "./pages/reviews/Reviews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/role" element={<RoleSelect />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/setup" element={<SetupProfile />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/new" element={<NewJob />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
