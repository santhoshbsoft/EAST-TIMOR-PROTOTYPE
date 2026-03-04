import { Routes, Route } from 'react-router-dom';
import AboutLayout from '../components/about/AboutLayout';
import { motion } from 'framer-motion';

const SectionText = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-16">
        <h2 className="text-3xl font-serif font-bold mb-6 text-sunset-coral">{title}</h2>
        <div className="opacity-80 leading-relaxed text-lg space-y-4">
            {children}
        </div>
    </div>
);

const AboutMain = () => (
    <AboutLayout
        title="The Last Frontier"
        subtitle="A journey through time, culture, and nature in Asia's youngest nation."
        heroImage="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=2000"
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <SectionText title="An Authentic Adventure">
                <p>
                    Timor-Leste offers something increasingly rare in the modern world: absolute authenticity. From the warm smiles of the Timorese people to the rugged mountain peaks that pierce the clouds, this is a land where every experience feels fresh and every discovery belongs to you.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-12">
                    <div className="glass p-6 rounded-2xl text-center">
                        <h4 className="text-3xl font-bold text-sunset-coral mb-2">2002</h4>
                        <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Independence</p>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <h4 className="text-3xl font-bold text-sunset-coral mb-2">13</h4>
                        <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Municipalities</p>
                    </div>
                </div>
            </SectionText>
            <div className="relative">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1000" alt="Culture" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </AboutLayout>
);

const History = () => (
    <AboutLayout
        title="Resilience & Spirit"
        subtitle="The storied past of a nation that never gave up."
        heroImage="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000"
    >
        <div className="max-w-3xl mx-auto">
            <SectionText title="A Journey to Sovereignty">
                <p>Timor-Leste's history is a testament to the endurance of the human spirit. After centuries of colonial rule and decades of struggle, the nation emerged into the 21st century as a beacon of democracy in Southeast Asia.</p>
            </SectionText>
            <div className="space-y-12">
                {[
                    { year: '1500s', event: 'Portuguese Arrival' },
                    { year: '1975', event: 'Declaration of Independence' },
                    { year: '1999', event: 'Referendum' },
                    { year: '2002', event: 'Restoration of Independence' }
                ].map((item, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        key={i}
                        className="flex items-center space-x-8"
                    >
                        <div className="text-4xl font-serif font-bold text-sunset-coral w-32">{item.year}</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xl font-bold">{item.event}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </AboutLayout>
);

const Nature = () => (
    <AboutLayout
        title="Pristine Peaks & Reefs"
        subtitle="Exploring the biodiversity hotspot of the Coral Triangle."
        heroImage="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000"
    >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
                { title: 'Atauro Island', desc: 'World record holder for fish species diversity.' },
                { title: 'Mt. Ramelau', desc: 'The highest peak offering spiritual and scenic views.' },
                { title: 'Nino Konis Santana', desc: 'The first national park protecting land and sea.' }
            ].map((item, i) => (
                <div key={i} className="glass-dark p-8 rounded-[32px] border border-white/5">
                    <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                    <p className="opacity-70 text-sm leading-relaxed mb-6">{item.desc}</p>
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400`} alt={item.title} className="w-full h-48 object-cover rounded-2xl" />
                </div>
            ))}
        </div>
    </AboutLayout>
);

const About = () => {
    return (
        <Routes>
            <Route index element={<AboutMain />} />
            <Route path="history" element={<History />} />
            <Route path="nature" element={<Nature />} />
            <Route path="economy" element={<AboutMain />} /> {/* Placeholders for brevity */}
            <Route path="geography" element={<AboutMain />} />
            <Route path="culture" element={<AboutMain />} />
            <Route path="parks" element={<AboutMain />} />
            <Route path="protected" element={<AboutMain />} />
        </Routes>
    );
};

export default About;
