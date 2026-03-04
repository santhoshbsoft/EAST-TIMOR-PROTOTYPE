import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import About from './pages/About'; // We'll create these files
import Municipalities from './pages/Municipalities';
import MunicipalityDetail from './pages/MunicipalityDetail';
import Experiences from './pages/Experiences';
import ExperienceCategory from './pages/ExperienceCategory';
import Auth from './pages/Auth';
import TouristDashboard from './pages/TouristDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/*" element={<About />} />
                    <Route path="/municipalities" element={<Municipalities />} />
                    <Route path="/municipalities/:id" element={<MunicipalityDetail />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/experiences/:catId" element={<ExperienceCategory />} />
                    <Route path="/login" element={<Auth mode="login" />} />
                    <Route path="/register" element={<Auth mode="register" />} />
                    <Route path="/dashboard" element={<TouristDashboard />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    {/* Add all 30 routes here eventually */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
