export interface Partner {
    id: string;
    name: string;
    type: 'Organization' | 'Operator';
    mission: string;
    description: string;
    services: string[];
    contact: {
        phone?: string;
        email?: string;
        website?: string;
        facebook?: string;
    };
    image: string;
}

export const partners: Partner[] = [
    {
        id: 'atkoma',
        name: "ATKOMA (Asosiasaun Turizmu Koleitivu Maubere Atauro)",
        type: 'Organization',
        mission: "To promote sustainable, community-led tourism that preserves the unique marine and cultural heritage of Atauro Island.",
        description: "ATKOMA is a pioneering community tourism association on Atauro Island. It represents over 50 local families and businesses, ensuring that tourism benefits directly reach the grassroots. They are world-renowned for their community-managed marine protected areas.",
        services: [
            "Community-based trekking & hiking guides",
            "Snorkeling & Marine conservation education",
            "Traditional homestay bookings",
            "Eco-tourism advocacy and planning"
        ],
        contact: {
            phone: "+670 7733-7140",
            email: "atkoma@gmail.com",
            website: "https://ataurotourism.org"
        },
        image: "https://www.timorleste.tl/wp-content/uploads/formidable/9/101980289_1185031935172136_6487823433781477376_n.png"
    },
    {
        id: 'actl',
        name: "ACTL (Associação do Café de Timor-Leste)",
        type: 'Organization',
        mission: "To elevate the quality and global profile of Timorese specialty coffee while empowering local farming families.",
        description: "ACTL is the national body overseeing the Timorese coffee sector. They organize the prestigious 'Festival Kafe Timor' and provide essential technical and marketing support to cooperatives across the country.",
        services: [
            "Organizing Festival Kafe Timor",
            "Coffee quality cupping and grading training",
            "Promotion of Coffee Tourism routes",
            "Export market facilitation"
        ],
        contact: {
            facebook: "FestivalKafeTimor",
            website: "https://actl.tl"
        },
        image: "https://www.timorleste.tl/wp-content/uploads/formidable/9/29598204_1823993754320057_2658860126376468617_n.jpg"
    },
    {
        id: 'atmtl',
        name: "ATMTL (Associação de Turismo Marinho de Timor-Leste)",
        type: 'Organization',
        mission: "To position Timor-Leste as a premier, sustainable destination for marine tourism through unified standards and conservation.",
        description: "ATMTL represents the professional diving and maritime operators of Timor-Leste. They work closely with the government to establish safety standards and promote the country's incredible whale watching and coral reef assets.",
        services: [
            "Establishing maritime safety standards",
            "Marketing Timor-Leste at international dive expos",
            "Coordinating whale watching best practices",
            "Diving certifications and training advocacy"
        ],
        contact: {
            email: "info@atmtl.org"
        },
        image: "https://www.timorleste.tl/wp-content/uploads/formidable/9/c9687d134411383.Y3JvcCw4NDYsNjYyLDc3LDA.jpg"
    },
    {
        id: 'astrabeka',
        name: "ASTRABEKA",
        type: 'Organization',
        mission: "To facilitate authentic high-altitude tourism in the Ramelau mountain range while preserving Mambae culture.",
        description: "Based in Hatubuilico, ASTRABEKA is the primary association for trekking and cultural guides for Mt. Ramelau. They ensure that all summit attempts are safe and culturally sensitive to the sacred 'Lulik' nature of the mountain.",
        services: [
            "Guided summit treks to Mt. Ramelau (Tatamailau)",
            "Cultural tours of highland 'Uma Lulik' houses",
            "Pony trekking and logistics",
            "Local guesthouse coordination"
        ],
        contact: {
            phone: "+670 7742-8488",
            email: "Astrabeka414@gmail.com"
        },
        image: "https://www.timorleste.tl/wp-content/uploads/formidable/9/49953402468_ebc926b1ac_b.jpg"
    }
];
