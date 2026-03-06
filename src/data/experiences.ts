import { Waves, Mountain, Landmark, Utensils, MapPin, Star } from 'lucide-react';

export interface Activity {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    municipality: string;
    rating: number;
    price: string;
    duration: string;
    difficulty: string;
    image: string;
    description: string;
}

export const categories = [
    {
        id: 'all',
        title: 'All Experiences',
        icon: Star,
        color: '#F5E6C8',
        subcategories: []
    },
    {
        id: 'marine',
        title: 'Marine & Water Activities',
        image: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=1200',
        icon: Waves,
        color: '#0F6E6E',
        subcategories: ['Whale and Dolphin Watching', 'Diving', 'Snorkelling', 'Fishing', 'Beaches']
    },
    {
        id: 'land',
        title: 'Land Adventures',
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1200',
        icon: Mountain,
        color: '#1F3D2B',
        subcategories: ['Hiking & Walking', 'Mountain Biking', 'Birding', 'Exploring', 'Volunteering']
    },
    {
        id: 'heritage',
        title: 'Heritage & Culture',
        image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1200',
        icon: Landmark,
        color: '#FF6B4A',
        subcategories: ['Arts & Crafts', 'Local Markets', 'Events & Festivals']
    },
    {
        id: 'food',
        title: 'Food and Drink',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200',
        icon: Utensils,
        color: '#FFAB91',
        subcategories: ['Eating & Drinking', 'Coffee']
    },
    {
        id: 'popular',
        title: 'Popular Locations',
        image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1200',
        icon: MapPin,
        color: '#26A69A',
        subcategories: ['All Popular Place Details']
    },
];

export const activities: Activity[] = [
    // Marine & Water Activities
    { id: 'whale-watching', name: 'Whale & Dolphin Watching', category: 'marine', subcategory: 'Whale and Dolphin Watching', municipality: 'Dili', rating: 4.9, price: '$85', duration: '4h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=600', description: 'Witness majestic blue whales and playful dolphins in the Wetar Strait.' },
    { id: 'snorkel-atauro', name: 'Atauro Coral Snorkelling', category: 'marine', subcategory: 'Snorkelling', municipality: 'Atauro', rating: 4.8, price: '$45', duration: '3h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&q=80&w=600', description: 'Float above pristine coral gardens teeming with tropical fish.' },
    { id: 'traditional-fishing', name: 'Traditional Fishing Village', category: 'marine', subcategory: 'Fishing', municipality: 'Dili', rating: 4.6, price: '$55', duration: '5h', difficulty: 'Moderate', image: 'https://media.istockphoto.com/id/2190306705/photo/close-up-photo-of-salmon-fish.webp?a=1&b=1&s=612x612&w=0&k=20&c=gaaj_azZuHDpY0_ha1ube8jNhEs-oUgpb21Mx6VPNgg=', description: 'Join local fishermen and learn ancient Timorese fishing techniques.' },
    { id: 'areia-branca', name: 'Areia Branca Beach Day', category: 'marine', subcategory: 'Beaches', municipality: 'Dili', rating: 4.7, price: '$30', duration: 'Full Day', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600', description: 'Relax on Dili\'s most famous white sand beach with crystal-clear waters.' },

    // Requested Diving Centres
    { id: 'aquatica-dive', name: 'Aquatica Dive Resort', category: 'marine', subcategory: 'Diving', municipality: 'Dili', rating: 4.9, price: 'Contact', duration: 'Varies', difficulty: 'Varies', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600', description: 'Diving, water sports, dive courses, and accommodation services in Dili.' },
    { id: 'atauro-dive-resort', name: 'Atauro Dive Resort', category: 'marine', subcategory: 'Diving', municipality: 'Atauro', rating: 5.0, price: 'Contact', duration: 'Varies', difficulty: 'Varies', image: 'https://images.unsplash.com/photo-1565520651265-1148c3b277f4?auto=format&fit=crop&q=80&w=600', description: 'Premium diving and snorkeling experiences on the pristine coral reefs of Atauro Island.' },
    { id: 'compass-diving', name: 'Compass Diving Timor-Leste', category: 'marine', subcategory: 'Diving', municipality: 'Dili', rating: 4.8, price: 'Contact', duration: 'Varies', difficulty: 'Varies', image: 'https://media.istockphoto.com/id/494394155/photo/ost-timor-timor-leste-jaco-island-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=3m813b3Q3ChKHjPKn5CQwit0ZmE3s51F_9L1CgmEVN8=', description: 'Professional scuba diving courses and guided dives around Timor-Leste.' },
    { id: 'dive-timor', name: 'Dive Timor Lorosae', category: 'marine', subcategory: 'Diving', municipality: 'Dili', rating: 4.9, price: 'Contact', duration: 'Varies', difficulty: 'Varies', image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=600', description: 'Established dive center offering trips, courses, and equipment in Dili.' },
    { id: 'dreamers-dive', name: 'Dreamers Dive Academy Timor', category: 'marine', subcategory: 'Diving', municipality: 'Dili', rating: 4.8, price: 'Contact', duration: 'Varies', difficulty: 'Varies', image: 'https://media.istockphoto.com/id/490136590/photo/futucama-east-timor.webp?a=1&b=1&s=612x612&w=0&k=20&c=1mtcNnIU193JOuCRPSHXdDQPbePByWy-XNQIGEpiWfE=', description: 'Dive academy specializing in training and certification.' },
    { id: 'reverse-timor', name: 'Reverse Timor', category: 'marine', subcategory: 'Diving', municipality: 'Dili', rating: 4.7, price: 'Contact', duration: 'Varies', difficulty: 'Varies', image: 'https://images.unsplash.com/photo-1591325408953-ef9298125f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmV2ZXJzZSUyMFRpbW9yfGVufDB8fDB8fHww', description: 'Freediving excursions and whale watching activities in Timor-Leste.' },

    // Land Adventures
    { id: 'ramelau-trek', name: 'Mt. Ramelau Summit Trek', category: 'land', subcategory: 'Hiking & Walking', municipality: 'Ainaro', rating: 4.8, price: '$60', duration: '8h', difficulty: 'Strenuous', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=600', description: 'Conquer Timor-Leste\'s highest peak at 2,963m for a sacred sunrise.' },
    { id: 'mountain-bike', name: 'Ermera Coffee Trail Ride', category: 'land', subcategory: 'Mountain Biking', municipality: 'Ermera', rating: 4.5, price: '$75', duration: '6h', difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&q=80&w=600', description: 'Ride through highland coffee plantations and remote villages.' },
    { id: 'birding-tour', name: 'Nino Konis Santana Birding', category: 'land', subcategory: 'Birding', municipality: 'Lautém', rating: 4.7, price: '$50', duration: '5h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600', description: 'Spot endemic species including the Timor Green Pigeon in pristine forests.' },
    { id: 'jaco-explore', name: 'Jaco Island Exploration', category: 'land', subcategory: 'Exploring', municipality: 'Lautém', rating: 4.9, price: '$90', duration: 'Full Day', difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=600', description: 'Discover the sacred uninhabited island at Timor-Leste\'s eastern tip.' },
    { id: 'volunteer-school', name: 'Community School Volunteering', category: 'land', subcategory: 'Volunteering', municipality: 'Ermera', rating: 4.8, price: '$25', duration: '4h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600', description: 'Contribute to education in remote mountain villages.' },

    // Heritage & Culture
    { id: 'alola-esperansa', name: 'Alola Esperansa Shop', category: 'heritage', subcategory: 'Arts & Crafts', municipality: 'Dili', rating: 4.8, price: 'Varies', duration: 'Varies', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=600', description: 'Handcrafted traditional textiles and ethical souvenirs supporting local women.' },
    { id: 'biojoia-atauro', name: 'Biojoia de Atauro', category: 'heritage', subcategory: 'Arts & Crafts', municipality: 'Atauro', rating: 4.7, price: 'Varies', duration: 'Varies', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1735772289706-fe59eb3c7141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qmlvam9pYSUyMGRlJTIwQXRhdXJvfGVufDB8fDB8fHww', description: 'Unique jewelry crafted from natural and sustainable materials by local artisans.' },
    { id: 'boneca-atauro', name: 'Boneca de Atauro', category: 'heritage', subcategory: 'Arts & Crafts', municipality: 'Atauro', rating: 4.9, price: 'Varies', duration: 'Varies', difficulty: 'Easy', image: 'https://media.istockphoto.com/id/1165036707/photo/doll-in-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=eMPNhdAjCwdt5zbEdhOnsGpEhuwA_Hyt_FvfxUOToGs=', description: 'Beautiful handmade dolls and crafts produced by a women\'s cooperative.' },
    { id: 'maubara-weaving', name: 'Maubara Weaving Cooperative', category: 'heritage', subcategory: 'Arts & Crafts', municipality: 'Liquica', rating: 4.6, price: 'Varies', duration: 'Varies', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=600', description: 'Traditional basket weaving and crafts made from local palm leaves.' },
    { id: 'sentro-atauro-diak', name: 'Sentro Atauro Diak', category: 'heritage', subcategory: 'Arts & Crafts', municipality: 'Atauro', rating: 4.8, price: 'Varies', duration: 'Varies', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=600', description: 'Community center showcasing rich local crafts andsustainable tourism products.' },
    { id: 'tais-market', name: 'Shop Handmade Weavings at Tais Market', category: 'heritage', subcategory: 'Arts & Crafts', municipality: 'Dili', rating: 4.6, price: 'Varies', duration: 'Varies', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=600', description: 'Browse vibrant handwoven tais textiles at the famous central market in Dili.' },
    { id: 'things-and-stories', name: 'Things and Stories', category: 'heritage', subcategory: 'Arts & Crafts', municipality: 'Dili', rating: 4.7, price: 'Varies', duration: 'Varies', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600', description: 'Boutique shop featuring curated Timorese crafts, coffee, and stories.' },

    { id: 'festival-tour', name: 'Cultural Festival Experience', category: 'heritage', subcategory: 'Events & Festivals', municipality: 'Dili', rating: 4.9, price: '$35', duration: 'Full Day', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600', description: 'Immerse in traditional dances, ceremonies, and local celebrations.' },

    // Food and Drink
    { id: 'fatima-cafe', name: 'Enjoy Local Cuisine at Fatima Cafe in Timor-Leste', category: 'food', subcategory: 'Coffee', municipality: 'Dili', rating: 4.7, price: '$15', duration: '2h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600', description: 'Experience authentic Timorese hospitality and traditional cuisine at this beloved Dili landmark.' },
    { id: 'letefoho-coffee', name: 'Letefoho Specialty Coffee Roaster', category: 'food', subcategory: 'Coffee', municipality: 'Dili', rating: 4.9, price: '$10', duration: '1.5h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600', description: 'Sample premium organic coffee beans roasted to perfection in the heart of Dili.' },
    { id: 'peace-cafe', name: 'Sip Freshly Brewed Coffee at Peace Cafe', category: 'food', subcategory: 'Coffee', municipality: 'Dili', rating: 4.8, price: '$12', duration: '2h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600', description: 'Relax in a serene atmosphere while enjoying some of the finest locally sourced coffee blends.' },
    { id: 'food-tour', name: 'Dili Street Food Safari', category: 'food', subcategory: 'Eating & Drinking', municipality: 'Dili', rating: 4.8, price: '$40', duration: '3h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600', description: 'Taste the flavors of Timor through local cuisine and hidden gem eateries.' },

    // Popular Locations
    { id: 'cristo-rei', name: 'Cristo Rei Statue & Beach Walk', category: 'popular', subcategory: 'All Popular Place Details', municipality: 'Dili', rating: 4.8, price: 'Free', duration: '2h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=600', description: 'Walk the iconic coastline to the towering Cristo Rei statue overlooking Dili.' },
    { id: 'tasi-tolu', name: 'Tasi Tolu Wetlands', category: 'popular', subcategory: 'All Popular Place Details', municipality: 'Dili', rating: 4.5, price: 'Free', duration: '3h', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=600', description: 'Explore the three sacred lakes and resistance memorial west of Dili.' },
];

export interface Agent {
    id: string;
    name: string;
    category: 'Full Service' | 'Land & Adventure' | 'Water & Dive';
    services: string;
    email: string;
    phone: string;
    website: string;
    websiteLabel?: string;
}

export const agents: Agent[] = [
    // FULL SERVICE TOUR OPERATORS & AGENTS
    {
        id: 'island-explorer',
        name: 'Island Explorer Holidays',
        category: 'Full Service',
        services: 'Tour packages, flight bookings, airport transfers, vehicle rentals, accommodation',
        email: 'jeremiah@islandexplorerholidays.tl',
        phone: '+670 7689 9555',
        website: 'http://www.islandexplorerholidays.tl'
    },
    {
        id: 'reveuse-corp',
        name: 'Reveuse Corporation',
        category: 'Full Service',
        services: 'Tour packages, flight bookings, transport, vehicle rentals, accommodation',
        email: 'm.jeronimo@reveusetravel.com',
        phone: '(+670) 7857 0900',
        website: 'https://www.facebook.com/reveusetravel',
        websiteLabel: 'Reveuse Facebook Page'
    },
    // LAND TOURS, ADVENTURE AND CULTURAL EXPERIENCES
    {
        id: 'bounty-timor',
        name: 'Bounty Timor Tours',
        category: 'Land & Adventure',
        services: 'Half-day, full-day, and multi-day tour packages',
        email: 'info@bountytimortours.com',
        phone: '+670 7781 0105',
        website: 'http://www.bountytimortours.com'
    },
    {
        id: 'dili-dirt-bike',
        name: 'Dili Dirt Bike',
        category: 'Land & Adventure',
        services: 'Half-day, full-day, and multi-day mountain biking trips',
        email: 'timormotorbikerental20@gmail.com',
        phone: '+670 7864 8066',
        website: 'http://www.dilidirtbike.com'
    },
    {
        id: 'eco-discovery',
        name: 'Eco Discovery Tours',
        category: 'Land & Adventure',
        services: 'Half-day, full-day, multi-day adventure tour packages',
        email: 'manager@ecodiscovery-easttimor.com',
        phone: '+670 7726 9829 / +670 7728 5783',
        website: 'http://www.ecodiscovery-easttimor.com'
    },
    {
        id: 'intrepid-travel',
        name: 'Intrepid Travel',
        category: 'Land & Adventure',
        services: 'All-inclusive 9-day land packages, customized tours',
        email: 'https://www.intrepidtravel.com/en/contact-us',
        phone: '',
        website: 'https://www.intrepidtravel.com/en/timor-leste'
    },
    {
        id: 'jubentos-timor',
        name: 'Jubentos Timor',
        category: 'Land & Adventure',
        services: 'Tour packages (half, full, multi-day), ground transport',
        email: 'santos@jubentostimoradventure.com',
        phone: '+670 7862 5995 / +670 7835 5255',
        website: 'http://www.jubentostimoradventure.com'
    },
    {
        id: 'maddog-adventures',
        name: 'Maddog Adventures Timor-Leste',
        category: 'Land & Adventure',
        services: 'Day and multi-day adventure tours, ground transport',
        email: 'sam@maddogadventures.com.au',
        phone: '+61 409 524 265',
        website: 'http://www.maddogadventures.com.au'
    },
    {
        id: 'manny-tours',
        name: 'Manny Tours',
        category: 'Land & Adventure',
        services: 'Half, full, & multi-day tour packages, transportation',
        email: 'talk2us@mannytimortours.com',
        phone: '+670 7841 3522',
        website: 'http://www.mannytimortours.com'
    },
    {
        id: 'timor-getaway',
        name: 'Timor Getaway',
        category: 'Land & Adventure',
        services: 'Tour packages & accommodation in Lautem and Bobonaro',
        email: 'info@timorgetaway.tl',
        phone: '(670) 7603 0555 / (670) 7689 3333',
        website: 'http://www.timorgetaway.tl'
    },
    {
        id: 'timor-indigenous',
        name: 'Timor Indigenous Tours',
        category: 'Land & Adventure',
        services: 'Half-day, full-day, multi-day cultural tour packages',
        email: 'timorindigenoustours@gmail.com',
        phone: '+670 7734 5224',
        website: 'http://www.timorindigenoustours.com'
    },
    {
        id: 'timor-sightseeing',
        name: 'Timor Sightseeing Tours and Travel',
        category: 'Land & Adventure',
        services: 'Half-day, full-day, and multi-day sightseeing tours',
        email: 'timor.sightseeing@gmail.com',
        phone: '+670 7711 9545',
        website: 'http://www.timorsightseeing.com'
    },
    {
        id: 'timor-unearthed',
        name: 'Timor Unearthed',
        category: 'Land & Adventure',
        services: 'Educational and cultural tours',
        email: 'info@timorunearthed.com',
        phone: '+61 434 992 276',
        website: 'http://www.timorunearthed.com'
    },
    {
        id: 'total-timor',
        name: 'Total Timor Tours',
        category: 'Land & Adventure',
        services: 'Mountain biking trips, motorbike rentals, tour packages',
        email: 'totaltimor2812@gmail.com',
        phone: '+670 7775 9995',
        website: 'https://www.facebook.com/totaltimortours',
        websiteLabel: 'Total Timor Facebook Page'
    },
    // SCUBA DIVING, WHALE WATCHING & WATERSPORT OPERATORS
    {
        id: 'aquatica-dive',
        name: 'Aquatica Dive Resort',
        category: 'Water & Dive',
        services: 'Diving, water sports, dive courses, accommodation, restaurant, ground transport',
        email: 'dive.aquatica@hotmail.com',
        phone: '+670 7803 8885',
        website: 'http://www.aquaticadiveresort.com'
    },
    {
        id: 'atauro-dive-resort',
        name: 'Atauro Dive Resort',
        category: 'Water & Dive',
        services: 'Diving, water sports, dive courses, accommodation, restaurant, ground transport',
        email: 'info@ataurodiveresort.com',
        phone: '+670 7738 6166',
        website: 'http://www.ataurodiveresort.com'
    },
    {
        id: 'atkoma',
        name: 'Atauro Tourism (ATKOMA)',
        category: 'Water & Dive',
        services: 'Diving, water sports, land tours, accommodation, restaurant, ground transport',
        email: 'atkoma@ataurotourism.org',
        phone: '+670 7737 5489 / +670 7597 3623',
        website: 'http://www.ataurotourism.org'
    },
    {
        id: 'compass-diving',
        name: 'Compass Diving',
        category: 'Water & Dive',
        services: 'Diving, water sports, dive courses, accommodation, restaurant, ground transport',
        email: 'compasstimorleste@gmail.com',
        phone: '+670 7723 0965',
        website: 'http://www.compassdiving.com'
    },
    {
        id: 'dive-timor',
        name: 'Dive Timor Lorosae',
        category: 'Water & Dive',
        services: 'Diving, water sports, dive courses, accommodation, restaurant, ground transport',
        email: 'info@divetimor.com',
        phone: '+670 7723 7092',
        website: 'http://www.divetimor.com'
    },
    {
        id: 'dreamers-dive',
        name: 'Dreamers Dive Academy',
        category: 'Water & Dive',
        services: 'Diving, water sports, dive courses, restaurant, ground transport',
        email: 'dreamersdiveacademy@gmail.com',
        phone: '+670 7709 9734',
        website: 'http://www.dreamersdiveacademy.com'
    },
    {
        id: 'reverse-timor',
        name: 'Reverse Timor',
        category: 'Water & Dive',
        services: 'Freediving and whale watching activities',
        email: 'reverse.freediving@gmail.com',
        phone: '(+33) 660 969 325',
        website: 'http://www.reversetimor.com'
    }
];
