import React from 'react';
import { motion } from 'framer-motion';
import AboutLayout from './AboutLayout';
import SectionText from './SectionText';

const History = () => (
    <AboutLayout
        title="Resilience & Spirit"
        subtitle="The storied past of a nation that never gave up."
        heroImage="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000"
    >
        <div className="max-w-3xl mx-auto">
            <SectionText title="A Journey to Sovereignty">
                <p>Timor-Leste's history is a testament to the endurance of the human spirit. In the early 16th century, Portuguese traders and missionaries first arrived, drawn by the island's legendary sandalwood. Centuries of colonial influence followed, eventually leadng to a traumatic but triumphant path toward restoration of sovereignty in the 21st century.</p>
            </SectionText>
            <div className="space-y-12">
                {[
                    { year: '1515', event: 'Portuguese Landing in Lifau' },
                    { year: '1859', event: 'Treaty of Lisbon partitions Timor' },
                    { year: '1942', event: 'WWII: Japanese Occupation' },
                    { year: '1975', event: 'First Declaration of Independence' },
                    { year: '1999', event: 'UN-sponsored Referendum' },
                    { year: '2002', event: 'Restoration of Independence' }
                ].map((item, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        key={i}
                        className="flex items-center space-x-8"
                    >
                        <div className="text-4xl font-serif font-bold text-sunset-coral w-32 shrink-0">{item.year}</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-lg font-bold text-sand-beige/90">{item.event}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </AboutLayout>
);

export default History;
