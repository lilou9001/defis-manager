import { Link } from "react-router";
import { ClipboardCheck, Target, Users, BookOpen, Calendar, TrendingUp, Award, MessageCircle, Briefcase } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: ClipboardCheck,
      title: "Auto-diagnostic",
      description: "Évaluez vos compétences managériales et identifiez vos axes de progression",
      path: "/auto-diagnostic",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Défis Managers",
      description: "Relevez des défis concrets pour développer vos compétences au quotidien",
      path: "/defis",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Échangez avec d'autres managers et partagez vos expériences",
      path: "/communaute",
      color: "from-green-500 to-green-600",
    },
    {
      icon: BookOpen,
      title: "Centre de Ressources",
      description: "Accédez à des guides, articles et outils pour managers",
      path: "/ressources",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Calendar,
      title: "Événements",
      description: "Participez à des webinaires, ateliers et formations",
      path: "/evenements",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Briefcase,
      title: "Services",
      description: "Coaching, médiation et co-développement pour accompagner votre évolution",
      path: "/services",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "90", label: "Managers actifs" },
    { icon: Target, value: "56", label: "Défis disponibles" },
    { icon: Award, value: "89%", label: "Taux de satisfaction" },
    { icon: MessageCircle, value: "32", label: "Discussions" },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-semibold text-blue-900">
          Développez vos pratiques managériales
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Une plateforme complète pour évaluer, développer et partager vos pratiques managériales au quotidien
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-semibold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          );
        })}
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Link
              key={index}
              to={feature.path}
              className="group bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </Link>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-8">
        <h3 className="text-3xl font-semibold text-slate-900">Prêt à relever le défi ?</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Commencez par notre auto-diagnostic pour identifier vos forces et vos axes de développement
        </p>
        <Link
          to="/auto-diagnostic"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
        >
          <ClipboardCheck className="w-5 h-5" />
          Démarrer l'auto-diagnostic
        </Link>
      </section>
    </div>
  );
}