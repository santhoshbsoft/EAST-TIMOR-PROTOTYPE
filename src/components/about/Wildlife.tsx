import AboutLayout from './AboutLayout';
import SectionText from './SectionText';

const Wildlife = () => (
    <AboutLayout
        title="Sacred Crocodiles & Sea Turtles"
        subtitle="Discovering the unique biodiversity of Asia's newest nation."
        heroImage="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=2000"
    >
        <div className="max-w-4xl mx-auto space-y-16">
            <SectionText title="The Sacred Crocodile">
                <p>In Timorese mythology, the island was formed from a giant crocodile that sacrificed itself to provide a home for the people. To this day, the 'Lafaek' (crocodile) is deeply respected as an ancestor. This spiritual bond is a unique aspect of Timorese culture and conservation.</p>
            </SectionText>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass p-6 rounded-2xl text-center flex flex-col h-full">
                    <img src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=400" alt="Whale" className="w-full h-40 object-cover rounded-xl mb-4" />
                    <h4 className="font-bold mb-2">Marine Mammals</h4>
                    <p className="text-xs opacity-70">A global hotspot for Blue Whales and massive pods of Spinner Dolphins migrating through the Ombai-Wetar Strait.</p>
                </div>
                <div className="glass p-6 rounded-2xl text-center flex flex-col h-full">
                    <img src="https://www.timorleste.tl/wp-content/uploads/2016/07/old-world-flycatchers-1024x413.jpg" alt="Bird" className="w-full h-40 object-cover rounded-xl mb-4" />
                    <h4 className="font-bold mb-2">Endemic Avifauna</h4>
                    <p className="text-xs opacity-70">Home to over 240 bird species, including 23 endemics like the Timor Green Pigeon and Iris Lorikeet.</p>
                </div>
                <div className="glass p-6 rounded-2xl text-center flex flex-col h-full">
                    <img src="https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=400" alt="Coral" className="w-full h-40 object-cover rounded-xl mb-4" />
                    <h4 className="font-bold mb-2">Coral Biodiversity</h4>
                    <p className="text-xs opacity-70">Located in the Coral Triangle, hosting 76% of the world's coral species and record-breaking reef fish diversity.</p>
                </div>
            </div>
        </div>
    </AboutLayout>
);

export default Wildlife;
