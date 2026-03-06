export interface RoomType {
    id: string;
    name: string;
    price: number;
    capacity: {
        adults: number;
        children: number;
    };
    description: string;
    features: string[];
}

export interface Review {
    id: string;
    author: string;
    rating: number;
    date: string;
    text: string;
}

export interface Accommodation {
    id: string;
    name: string;
    type: 'Apartment' | 'Backpackers' | 'Bungalow' | 'Eco' | 'Guesthouse' | 'Homestay' | 'Hotel' | 'Pousada' | 'Resort';
    municipality: 'Aileu' | 'Ainaro' | 'Atauro' | 'Baucau' | 'Bobonaro' | 'Dili' | 'Ermera' | 'Lautem' | 'Liquica' | 'Manufahi';
    rating: number;
    priceRange: string;
    priceLevel: '$' | '$$' | '$$$' | '$$$$';
    shortDescription: string;
    fullDescription: string;
    featureImage: string;
    gallery: string[];
    amenities: string[];
    rooms: RoomType[];
    reviews: Review[];
    contact: {
        phone: string;
        email: string;
        website?: string;
        address: string;
    };
    coordinates: {
        lat: number;
        lng: number;
    };
}

export const municipalities = [
    'Aileu', 'Ainaro', 'Atauro', 'Baucau', 'Bobonaro', 'Dili', 'Ermera', 'Lautem', 'Liquica', 'Manufahi'
];

// Helper to provide standard values for incomplete entries quickly
const defaultMockData = {
    rating: 4.0,
    fullDescription: 'Experience authentic Timorese hospitality at this charming accommodation. Enjoy comfortable rooms, friendly service, and easy access to local attractions. Perfect for travelers exploring the beautiful landscapes and culture of Timor-Leste.',
    featureImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    gallery: [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542314831-c6a4d14d8c53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    amenities: ['Free Parking', 'Fan/Air Conditioning', 'Breakfast Available'],
    rooms: [
        {
            id: 'r1',
            name: 'Standard Room',
            price: 35,
            capacity: { adults: 2, children: 0 },
            description: 'Comfortable standard room.',
            features: ['Double Bed', 'Private or Shared Bathroom']
        }
    ],
    reviews: [
        { id: 'rev1', author: 'Traveler', rating: 4, date: '2023-10-15', text: 'Good place to stay while exploring the municipality.' }
    ],
    contact: {
        phone: '+670 7700 0000',
        email: 'contact@accommodation.tl',
        address: 'Timor-Leste'
    },
    coordinates: { lat: -8.5566, lng: 125.5500 }
};

export const accommodations: Accommodation[] = [
    // AILEU (14)
    { ...defaultMockData, id: 'aileu-1', name: 'ALDA GUEST HOUSE', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Comfortable guesthouse in Aileu.' },
    { ...defaultMockData, id: 'aileu-2', name: 'Horo Horo Guesthouse', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Local guesthouse in Aileu.' },
    { ...defaultMockData, id: 'aileu-3', name: 'Maria Diamantina Martins Homestay', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Authentic homestay experience.' },
    { ...defaultMockData, id: 'aileu-4', name: 'Namlete Guest House', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Friendly guesthouse in Aileu.' },
    { ...defaultMockData, id: 'aileu-5', name: 'Posada Txiriboga Aileu – Dili Vanilli Farmstay', type: 'Homestay', municipality: 'Aileu', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Farmstay experience in Aileu.' },
    { ...defaultMockData, id: 'aileu-6', name: 'Projeito Montanha Guesthouse', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$$$', priceRange: '$50-100', shortDescription: 'Premium guesthouse with mountain views.' },
    { ...defaultMockData, id: 'aileu-7', name: 'Crismat Guesthouse', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Budget-friendly guesthouse.' },
    { ...defaultMockData, id: 'aileu-8', name: 'Girasol Guesthouse', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Comfortable stay in Aileu.' },
    { ...defaultMockData, id: 'aileu-9', name: 'Mukit Guesthouse', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Relaxing guesthouse in Aileu.' },
    { ...defaultMockData, id: 'aileu-10', name: 'Riamori Guesthouse', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Simple and clean guesthouse.' },
    { ...defaultMockData, id: 'aileu-11', name: 'Soy-Lefa Guesthouse', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Mid-range guesthouse in Aileu.' },
    { ...defaultMockData, id: 'aileu-12', name: 'Tecilirio\'s Guesthouse', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Local stay in Aileu.' },
    { ...defaultMockData, id: 'aileu-13', name: 'Twin Guest House', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Comfortable twin guesthouse.' },
    { ...defaultMockData, id: 'aileu-14', name: 'Uma Hitu Guesthouse', type: 'Guesthouse', municipality: 'Aileu', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Traditional guesthouse stay.' },

    // AINARO (9)
    { ...defaultMockData, id: 'ainaro-1', name: 'Café Maubisse Guest House and Restaurant', type: 'Guesthouse', municipality: 'Ainaro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Famous guesthouse and restaurant in Maubisse.', featureImage: 'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { ...defaultMockData, id: 'ainaro-2', name: 'Matak Malirin Guesthouse', type: 'Guesthouse', municipality: 'Ainaro', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Budget guesthouse in Ainaro.' },
    { ...defaultMockData, id: 'ainaro-3', name: 'Pousada Alecrim Namrau', type: 'Guesthouse', municipality: 'Ainaro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Beautiful Pousada in the mountains.' },
    { ...defaultMockData, id: 'ainaro-4', name: 'Alecrim Namrau Homestay', type: 'Guesthouse', municipality: 'Ainaro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Comfortable homestay.' },
    { ...defaultMockData, id: 'ainaro-5', name: 'Bensa Au-Ama', type: 'Guesthouse', municipality: 'Ainaro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Mid-range guesthouse.' },
    { ...defaultMockData, id: 'ainaro-6', name: 'Ovalido Garden', type: 'Guesthouse', municipality: 'Ainaro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Guesthouse with a beautiful garden.' },
    { ...defaultMockData, id: 'ainaro-7', name: 'Hakmatek Eco Accommodation', type: 'Eco', municipality: 'Ainaro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Eco-friendly stay in nature.', featureImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { ...defaultMockData, id: 'ainaro-8', name: 'Pousada Maubisse', type: 'Pousada', municipality: 'Ainaro', priceLevel: '$$$$', priceRange: '$50-100', shortDescription: 'Historic Portuguese pousada with stunning views.' },
    { ...defaultMockData, id: 'ainaro-9', name: 'Sara\'s Guesthouse', type: 'Guesthouse', municipality: 'Ainaro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Welcoming guesthouse in Ainaro.' },

    // ATAURO (12)
    { ...defaultMockData, id: 'atauro-1', name: 'Beloi Beach Hotel Dive Resort', type: 'Hotel', municipality: 'Atauro', priceLevel: '$$$$', priceRange: '$50-100', shortDescription: 'Premium dive resort on Beloi beach.', featureImage: 'https://images.unsplash.com/photo-1582610116397-ed884318c4e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { ...defaultMockData, id: 'atauro-2', name: 'Compass Atauro Beach Eco-Lodge', type: 'Eco', municipality: 'Atauro', priceLevel: '$$$$', priceRange: '$50-100', shortDescription: 'Sustainable eco-lodge by the beautiful coral reefs.' },
    { ...defaultMockData, id: 'atauro-3', name: 'Guesthouse Padre Luis', type: 'Guesthouse', municipality: 'Atauro', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Simple island guesthouse.' },
    { ...defaultMockData, id: 'atauro-4', name: 'Manukoko Rek Restaurant and Guesthouses', type: 'Guesthouse', municipality: 'Atauro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Guesthouse with great local food.' },
    { ...defaultMockData, id: 'atauro-5', name: 'Carlito\'s Homestay', type: 'Homestay', municipality: 'Atauro', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Authentic Atauro homestay.' },
    { ...defaultMockData, id: 'atauro-6', name: 'Eliazer\'s Family Homestay', type: 'Homestay', municipality: 'Atauro', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Welcoming family homestay.' },
    { ...defaultMockData, id: 'atauro-7', name: 'Estevao\'s Homestay', type: 'Guesthouse', municipality: 'Atauro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Comfortable island stay.' },
    { ...defaultMockData, id: 'atauro-8', name: 'Moises Homestay', type: 'Homestay', municipality: 'Atauro', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Basic budget homestay.' },
    { ...defaultMockData, id: 'atauro-9', name: 'Pinorana Homestay', type: 'Homestay', municipality: 'Atauro', priceLevel: '$$', priceRange: '$0-20', shortDescription: 'Local homestay on Atauro.' },
    { ...defaultMockData, id: 'atauro-10', name: 'Trisan Eco Guesthouse', type: 'Guesthouse', municipality: 'Atauro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Eco-conscious guesthouse.' },
    { ...defaultMockData, id: 'atauro-11', name: 'Vila Gracia', type: 'Guesthouse', municipality: 'Atauro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Relaxing villa stay.' },
    { ...defaultMockData, id: 'atauro-12', name: 'Uma Ba Futuru', type: 'Guesthouse', municipality: 'Atauro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Community-focused guesthouse.' },

    // BAUCAU (6)
    { ...defaultMockData, id: 'baucau-1', name: 'Costa Guesthouse', type: 'Guesthouse', municipality: 'Baucau', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Comfortable stay in Baucau.' },
    { ...defaultMockData, id: 'baucau-2', name: 'Dom Guest House', type: 'Guesthouse', municipality: 'Baucau', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Quiet guesthouse.' },
    { ...defaultMockData, id: 'baucau-3', name: 'Pousada de Baucau', type: 'Pousada', municipality: 'Baucau', priceLevel: '$$$$', priceRange: '$60-120', shortDescription: 'Historic colonial-era pink guesthouse.', featureImage: 'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { ...defaultMockData, id: 'baucau-4', name: 'Melita Guesthouse', type: 'Guesthouse', municipality: 'Baucau', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Mid-range Baucau guesthouse.' },
    { ...defaultMockData, id: 'baucau-5', name: 'Olhao Guesthouse', type: 'Guesthouse', municipality: 'Baucau', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Guesthouse in Baucau old town.' },
    { ...defaultMockData, id: 'baucau-6', name: 'Tato Toti Guesthouse', type: 'Guesthouse', municipality: 'Baucau', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Friendly local accommodation.' },

    // BOBONARO (3)
    { ...defaultMockData, id: 'bobonaro-1', name: 'Balibo Fort Hotel', type: 'Hotel', municipality: 'Bobonaro', priceLevel: '$$$$', priceRange: '$50-100', shortDescription: 'Historic fort turned into a boutique hotel.', featureImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { ...defaultMockData, id: 'bobonaro-2', name: 'Pousada Maliana', type: 'Pousada', municipality: 'Bobonaro', priceLevel: '$$$$', priceRange: '$50-100', shortDescription: 'Portuguese style pousada in Maliana.' },
    { ...defaultMockData, id: 'bobonaro-3', name: 'Ramascora Resort', type: 'Guesthouse', municipality: 'Bobonaro', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Relaxing resort-style guesthouse.' },

    // DILI (10 selected major ones)
    { ...defaultMockData, id: 'dili-1', name: 'Hotel Timor', type: 'Hotel', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$100-200', shortDescription: 'Iconic premier hotel in central Dili.' },
    { ...defaultMockData, id: 'dili-2', name: 'Palm Springs Hotel', type: 'Hotel', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$80-150', shortDescription: 'Modern hotel with great amenities.' },
    { ...defaultMockData, id: 'dili-3', name: 'Timor Plaza Hotel & Apartments', type: 'Hotel', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$100-250', shortDescription: 'Convenient hotel located inside Timor Plaza.', featureImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { ...defaultMockData, id: 'dili-4', name: 'Sakura Tower Hotel', type: 'Hotel', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$80-150', shortDescription: 'City center hotel with good views.' },
    { ...defaultMockData, id: 'dili-5', name: 'Beach Garden Hotel', type: 'Hotel', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$100-180', shortDescription: 'Comfortable hotel near the embassies and beach.' },
    { ...defaultMockData, id: 'dili-6', name: 'Excelsior Resort Hotel', type: 'Hotel', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$90-150', shortDescription: 'Spacious resort-style hotel in Dili.' },
    { ...defaultMockData, id: 'dili-7', name: 'Novo Turismo Resort & Spa', type: 'Resort', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$120-250', shortDescription: 'Luxury resort and spa on the waterfront.', featureImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { ...defaultMockData, id: 'dili-8', name: 'Arbiru Beach Resort', type: 'Resort', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$80-150', shortDescription: 'Beachfront resort offering apartments and rooms.' },
    { ...defaultMockData, id: 'dili-9', name: 'Tibar Beach Retreat', type: 'Resort', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$100-180', shortDescription: 'Peaceful retreat just outside Dili.' },
    { ...defaultMockData, id: 'dili-10', name: 'Timor Lodge Hotel and Residence', type: 'Hotel', municipality: 'Dili', priceLevel: '$$$$', priceRange: '$60-120', shortDescription: 'Large lodge complex near the airport.' },

    // ERMERA (1)
    { ...defaultMockData, id: 'ermera-1', name: 'Gomes Community Farm Guest House Railaco', type: 'Homestay', municipality: 'Ermera', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Community farmstay in the coffee region of Ermera.', featureImage: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },

    // LAUTEM (4)
    { ...defaultMockData, id: 'lautem-1', name: 'Hotel Roberto Carlos', type: 'Hotel', municipality: 'Lautem', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Famous base for exploring Lautem in Lospalos.' },
    { ...defaultMockData, id: 'lautem-2', name: 'Sina Guest House', type: 'Guesthouse', municipality: 'Lautem', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Comfortable guesthouse in Lospalos.' },
    { ...defaultMockData, id: 'lautem-3', name: 'Lakumorre Guesthouse', type: 'Guesthouse', municipality: 'Lautem', priceLevel: '$$$$', priceRange: '$50-100', shortDescription: 'Great guesthouse near Jaco Island.' },
    { ...defaultMockData, id: 'lautem-4', name: 'Pousada Tutuala', type: 'Pousada', municipality: 'Lautem', priceLevel: '$$$$', priceRange: '$50-100', shortDescription: 'Historic cliffside pousada overlooking Jaco Island.', featureImage: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },

    // LIQUICA (1)
    { ...defaultMockData, id: 'liquica-1', name: 'Lauhata Beach Escape', type: 'Resort', municipality: 'Liquica', priceLevel: '$$$$', priceRange: '$50-100', shortDescription: 'Beautiful beach resort just west of Dili.' },

    // MANUFAHI (1)
    { ...defaultMockData, id: 'manufahi-1', name: 'Umaliurai Hotel', type: 'Guesthouse', municipality: 'Manufahi', priceLevel: '$$$', priceRange: '$20-50', shortDescription: 'Comfortable stay in Same, Manufahi.' }
];
