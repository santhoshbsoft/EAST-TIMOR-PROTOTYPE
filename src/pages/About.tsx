import { Routes, Route } from 'react-router-dom';
import AboutLayout from '../components/about/AboutLayout';
import SectionText from '../components/about/SectionText';
import History from '../components/about/History';
import Nature from '../components/about/Nature';
import Culture from '../components/about/Culture';
import Wildlife from '../components/about/Wildlife';

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
                <p>
                    Timorese are incredibly hospitable, gregarious and some of the friendliest you’ll ever encounter. Whether you’re looking for adventure or simply want to relax, Timor-Leste is the perfect destination.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-12">
                    <div className="glass p-6 rounded-2xl text-center">
                        <h4 className="text-3xl font-bold text-sunset-coral mb-2">2002</h4>
                        <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Independence Restoration</p>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <h4 className="text-3xl font-bold text-sunset-coral mb-2">14</h4>
                        <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Municipalities</p>
                    </div>
                </div>
            </SectionText>
            <div className="relative">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                    <img src="https://www.timorleste.tl/wp-content/uploads/population.jpg" alt="Culture" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200" alt="Nature" className="w-full h-full object-cover" />
                </div>
            </div>
            <SectionText title="A Hidden Gem" className="order-1 md:order-2">
                <p>
                    If you’re looking for an off–the–beaten–path travel destination, look no further than Timor–Leste. This Southeast Asian country is still relatively unknown to tourists, but that’s all starting to change.
                </p>
                <p>
                    Timor–Leste is a place of stunning natural beauty, with pristine beaches, towering mountains, and lush jungle. The people are incredibly friendly and welcoming, and there’s a rich cultural heritage to explore.
                </p>
            </SectionText>
        </div>
    </AboutLayout>
);

const About = () => {
    return (
        <Routes>
            <Route index element={<AboutMain />} />
            <Route path="history" element={<History />} />
            <Route path="nature" element={<Nature />} />
            <Route path="culture" element={<Culture />} />
            <Route path="wildlife" element={<Wildlife />} />
            {/* These can be updated later if needed */}
            <Route path="economy" element={<AboutMain />} />
            <Route path="geography" element={<AboutMain />} />
            <Route path="parks" element={<AboutMain />} />
            <Route path="protected" element={<AboutMain />} />
        </Routes>
    );
};

export default About;
