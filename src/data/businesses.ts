import diveCenterImg from '../assets/images/businesses/dive_center.png';
import bankAtmImg from '../assets/images/businesses/bank_atm.png';

export interface Business {
    id: string;
    name: string;
    category: string;
    municipality: string;
    description: string;
    rating: number;
    reviews: number;
    image: string;
    contact: {
        phone: string;
        email?: string;
        website?: string;
    };
    location: string;
    operatingHours: {
        [key: string]: string; // e.g. "Monday": "09:00 - 17:00"
    };
    amenities: string[];
    priceRange?: string; // $, $$, $$$, $$$$
}

export const businessCategories = [
    'Tour Operator',
    'Dive Center',
    'Transport Service',
    'Restaurant & Cafe',
    'Retail & Craft Shop',
    'Supermarket',
    'Bank & ATM',
    'Medical Center',
    'Other Services'
];

export const businesses: Business[] = [
    {
        id: 'compass-diving',
        name: 'Compass Diving Center',
        category: 'Dive Center',
        municipality: 'Dili',
        description: 'PADI 5-Star Dive Center offering daily trips to Atauro Island and various local dives along the northern coast. Complete gear rental and certification courses available.',
        rating: 4.8,
        reviews: 124,
        image: diveCenterImg,
        contact: {
            phone: '+670 7700 1234',
            email: 'info@compassdiving.tl',
            website: 'www.compassdiving.tl'
        },
        location: 'Avenida de Portugal, Dili',
        operatingHours: {
            'Monday': '08:00 - 18:00',
            'Tuesday': '08:00 - 18:00',
            'Wednesday': '08:00 - 18:00',
            'Thursday': '08:00 - 18:00',
            'Friday': '08:00 - 18:00',
            'Saturday': '07:30 - 19:00',
            'Sunday': '07:30 - 19:00'
        },
        amenities: ['Equipment Rental', 'Boat Charters', 'PADI Certification', 'Nitrox', 'Nitrox'],
        priceRange: '$$$'
    },
    {
        id: 'timor-adventures',
        name: 'Timor Adventures',
        category: 'Tour Operator',
        municipality: 'Dili',
        description: 'Specializes in trekking, cultural tours, and 4WD expeditions across all municipalities of Timor-Leste. Dedicated to sustainable tourism and community engagement.',
        rating: 4.9,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800',
        contact: {
            phone: '+670 7700 5678',
            email: 'hello@timoradventures.com',
            website: 'www.timoradventures.com'
        },
        location: 'Rua de Colmera, Dili',
        operatingHours: {
            'Monday': '09:00 - 17:00',
            'Tuesday': '09:00 - 17:00',
            'Wednesday': '09:00 - 17:00',
            'Thursday': '09:00 - 17:00',
            'Friday': '09:00 - 17:00',
            'Saturday': '09:00 - 13:00',
            'Sunday': 'Closed'
        },
        amenities: ['Guided Tours', '4WD Rental', 'Custom Itineraries', 'English Speaking Guides'],
        priceRange: '$$$'
    },
    {
        id: 'pateo-supermarket',
        name: 'Páteo Supermarket',
        category: 'Supermarket',
        municipality: 'Dili',
        description: 'One of the largest supermarkets in Dili, offering a wide variety of imported and local goods, fresh produce, and a bakery.',
        rating: 4.5,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800',
        contact: {
            phone: '+670 331 1122',
            email: 'contact@pateo.tl',
        },
        location: 'Rua de São José, Dili',
        operatingHours: {
            'Monday': '08:00 - 20:30',
            'Tuesday': '08:00 - 20:30',
            'Wednesday': '08:00 - 20:30',
            'Thursday': '08:00 - 20:30',
            'Friday': '08:00 - 20:30',
            'Saturday': '08:00 - 20:30',
            'Sunday': '08:00 - 20:30'
        },
        amenities: ['Fresh Produce', 'Bakery', 'Imported Goods', 'Parking', 'ATM Inside'],
        priceRange: '$$'
    },
    {
        id: 'agorafood',
        name: 'Agora Food Studio',
        category: 'Restaurant & Cafe',
        municipality: 'Dili',
        description: 'An innovative cafe and restaurant focusing on local, seasonal ingredients celebrating Timorese culinary heritage with a modern twist.',
        rating: 4.8,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
        contact: {
            phone: '+670 7700 9988',
            email: 'eat@agorafoodstudio.com',
            website: 'www.agorafoodstudio.com'
        },
        location: 'Rua de Kulu-hun, Dili',
        operatingHours: {
            'Monday': 'Closed',
            'Tuesday': '08:00 - 16:00',
            'Wednesday': '08:00 - 16:00',
            'Thursday': '08:00 - 16:00',
            'Friday': '08:00 - 22:00',
            'Saturday': '08:00 - 22:00',
            'Sunday': '08:00 - 16:00'
        },
        amenities: ['Vegetarian Friendly', 'Vegan Options', 'Coffee Time', 'Locally Sourced', 'Free WiFi'],
        priceRange: '$$'
    },
    {
        id: 'tais-market-baucau',
        name: 'Baucau Traditional Tais Cooperative',
        category: 'Retail & Craft Shop',
        municipality: 'Baucau',
        description: 'A women-run cooperative selling authentic handmade Tais (traditional Timorese textiles) and local crafts directly from the weavers.',
        rating: 4.7,
        reviews: 45,
        image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=800',
        contact: {
            phone: '+670 7711 2233',
            email: 'baucautais@gmail.com',
        },
        location: 'Mercado Municipal, Baucau',
        operatingHours: {
            'Monday': '09:00 - 16:00',
            'Tuesday': '09:00 - 16:00',
            'Wednesday': '09:00 - 16:00',
            'Thursday': '09:00 - 16:00',
            'Friday': '09:00 - 16:00',
            'Saturday': '08:00 - 14:00',
            'Sunday': 'Closed'
        },
        amenities: ['Handmade Crafts', 'Support Local', 'Cash Only', 'Custom Orders'],
        priceRange: '$$'
    },
    {
        id: 'rent-a-car-dili',
        name: 'Lafaek Rent a Car',
        category: 'Transport Service',
        municipality: 'Dili',
        description: 'Reliable 4x4 rental vehicles suitable for Timor-Leste\'s rugged mountainous terrain. Offers self-drive and chauffeur options.',
        rating: 4.4,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
        contact: {
            phone: '+670 7722 4455',
            email: 'booking@lafaekrentacar.tl',
            website: 'www.lafaekrentacar.tl'
        },
        location: 'Av. Direitos Humanos, Dili',
        operatingHours: {
            'Monday': '08:00 - 18:00',
            'Tuesday': '08:00 - 18:00',
            'Wednesday': '08:00 - 18:00',
            'Thursday': '08:00 - 18:00',
            'Friday': '08:00 - 18:00',
            'Saturday': '09:00 - 16:00',
            'Sunday': '09:00 - 12:00'
        },
        amenities: ['4x4 Vehicles', 'Driver Service', 'Airport Pickup', 'Camping Gear Rental'],
        priceRange: '$$$'
    },
    {
        id: 'atauro-dive-resort',
        name: 'Beloi Beach Dive Shop',
        category: 'Dive Center',
        municipality: 'Atauro',
        description: 'Eco-friendly dive shop located right on the beach in Beloi. Explore the incredible biodiversity of the Wetar Strait right from the shore.',
        rating: 4.9,
        reviews: 112,
        image: diveCenterImg,
        contact: {
            phone: '+670 7744 6688',
            email: 'dive@beloibeach.tl',
        },
        location: 'Beloi Beach, Atauro Island',
        operatingHours: {
            'Monday': '07:30 - 17:30',
            'Tuesday': '07:30 - 17:30',
            'Wednesday': '07:30 - 17:30',
            'Thursday': '07:30 - 17:30',
            'Friday': '07:30 - 17:30',
            'Saturday': '07:30 - 18:00',
            'Sunday': '07:30 - 18:00'
        },
        amenities: ['Shore Dives', 'Snorkel Gear', 'Eco-Tours', 'Conservation Education'],
        priceRange: '$$'
    },
    {
        id: 'bnctl-dili',
        name: 'BNCTL Main Branch',
        category: 'Bank & ATM',
        municipality: 'Dili',
        description: 'National Commercial Bank of Timor-Leste. Offers currency exchange, international transfers, and 24/7 ATM services.',
        rating: 4.0,
        reviews: 45,
        image: bankAtmImg,
        contact: {
            phone: '+670 331 0123',
            email: 'info@bnctl.tl',
            website: 'www.bnctl.tl'
        },
        location: 'Rua 25 de Abril, Dili',
        operatingHours: {
            'Monday': '09:00 - 15:30',
            'Tuesday': '09:00 - 15:30',
            'Wednesday': '09:00 - 15:30',
            'Thursday': '09:00 - 15:30',
            'Friday': '09:00 - 15:30',
            'Saturday': 'Closed',
            'Sunday': 'Closed'
        },
        amenities: ['Currency Exchange', 'Western Union', '24/7 ATM', 'English Speaking Staff'],
        priceRange: '$'
    },
    {
        id: 'hospital-nacional',
        name: 'Hospital Nacional Guido Valadares (HNGV)',
        category: 'Medical Center',
        municipality: 'Dili',
        description: 'Main national hospital of Timor-Leste offering emergency services, general medicine, and specialized care.',
        rating: 3.5,
        reviews: 130,
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
        contact: {
            phone: '+670 331 1001 (Emergency: 110)',
            website: 'www.moh.gov.tl'
        },
        location: 'Bidau, Dili',
        operatingHours: {
            'Monday': 'Open 24 Hours',
            'Tuesday': 'Open 24 Hours',
            'Wednesday': 'Open 24 Hours',
            'Thursday': 'Open 24 Hours',
            'Friday': 'Open 24 Hours',
            'Saturday': 'Open 24 Hours',
            'Sunday': 'Open 24 Hours'
        },
        amenities: ['24/7 Emergency', 'Ambulance Service', 'Pharmacy', 'X-Ray'],
    },
    {
        id: 'dilicious-cafe',
        name: 'Dilicious Timor',
        category: 'Restaurant & Cafe',
        municipality: 'Dili',
        description: 'A cozy cafe famous for its excellent local coffee, hearty breakfasts, and peaceful garden setting in the embassy district.',
        rating: 4.6,
        reviews: 215,
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
        contact: {
            phone: '+670 7733 9900',
            email: 'hello@diliciouscafe.com',
        },
        location: 'Farol, Dili',
        operatingHours: {
            'Monday': '07:00 - 15:00',
            'Tuesday': '07:00 - 15:00',
            'Wednesday': '07:00 - 15:00',
            'Thursday': '07:00 - 15:00',
            'Friday': '07:00 - 15:00',
            'Saturday': '07:30 - 14:00',
            'Sunday': 'Closed'
        },
        amenities: ['Outdoor Seating', 'Free WiFi', 'Local Coffee', 'Breakfast Menu'],
        priceRange: '$$'
    }
];
