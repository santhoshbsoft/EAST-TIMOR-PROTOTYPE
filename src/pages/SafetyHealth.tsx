import React from 'react';
import { motion } from 'framer-motion';
import safetyImg from '../assets/images/plan-your-trip/safety.jpg';

const SafetyHealth: React.FC = () => {
    const topics = [
        {
            title: 'Crocodiles',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000', // Ocean/water representation for crocodiles
            description: (
                <p>
                    Timor-Leste has estuarine crocodiles along its coast and rivers (except Atauro). Before entering the water, travelers should ask locals whether the area is safe and if crocodiles have recently been sighted.
                </p>
            )
        },
        {
            title: 'Driving',
            image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000', // Road representation
            description: (
                <p>
                    Travelers are advised to hire a driver unless familiar with local conditions. Always wear seat belts and helmets when riding motorcycles or bicycles. Drive slowly through villages.
                </p>
            )
        },
        {
            title: 'Food and Water',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000', // Dining representation
            description: (
                <p>
                    Tap water in Timor-Leste is not safe to drink unless boiled or treated. Bottled water is widely available.
                </p>
            )
        },
        {
            title: 'Health Precautions',
            image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1000', // Health kit representation
            description: (
                <p>
                    Travelers should consult a doctor about vaccinations and carry a basic medical kit. Comprehensive travel insurance is recommended.
                </p>
            )
        },
        {
            title: 'Health Services',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000', // Building representation
            description: (
                <>
                    <p className="mb-2">Health facilities in Timor-Leste include:</p>
                    <ul className="list-disc pl-5 space-y-1 text-black/80">
                        <li>Dili National Hospital – +670 331 0541</li>
                        <li>Stamford Clinic – +670 311 0141 / 331 1209</li>
                        <li>Bairo Pite Clinic – +670 7723 8343</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Climate',
            image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1000', // Sunset/climate representation
            description: (
                <p>
                    Timor-Leste has temperatures between 25°C and 35°C with high humidity. Travelers should stay hydrated and avoid intense midday sun.
                </p>
            )
        },
        {
            title: 'Mosquitoes',
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000', // Nature representation
            description: (
                <p>
                    Mosquito-borne diseases such as dengue may occur, especially during the wet season. Travelers should use insect repellent and protective clothing.
                </p>
            )
        },
        {
            title: 'Ocean Currents',
            image: 'https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=1000', // Ocean wave representation
            description: (
                <p>
                    Some swimming and diving areas may experience strong ocean currents. Always check conditions before entering the water.
                </p>
            )
        },
        {
            title: 'Security',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000', // City representation
            description: (
                <p>
                    Travelers should avoid protests, crowded situations, and displaying valuables. It is recommended to travel with companions or guides, especially at night.
                </p>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-sand-beige/20">
            {/* Hero Section */}
            <div className="relative h-[40vh] mb-16">
                <div className="absolute inset-0">
                    <img
                        src={safetyImg}
                        alt="Safety and Health Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pt-16">
                    <div className="text-center px-4 animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                            Safety & Health
                        </h1>
                        <p className="text-lg text-white/95 max-w-2xl mx-auto drop-shadow-md">
                            Essential information to keep you safe and healthy during your journey through Timor-Leste.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topics.map((topic, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-48 w-full group overflow-hidden">
                                <img
                                    src={topic.image}
                                    alt={topic.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-serif font-bold text-ocean-deep mb-4">
                                    {topic.title}
                                </h3>
                                <div className="text-gray-700 leading-relaxed text-sm">
                                    {topic.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SafetyHealth;
