import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Award, MessageSquare, TrendingUp, BookOpen, Target, Activity, Calendar } from 'lucide-react';

export function GlobalStats() {
  // Données pour l'évolution mensuelle des utilisateurs
  const userGrowthData = [
    { month: 'Jan', utilisateurs: 145, actifs: 120 },
    { month: 'Fév', utilisateurs: 178, actifs: 155 },
    { month: 'Mar', utilisateurs: 210, actifs: 189 },
    { month: 'Avr', utilisateurs: 256, actifs: 228 },
    { month: 'Mai', utilisateurs: 298, actifs: 267 },
    { month: 'Juin', utilisateurs: 342, actifs: 310 },
  ];

  // Données pour les défis par catégorie
  const challengesByCategoryData = [
    { name: 'Communication', value: 12, color: '#3b82f6' },
    { name: 'Gestion d\'équipe', value: 10, color: '#8b5cf6' },
    { name: 'Innovation', value: 8, color: '#ec4899' },
    { name: 'Organisation', value: 9, color: '#14b8a6' },
    { name: 'Développement', value: 7, color: '#f59e0b' },
    { name: 'Leadership', value: 6, color: '#10b981' },
    { name: 'Stratégie', value: 3, color: '#6366f1' },
  ];

  // Données pour les ministères les plus actifs
  const ministriesActivityData = [
    { ministry: 'Intérieur', activity: 85 },
    { ministry: 'Économie', activity: 72 },
    { ministry: 'Travail', activity: 68 },
    { ministry: 'Éducation', activity: 61 },
    { ministry: 'Santé', activity: 54 },
    { ministry: 'Justice', activity: 48 },
  ];

  const statCards = [
    {
      title: 'Utilisateurs inscrits',
      value: '342',
      change: '+15%',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Défis complétés',
      value: '1,247',
      change: '+28%',
      icon: Award,
      color: 'bg-purple-500',
    },
    {
      title: 'Discussions actives',
      value: '89',
      change: '+12%',
      icon: MessageSquare,
      color: 'bg-pink-500',
    },
    {
      title: 'Taux d\'engagement',
      value: '87%',
      change: '+5%',
      icon: TrendingUp,
      color: 'bg-teal-500',
    },
    {
      title: 'Événements organisés',
      value: '24',
      change: '+8',
      icon: Calendar,
      color: 'bg-amber-500',
    },
    {
      title: 'Ressources consultées',
      value: '3,456',
      change: '+42%',
      icon: BookOpen,
      color: 'bg-emerald-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-semibold text-blue-900 mb-2">Statistiques globales</h1>
        <p className="text-slate-600">
          Vue d'ensemble de l'activité et des performances de la plateforme Défis Managers
        </p>
      </div>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-slate-600 font-semibold mb-1">{card.title}</p>
                  <p className="text-3xl font-semibold text-blue-900 mb-2">{card.value}</p>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-emerald-600 mr-1" />
                    <span className="text-sm font-semibold text-emerald-600">{card.change}</span>
                    <span className="text-sm text-slate-500 ml-1">ce mois</span>
                  </div>
                </div>
                <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Croissance des utilisateurs */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
          <div className="flex items-center mb-6">
            <Activity className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-blue-900">Évolution des utilisateurs</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="utilisateurs" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="Total utilisateurs"
              />
              <Line 
                type="monotone" 
                dataKey="actifs" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                name="Utilisateurs actifs"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Défis par catégorie */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
          <div className="flex items-center mb-6">
            <Target className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-blue-900">Répartition des défis</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={challengesByCategoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {challengesByCategoryData.map((entry, index) => (
                  <Cell key={`pie-cell-${entry.name}-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Graphiques secondaires */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ministères les plus actifs */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
          <div className="flex items-center mb-6">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-blue-900">Ministères les plus actifs</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ministriesActivityData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" />
              <YAxis type="category" dataKey="ministry" stroke="#64748b" width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="activity" fill="#14b8a6" name="Score d'activité" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tableau de synthèse */}
      <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-blue-900">Synthèse des performances</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Indicateur</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Valeur actuelle</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Objectif</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Progression</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { metric: 'Taux de complétion des défis', current: '73%', target: '80%', progress: 91, status: 'good' },
                { metric: 'Satisfaction utilisateurs', current: '4.6/5', target: '4.5/5', progress: 102, status: 'excellent' },
                { metric: 'Nombre de discussions/mois', current: '156', target: '200', progress: 78, status: 'warning' },
                { metric: 'Utilisateurs actifs quotidiens', current: '187', target: '150', progress: 124, status: 'excellent' },
                { metric: 'Ressources téléchargées', current: '892', target: '1000', progress: 89, status: 'good' },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900">{row.metric}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-blue-900">{row.current}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.target}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-slate-200 rounded-full h-2 max-w-[100px]">
                        <div 
                          className={`h-2 rounded-full ${
                            row.status === 'excellent' ? 'bg-emerald-500' :
                            row.status === 'good' ? 'bg-blue-500' :
                            'bg-amber-500'
                          }`}
                          style={{ width: `${Math.min(row.progress, 100)}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{row.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      row.status === 'excellent' ? 'bg-emerald-100 text-emerald-700' :
                      row.status === 'good' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {row.status === 'excellent' ? 'Excellent' :
                       row.status === 'good' ? 'Bon' :
                       'À améliorer'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}