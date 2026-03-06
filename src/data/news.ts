export interface NewsStory {
    id: string;
    title: string;
    date: string;
    author: string;
    category: 'Cultural' | 'Investment' | 'Industry' | 'Conservation';
    excerpt: string;
    content: string[];
    image: string;
    gallery?: string[];
    relatedMunicipalities?: string[];
}

export const newsStories: NewsStory[] = [
    {
        id: 'coffee-pilgrimage',
        title: "A Coffee Lover’s Pilgrimage: Exploring Timor-Leste’s Highland Plantations",
        date: "November 25, 2025",
        author: "Tourism Timor-Leste",
        category: 'Cultural',
        excerpt: "Discover the origins of the unique Timor Hybrid (Tim Tim) and the rich heritage of organic coffee in the misty highlands.",
        content: [
            "Timor-Leste invites coffee enthusiasts to discover the origins of their signature brew, Timor Hybrid (Tim Tim), a unique hybrid of Arabica and Robusta that is central to the country's coffee heritage.",
            "The journey typically begins in the misty highlands of Maubisse, the heart of the country's coffee culture. Here, ancestral plantations are shaded by towering Albizia trees, creating a perfect microclimate for slow-ripening cherries.",
            "In Ermera, the largest producing municipality, visitors can witness the 'farm to cup' process during the harvest season (May-October). Local cooperatives demonstrate traditional washing and drying techniques that have been passed down through generations.",
            "Maddog Adventures and other local operators now offer specialized 7-day coffee tours that include stays in highland guesthouses, traditional roasting sessions over open fires, and cupping experiences with certified Timorese baristas."
        ],
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200"
        ],
        relatedMunicipalities: ['ainaro', 'ermera', 'aileu']
    },
    {
        id: 'investment-forum-2024',
        title: "Timor-Leste Tourism Investment Forum 2024",
        date: "October 25, 2024",
        author: "Government Press",
        category: 'Investment',
        excerpt: "Highlights from the major investment summit aimed at showcasing sustainable tourism development opportunities.",
        content: [
            "The Timor-Leste Tourism Investment Forum was held on August 21-22, 2024, at the Dili Convention Centre (CCD). The event brought together international investors, development partners, and government officials.",
            "Organized by the Ministry of Tourism, Trade and Industry, the forum aimed to showcase the country's potential for high-end, low-impact sustainable tourism. Key areas of interest included luxury eco-lodges in Nino Konis Santana National Park and marine infrastructure in Atauro.",
            "President José Ramos-Horta emphasized the nation's commitment to 'Green Tourism', ensuring that development preserves the pristine environment and benefits local communities directly.",
            "The forum resulted in several Memorandums of Understanding for new hospitality projects in Dili and domestic aviation upgrades to improve connectivity to the eastern municipalities."
        ],
        image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1200",
        relatedMunicipalities: ['dili', 'lautem']
    },
    {
        id: 'speed-networking',
        title: "“Speed Networking” Aims to Boost Tourist Arrivals",
        date: "August 28, 2022",
        author: "Industry News",
        category: 'Industry',
        excerpt: "Australian travel agents explore 'The Undiscovered' in Timor-Leste to build networking connections.",
        content: [
            "A familiarization trip involving eight leading Australian travel agents recently concluded with a successful 'Speed Networking' event in Dili. The initiative aims to put Timor-Leste on the primary map for Australian adventure travelers.",
            "The agents spent five days exploring the 'Undiscovered' regions, including the pristine reefs of Atauro Island and the historic highland town of Balibo. The trip was supported by USAID’s Tourism For All Project.",
            "At the final networking session held at Pelican Paradise, local tour operators and lodge owners pitched specialized packages ranging from whale watching to WWII history tours.",
            "Early feedback from the agents highlighted the 'raw authenticity' of the Timorese experience, which they believe will appeal to high-value travelers looking for alternatives to established Southeast Asian destinations."
        ],
        image: "https://www.timorleste.tl/wp-content/uploads/Tourism%20Timor-Leste-atauro-island.jpg",
        relatedMunicipalities: ['dili', 'atauro', 'bobonaro']
    }
];
