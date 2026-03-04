export interface Municipality {
    id: string;
    name: string;
    region: string;
    image: string;
    videoUrl?: string;
    description: string;
    longDescription: string;
    pois: { name: string; description: string; image: string }[];
    gallery: string[];
    weather: { temp: string; condition: string };
    highlights: string[];
}

export const municipalitiesData: Municipality[] = [
    {
        id: 'dili',
        name: 'Dili',
        region: 'Central',
        image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1200',
        description: 'The vibrant capital of Timor-Leste.',
        longDescription: 'Dili is the main gateway to Timor-Leste, a city where Portuguese colonial relics stand alongside modern culture. From the iconic Cristo Rei statue to bustling waterfront markets, it offers a unique blend of history and coastal beauty.',
        pois: [
            { name: 'Cristo Rei', description: 'Massive statue of Jesus Christ with stunning sunset views.', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=400' },
            { name: 'Resistance Museum', description: 'A deep dive into the nation\'s struggle for independence.', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=400' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '31°C', condition: 'Sunny' },
        highlights: ['Cultural Hub', 'Dining', 'History']
    },
    {
        id: 'atauro',
        name: 'Atauro Island',
        region: 'North',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200',
        description: 'Global biodiversity hotspot.',
        longDescription: 'Located just across the strait from Dili, Atauro Island holds the world record for reef fish biodiversity. It is a haven for eco-tourists, divers, and those seeking untouched natural beauty.',
        pois: [
            { name: 'Beloi Reef', description: 'Crystal clear waters and vibrant marine life.', image: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=400' },
            { name: 'Barry\'s Place', description: 'Iconic eco-lodge promoting sustainable tourism.', image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=400' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '29°C', condition: 'Clear' },
        highlights: ['Diving', 'Snorkeling', 'Eco-Tourism']
    },
    {
        id: 'baucau',
        name: 'Baucau',
        region: 'East',
        image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200',
        description: 'Colonial charm and coastal beauty.',
        longDescription: 'Baucau is Timor-Leste\'s second-largest city, known for its well-preserved Portuguese colonial architecture and the dramatic limestone cliffs that descend into turquoise waters.',
        pois: [
            { name: 'Pousada de Baucau', description: 'The famous pink hotel from the colonial era.', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=400' },
            { name: 'Watabo Beach', description: 'Secluded white sand beach with clear swimming waters.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '27°C', condition: 'Partly Cloudy' },
        highlights: ['Architecture', 'Hiking', 'Coastal Landscapes']
    },
    {
        id: 'aileu',
        name: 'Aileu',
        region: 'Highlands',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',
        description: 'Misty mountains and coffee plantations.',
        longDescription: 'Aileu is a highland municipality known for its cool climate, misty mountain peaks, and lush coffee estates. It was a key location during the resistance.',
        pois: [{ name: 'Aileu Cathedral', description: 'Historic church in the mountain mist.', image: 'https://images.unsplash.com/photo-14330864663cf0-226829677555?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '22°C', condition: 'Misty' },
        highlights: ['Trekking', 'Coffee']
    },
    {
        id: 'ainaro',
        name: 'Ainaro',
        region: 'Highlands',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
        description: 'Home to the highest peak, Mt. Ramelau.',
        longDescription: 'Ainaro is famous for its rugged terrain and being the gateway to Mt. Ramelau, the highest peak in Timor-Leste and a site of deep spiritual significance.',
        pois: [{ name: 'Mt. Ramelau Summit', description: 'Highest point in the country at 2,963m.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1510784722466-f2aa9c52fed6?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '20°C', condition: 'Cloudy' },
        highlights: ['Climbing', 'Spirituality']
    },
    {
        id: 'bobonaro',
        name: 'Bobonaro',
        region: 'West',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
        description: 'Border adventures and hot springs.',
        longDescription: 'Located on the border with Indonesia, Bobonaro features historic forts, natural hot springs in Marobo, and high-altitude towns like Maliana.',
        pois: [{ name: 'Marobo Hot Springs', description: 'Sulfuric natural springs with healing properties.', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '28°C', condition: 'Sunny' },
        highlights: ['Hot Springs', 'History']
    },
    {
        id: 'covalima',
        name: 'Covalima',
        region: 'West',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200',
        description: 'Ancient traditions and southern shores.',
        longDescription: 'Covalima is rich in traditional culture and myths. Its southern coastline offers glimpses into the rugged beauty of the Timor Sea.',
        pois: [{ name: 'Suai Church', description: 'Symbol of hope and reconciliation.', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1510784722466-f2aa9c52fed6?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '30°C', condition: 'Humid' },
        highlights: ['Culture', 'Beaches']
    },
    {
        id: 'ermera',
        name: 'Ermera',
        region: 'Highlands',
        image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1200',
        description: 'The heart of Timorese coffee.',
        longDescription: 'Ermera is the leading coffee-producing region in the country, characterized by giant shade trees and vast organic coffee plantations.',
        pois: [{ name: 'Gleno Falls', description: 'Refreshing waterfall near the coffee heartland.', image: 'https://images.unsplash.com/photo-14330864663cf0-226829677555?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '24°C', condition: 'Clear' },
        highlights: ['Coffee Tours', 'Nature']
    },
    {
        id: 'lautem',
        name: 'Lautém',
        region: 'East',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
        description: 'Ancestral houses and wild nature.',
        longDescription: 'Lautém is home to the Konis Santana National Park, ancient spirit houses (Uma Lulik), and the stunning Jaco Island.',
        pois: [{ name: 'Jaco Island', description: 'Virgin island with crystal clear turquoise water.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1510784722466-f2aa9c52fed6?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '29°C', condition: 'Sunny' },
        highlights: ['Heritage', 'Sanctuaries']
    },
    {
        id: 'liquica',
        name: 'Liquiçá',
        region: 'North Coast',
        image: 'https://images.unsplash.com/photo-14330864663cf0-226829677555?auto=format&fit=crop&q=80&w=1200',
        description: 'Black sand beaches and colonial ruins.',
        longDescription: 'A short drive from Dili, Liquiçá offers beautiful black sand beaches and poignant reminders of the country\'s history through its colonial ruins.',
        pois: [{ name: 'Ai Pelo Prison', description: 'Poignant colonial-era ruins by the sea.', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-14330864663cf0-226829677555?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '31°C', condition: 'Sunny' },
        highlights: ['Beaches', 'History']
    },
    {
        id: 'manatuto',
        name: 'Manatuto',
        region: 'Central',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200',
        description: 'The narrowest part of the island.',
        longDescription: 'Manatuto spans from the north to the south coast. It is known for its pottery, salt production, and beautiful, uncrowded beaches.',
        pois: [{ name: 'Laleia Bridge', description: 'Scenic drive with stunning river views.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1510784722466-f2aa9c52fed6?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '30°C', condition: 'Dry' },
        highlights: ['Pottery', 'Fishing']
    },
    {
        id: 'manufahi',
        name: 'Manufahi',
        region: 'South Coast',
        image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200',
        description: 'The historic capital of Same.',
        longDescription: 'Manufahi, with its capital Same, is a place of deep historical pride, set against the backdrop of the Kablaki mountain range.',
        pois: [{ name: 'Betano Beach', description: 'Wild southern coast with historic significance.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1510784722466-f2aa9c52fed6?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '26°C', condition: 'Rainy' },
        highlights: ['History', 'Mountains']
    },
    {
        id: 'viqueque',
        name: 'Viqueque',
        region: 'South Coast',
        image: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fed6?auto=format&fit=crop&q=80&w=1200',
        description: 'Wild southern frontier.',
        longDescription: 'Viqueque is the largest municipality, offering vast plains, sacred caves, and a wilder, less-explored side of Timor-Leste.',
        pois: [{ name: 'Loi-Hunu Falls', description: 'Untouched waterfalls in the deep south.', image: 'https://images.unsplash.com/photo-14330864663cf0-226829677555?auto=format&fit=crop&q=80&w=400' }],
        gallery: [
            'https://images.unsplash.com/photo-1510784722466-f2aa9c52fed6?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=600'
        ],
        weather: { temp: '28°C', condition: 'Humid' },
        highlights: ['Caves', 'Adventure']
    }
];
