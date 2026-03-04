import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

interface Message {
    role: 'bot' | 'user';
    text: string;
}

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: 'Hello traveler! I am your Timor-Leste AI Guide. How can I help you plan your frontier adventure today?' }
    ]);
    const [input, setInput] = useState('');

    const suggestions = [
        'Tell me about diving in Atauro',
        'Best time to visit Mt. Ramelau',
        'Cultural etiquettes in sacred houses',
        'How to book a whale watching tour'
    ];

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessages: Message[] = [...messages, { role: 'user', text: input }];
        setMessages(newMessages);
        const currentInput = input;
        setInput('');

        // Simple automated response simulation
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'bot',
                text: `That's a great question about ${currentInput}! Our experts recommend visiting during the dry season (May-Oct) for the best experience. Would you like to see specific destinations?`
            }]);
        }, 1000);
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
                        <div className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-5 rounded-[24px] ${msg.role === 'user' ? 'bg-sunset-coral text-white rounded-tr-none' : 'bg-white/5 text-sand-beige rounded-tl-none'}`}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Suggestions */}
                        <div className="px-6 pb-4 flex overflow-x-auto space-x-2 no-scrollbar">
                            {suggestions.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setInput(s); handleSend(); }}
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
                                    onClick={handleSend}
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
