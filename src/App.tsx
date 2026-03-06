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
import PlanYourTrip from './pages/PlanYourTrip';
import SafetyHealth from './pages/SafetyHealth';
import EventsCalendar from './pages/EventsCalendar';
import EventDetail from './pages/EventDetail';
import TravelTips from './pages/TravelTips';

// Business & Attraction Module
import BusinessDirectory from './pages/BusinessDirectory';
import BusinessDetails from './pages/BusinessDetails';

// Accommodation Module
import Accommodation from './pages/Accommodation';
import AccommodationDetail from './pages/AccommodationDetail';
import AccommodationBooking from './pages/AccommodationBooking';
import AccommodationPayment from './pages/AccommodationPayment';
import AccommodationSuccess from './pages/AccommodationSuccess';

// Flight & Entry Module
import FlightsEntryMain from './pages/FlightEntry/FlightsEntryMain';
import AirlineDetail from './pages/FlightEntry/AirlineDetail';
import EntryRequirementsPage from './pages/FlightEntry/EntryRequirementsPage';

// Transport Module
import TransportMain from './pages/Transport/TransportMain';
import TransportDetail from './pages/Transport/TransportDetail';

// Itineraries Module
// Itineraries Module
import ItinerariesMain from './pages/Itineraries/ItinerariesMain';
import ItineraryDetail from './pages/Itineraries/ItineraryDetail';

// Shopping Module
import ShoppingMain from './pages/Shopping/ShoppingMain';
import ShoppingDetail from './pages/Shopping/ShoppingDetail';

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
                    <Route path="/plan-your-trip" element={<PlanYourTrip />} />
                    <Route path="/safety-health" element={<SafetyHealth />} />
                    <Route path="/events-calendar" element={<EventsCalendar />} />
                    <Route path="/events-calendar/:id" element={<EventDetail />} />
                    <Route path="/travel-tips" element={<TravelTips />} />
                    <Route path="/plan-your-trip/accommodation" element={<Accommodation />} />
                    <Route path="/accommodation/:id" element={<AccommodationDetail />} />
                    <Route path="/accommodation/:accommodationId/room/:roomId" element={<AccommodationBooking />} />
                    <Route path="/accommodation/:accommodationId/room/:roomId/payment" element={<AccommodationPayment />} />
                    <Route path="/accommodation/:accommodationId/room/:roomId/confirmation" element={<AccommodationSuccess />} />

                    <Route path="/plan-your-trip/business-attractions" element={<BusinessDirectory />} />
                    <Route path="/plan-your-trip/business-attractions/:id" element={<BusinessDetails />} />
                    <Route path="/business-services/:id" element={<BusinessDetails />} />

                    <Route path="/plan-your-trip/flights-entry-requirements" element={<FlightsEntryMain />} />
                    <Route path="/plan-your-trip/flights-entry-requirements/entry-requirements" element={<EntryRequirementsPage />} />
                    <Route path="/plan-your-trip/flights-entry-requirements/:airlineId" element={<AirlineDetail />} />
                    <Route path="/plan-your-trip/transport" element={<TransportMain />} />
                    <Route path="/plan-your-trip/transport/:typeId" element={<TransportDetail />} />
                    <Route path="/plan-your-trip/recommended-itineraries" element={<ItinerariesMain />} />
                    <Route path="/plan-your-trip/recommended-itineraries/:id" element={<ItineraryDetail />} />

                    <Route path="/shopping-services" element={<ShoppingMain />} />
                    <Route path="/shopping-services/:id" element={<ShoppingDetail />} />
                    <Route path="/plan-your-trip/shopping-services" element={<ShoppingMain />} />
                    <Route path="/plan-your-trip/shopping-services/:id" element={<ShoppingDetail />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
