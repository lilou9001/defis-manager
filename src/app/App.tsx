import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router';
import { Root } from './components/Root';
import { Home } from './components/Home';
import { SelfAssessment } from './components/SelfAssessment';
import { Challenges } from './components/Challenges';
import { ChallengeDetail } from './components/ChallengeDetail';
import { Community } from './components/Community';
import { Resources } from './components/Resources';
import { Events } from './components/Events';
import { Services } from './components/Services';
import { ManagerDashboard } from './components/ManagerDashboard';
import { UserProfile } from './components/UserProfile';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { GlobalStats } from './components/GlobalStats';
import { Administration } from './components/Administration';
import { Reports } from './components/Reports';

// Redirect component for old challenge routes
function ChallengeRedirect() {
  const { id } = useParams();
  return <Navigate to={`/defis/${id}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="auto-diagnostic" element={<SelfAssessment />} />
          <Route path="defis" element={<Challenges />} />
          <Route path="defis/:id" element={<ChallengeDetail />} />
          <Route path="communaute" element={<Community />} />
          <Route path="ressources" element={<Resources />} />
          <Route path="evenements" element={<Events />} />
          <Route path="services" element={<Services />} />
          <Route path="mon-tableau-de-bord" element={<ManagerDashboard />} />
          <Route path="profil" element={<UserProfile />} />
          <Route path="connexion" element={<Login />} />
          <Route path="inscription" element={<Register />} />
          <Route path="statistiques" element={<GlobalStats />} />
          <Route path="administration" element={<Administration />} />
          <Route path="rapports" element={<Reports />} />
          {/* Redirections pour les anciens chemins */}
          <Route path="dashboard" element={<Navigate to="/mon-tableau-de-bord" replace />} />
          <Route path="profile" element={<Navigate to="/profil" replace />} />
          <Route path="challenge/:id" element={<ChallengeRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}