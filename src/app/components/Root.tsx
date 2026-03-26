import { Outlet, Link, useLocation } from "react-router";
import { Home, ClipboardCheck, Target, Users, BookOpen, Calendar, Briefcase, LayoutDashboard, LogIn, BarChart3, Settings, FileText } from "lucide-react";

// Logo officiel du Ministère de l'Action et des Comptes publics
const logo = "/logo-ministère.png";

export function Root() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Accueil", icon: Home },
    { path: "/mon-tableau-de-bord", label: "Mon tableau de bord", icon: LayoutDashboard },
    { path: "/auto-diagnostic", label: "Auto-diagnostic", icon: ClipboardCheck },
    { path: "/defis", label: "Défis", icon: Target },
    { path: "/communaute", label: "Communauté", icon: Users },
    { path: "/ressources", label: "Ressources", icon: BookOpen },
    { path: "/evenements", label: "Événements", icon: Calendar },
    { path: "/services", label: "Services", icon: Briefcase },
    { path: "/statistiques", label: "Statistiques", icon: BarChart3 },
    { path: "/administration", label: "Administration", icon: Settings },
    { path: "/rapports", label: "Rapports", icon: FileText },
    { path: "/connexion", label: "Connexion", icon: LogIn },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={logo}
                alt="Ministère de l'Action et des Comptes Publics"
                className="h-24 w-auto object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Défis Managers</h1>
                <p className="text-sm text-slate-600">Développez vos pratiques managériales</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-slate-600">
            © 2026 Défis Managers - Plateforme de développement managérial
          </p>
        </div>
      </footer>
    </div>
  );
}