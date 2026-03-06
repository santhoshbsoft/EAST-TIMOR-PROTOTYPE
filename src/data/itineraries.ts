export type ItineraryCategory = 'Water Adventures' | 'Land Adventures' | 'Marine Adventures' | 'Cultural Explorations' | 'Food & Wine';

export interface DayPlan {
    day: number;
    title: string;
    description: string;
    activities: string[];
    attractions: string[];
    meals: {
        breakfast?: boolean;
        lunch?: boolean;
        dinner?: boolean;
    };
    accommodation: string;
    travelTime: string;
    activityDuration: string;
    image?: string;
}

export interface PracticalInfo {
    estimatedCost: string;
    inclusions: string[];
    exclusions: string[];
    recommendedGroupSize: string;
    fitnessLevel: 'Low' | 'Moderate' | 'High';
    ageRestrictions?: string;
    cancellationPolicy: string;
}

export interface TourOperator {
    name: string;
    description: string;
    contact: string;
    website?: string;
    rating: number;
}

export interface Itinerary {
    id: string;
    title: string;
    theme: ItineraryCategory;
    duration: string;
    distance: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    difficultyRating: number; // 1-5
    recommendedSeason: string;
    featuredImage: string;
    overview: string;
    highlights: string[];
    fullDescription: string;
    bestTimeToVisit: string;
    preparation: string[];
    days: DayPlan[];
    practicalInfo: PracticalInfo;
    operators: TourOperator[];
    reviews: {
        author: string;
        rating: number;
        comment: string;
        date: string;
    }[];
}

export const itineraries: Itinerary[] = [
    {
        id: 'atauro-island-escape',
        title: 'Atauro Island Marine Escape',
        theme: 'Marine Adventures',
        duration: '4 Days',
        distance: '60km (including ferry)',
        difficulty: 'Moderate',
        difficultyRating: 3,
        recommendedSeason: 'May - November (Dry Season)',
        featuredImage: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop',
        overview: 'Discover the world\'s most biodiverse coral reefs. This 4-day journey takes you to the heart of the Coral Triangle, where snorkeling and diving reveal a kaleidoscope of marine life.',
        highlights: [
            'Snorkel in the world\'s most biodiverse reefs',
            'Stay in eco-friendly beach lodges',
            'Watch dolphins during the boat crossing'
        ],
        fullDescription: 'Atauro Island is a hidden gem just north of Dili. Known for its crystal clear waters and vibrant marine life, it offers a tranquil escape from the mainland. This itinerary is perfect for nature lovers and those seeking a slow-paced adventure focused on conservation and marine beauty.',
        bestTimeToVisit: 'The dry season (May to November) offers the best visibility for snorkeling and diving, and calmer seas for the crossing.',
        preparation: [
            'Pack eco-friendly sunscreen',
            'Bring your own snorkeling gear if possible',
            'Carry cash as there are no ATMs on the island',
            'Pack a waterproof bag for boat trips'
        ],
        days: [
            {
                day: 1,
                title: 'Dili to Atauro Crossing',
                description: 'Board the morning ferry or speedboat for a scenic crossing of the Wetar Strait. Keep an eye out for dolphins and whales.',
                activities: ['Boat crossing', 'Check-in to Eco-Lodge', 'Sunset beach walk'],
                attractions: ['Wetar Strait', 'Beloi Beach'],
                meals: { lunch: true, dinner: true },
                accommodation: 'Barry\'s Eco Lodge',
                travelTime: '2 hours (Speedboat)',
                activityDuration: 'Half-day',
                image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073&auto=format&fit=crop'
            },
            {
                day: 2,
                title: 'Beloi Reef Exploration',
                description: 'Spend the day exploring the incredible house reefs of Beloi. Guided snorkeling trips will show you the diversity of the area.',
                activities: ['Guided snorkeling', 'Marine conservation talk', 'Village visit'],
                attractions: ['Beloi Reef', 'Beloi Village'],
                meals: { breakfast: true, lunch: true, dinner: true },
                accommodation: 'Barry\'s Eco Lodge',
                travelTime: 'Local walking',
                activityDuration: 'Full-day',
                image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2048&auto=format&fit=crop'
            }
        ],
        practicalInfo: {
            estimatedCost: '$350 - $500 per person',
            inclusions: ['Ferry/Speedboat tickets', 'Accommodation', 'All meals on the island', 'Guided snorkeling trips'],
            exclusions: ['Flights to Dili', 'Personal equipment rental', 'Alcoholic beverages'],
            recommendedGroupSize: '2 - 8 people',
            fitnessLevel: 'Moderate',
            ageRestrictions: 'Children 8+ recommended',
            cancellationPolicy: '72 hours advance notice for eco-lodges'
        },
        operators: [
            {
                name: 'Compass Charters',
                description: 'Timor-Leste\'s leading marine adventure specialists.',
                contact: '+670 7712 3456',
                website: 'https://compasstimor.com',
                rating: 4.8
            }
        ],
        reviews: [
            {
                author: 'Sarah J.',
                rating: 5,
                comment: 'The snorkeling was out of this world! I have never seen so many different types of fish in one place.',
                date: '2024-01-15'
            }
        ]
    },
    {
        id: 'mount-ramelau-trek',
        title: 'Mount Ramelau Summit Trek',
        theme: 'Land Adventures',
        duration: '2 Days',
        distance: '150km (Drive) + 10km (Hike)',
        difficulty: 'Challenging',
        difficultyRating: 5,
        recommendedSeason: 'June - September',
        featuredImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
        overview: 'Conquer Timor-Leste\'s highest peak. Witness a breathtaking sunrise from 2,964 meters above sea level and explore the mountainous heart of the country.',
        highlights: [
            'Sunrise from the highest peak in Timor-Leste',
            'Scenic drive through coffee plantations',
            'Cultural visit to Hato-Builico village'
        ],
        fullDescription: 'The trek to the summit of Mt. Ramelau (Foho Tatamailau) is a pilgrimage of both spirit and nature. Starting from the mountain village of Hato-Builico, the trail leads through ancient eucalyptus forests to the iconic statue of the Virgin Mary at the summit.',
        bestTimeToVisit: 'The peak dry season months of July and August offer the clearest skies and coldest, most refreshing mountain air.',
        preparation: [
            'Warm clothing (temperatures drop below 5°C at the summit)',
            'Sturdy hiking boots',
            'Headlamp for the midnight climb',
            'High-energy snacks'
        ],
        days: [
            {
                day: 1,
                title: 'Dili to Hato-Builico',
                description: 'A 5-hour drive south into the mountains, passing through the Aileu coffee regions.',
                activities: ['4x4 Scenic Drive', 'Village Walk', 'Early Bedtime'],
                attractions: ['Maubisse Market', 'Hato-Builico Village'],
                meals: { lunch: true, dinner: true },
                accommodation: 'Simple Pousada (Guest House)',
                travelTime: '5 hours drive',
                activityDuration: 'Travel day',
                image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop'
            },
            {
                day: 2,
                title: 'Summit & Return',
                description: 'The climb starts at 3:00 AM to reach the summit for sunrise. Descend via the same route and drive back to Dili.',
                activities: ['Summit Hike', 'Sunrise photography', 'Drive to Dili'],
                attractions: ['Mt. Ramelau Summit', 'Virgin Mary Statue'],
                meals: { breakfast: true, lunch: true },
                accommodation: 'N/A (Return to Dili)',
                travelTime: '3-4 hours hike + 5 hours drive',
                activityDuration: 'Strenuous full-day',
                image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop'
            }
        ],
        practicalInfo: {
            estimatedCost: '$200 - $300 per person',
            inclusions: ['4x4 Transport', 'Local guide', 'Guesthouse stay', 'Meals'],
            exclusions: ['Personal gear', 'Tips for guides'],
            recommendedGroupSize: '2 - 6 people',
            fitnessLevel: 'High',
            ageRestrictions: 'Minimum 12 years with hiking experience',
            cancellationPolicy: 'Subject to weather conditions; safety first.'
        },
        operators: [
            {
                name: 'Tatamailau Treks',
                description: 'Expert mountain guides from Hato-Builico.',
                contact: '+670 7712 9988',
                rating: 4.9
            }
        ],
        reviews: [
            {
                author: 'Mark T.',
                rating: 5,
                comment: 'Hardest climb of my life but the sunrise was worth every step. Unforgettable.',
                date: '2023-08-10'
            }
        ]
    }
];

export const itineraryCategories: ItineraryCategory[] = [
    'Water Adventures',
    'Land Adventures',
    'Marine Adventures',
    'Cultural Explorations',
    'Food & Wine'
];
