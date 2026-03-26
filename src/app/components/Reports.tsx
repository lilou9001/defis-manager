import { useState } from 'react';
import { FileText, Download, Calendar, Filter, TrendingUp, Users, Award, BarChart3, PieChart, FileSpreadsheet, Eye, Printer } from 'lucide-react';

export function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Rapports disponibles
  const availableReports = [
    {
      id: 1,
      title: 'Rapport mensuel d\'activité',
      description: 'Vue d\'ensemble complète de l\'activité de la plateforme sur le mois écoulé',
      icon: BarChart3,
      category: 'Activité',
      lastGenerated: '01/03/2026',
      format: ['PDF', 'Excel'],
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Analyse des utilisateurs',
      description: 'Statistiques détaillées sur les utilisateurs, leur engagement et leur progression',
      icon: Users,
      category: 'Utilisateurs',
      lastGenerated: '05/03/2026',
      format: ['PDF', 'Excel'],
      color: 'bg-purple-500',
    },
    {
      id: 3,
      title: 'Performance des défis',
      description: 'Analyse de la complétion, difficulté et satisfaction pour chaque défi',
      icon: Award,
      category: 'Défis',
      lastGenerated: '08/03/2026',
      format: ['PDF', 'Excel'],
      color: 'bg-pink-500',
    },
    {
      id: 4,
      title: 'Répartition par ministère',
      description: 'Statistiques d\'utilisation ventilées par ministère et direction',
      icon: PieChart,
      category: 'Ministères',
      lastGenerated: '10/03/2026',
      format: ['PDF', 'Excel', 'PowerPoint'],
      color: 'bg-teal-500',
    },
    {
      id: 5,
      title: 'Tendances et évolution',
      description: 'Analyse des tendances sur 6 mois avec projections et recommandations',
      icon: TrendingUp,
      category: 'Analyse',
      lastGenerated: '12/03/2026',
      format: ['PDF', 'PowerPoint'],
      color: 'bg-amber-500',
    },
    {
      id: 6,
      title: 'Export des données brutes',
      description: 'Export complet de toutes les données pour analyse personnalisée',
      icon: FileSpreadsheet,
      category: 'Données',
      lastGenerated: '13/03/2026',
      format: ['Excel', 'CSV'],
      color: 'bg-emerald-500',
    },
  ];

  // Rapports récemment générés
  const recentReports = [
    {
      id: 1,
      name: 'Rapport_Activite_Fevrier_2026.pdf',
      type: 'Activité mensuelle',
      date: '01/03/2026',
      size: '2.4 MB',
      downloads: 12,
    },
    {
      id: 2,
      name: 'Analyse_Utilisateurs_T1_2026.xlsx',
      type: 'Utilisateurs',
      date: '28/02/2026',
      size: '1.8 MB',
      downloads: 8,
    },
    {
      id: 3,
      name: 'Performance_Defis_Fevrier_2026.pdf',
      type: 'Défis',
      date: '25/02/2026',
      size: '3.1 MB',
      downloads: 15,
    },
    {
      id: 4,
      name: 'Repartition_Ministeres_2026.pptx',
      type: 'Ministères',
      date: '20/02/2026',
      size: '4.5 MB',
      downloads: 21,
    },
  ];

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'activity', label: 'Activité' },
    { value: 'users', label: 'Utilisateurs' },
    { value: 'challenges', label: 'Défis' },
    { value: 'ministries', label: 'Ministères' },
    { value: 'analysis', label: 'Analyse' },
  ];

  const periods = [
    { value: 'week', label: 'Cette semaine' },
    { value: 'month', label: 'Ce mois' },
    { value: 'quarter', label: 'Ce trimestre' },
    { value: 'year', label: 'Cette année' },
    { value: 'custom', label: 'Période personnalisée' },
  ];

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-blue-900 mb-2">Rapports et analyses</h1>
          <p className="text-slate-600">
            Générez et téléchargez des rapports détaillés sur l'activité de la plateforme
          </p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md">
          <FileText className="w-5 h-5" />
          <span>Créer un rapport personnalisé</span>
        </button>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Période
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Catégorie
            </label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Appliquer les filtres
            </button>
          </div>
        </div>
      </div>

      {/* Rapports disponibles */}
      <div>
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Rapports disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableReports.map((report) => {
            const Icon = report.icon;
            return (
              <div
                key={report.id}
                className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${report.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {report.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-blue-900 mb-2">{report.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{report.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-xs text-slate-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    Dernière génération : {report.lastGenerated}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {report.format.map((format) => (
                      <span
                        key={format}
                        className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded"
                      >
                        {format}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button className="flex items-center justify-center space-x-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Générer</span>
                    </button>
                    <button className="flex items-center justify-center space-x-1 bg-white border-2 border-slate-300 text-slate-700 py-2 px-3 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
                      <Eye className="w-4 h-4" />
                      <span>Aperçu</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rapports récents */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-blue-900">Rapports récents</h2>
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            Voir tous les rapports
          </button>
        </div>

        <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b-2 border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Nom du fichier</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Date de création</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Taille</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Téléchargements</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {recentReports.map((report) => (
                  <tr key={report.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-sm font-semibold text-slate-900">{report.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">{report.type}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{report.date}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{report.size}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                        <Download className="w-3 h-3 mr-1" />
                        {report.downloads}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                          <Printer className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Statistiques d'export */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-8 h-8" />
            <div className="text-right">
              <p className="text-3xl font-semibold">127</p>
              <p className="text-sm text-blue-100">Rapports générés</p>
            </div>
          </div>
          <p className="text-sm text-blue-100">Ce mois-ci</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Download className="w-8 h-8" />
            <div className="text-right">
              <p className="text-3xl font-semibold">842</p>
              <p className="text-sm text-purple-100">Téléchargements</p>
            </div>
          </div>
          <p className="text-sm text-purple-100">Ce mois-ci</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8" />
            <div className="text-right">
              <p className="text-3xl font-semibold">45</p>
              <p className="text-sm text-pink-100">Utilisateurs actifs</p>
            </div>
          </div>
          <p className="text-sm text-pink-100">Ayant exporté des rapports</p>
        </div>
      </div>
    </div>
  );
}
