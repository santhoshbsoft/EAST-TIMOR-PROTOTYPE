import AboutLayout from './AboutLayout';
import SectionText from './SectionText';

const Culture = () => (
    <AboutLayout
        title="Living Traditions"
        subtitle="A rich tapestry of indigenous heritage and colonial influence."
        heroImage="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=2000"
    >
        <div className="max-w-4xl mx-auto space-y-16">
            <SectionText title="Tais: The Warp and Weft of Life">
                <p>The Tais is the traditional hand-woven textile of Timor-Leste, a cultural heritage passed down through generations. More than just clothing, Tais are used in ceremonies, as gifts of respect, and to signify regional identity. Every thread tells a story of the weaver's ancestry and the unique traditions of their municipality.</p>
            </SectionText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass p-8 rounded-3xl">
                    <h3 className="text-2xl font-serif font-bold mb-4">Uma Lulik (Sacred Houses)</h3>
                    <p className="opacity-70 leading-relaxed mb-4">The Uma Lulik is the spiritual heart of the Timorese clan. These "totem houses" represent the connection between the living and their ancestors. Rebuilt with elaborate rituals, they serve as repositories for sacred objects and centers for cultural decision-making.</p>
                    <img src="https://images.unsplash.com/photo-1746438413296-3e4a6f208d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVtYSUyMGx1bGlrJTIwaW4lMjB0aW1vciUyMGxlc3RlfGVufDB8fDB8fHww" alt="Uma Lulik" className="w-full h-48 object-cover rounded-2xl opacity-80" />
                </div>
                <div className="glass p-8 rounded-3xl">
                    <h3 className="text-2xl font-serif font-bold mb-4">Ritual & Ceremony</h3>
                    <p className="opacity-70 leading-relaxed mb-4">Life in Timor-Leste is marked by ancient ceremonies, from the Meci harvest rituals in Lautém to the sacred pilgrimages of Mt. Ramelau. These events blend deep-rooted animist traditions with Catholic faith, creating a unique spiritual tapestry.</p>
                    <img src="https://media.istockphoto.com/id/2261248421/photo/beautiful-scenery-in-hatu-builico-village-towards-the-mount-ramelau-hiking-trail.webp?a=1&b=1&s=612x612&w=0&k=20&c=fZitZKRT9BSrj0NZpYiRUqsXOs6xukpfl_XCmBbr10g=" alt="Ceremony" className="w-full h-48 object-cover rounded-2xl opacity-80" />
                </div>
            </div>
        </div>
    </AboutLayout>
);

export default Culture;
