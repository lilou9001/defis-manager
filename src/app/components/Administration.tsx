import { useState, useMemo } from 'react';
import {
  Users,
  Award,
  MessageSquare,
  BookOpen,
  Calendar,
  Settings,
  Search,
  Filter,
  MoreVertical,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Shield,
  ChevronUp,
  ChevronDown,
  X,
  UserPlus,
  Target,
  FileText,
  CalendarPlus,
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';

type TabId = 'users' | 'challenges' | 'discussions' | 'resources' | 'events';

interface User {
  id: number;
  name: string;
  email: string;
  ministry: string;
  role: string;
  challenges: number;
  maxChallenges: number;
  status: 'active' | 'inactive';
  joinDate: string;
}

interface Challenge {
  id: number;
  title: string;
  category: string;
  difficulty: string;
  completions: number;
  status: 'published' | 'draft';
  created: string;
}

interface Discussion {
  id: number;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  status: 'active' | 'archived';
  created: string;
}

// Données simulées
const USERS_DATA: User[] = [
  { id: 1, name: 'Marie Dubois', email: 'marie.dubois@interieur.gouv.fr', ministry: "Ministère de l'Intérieur", role: 'Manager', challenges: 12, maxChallenges: 15, status: 'active', joinDate: '15/01/2026' },
  { id: 2, name: 'Jean Martin', email: 'jean.martin@economie.gouv.fr', ministry: "Ministère de l'Économie", role: 'Responsable', challenges: 8, maxChallenges: 12, status: 'active', joinDate: '22/01/2026' },
  { id: 3, name: 'Sophie Bernard', email: 'sophie.bernard@travail.gouv.fr', ministry: 'Ministère du Travail', role: 'Directrice', challenges: 15, maxChallenges: 15, status: 'inactive', joinDate: '08/02/2026' },
  { id: 4, name: 'Pierre Petit', email: 'pierre.petit@education.gouv.fr', ministry: "Ministère de l'Éducation", role: 'Chef de service', challenges: 5, maxChallenges: 10, status: 'active', joinDate: '12/02/2026' },
  { id: 5, name: 'Anne Lefebvre', email: 'anne.lefebvre@culture.gouv.fr', ministry: 'Ministère de la Culture', role: 'Manager', challenges: 9, maxChallenges: 12, status: 'active', joinDate: '20/02/2026' },
  { id: 6, name: 'Thomas Moreau', email: 'thomas.moreau@agriculture.gouv.fr', ministry: "Ministère de l'Agriculture", role: 'Collaborateur', challenges: 3, maxChallenges: 8, status: 'inactive', joinDate: '01/03/2026' },
];

const CHALLENGES_DATA: Challenge[] = [
  { id: 1, title: "Améliorer la communication d'équipe", category: 'Communication', difficulty: 'Intermédiaire', completions: 47, status: 'published', created: '10/01/2026' },
  { id: 2, title: 'Gérer un conflit constructivement', category: "Gestion d'équipe", difficulty: 'Avancé', completions: 32, status: 'published', created: '15/01/2026' },
  { id: 3, title: 'Innover dans les processus', category: 'Innovation', difficulty: 'Débutant', completions: 28, status: 'draft', created: '20/02/2026' },
  { id: 4, title: 'Optimiser la répartition des tâches', category: 'Organisation', difficulty: 'Intermédiaire', completions: 41, status: 'published', created: '25/02/2026' },
  { id: 5, title: 'Développer son leadership', category: 'Leadership', difficulty: 'Avancé', completions: 19, status: 'published', created: '05/03/2026' },
  { id: 6, title: 'Je mesure la charge de travail', category: 'Gestion du temps', difficulty: 'Intermédiaire', completions: 0, status: 'published', created: '01/04/2026' },
  { id: 7, title: "J'utilise le cahier de passation", category: 'Développement du manager', difficulty: 'Intermédiaire', completions: 0, status: 'published', created: '01/04/2026' },
];

const DISCUSSIONS_DATA: Discussion[] = [
  { id: 1, title: 'Comment motiver son équipe en télétravail ?', author: 'Marie Dubois', category: "Gestion d'équipe", replies: 15, views: 234, status: 'active', created: '01/03/2026' },
  { id: 2, title: "Retour d'expérience sur la conduite du changement", author: 'Jean Martin', category: 'Leadership', replies: 8, views: 156, status: 'active', created: '05/03/2026' },
  { id: 3, title: 'Outils collaboratifs : vos recommandations', author: 'Sophie Bernard', category: 'Innovation', replies: 23, views: 412, status: 'archived', created: '10/03/2026' },
];

// Sparkline SVG simple
function Sparkline({ data, color = '#3b82f6' }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 100}`).join(' ');
  return (
    <svg className="w-12 h-6" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="8" points={points} />
    </svg>
  );
}

export function Administration() {
  const [activeTab, setActiveTab] = useState<TabId>('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [kpiFilter, setKpiFilter] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [deleteConfirm, setDeleteConfirm] = useState<{ type: TabId; id: number } | null>(null);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  // Filtres visibles (chips)
  const [filters, setFilters] = useState<Record<TabId, Record<string, string | null>>>({
    users: { statut: null, role: null },
    challenges: { statut: null, difficulte: null },
    discussions: { statut: null },
    resources: {},
    events: {},
  });

  const ITEMS_PER_PAGE = 4;

  // Données avec suppression simulée
  const [users, setUsers] = useState(USERS_DATA);
  const [challenges, setChallenges] = useState(CHALLENGES_DATA);
  const [discussions, setDiscussions] = useState(DISCUSSIONS_DATA);

  const tabs = [
    { id: 'users' as const, label: 'Utilisateurs', icon: Users, count: users.length },
    { id: 'challenges' as const, label: 'Défis', icon: Award, count: challenges.length },
    { id: 'discussions' as const, label: 'Discussions', icon: MessageSquare, count: discussions.length },
    { id: 'resources' as const, label: 'Ressources', icon: BookOpen, count: 45 },
    { id: 'events' as const, label: 'Événements', icon: Calendar, count: 12 },
  ];

  const kpiStats = [
    { key: 'users', label: 'Total utilisateurs', value: 342, variation: '+12%', icon: Users, color: 'bg-blue-500', sparkData: [30, 45, 35, 50, 55, 48, 60] },
    { key: 'challenges', label: 'Défis actifs', value: 55, variation: '+8%', icon: Award, color: 'bg-purple-500', sparkData: [40, 42, 45, 48, 50, 52, 55] },
    { key: 'discussions', label: 'Discussions ouvertes', value: 89, variation: '-3%', icon: MessageSquare, color: 'bg-pink-500', sparkData: [85, 88, 90, 87, 89, 91, 89] },
    { key: 'resources', label: 'Ressources publiées', value: 128, variation: '+15%', icon: BookOpen, color: 'bg-teal-500', sparkData: [100, 105, 110, 115, 118, 122, 128] },
  ];

  const addButtonLabels: Record<TabId, string> = {
    users: 'Ajouter un utilisateur',
    challenges: 'Créer un défi',
    discussions: 'Nouvelle discussion',
    resources: 'Ajouter une ressource',
    events: 'Créer un événement',
  };

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev?.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const filteredAndSortedUsers = useMemo(() => {
    let result = [...users];
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.ministry.toLowerCase().includes(q));
    }
    if (filters.users.statut) result = result.filter((u) => (filters.users.statut === 'Actif' ? u.status === 'active' : u.status === 'inactive'));
    if (filters.users.role) result = result.filter((u) => u.role === filters.users.role);
    if (kpiFilter === 'users') result = result;
    if (sortConfig?.key === 'name') result.sort((a, b) => (sortConfig.direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
    if (sortConfig?.key === 'challenges') result.sort((a, b) => (sortConfig.direction === 'asc' ? a.challenges - b.challenges : b.challenges - a.challenges));
    if (sortConfig?.key === 'status') result.sort((a, b) => (sortConfig.direction === 'asc' ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status)));
    return result;
  }, [users, searchTerm, filters.users, kpiFilter, sortConfig]);

  const filteredAndSortedChallenges = useMemo(() => {
    let result = [...challenges];
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter((c) => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
    }
    if (filters.challenges.statut) result = result.filter((c) => (filters.challenges.statut === 'Publié' ? c.status === 'published' : c.status === 'draft'));
    if (filters.challenges.difficulte) result = result.filter((c) => c.difficulty === filters.challenges.difficulte);
    if (kpiFilter === 'challenges') result = result;
    return result;
  }, [challenges, searchTerm, filters.challenges, kpiFilter]);

  const filteredDiscussions = useMemo(() => {
    let result = [...discussions];
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter((d) => d.title.toLowerCase().includes(q) || d.author.toLowerCase().includes(q));
    }
    if (filters.discussions.statut) result = result.filter((d) => (filters.discussions.statut === 'Active' ? d.status === 'active' : d.status === 'archived'));
    return result;
  }, [discussions, searchTerm, filters.discussions]);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedUsers.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSortedUsers, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedUsers.length / ITEMS_PER_PAGE) || 1;

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === paginatedUsers.length) setSelectedIds(new Set());
    else setSelectedIds(new Set(paginatedUsers.map((u) => u.id)));
  };

  const handleDelete = (type: TabId, id: number) => {
    if (type === 'users') setUsers((prev) => prev.filter((u) => u.id !== id));
    if (type === 'challenges') setChallenges((prev) => prev.filter((c) => c.id !== id));
    if (type === 'discussions') setDiscussions((prev) => prev.filter((d) => d.id !== id));
    setDeleteConfirm(null);
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const handleBulkDelete = () => {
    setUsers((prev) => prev.filter((u) => !selectedIds.has(u.id)));
    setSelectedIds(new Set());
    setBulkDeleteOpen(false);
  };

  const handleBulkStatus = (status: 'active' | 'inactive') => {
    setUsers((prev) => prev.map((u) => (selectedIds.has(u.id) ? { ...u, status } : u)));
    setSelectedIds(new Set());
  };

  const clearFilter = (tab: TabId, key: string) => {
    setFilters((prev) => ({ ...prev, [tab]: { ...prev[tab], [key]: null } }));
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-blue-900 mb-2">Administration</h1>
          <p className="text-slate-600">Gestion centralisée de la plateforme Défis Managers</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-2 border-slate-300">
            <Settings className="w-4 h-4" />
            Paramètres
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md">
                <Plus className="w-4 h-4" />
                {addButtonLabels[activeTab]}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => setActiveTab('users')}>
                <UserPlus className="w-4 h-4" />
                Ajouter un utilisateur
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveTab('challenges')}>
                <Target className="w-4 h-4" />
                Créer un défi
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveTab('discussions')}>
                <MessageSquare className="w-4 h-4" />
                Nouvelle discussion
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveTab('resources')}>
                <FileText className="w-4 h-4" />
                Ajouter une ressource
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveTab('events')}>
                <CalendarPlus className="w-4 h-4" />
                Créer un événement
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Section Vue d'ensemble */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Vue d'ensemble</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {kpiStats.map((stat) => {
            const Icon = stat.icon;
            const isActive = kpiFilter === stat.key;
            return (
              <button
                key={stat.key}
                onClick={() => setKpiFilter(isActive ? null : stat.key)}
                className={`bg-white rounded-xl border-2 p-5 text-left transition-all hover:shadow-md ${
                  isActive ? 'border-blue-600 shadow-md ring-2 ring-blue-200' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
                    <p className={`text-xs font-medium mt-1 ${stat.variation.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>{stat.variation} ce mois</p>
                  </div>
                  <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-3 opacity-70">
                  <Sparkline data={stat.sparkData} color={stat.key === 'users' ? '#3b82f6' : stat.key === 'challenges' ? '#a855f7' : stat.key === 'discussions' ? '#ec4899' : '#14b8a6'} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section Gestion */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          {activeTab === 'users' && 'Gestion des utilisateurs'}
          {activeTab === 'challenges' && 'Gestion des défis'}
          {activeTab === 'discussions' && 'Gestion des discussions'}
          {activeTab === 'resources' && 'Gestion des ressources'}
          {activeTab === 'events' && 'Gestion des événements'}
        </h2>

        {/* Onglets */}
        <div className="border-b-2 border-slate-200 mb-6">
          <div className="flex gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setCurrentPage(1); setSelectedIds(new Set()); }}
                  className={`flex items-center gap-2 px-4 py-3 rounded-t-lg font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm -mb-0.5'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${isActive ? 'bg-white/20' : 'bg-slate-200 text-slate-700'}`}>{tab.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recherche et filtres */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher par nom, email, ministère..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Chips de filtres actifs */}
          <div className="flex flex-wrap gap-2 items-center">
            {activeTab === 'users' && (
              <>
                {filters.users.statut && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-100 text-blue-800 text-sm font-medium">
                    Statut : {filters.users.statut}
                    <button onClick={() => clearFilter('users', 'statut')} className="hover:bg-blue-200 rounded p-0.5">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.users.role && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-100 text-blue-800 text-sm font-medium">
                    Rôle : {filters.users.role}
                    <button onClick={() => clearFilter('users', 'role')} className="hover:bg-blue-200 rounded p-0.5">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {(!filters.users.statut || !filters.users.role) && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4" />
                        Filtres
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, users: { ...f.users, statut: 'Actif' } }))}>Statut : Actif</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, users: { ...f.users, statut: 'Inactif' } }))}>Statut : Inactif</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, users: { ...f.users, role: 'Manager' } }))}>Rôle : Manager</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, users: { ...f.users, role: 'Responsable' } }))}>Rôle : Responsable</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, users: { ...f.users, role: 'Collaborateur' } }))}>Rôle : Collaborateur</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </>
            )}
            {activeTab === 'challenges' && (
              <>
                {filters.challenges.statut && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-100 text-purple-800 text-sm font-medium">
                    Statut : {filters.challenges.statut}
                    <button onClick={() => clearFilter('challenges', 'statut')} className="hover:bg-purple-200 rounded p-0.5">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.challenges.difficulte && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-100 text-purple-800 text-sm font-medium">
                    Difficulté : {filters.challenges.difficulte}
                    <button onClick={() => clearFilter('challenges', 'difficulte')} className="hover:bg-purple-200 rounded p-0.5">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {(!filters.challenges.statut || !filters.challenges.difficulte) && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4" />
                        Filtres
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, challenges: { ...f.challenges, statut: 'Publié' } }))}>Statut : Publié</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, challenges: { ...f.challenges, statut: 'Brouillon' } }))}>Statut : Brouillon</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, challenges: { ...f.challenges, difficulte: 'Débutant' } }))}>Difficulté : Débutant</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, challenges: { ...f.challenges, difficulte: 'Intermédiaire' } }))}>Difficulté : Intermédiaire</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, challenges: { ...f.challenges, difficulte: 'Avancé' } }))}>Difficulté : Avancé</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </>
            )}
            {activeTab === 'discussions' && (
              <>
                {filters.discussions.statut && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-pink-100 text-pink-800 text-sm font-medium">
                    Statut : {filters.discussions.statut}
                    <button onClick={() => clearFilter('discussions', 'statut')} className="hover:bg-pink-200 rounded p-0.5">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {!filters.discussions.statut && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4" />
                        Filtres
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, discussions: { ...f.discussions, statut: 'Active' } }))}>Statut : Active</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilters((f) => ({ ...f, discussions: { ...f.discussions, statut: 'Archivée' } }))}>Statut : Archivée</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </>
            )}
          </div>
        </div>

        {/* Actions groupées */}
        {activeTab === 'users' && selectedIds.size > 0 && (
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200 mb-4">
            <span className="text-sm font-medium text-blue-900">{selectedIds.size} sélectionné(s)</span>
            <Button size="sm" variant="outline" onClick={() => handleBulkStatus('active')}>
              <CheckCircle className="w-4 h-4" />
              Activer
            </Button>
            <Button size="sm" variant="outline" onClick={() => handleBulkStatus('inactive')}>
              <XCircle className="w-4 h-4" />
              Désactiver
            </Button>
            <Button size="sm" variant="destructive" onClick={() => setBulkDeleteOpen(true)}>
              <Trash2 className="w-4 h-4" />
              Supprimer
            </Button>
          </div>
        )}

        {/* Tableau Utilisateurs */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b-2 border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left w-12">
                      <Checkbox checked={selectedIds.size === paginatedUsers.length && paginatedUsers.length > 0} onCheckedChange={toggleSelectAll} />
                    </th>
                    <th className="px-6 py-3 text-left">
                      <button onClick={() => handleSort('name')} className="flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-600">
                        Utilisateur
                        {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                      </button>
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Ministère</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Fonction</th>
                    <th className="px-6 py-3 text-left">
                      <button onClick={() => handleSort('challenges')} className="flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-600">
                        Défis
                        {sortConfig?.key === 'challenges' && (sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                      </button>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <button onClick={() => handleSort('status')} className="flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-600">
                        Statut
                        {sortConfig?.key === 'status' && (sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                      </button>
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Inscription</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 w-28">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {paginatedUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-slate-50 cursor-pointer group"
                      onClick={() => {}}
                    >
                      <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                        <Checkbox checked={selectedIds.has(user.id)} onCheckedChange={() => toggleSelect(user.id)} />
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">{user.ministry}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-200 text-slate-700">{user.role}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="min-w-[100px]">
                          <div className="flex items-center gap-2 mb-1">
                            <Progress value={(user.challenges / user.maxChallenges) * 100} className="h-2 flex-1" />
                            <span className="text-xs font-semibold text-blue-700">{user.challenges}/{user.maxChallenges}</span>
                          </div>
                          <p className="text-xs text-slate-500">{user.challenges} complétés</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                          user.status === 'active' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}>
                          {user.status === 'active' ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {user.status === 'active' ? 'Actif' : 'Inactif'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{user.joinDate}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" onClick={(e) => e.stopPropagation()}>
                                <Edit className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Modifier</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" onClick={(e) => { e.stopPropagation(); setDeleteConfirm({ type: 'users', id: user.id }); }}>
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Supprimer</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg" onClick={(e) => e.stopPropagation()}>
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Plus d'options</TooltipContent>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center py-4 border-t border-slate-200">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setCurrentPage((p) => Math.max(1, p - 1)); }} />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <PaginationItem key={p}>
                        <PaginationLink href="#" isActive={currentPage === p} onClick={(e) => { e.preventDefault(); setCurrentPage(p); }}>{p}</PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setCurrentPage((p) => Math.min(totalPages, p + 1)); }} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        )}

        {/* Tableau Défis */}
        {activeTab === 'challenges' && (
          <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b-2 border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Titre du défi</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Catégorie</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Difficulté</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Complétions</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Statut</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Création</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredAndSortedChallenges.map((challenge) => (
                    <tr key={challenge.id} className="hover:bg-slate-50 group">
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">{challenge.title}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{challenge.category}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                          challenge.difficulty === 'Débutant' ? 'bg-green-100 text-green-800 border-green-200' :
                          challenge.difficulty === 'Intermédiaire' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                          'bg-red-100 text-red-800 border-red-200'
                        }`}>
                          {challenge.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-700">{challenge.completions}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                          challenge.status === 'published' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {challenge.status === 'published' ? <CheckCircle className="w-3.5 h-3.5" /> : null}
                          {challenge.status === 'published' ? 'Publié' : 'Brouillon'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{challenge.created}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                <Edit className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Modifier</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" onClick={() => setDeleteConfirm({ type: 'challenges', id: challenge.id })}>
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Supprimer</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg">
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Plus d'options</TooltipContent>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tableau Discussions */}
        {activeTab === 'discussions' && (
          <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b-2 border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Discussion</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Auteur</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Catégorie</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Réponses</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Vues</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Statut</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredDiscussions.map((discussion) => (
                    <tr key={discussion.id} className="hover:bg-slate-50 group">
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-slate-900">{discussion.title}</p>
                        <p className="text-xs text-slate-500">Créée le {discussion.created}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">{discussion.author}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{discussion.category}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-700">{discussion.replies}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{discussion.views}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                          discussion.status === 'active' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {discussion.status === 'active' ? <CheckCircle className="w-3.5 h-3.5" /> : null}
                          {discussion.status === 'active' ? 'Active' : 'Archivée'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                <Shield className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Modérer</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" onClick={() => setDeleteConfirm({ type: 'discussions', id: discussion.id })}>
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Supprimer</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg">
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>Plus d'options</TooltipContent>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(activeTab === 'resources' || activeTab === 'events') && (
          <div className="bg-white rounded-xl border-2 border-slate-200 p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
              {activeTab === 'resources' ? <BookOpen className="w-8 h-8 text-slate-400" /> : <Calendar className="w-8 h-8 text-slate-400" />}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Section en développement</h3>
            <p className="text-slate-600">La gestion des {activeTab === 'resources' ? 'ressources' : 'événements'} sera bientôt disponible</p>
          </div>
        )}
      </div>

      {/* Modal confirmation suppression */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer cet élément ? Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() => deleteConfirm && handleDelete(deleteConfirm.type, deleteConfirm.id)}
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Modal confirmation suppression groupée */}
      <AlertDialog open={bulkDeleteOpen} onOpenChange={setBulkDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer les utilisateurs sélectionnés</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer {selectedIds.size} utilisateur(s) ? Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={handleBulkDelete}>
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
