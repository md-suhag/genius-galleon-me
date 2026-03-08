import { Link } from "react-router-dom";
import {
  User, Code2, FolderKanban, Briefcase, Wrench,
  MessageSquareQuote, Mail, TrendingUp, Eye, Clock
} from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const stats = [
  { label: "Page Views", value: "12,847", icon: Eye, change: "+12%" },
  { label: "Projects", value: "8", icon: FolderKanban, change: "+2" },
  { label: "Messages", value: "24", icon: Mail, change: "+5" },
  { label: "Uptime", value: "99.9%", icon: Clock, change: "Stable" },
];

const sections = [
  { label: "Hero Section", href: "/dashboard/hero", icon: User, desc: "Edit headline, subtitle, CTA" },
  { label: "About", href: "/dashboard/about", icon: User, desc: "Bio, stats, tech stack" },
  { label: "Skills", href: "/dashboard/skills", icon: Code2, desc: "Manage skills & categories" },
  { label: "Projects", href: "/dashboard/projects", icon: FolderKanban, desc: "Add, edit, remove projects" },
  { label: "Experience", href: "/dashboard/experience", icon: Briefcase, desc: "Work & education timeline" },
  { label: "Services", href: "/dashboard/services", icon: Wrench, desc: "Service offerings" },
  { label: "Testimonials", href: "/dashboard/testimonials", icon: MessageSquareQuote, desc: "Client reviews" },
  { label: "Contact", href: "/dashboard/contact", icon: Mail, desc: "Contact info & socials" },
];

const DashboardHome = () => {
  return (
    <div>
      <AdminPageHeader
        title="Dashboard"
        description="Manage your portfolio content. All changes are ready for API integration."
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-5 card-hover">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />{stat.change}
              </span>
            </div>
            <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Access */}
      <h2 className="text-lg font-heading font-semibold text-foreground mb-4">Content Sections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            to={section.href}
            className="group bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:bg-primary/5 transition-all"
          >
            <section.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
            <p className="text-sm font-medium text-foreground">{section.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{section.desc}</p>
          </Link>
        ))}
      </div>

      {/* API Status */}
      <div className="mt-8 bg-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-heading font-semibold text-foreground mb-3">API Integration Status</h3>
        <div className="space-y-2">
          {["GET /api/portfolio", "PUT /api/hero", "PUT /api/about", "POST /api/projects", "PUT /api/contact"].map((endpoint) => (
            <div key={endpoint} className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/50">
              <code className="text-xs font-mono text-muted-foreground">{endpoint}</code>
              <span className="text-xs font-mono text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full">Pending</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Replace Redux initial state with API calls when your backend is ready.
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
