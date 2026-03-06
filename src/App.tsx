import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Municipalities from './pages/Municipalities';
import MunicipalityDetail from './pages/MunicipalityDetail';

// Experiences
import Experiences from './pages/Experiences';
import ExperienceCategory from './pages/ExperienceCategory';
import ExperienceDetail from './pages/ExperienceDetail';
import SpecialtyExperience from './pages/SpecialtyExperience';

// Auth & Dashboards
import Auth from './pages/Auth';
import TouristDashboard from './pages/TouristDashboard';
import AdminDashboard from './pages/AdminDashboard';

// News & Partners
import NewsListing from './pages/NewsListing';
import NewsDetail from './pages/NewsDetail';
import PartnersListing from './pages/PartnersListing';
import PartnerDetail from './pages/PartnerDetail';

// Plan Your Trip
import PlanYourTrip from './pages/PlanYourTrip';
import SafetyHealth from './pages/SafetyHealth';
import EventsCalendar from './pages/EventsCalendar';
import EventDetail from './pages/EventDetail';
import TravelTips from './pages/TravelTips';

// Business & Attractions
import BusinessDirectory from './pages/BusinessDirectory';
import BusinessDetails from './pages/BusinessDetails';

// Accommodation
import Accommodation from './pages/Accommodation';
import AccommodationDetail from './pages/AccommodationDetail';
import AccommodationBooking from './pages/AccommodationBooking';
import AccommodationPayment from './pages/AccommodationPayment';
import AccommodationSuccess from './pages/AccommodationSuccess';

// Flights & Entry
import FlightsEntryMain from './pages/FlightEntry/FlightsEntryMain';
import AirlineDetail from './pages/FlightEntry/AirlineDetail';
import EntryRequirementsPage from './pages/FlightEntry/EntryRequirementsPage';

// Transport
import TransportMain from './pages/Transport/TransportMain';
import TransportDetail from './pages/Transport/TransportDetail';

// Itineraries
import ItinerariesMain from './pages/Itineraries/ItinerariesMain';
import ItineraryDetail from './pages/Itineraries/ItineraryDetail';

// Shopping
import ShoppingMain from './pages/Shopping/ShoppingMain';
import ShoppingDetail from './pages/Shopping/ShoppingDetail';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <Layout>
                    <Routes>

                        {/* Core */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about/*" element={<About />} />

                        {/* Municipalities */}
                        <Route path="/municipalities" element={<Municipalities />} />
                        <Route path="/municipalities/:id" element={<MunicipalityDetail />} />

                        {/* Experiences */}
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/experiences/:catId" element={<ExperienceCategory />} />
                        <Route path="/specialty/:id" element={<SpecialtyExperience />} />
                        <Route path="/experience/:id" element={<ExperienceDetail />} />

                        {/* Auth */}
                        <Route path="/login" element={<Auth mode="login" />} />
                        <Route path="/register" element={<Auth mode="register" />} />

                        {/* Dashboards */}
                        <Route path="/dashboard" element={<TouristDashboard />} />
                        <Route path="/admin" element={<AdminDashboard />} />

                        {/* News */}
                        <Route path="/news" element={<NewsListing />} />
                        <Route path="/news/:id" element={<NewsDetail />} />

                        {/* Partners */}
                        <Route path="/partners" element={<PartnersListing />} />
                        <Route path="/partners/:id" element={<PartnerDetail />} />

                        {/* Plan Your Trip */}
                        <Route path="/plan-your-trip" element={<PlanYourTrip />} />
                        <Route path="/safety-health" element={<SafetyHealth />} />
                        <Route path="/events-calendar" element={<EventsCalendar />} />
                        <Route path="/events-calendar/:id" element={<EventDetail />} />
                        <Route path="/travel-tips" element={<TravelTips />} />

                        {/* Accommodation */}
                        <Route path="/plan-your-trip/accommodation" element={<Accommodation />} />
                        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
                        <Route path="/accommodation/:accommodationId/room/:roomId" element={<AccommodationBooking />} />
                        <Route path="/accommodation/:accommodationId/room/:roomId/payment" element={<AccommodationPayment />} />
                        <Route path="/accommodation/:accommodationId/room/:roomId/confirmation" element={<AccommodationSuccess />} />

                        {/* Business & Attractions */}
                        <Route path="/plan-your-trip/business-attractions" element={<BusinessDirectory />} />
                        <Route path="/plan-your-trip/business-attractions/:id" element={<BusinessDetails />} />
                        <Route path="/business-services/:id" element={<BusinessDetails />} />

                        {/* Flights & Entry */}
                        <Route path="/plan-your-trip/flights-entry-requirements" element={<FlightsEntryMain />} />
                        <Route path="/plan-your-trip/flights-entry-requirements/entry-requirements" element={<EntryRequirementsPage />} />
                        <Route path="/plan-your-trip/flights-entry-requirements/:airlineId" element={<AirlineDetail />} />

                        {/* Transport */}
                        <Route path="/plan-your-trip/transport" element={<TransportMain />} />
                        <Route path="/plan-your-trip/transport/:typeId" element={<TransportDetail />} />

                        {/* Itineraries */}
                        <Route path="/plan-your-trip/recommended-itineraries" element={<ItinerariesMain />} />
                        <Route path="/plan-your-trip/recommended-itineraries/:id" element={<ItineraryDetail />} />

                        {/* Shopping */}
                        <Route path="/shopping-services" element={<ShoppingMain />} />
                        <Route path="/shopping-services/:id" element={<ShoppingDetail />} />
                        <Route path="/plan-your-trip/shopping-services" element={<ShoppingMain />} />
                        <Route path="/plan-your-trip/shopping-services/:id" element={<ShoppingDetail />} />

                    </Routes>
                </Layout>
            </Router>
        </LanguageProvider>
    );
}

export default App;