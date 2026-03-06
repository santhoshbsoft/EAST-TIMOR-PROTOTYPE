export type StoreCategory = 'All' | 'Handicrafts' | 'Supermarkets' | 'Electronics' | 'Fashion' | 'Local Market' | 'Food & Dining' | 'Services';

export interface Store {
    id: string;
    name: string;
    type: StoreCategory;
    floor: string;
    hours: string;
    specialty: string[];
}

export interface ShoppingComplex {
    id: string;
    name: string;
    location: string;
    municipality: string;
    image: string;
    gallery: string[];
    vendorCount: number;
    hours: string;
    description: string;
    overview: string;
    coordinates: { lat: number; lng: number };
    facilities: string[];
    contact: {
        phone: string;
        email: string;
        website?: string;
    };
    nearbyAttractions: string[];
    transport: string[];
    stores: Store[];
}

export const shoppingComplexes: ShoppingComplex[] = [
    {
        id: 'timor-plaza',
        name: 'Timor Plaza',
        location: 'Rua Presidente Nicolau Lobato, Dili',
        municipality: 'Dili',
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1567449303078-57ad995bd329?q=80&w=2072&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
        ],
        vendorCount: 60,
        hours: 'Mon–Sat: 9:00 AM – 9:00 PM | Sun: 10:00 AM – 7:00 PM',
        description: 'Timor-Leste\'s premier shopping destination featuring international brands, local artisans, and dining options in the heart of Dili.',
        overview: 'Timor Plaza is the country\'s largest modern shopping complex, offering a wide range of retail, dining, and entertainment experiences under one roof. Home to both international franchises and locally owned boutiques, it\'s the perfect place to find souvenirs, everyday essentials, and Timorese handicrafts.',
        coordinates: { lat: -8.5586, lng: 125.5736 },
        facilities: ['ATM / Banking', 'Free Parking', 'Food Court', 'Restrooms', '24/7 Security', 'WiFi', 'Elevator', 'Disabled Access'],
        contact: {
            phone: '+670 3321 5678',
            email: 'info@timorplaza.tl',
            website: 'https://timorplaza.tl'
        },
        nearbyAttractions: ['Dili Waterfront', 'Xanana Gusmão Reading Room', 'Cristo Rei Statue'],
        transport: ['Microlets: Lines 1 & 3 stop at plaza entrance', 'Taxis widely available outside', 'Motorbike rentals nearby', 'Walking distance from Dili port'],
        stores: [
            { id: 's1', name: 'Tais Market Corner', type: 'Handicrafts', floor: 'Ground Floor', hours: '9:00 AM – 8:00 PM', specialty: ['Tais cloth', 'Hand-woven textiles', 'Traditional jewellery'] },
            { id: 's2', name: 'Leader Supermarket', type: 'Supermarkets', floor: 'Ground Floor', hours: '8:00 AM – 9:00 PM', specialty: ['Imported groceries', 'Fresh produce', 'Household goods'] },
            { id: 's3', name: 'TL Electronics Hub', type: 'Electronics', floor: '1st Floor', hours: '9:00 AM – 8:00 PM', specialty: ['Mobile phones', 'Accessories', 'Computers'] },
            { id: 's4', name: 'Moda Timor', type: 'Fashion', floor: '1st Floor', hours: '10:00 AM – 8:30 PM', specialty: ['Local fashion', 'Beachwear', 'Casual clothing'] },
            { id: 's5', name: 'Cafe Dili', type: 'Food & Dining', floor: 'Ground Floor', hours: '7:00 AM – 9:00 PM', specialty: ['Timorese coffee', 'Light meals', 'Fresh juices'] },
            { id: 's6', name: 'Western Union / Money Transfer', type: 'Services', floor: 'Ground Floor', hours: '9:00 AM – 5:00 PM', specialty: ['International transfers', 'Currency exchange'] },
        ]
    },
    {
        id: 'dili-central-market',
        name: 'Mercado Municipal Dili',
        location: 'Av. Bispo Medeiros, Dili',
        municipality: 'Dili',
        image: 'https://images.unsplash.com/photo-1488459736882-7504a330f27a?q=80&w=2070&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=2074&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1526040652367-ac003a0475fe?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=2070&auto=format&fit=crop',
        ],
        vendorCount: 200,
        hours: 'Daily: 5:00 AM – 6:00 PM (Peak hours: 6:00 AM – 12:00 PM)',
        description: 'The vibrant heart of Dili\'s trade — a bustling traditional market with fresh produce, fish, spices, and handmade crafts.',
        overview: 'Dili\'s central municipal market (Mercado Municipal) is the largest traditional market in Timor-Leste. It\'s the go-to destination for fresh tropical fruits, seafood straight from the morning catch, aromatic spices, and local street food. An essential cultural experience for any visitor.',
        coordinates: { lat: -8.5571, lng: 125.5712 },
        facilities: ['Covered Market Area', 'Fresh Seafood Section', 'Fruit & Vegetable Zone', 'Street Food Stalls', 'Public Restrooms', 'Porter Services'],
        contact: {
            phone: '+670 3321 1100',
            email: 'mercado@dili.gov.tl',
        },
        nearbyAttractions: ['Dili Waterfront Promenade', 'Resistance Museum', 'Palácio do Governo'],
        transport: ['Microlets: All major lines pass nearby', 'Central taxi rank adjacent to market', 'Easy walking distance from city centre hotels'],
        stores: [
            { id: 'm1', name: 'Fresh Fish Stalls (Row A)', type: 'Local Market', floor: 'Main Hall', hours: '5:00 AM – 12:00 PM', specialty: ['Fresh tuna', 'Snapper', 'Shellfish'] },
            { id: 'm2', name: 'Tropical Fruits & Vegetables', type: 'Local Market', floor: 'East Wing', hours: '5:30 AM – 5:00 PM', specialty: ['Papaya', 'Mango', 'Cassava', 'Local herbs'] },
            { id: 'm3', name: 'Spice Merchants', type: 'Local Market', floor: 'West Wing', hours: '6:00 AM – 4:00 PM', specialty: ['Cinnamon', 'Vanilla', 'Turmeric', 'Nutmeg'] },
            { id: 'm4', name: 'Handicraft & Souvenir Row', type: 'Handicrafts', floor: 'South Entrance', hours: '7:00 AM – 5:00 PM', specialty: ['Tais fabric', 'Woven baskets', 'Traditional carvings'] },
            { id: 'm5', name: 'Warung Makanan (Food Stalls)', type: 'Food & Dining', floor: 'North Section', hours: '5:00 AM – 3:00 PM', specialty: ['Ikan pepes', 'Batar daan', 'Local snacks'] },
        ]
    },
    {
        id: 'landmark-plaza',
        name: 'Landmark Plaza Dili',
        location: 'Rua Dom Aleixo Corte Real, Dili',
        municipality: 'Dili',
        image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2070&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop',
        ],
        vendorCount: 35,
        hours: 'Mon–Fri: 8:00 AM – 8:00 PM | Sat–Sun: 9:00 AM – 7:00 PM',
        description: 'A modern retail and services hub offering banking, professional services, electronics, and fashion in a comfortable air-conditioned environment.',
        overview: 'Landmark Plaza caters to Dili\'s growing professional community and expatriate residents. With a strong focus on essential services — banking, mobile phone networks, travel agencies — alongside quality retail stores, it bridges the gap between traditional markets and international-style shopping.',
        coordinates: { lat: -8.5560, lng: 125.5780 },
        facilities: ['ATM (Multiple Banks)', 'Air Conditioning', 'Underground Parking', 'Business Centre', 'Security', 'Restrooms', 'Café'],
        contact: {
            phone: '+670 3321 7890',
            email: 'info@landmarkplaza.tl',
            website: 'https://landmarkdili.tl'
        },
        nearbyAttractions: ['Dili Cathedral', 'Pertamina Fuel Station', 'Areia Branca Beach'],
        transport: ['Taxi rank at main entrance', 'Microlet Line 2 & 4 nearby', 'Scooter parking available'],
        stores: [
            { id: 'l1', name: 'BNU Bank Branch', type: 'Services', floor: 'Ground Floor', hours: '8:30 AM – 4:30 PM', specialty: ['Personal banking', 'Foreign exchange', 'Loans'] },
            { id: 'l2', name: 'Timor Telecom Store', type: 'Electronics', floor: 'Ground Floor', hours: '8:00 AM – 7:00 PM', specialty: ['SIM cards', 'Mobile phones', 'Data plans'] },
            { id: 'l3', name: 'Fashion Forward', type: 'Fashion', floor: '1st Floor', hours: '9:00 AM – 7:30 PM', specialty: ['International brands', 'Accessories', 'Bags'] },
            { id: 'l4', name: 'Casa Travel Agency', type: 'Services', floor: '1st Floor', hours: '8:00 AM – 6:00 PM', specialty: ['Flight booking', 'Hotel reservations', 'Tours'] },
            { id: 'l5', name: 'Golden Bakery', type: 'Food & Dining', floor: 'Ground Floor', hours: '7:00 AM – 7:00 PM', specialty: ['Fresh bread', 'Pastries', 'Coffee', 'Sandwiches'] },
        ]
    }
];

export const storeCategories: StoreCategory[] = [
    'All', 'Handicrafts', 'Supermarkets', 'Electronics', 'Fashion', 'Local Market', 'Food & Dining', 'Services'
];

export const shoppingTips: string[] = [
    'Bargaining is common at local markets — be respectful and start friendly negotiations.',
    'US Dollars are the official currency. Small USD bills are handy for market purchases.',
    'Tais (traditional hand-woven cloth) is the most sought-after authentic souvenir.',
    'Markets are busiest and most vibrant in the early morning (before 10 AM).',
    'Most malls and plazas accept credit cards; local markets are cash-only.',
    'Check customs regulations before purchasing large quantities of handicrafts.',
];
