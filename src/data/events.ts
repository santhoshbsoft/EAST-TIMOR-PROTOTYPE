export type EventCategory = 'Music' | 'Sports' | 'Cultural' | 'Religious' | 'Food' | 'National';

export interface EventInfo {
    id: string;
    name: string;
    startDate: string; // ISO format or explicit date like "March 23"
    endDate?: string;
    time: string;
    timezone: string;
    category: EventCategory;
    location: string;
    venue: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    ticketInfo: string;
    pricing: string;
    organizer: {
        name: string;
        contact: string;
        website?: string;
    };
    coordinates: {
        lat: number;
        lng: number;
    };
}

export const eventsData: EventInfo[] = [
    {
        id: 'evt-meci-harvest',
        name: 'Meci Harvest Ceremony',
        startDate: '2024-03-23',
        time: 'All Day',
        timezone: 'TLT (UTC+9)',
        category: 'Cultural',
        location: 'Lautem, Lore',
        venue: 'Lore Community Grounds',
        shortDescription: 'A traditional animist harvest festival in the Lautem municipality honoring the Earth and sea.',
        fullDescription: 'The Meci Harvest Ceremony is a deeply spiritual and communal gathering in Lore. Locals honor the sea worms (Meci) that arrive once a year, symbolizing fertility, harvest, and life. Experience traditional chants, communal dancing, and authentic sacred rituals passed down through generations.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Open community event. Local guide recommended.',
        pricing: 'Free',
        organizer: {
            name: 'Lautem Cultural Committee',
            contact: '+670 7712 3456',
        },
        coordinates: { lat: -8.6366, lng: 126.9038 }
    },
    {
        id: 'evt-sau-batar',
        name: 'Sau Batar Corn Cultural Ceremony',
        startDate: '2024-03-31', // TBC - placing end of month
        time: 'Dawn till Dusk',
        timezone: 'TLT (UTC+9)',
        category: 'Cultural',
        location: 'Kovalima, Kamanasa',
        venue: 'Kamanasa Village Center',
        shortDescription: 'Traditional ritual marking the first corn harvest, accompanied by traditional feasts.',
        fullDescription: 'The Sau Batar ceremony marks the beginning of the corn harvest. Communities in Kovalima gather to give thanks to their ancestors and the land. Visitors can witness traditional sacrifices, communal cooking, and the vibrant tais (woven textiles) worn by the elders.',
        image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Public cultural event.',
        pricing: 'Free',
        organizer: {
            name: 'Kovalima Tourism Office',
            contact: '+670 7799 8877',
        },
        coordinates: { lat: -9.3148, lng: 125.2638 }
    },
    {
        id: 'evt-senor-morto',
        name: 'Senor Morto Celebration',
        startDate: '2024-04-03',
        time: '15:00 - 19:00',
        timezone: 'TLT (UTC+9)',
        category: 'Religious',
        location: 'Pante Macassar, Oe-Cusse',
        venue: 'Pante Macassar Parish',
        shortDescription: 'A deeply moving Catholic procession observed leading up to Easter.',
        fullDescription: 'The Senor Morto (Dead Lord) Celebration is one of the most powerful religious observances in the exclave of Oe-Cusse. The streets fill with faithful locals participating in a solemn, candle-lit procession honoring the Passion of Christ.',
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Public religious gathering.',
        pricing: 'Free',
        organizer: {
            name: 'Oe-Cusse Diocese',
            contact: '+670 7733 2211',
        },
        coordinates: { lat: -9.2014, lng: 124.3117 }
    },
    {
        id: 'evt-independence',
        name: 'Restoration of Independence Day Celebrations',
        startDate: '2024-05-20',
        time: '08:00 - 23:00',
        timezone: 'TLT (UTC+9)',
        category: 'National',
        location: 'Dili',
        venue: 'Independence Square (Praça da Proclamação da Independência)',
        shortDescription: 'Nationwide celebrations marking the restoration of Timor-Leste\'s independence in 2002.',
        fullDescription: 'Celebrate alongside the Timorese people on their most important national holiday. The day features formal flag-raising ceremonies, military parades, traditional music and dance performances, and culminates in lively street parties and fireworks across the capital city of Dili.',
        image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Public national event. Arrive early for good viewing spots.',
        pricing: 'Free',
        organizer: {
            name: 'Ministry of State Administration',
            contact: 'info@timorleste.tl',
            website: 'https://timorleste.tl'
        },
        coordinates: { lat: -8.5539, lng: 125.5786 }
    },
    {
        id: 'evt-tasifest',
        name: 'TasiFest Culture & Music Festival',
        startDate: '2024-05-29',
        endDate: '2024-05-30',
        time: '16:00 - 02:00',
        timezone: 'TLT (UTC+9)',
        category: 'Music',
        location: 'Dili',
        venue: 'Tasitolu Lakes Venue',
        shortDescription: 'A massive coastal celebration of Timorese contemporary and traditional music.',
        fullDescription: 'TasiFest (Sea Festival) brings together the best of Timor-Leste\'s musicians alongside regional artists. Over two days, enjoy vibrant performances ranging from traditional drum circles to modern Timorese pop and reggae. The festival grounds feature incredible local street food and crafts.',
        image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Tickets available at gate or via Timor Telecom.',
        pricing: '$15 Standard / $45 VIP',
        organizer: {
            name: 'Dili Entertainment Group',
            contact: '+670 7711 5566',
        },
        coordinates: { lat: -8.5683, lng: 125.5186 }
    },
    {
        id: 'evt-st-anthony',
        name: 'St Anthony’s Day Pilgrimage',
        startDate: '2024-07-13',
        time: 'Dawn',
        timezone: 'TLT (UTC+9)',
        category: 'Religious',
        location: 'Manatutu Vila & Pante Macassar',
        venue: 'Mt. St. Anthony Shrines',
        shortDescription: 'Thousands embark on a strenuous physical pilgrimage to honor St. Anthony.',
        fullDescription: 'One of the most significant pilgrimage events in the country. Devotees walk long distances, sometimes barefoot, climbing rugged trails to shrines dedicated to Saint Anthony. The atmosphere is one of intense reflection mixed with community solidarity.',
        image: 'https://images.unsplash.com/photo-1519060548177-3e618ce52eb0?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Public pilgrimage.',
        pricing: 'Free',
        organizer: {
            name: 'Manatutu Parish',
            contact: '+670 331 4455',
        },
        coordinates: { lat: -8.5117, lng: 126.0142 }
    },
    {
        id: 'evt-betel-nut',
        name: 'Betel Nut Festival',
        startDate: '2024-07-18',
        time: '10:00 - 18:00',
        timezone: 'TLT (UTC+9)',
        category: 'Cultural',
        location: 'Atauro, Biqueli',
        venue: 'Biqueli Coastal Village',
        shortDescription: 'Celebrating the cultural cornerstone of betel nut chewing and coastal living on Atauro Island.',
        fullDescription: 'Betel nut (bua) is a symbol of friendship and peace in Timor-Leste. This unique festival on Atauro Island highlights the traditions, dances, and social rituals surrounding betel nut. Expect vibrant dances, outrigger canoe sea races, and spectacular island hospitality.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Ferry required from Dili to Atauro Island.',
        pricing: 'Free (Ferry $15)',
        organizer: {
            name: 'Atauro Tourism Association',
            contact: '+670 7788 9900',
        },
        coordinates: { lat: -8.1402, lng: 125.5894 }
    },
    {
        id: 'evt-sae-bua',
        name: 'Sae Bua Cultural Ceremony',
        startDate: '2024-07-20',
        time: 'All Day',
        timezone: 'TLT (UTC+9)',
        category: 'Cultural',
        location: 'Atauro, Makadade',
        venue: 'Makadade Mountain Village',
        shortDescription: 'A sacred mountain gathering focused on ancestral reverence on Atauro Island.',
        fullDescription: 'Shortly after the coastal festival in Biqueli, the high mountain village of Makadade hosts the Sae Bua ceremony. This represents the connection between the mountain dwellers and the sea people. Visitors can experience ancient animist prayers and breathtaking views of the surrounding seas.',
        image: 'https://images.unsplash.com/photo-1517781031317-09a7b21e8e2c?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Requires steep hike/4WD access.',
        pricing: 'Free',
        organizer: {
            name: 'Makadade Elders Council',
            contact: 'Local guides via Roman Luan',
        },
        coordinates: { lat: -8.2144, lng: 125.5786 }
    },
    {
        id: 'evt-tebe-fahi',
        name: 'Tebe Fahi Ulun Traditional Dance',
        startDate: '2024-07-24',
        time: '18:00 - Midnight',
        timezone: 'TLT (UTC+9)',
        category: 'Cultural',
        location: 'Ainaro, Maubisse',
        venue: 'Maubisse Pousada Grounds',
        shortDescription: 'A hypnotic circle dance gathering in the cool mountain climate of Maubisse.',
        fullDescription: 'The Tebe is a traditional circle dance where participants link arms and chant rhythmically for hours. Set against the misty, cool backdrop of the Maubisse mountains, this event is visually and acoustically captivating, offering deep immersion into highland Timorese culture.',
        image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Open community event.',
        pricing: 'Free',
        organizer: {
            name: 'Ainaro Culture Bureau',
            contact: '+670 7744 5566',
        },
        coordinates: { lat: -8.8386, lng: 125.5972 }
    },
    {
        id: 'evt-st-martha',
        name: 'St. Martha Holy Week Mass',
        startDate: '2024-07-29',
        time: '09:00 - 12:00',
        timezone: 'TLT (UTC+9)',
        category: 'Religious',
        location: 'Oe-Cusse',
        venue: 'Oesilo Church',
        shortDescription: 'A solemn coastal mass honoring Saint Martha.',
        fullDescription: 'This beautifully orchestrated mass honoring Saint Martha draws faithful from across the Oe-Cusse exclave. The church echoes with traditional Tetum and Baikeno hymns, followed by community feasts where travelers are often warmly welcomed.',
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1000',
        ticketInfo: 'Public mass.',
        pricing: 'Free',
        organizer: {
            name: 'Oesilo Parish',
            contact: '+670 331 8877',
        },
        coordinates: { lat: -9.3167, lng: 124.2833 }
    }
];
