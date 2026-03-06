export interface FlightRoute {
    departure: string;
    destination: string;
    days: string[];
    airline: string;
    aircraft: string;
    frequency: string;
    isInternational: boolean;
}

export interface Airline {
    id: string;
    name: string;
    description: string;
    logo: string;
    website: string;
    contact: {
        phone: string;
        email: string;
        office?: string;
    };
    routes: FlightRoute[];
    specialServices: string[];
    history?: string;
}

export interface EntryRequirement {
    id: string;
    title: string;
    category: 'Visa' | 'Passport' | 'Health' | 'Customs' | 'Finance';
    summary: string;
    details: string[];
}

export const airlines: Airline[] = [
    {
        id: 'aero-dili',
        name: 'Aero Dili',
        description: 'The national flag carrier of Timor-Leste, providing essential domestic and international links.',
        logo: '/assets/logos/aerodili.png', // Fallback to placeholder if not found
        website: 'https://www.aerodili.com',
        contact: {
            phone: '+670 7700 1234',
            email: 'reservations@aerodili.tl',
            office: 'Avenida de Portugal, Dili'
        },
        specialServices: ['Pre-booked Meals', 'Extra Baggage', 'Assisted Travel'],
        history: 'Aero Dili was established as the national carrier to enhance Timor-Leste\'s connectivity with the world.',
        routes: [
            { airline: 'Aero Dili', departure: 'Dili', destination: 'Bali', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], aircraft: 'Airbus A320', frequency: 'Daily', isInternational: true },
            { airline: 'Aero Dili', departure: 'Dili', destination: 'Singapore', days: ['Sun'], aircraft: 'Airbus A320', frequency: 'Weekly', isInternational: true },
            { airline: 'Aero Dili', departure: 'Dili', destination: 'Xiamen', days: ['Tue', 'Wed'], aircraft: 'Airbus A320', frequency: '2x Weekly', isInternational: true },
            { airline: 'Aero Dili', departure: 'Dili', destination: 'Fuzhou', days: ['Every Other Sat'], aircraft: 'Airbus A320', frequency: 'Fortnightly', isInternational: true },
            { airline: 'Aero Dili', departure: 'Dili', destination: 'Oecusse', days: ['Sat'], aircraft: 'Cessna 208', frequency: 'Weekly', isInternational: false },
        ]
    },
    {
        id: 'citilink',
        name: 'Citilink',
        description: 'Indonesian low-cost carrier connecting Dili with major Indonesian hubs.',
        logo: '/assets/logos/citilink.png',
        website: 'https://www.citilink.co.id',
        contact: {
            phone: '+62 804 1 080808',
            email: 'support@citilink.co.id'
        },
        specialServices: ['Low Cost Travel', 'Hot Meals'],
        routes: [
            { airline: 'Citilink', departure: 'Dili', destination: 'Bali', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], aircraft: 'Airbus A320', frequency: 'Daily', isInternational: true }
        ]
    },
    {
        id: 'qantas',
        name: 'Qantas',
        description: 'Australian flag carrier providing premium services between Darwin and Dili.',
        logo: '/assets/logos/qantas.png',
        website: 'https://www.qantas.com',
        contact: {
            phone: '13 13 13 (Australia)',
            email: 'qantas@example.com'
        },
        specialServices: ['Full Service', 'In-flight Entertainment', 'Lounge Access'],
        routes: [
            { airline: 'Qantas', departure: 'Dili', destination: 'Darwin', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], aircraft: 'Embraer E190', frequency: 'Daily', isInternational: true }
        ]
    },
    {
        id: 'air-north',
        name: 'Air North',
        description: 'Regional airline of Northern Australia connecting Darwin and Dili.',
        logo: '/assets/logos/airnorth.png',
        website: 'https://www.airnorth.com.au',
        contact: {
            phone: '1800 627 474',
            email: 'reservations@airnorth.com.au'
        },
        specialServices: ['Regional Expertise', 'Complimentary Snacks'],
        routes: [
            { airline: 'Air North', departure: 'Dili', destination: 'Darwin', days: ['Mon', 'Wed', 'Fri'], aircraft: 'Embraer E170', frequency: '3x Weekly', isInternational: true }
        ]
    },
    {
        id: 'batik-air',
        name: 'Batik Air',
        description: 'Full-service carrier offering comfortable links to Kuala Lumpur.',
        logo: '/assets/logos/batikair.png',
        website: 'https://www.batikair.com.my',
        contact: {
            phone: '+60 3 7843 3388',
            email: 'customercare@batikair.com.my'
        },
        specialServices: ['Business Class', 'In-flight Meals'],
        routes: [
            { airline: 'Batik Air', departure: 'Dili', destination: 'Kuala Lumpur', days: ['Mon', 'Wed', 'Fri'], aircraft: 'Boeing 737', frequency: '3x Weekly', isInternational: true }
        ]
    }
];

export const entryRequirements: EntryRequirement[] = [
    {
        id: 'visa-req',
        title: 'Visa Requirements',
        category: 'Visa',
        summary: 'Most visitors require a visa to enter Timor-Leste, available on arrival or pre-issued.',
        details: [
            'Tourist Visa on Arrival ($30 USD) for most nationalities.',
            'Visa-free entry for EU citizens and certain ASEAN countries.',
            'Business visas must be applied for in advance.',
            'Proof of sufficient funds ($100 plus $50/day) may be requested.'
        ]
    },
    {
        id: 'passport-req',
        title: 'Passport Validity',
        category: 'Passport',
        summary: 'Ensure your travel documents meet the minimum entry requirements.',
        details: [
            'Passport must be valid for at least 6 months from the date of entry.',
            'At least two blank pages required for entry stamps.',
            'Emergency travel documents are subject to strict scrutiny.'
        ]
    },
    {
        id: 'health-req',
        title: 'Health & Vaccination',
        category: 'Health',
        summary: 'Recommended health precautions for travelers to Timor-Leste.',
        details: [
            'Yellow Fever certificate required if traveling from a transmission zone.',
            'Malaria prophylaxis is strongly recommended for rural areas.',
            'Dengue fever precautions (mosquito repellent) advised.',
            'Standard vaccinations (hepatitis A, typhoid) recommended.'
        ]
    },
    {
        id: 'customs-req',
        title: 'Customs Regulations',
        category: 'Customs',
        summary: 'Rules regarding duty-free allowance and restricted items.',
        details: [
            'Duty-free: 200 cigarettes or 250g tobacco.',
            'Duty-free: 1 liter of spirits or wine.',
            'Strictly no illicit drugs or weapons.',
            'Cultural artifacts require export permits.'
        ]
    }
];
