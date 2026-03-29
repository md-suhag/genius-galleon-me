import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import AdminLayout from "@/components/admin/AdminLayout";
import DashboardHome from "@/pages/admin/DashboardHome";
import HeroEditor from "@/pages/admin/HeroEditor";
import AboutEditor from "@/pages/admin/AboutEditor";
import SkillsEditor from "@/pages/admin/SkillsEditor";
import ProjectsEditor from "@/pages/admin/ProjectsEditor";
import ExperienceEditor from "@/pages/admin/ExperienceEditor";
import ServicesEditor from "@/pages/admin/ServicesEditor";
import TestimonialsEditor from "@/pages/admin/TestimonialsEditor";
import ContactEditor from "@/pages/admin/ContactEditor";
import BlogEditor from "@/pages/admin/BlogEditor";
import SettingsPage from "@/pages/admin/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            <Route path="/dashboard" element={<AdminLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="hero" element={<HeroEditor />} />
              <Route path="about" element={<AboutEditor />} />
              <Route path="skills" element={<SkillsEditor />} />
              <Route path="projects" element={<ProjectsEditor />} />
              <Route path="experience" element={<ExperienceEditor />} />
              <Route path="services" element={<ServicesEditor />} />
              <Route path="testimonials" element={<TestimonialsEditor />} />
              <Route path="contact" element={<ContactEditor />} />
              <Route path="blog" element={<BlogEditor />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      <!--Start of Tawk.to Script-->
        <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/69c8b1eda553521c36a63740/1jkrve2ib';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        </script>
      <!--End of Tawk.to Script-->
    </QueryClientProvider>
  </Provider>
);

export default App;
