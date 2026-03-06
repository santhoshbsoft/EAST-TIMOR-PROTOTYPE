import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import About from './pages/About'; // We'll create these files
import Municipalities from './pages/Municipalities';
import MunicipalityDetail from './pages/MunicipalityDetail';
import Experiences from './pages/Experiences';
import ExperienceCategory from './pages/ExperienceCategory';
import ExperienceDetail from './pages/ExperienceDetail';
import SpecialtyExperience from './pages/SpecialtyExperience';
import Auth from './pages/Auth';
import TouristDashboard from './pages/TouristDashboard';
import AdminDashboard from './pages/AdminDashboard';
import NewsListing from './pages/NewsListing';
import NewsDetail from './pages/NewsDetail';
import PartnersListing from './pages/PartnersListing';
import PartnerDetail from './pages/PartnerDetail';
import ScrollToTop from './components/layout/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about/*" element={<About />} />
                        <Route path="/municipalities" element={<Municipalities />} />
                        <Route path="/municipalities/:id" element={<MunicipalityDetail />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/experiences/:catId" element={<ExperienceCategory />} />
                        <Route path="/specialty/:id" element={<SpecialtyExperience />} />
                        <Route path="/experience/:id" element={<ExperienceDetail />} />
                        <Route path="/login" element={<Auth mode="login" />} />
                        <Route path="/register" element={<Auth mode="register" />} />
                        <Route path="/dashboard" element={<TouristDashboard />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/news" element={<NewsListing />} />
                        <Route path="/news/:id" element={<NewsDetail />} />
                        <Route path="/partners" element={<PartnersListing />} />
                        <Route path="/partners/:id" element={<PartnerDetail />} />
                        {/* Add all 30 routes here eventually */}
                    </Routes>
                </Layout>
            </Router>
        </LanguageProvider>
    );
}

export default App;
