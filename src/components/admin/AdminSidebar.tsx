import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, User, Code2, FolderKanban, Briefcase, Wrench,
  MessageSquareQuote, Mail, ChevronLeft, ChevronRight, LogOut, Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Hero Section", href: "/dashboard/hero", icon: User },
  { label: "About", href: "/dashboard/about", icon: User },
  { label: "Skills", href: "/dashboard/skills", icon: Code2 },
  { label: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { label: "Experience", href: "/dashboard/experience", icon: Briefcase },
  { label: "Services", href: "/dashboard/services", icon: Wrench },
  { label: "Testimonials", href: "/dashboard/testimonials", icon: MessageSquareQuote },
  { label: "Contact", href: "/dashboard/contact", icon: Mail },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside className={cn(
      "h-screen sticky top-0 flex flex-col border-r border-border bg-card transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!collapsed && (
          <span className="font-mono text-primary font-bold text-sm">{"<Admin />"}</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                active
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-border">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          title={collapsed ? "Back to Site" : undefined}
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!collapsed && <span>Back to Site</span>}
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
