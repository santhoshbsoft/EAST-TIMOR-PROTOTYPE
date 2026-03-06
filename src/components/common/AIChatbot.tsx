import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { activities } from '../../data/experiences';
import { municipalitiesData } from '../../data/municipalities';
import { partners } from '../../data/partners';
import { newsStories } from '../../data/news';

interface Message {
    role: 'bot' | 'user';
    text: string;
}

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: 'Hello traveler! I am your Timor-Leste AI Guide. I have read the entire site and can help you with anything from visa rules to the best diving spots or local coffee festivals. What would you like to know?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const suggestions = [
        'How do I get a visa?',
        'Tell me about Jaco Island',
        'Best diving spots',
        'Coffee adventures'
    ];

    const handleSend = (directText?: string) => {
        const userText = (directText || input).trim();
        if (!userText) return;

        const newMessages: Message[] = [...messages, { role: 'user', text: userText }];
        setMessages(newMessages);
        setInput('');
        setIsTyping(true);

        const lowInput = userText.toLowerCase();
        let botResponse = "";

        // --- BRAIN: SITE-WIDE KNOWLEDGE ENGINE ---

        // 1. Experiences Search
        const foundActivity = activities.find(a =>
            lowInput.includes(a.name.toLowerCase()) ||
            lowInput.includes(a.id.toLowerCase()) ||
            (lowInput.includes(a.subcategory.toLowerCase()) && lowInput.includes(a.municipality.toLowerCase()))
        );

        if (foundActivity) {
            botResponse = `I found a great activity for you: ${foundActivity.name} in ${foundActivity.municipality}. It's a ${foundActivity.difficulty} experience that takes about ${foundActivity.duration}. ${foundActivity.description} The price is typically ${foundActivity.price}.`;
        }

        // 2. Municipality Search
        if (!botResponse) {
            const foundMuni = municipalitiesData.find(m => lowInput.includes(m.name.toLowerCase()) || lowInput.includes(m.id.toLowerCase()));
            if (foundMuni) {
                botResponse = `${foundMuni.name} is in the ${foundMuni.region} region. ${foundMuni.description} Some highlights include ${foundMuni.highlights.join(', ')}. You should definitely check out ${foundMuni.pois[0].name}: ${foundMuni.pois[0].description}`;
            }
        }

        // 3. Partner Search
        if (!botResponse) {
            const foundPartner = partners.find(p => lowInput.includes(p.name.toLowerCase()) || lowInput.includes(p.id.toLowerCase()));
            if (foundPartner) {
                const services = foundPartner.services.slice(0, 2).join(' and ');
                botResponse = `${foundPartner.name} is a specialist ${foundPartner.type.toLowerCase()} dedicated to ${foundPartner.mission.toLowerCase()}. They offer services like ${services}. You can contact them at ${foundPartner.contact.email || foundPartner.contact.phone || 'their website'}.`;
            }
        }

        // 4. News/Stories Search
        if (!botResponse) {
            const foundNews = newsStories.find(s => lowInput.includes(s.title.toLowerCase()) || lowInput.includes(s.id.toLowerCase()) || (lowInput.includes('news') && lowInput.includes(s.category.toLowerCase())));
            if (foundNews) {
                botResponse = `Check out our news story: "${foundNews.title}". it's a ${foundNews.category} piece. ${foundNews.excerpt}`;
            }
        }

        // 5. Advanced Topic Matching (Practicalities)
        if (!botResponse) {
            if (lowInput.includes('visa') || lowInput.includes('entry') || lowInput.includes('passport')) {
                botResponse = "I've reviewed our entry guidelines: Most travelers get a 30-day Visa on Arrival for $30 at Dili Airport. You MUST complete your electronic customs declaration (e-Declaration) online before you land. Your passport needs 6 months of validity.";
            } else if (lowInput.includes('transport') || lowInput.includes('flight') || lowInput.includes('airport')) {
                botResponse = "Dili Airport (Presidente Nicolau Lobato) connects to Darwin, Singapore, and Bali via AeroDili and Qantas. In the city, use yellow taxis ($10 flat from airport) or the colorful Microlets for $0.25!";
            } else if (lowInput.includes('dive') || lowInput.includes('reef') || lowInput.includes('snork')) {
                botResponse = "Based on our marine data, Atauro Island holds the world record for biodiversity. Check out Atauro Dive Resort or Compass Diving. Also, Christo Rei and Jaco Island offer incredible shore entries!";
            } else if (lowInput.includes('coffee') || lowInput.includes('kafe')) {
                botResponse = "Coffee is our greatest treasure! Our highlands (Ermera, Maubisse) produce unique organic 'Timor Hybrid' beans. Visit Letefoho Specialty Coffee in Dili, or join the Coffee Festival in October.";
            } else if (lowInput.includes('jaco')) {
                botResponse = "Jaco Island is the sacred eastern tip of our nation. You can visit for the day from Tutuala, but staying overnight is forbidden on the sacred soil. The water there is the clearest in the world!";
            } else if (lowInput.includes('money') || lowInput.includes('currency') || lowInput.includes('cash')) {
                botResponse = "We use the US Dollar (USD). ATMs are available in Dili, but carry small cash bills ($1, $5, $10) for rural travel as change is often hard to find.";
            }
        }

        // 6. Generic Fallback
        if (!botResponse) {
            botResponse = `That's a great question about ${userText}! I've analyzed the entire site, and while I haven't found a direct match, I can tell you about our ${activities.length} experiences, ${municipalitiesData.length} municipalities, or our official tourism partners. What would you like to explore?`;
        }

        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <>
            {/* Trigger Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-8 right-8 z-[100]"
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 rounded-full bg-sunset-coral text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative"
                >
                    <div className="absolute inset-0 rounded-full bg-sunset-coral animate-ping opacity-20"></div>
                    <MessageSquare size={28} />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tropical-mint opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-tropical-mint"></span>
                    </span>
                </button>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-28 right-8 w-[400px] max-w-[calc(100vw-64px)] h-[600px] max-h-[calc(100vh-160px)] glass-dark rounded-[40px] shadow-2xl z-[100] border border-white/10 flex flex-col overflow-hidden pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="p-8 bg-white/5 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sunset-coral to-tropical-teal flex items-center justify-center">
                                    <Sparkles size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Travel Assistant</h3>
                                    <p className="text-[10px] uppercase font-bold text-tropical-mint tracking-widest">AI Concierge Online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-5 rounded-[24px] ${msg.role === 'user' ? 'bg-sunset-coral text-white rounded-tr-none' : 'bg-white/5 text-sand-beige rounded-tl-none'}`}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-4 rounded-[24px] rounded-tl-none flex space-x-1">
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-sunset-coral rounded-full" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-sunset-coral rounded-full" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-sunset-coral rounded-full" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Suggestions */}
                        <div className="px-6 pb-4 flex overflow-x-auto space-x-2 no-scrollbar border-t border-white/5 pt-4">
                            {suggestions.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSend(s)}
                                    className="whitespace-nowrap px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-wider hover:bg-white/5 transition-colors"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-6 bg-white/5 border-t border-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask anything about Timor-Leste..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-sunset-coral transition-all"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-sunset-coral rounded-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
