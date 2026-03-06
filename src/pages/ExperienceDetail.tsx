import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Clock, Calendar, MapPin, CheckCircle, CreditCard, ChevronDown, Users, Download, Banknote } from 'lucide-react';
import { activities } from '../data/experiences';

const ExperienceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const activity = activities.find(a => a.id === id);
    const [isBooking, setIsBooking] = useState(false);
    const [bookingStep, setBookingStep] = useState(1);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');

    if (!activity) {
        return (
            <div className="min-h-screen bg-ocean-deep flex items-center justify-center text-sand-beige">
                <div className="text-center">
                    <h2 className="text-3xl font-serif font-bold mb-4">Experience Not Found</h2>
                    <Link to="/experiences" className="btn-outline">Back to Experiences</Link>
                </div>
            </div>
        );
    }

    const calculateTotal = () => {
        if (!activity) return 0;
        if (activity.price.toLowerCase() === 'free' || activity.price.toLowerCase() === 'contact') return 0;
        const basePrice = parseFloat(activity.price.replace(/[^0-9.]/g, ''));
        if (isNaN(basePrice)) return 0;

        // Simple logic: children are 50% price
        const total = (basePrice * adults) + (basePrice * 0.5 * children);
        return total;
    };

    const totalPriceNum = calculateTotal();
    const totalPrice = activity?.price.toLowerCase() === 'free' ? 'Free' :
        activity?.price.toLowerCase() === 'contact' ? 'Contact for Price' :
            `$${totalPriceNum.toFixed(2)}`;

    const handleDownloadReceipt = () => {
        const doc = new jsPDF();
        const bookingId = Math.random().toString(36).substring(2, 10).toUpperCase();

        // Header
        doc.setFillColor(15, 110, 110); // Ocean Deep
        doc.rect(0, 0, 210, 40, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.text("EXPLORE TIMOR-LESTE OFFICIAL", 105, 20, { align: "center" });
        doc.setFontSize(12);
        doc.text("BOOKING CONFIRMATION RECEIPT", 105, 30, { align: "center" });

        // Content
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(10);

        let y = 55;
        doc.setFont("helvetica", "bold");
        doc.text(`BOOKING ID: ${bookingId}`, 20, y);
        doc.text(`DATE: ${new Date().toLocaleDateString()}`, 150, y);

        y += 15;
        doc.setLineWidth(0.5);
        doc.line(20, y, 190, y);

        y += 15;
        doc.setFontSize(14);
        doc.text("EXPERIENCE DETAILS", 20, y);
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        y += 10;
        doc.text(`Activity: ${activity.name}`, 20, y);
        y += 8;
        doc.text(`Location: ${activity.municipality}, Timor-Leste`, 20, y);
        y += 8;
        doc.text(`Category: ${activity.category}`, 20, y);

        y += 15;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("GUEST & PAYMENT", 20, y);
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        y += 10;
        doc.text(`Guests: ${adults} Adults, ${children} Children`, 20, y);
        y += 8;
        doc.text(`Payment Method: ${paymentMethod.toUpperCase()}`, 20, y);
        y += 8;
        doc.text(`Status: ${paymentMethod === 'card' ? 'PAID / SECURED' : 'PENDING / PAY ON ARRIVAL'}`, 20, y);

        y += 15;
        doc.setFillColor(255, 107, 74, 0.1);
        doc.rect(20, y, 170, 20, 'F');
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.setTextColor(255, 107, 74); // Sunset Coral
        doc.text(`TOTAL AMOUNT: ${totalPrice}`, 105, y + 13, { align: "center" });

        // Footer
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(9);
        doc.setFont("helvetica", "italic");
        doc.text("Please present this receipt to your guide or coordinator upon arrival.", 105, 270, { align: "center" });
        doc.text("Official Tourism Portal of Timor-Leste - Enjoy your adventure!", 105, 275, { align: "center" });

        doc.save(`receipt-${bookingId}-${activity.id}.pdf`);
    };

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setBookingStep(3); // Show processing
        setTimeout(() => {
            setBookingStep(4);
            setPaymentSuccess(true);
        }, 1500);
    };

    return (
        <div className="bg-ocean-deep text-sand-beige min-h-screen pb-24">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <img src={activity.image} alt={activity.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/40 to-transparent"></div>

                <div className="absolute top-24 left-6 md:left-12 z-10">
                    <Link to="/experiences" className="flex items-center space-x-2 text-white font-bold uppercase text-xs px-4 py-2 glass w-fit rounded-full hover:-translate-x-2 transition-transform">
                        <ArrowLeft size={16} />
                        <span>Back</span>
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Header Info */}
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="px-3 py-1 glass rounded-full text-[10px] uppercase font-bold tracking-wider text-sunset-coral">
                                    {activity.category}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold ${activity.difficulty === 'Easy' ? 'bg-tropical-mint/20 text-tropical-mint' :
                                    activity.difficulty === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                                    }`}>
                                    {activity.difficulty}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{activity.name}</h1>

                            <div className="flex flex-wrap gap-6 text-sm opacity-80">
                                <div className="flex items-center space-x-2">
                                    <Star size={18} className="text-sunset-coral" fill="currentColor" />
                                    <span className="font-bold">{activity.rating} / 5.0</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock size={18} />
                                    <span>{activity.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin size={18} />
                                    <span>Timor-Leste</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="glass-dark p-8 rounded-[32px] border border-white/5">
                            <h3 className="text-2xl font-serif font-bold mb-4">About this experience</h3>
                            <p className="opacity-80 leading-relaxed text-lg">
                                {activity.description}
                                {/* Padding out the description for layout */}
                                This exclusive experience offers you a deep dive into the authentic culture and natural beauty of Timor-Leste. Guided by local experts, you'll discover hidden gems and create memories that will last a lifetime. Safety equipment and basic refreshments are included.
                            </p>
                        </div>
                    </div>

                    {/* Booking Sidebar / Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 glass-dark p-8 rounded-[32px] border border-sunset-coral/30 shadow-2xl shadow-sunset-coral/5">
                            {!isBooking ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="mb-6">
                                        <span className="text-sm opacity-50 uppercase font-bold block mb-1">Total Price</span>
                                        <div className="flex items-end space-x-2">
                                            <span className="text-4xl font-bold text-sunset-coral">{totalPrice}</span>
                                            {activity.price.toLowerCase() !== 'free' && activity.price.toLowerCase() !== 'contact' && activity.price.toLowerCase() !== 'varies' && (
                                                <span className="opacity-50 mb-1">({adults + children} pax)</span>
                                            )}
                                        </div>
                                    </div>

                                    {(activity.price.toLowerCase() === 'contact' || activity.price.toLowerCase() === 'varies') ? (
                                        <div className="space-y-6">
                                            <div className="p-4 bg-sunset-coral/10 border border-sunset-coral/20 rounded-2xl text-sm leading-relaxed text-sand-beige/80">
                                                <p className="font-bold text-sunset-coral mb-2 flex items-center gap-2">
                                                    <CreditCard size={14} /> Direct Booking Required
                                                </p>
                                                This activity requires personalized pricing. Please contact one of our certified tour operators to book this experience.
                                            </div>
                                            <Link
                                                to="/experiences#agents"
                                                className="w-full py-4 bg-sunset-coral hover:bg-sunset-coral/90 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-sunset-coral/20 flex items-center justify-center gap-2"
                                            >
                                                Find an Agent <ArrowLeft size={16} className="rotate-180" />
                                            </Link>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="space-y-4 mb-8 text-sm opacity-80">
                                                <div className="flex items-center space-x-3">
                                                    <CheckCircle size={16} className="text-tropical-mint" />
                                                    <span>Free cancellation up to 24h before</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <CheckCircle size={16} className="text-tropical-mint" />
                                                    <span>Instant confirmation</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <CheckCircle size={16} className="text-tropical-mint" />
                                                    <span>English & Tetum guides available</span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => setIsBooking(true)}
                                                className="w-full py-4 bg-sunset-coral hover:bg-sunset-coral/90 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-sunset-coral/20"
                                            >
                                                Book Now
                                            </button>
                                        </>
                                    )}
                                </motion.div>
                            ) : (
                                <AnimatePresence mode="wait">
                                    {bookingStep === 1 && (
                                        <motion.form
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                            onSubmit={(e) => { e.preventDefault(); setBookingStep(2); }}
                                            className="space-y-5"
                                        >
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="font-serif font-bold text-xl">Booking Details</h3>
                                                <button type="button" onClick={() => setIsBooking(false)} className="text-xs opacity-50 hover:opacity-100 uppercase font-bold tracking-wider">Cancel</button>
                                            </div>

                                            <div>
                                                <label className="text-xs uppercase font-bold opacity-50 mb-2 block">Select Date</label>
                                                <div className="relative">
                                                    <input type="date" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sand-beige focus:outline-none focus:border-sunset-coral/50 appearance-none" />
                                                    <Calendar size={18} className="absolute right-4 top-3.5 opacity-50 pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-xs uppercase font-bold opacity-50 mb-2 block">Adults</label>
                                                    <div className="relative">
                                                        <select value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sand-beige focus:outline-none focus:border-sunset-coral/50 appearance-none">
                                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n} className="bg-ocean-deep">{n}</option>)}
                                                        </select>
                                                        <Users size={18} className="absolute right-4 top-3.5 opacity-50 pointer-events-none" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-xs uppercase font-bold opacity-50 mb-2 block">Children</label>
                                                    <div className="relative">
                                                        <select value={children} onChange={(e) => setChildren(parseInt(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sand-beige focus:outline-none focus:border-sunset-coral/50 appearance-none">
                                                            {[0, 1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n} className="bg-ocean-deep">{n}</option>)}
                                                        </select>
                                                        <ChevronDown size={18} className="absolute right-4 top-3.5 opacity-50 pointer-events-none" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-xs uppercase font-bold opacity-50 mb-2 block">Payment Method</label>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setPaymentMethod('card')}
                                                        className={`py-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'card' ? 'bg-sunset-coral/20 border-sunset-coral text-sunset-coral' : 'bg-white/5 border-white/10 text-sand-beige/50 hover:bg-white/10'}`}
                                                    >
                                                        <CreditCard size={20} />
                                                        <span className="text-[10px] font-bold uppercase">Card</span>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setPaymentMethod('cash')}
                                                        className={`py-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'cash' ? 'bg-sunset-coral/20 border-sunset-coral text-sunset-coral' : 'bg-white/5 border-white/10 text-sand-beige/50 hover:bg-white/10'}`}
                                                    >
                                                        <Banknote size={20} />
                                                        <span className="text-[10px] font-bold uppercase">Cash</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <button type="submit" className="w-full py-4 glass hover:bg-white/10 text-white font-bold rounded-2xl transition-all mt-4">
                                                {paymentMethod === 'card' ? 'Continue to Payment' : 'Confirm Booking'}
                                            </button>
                                        </motion.form>
                                    )}

                                    {bookingStep === 2 && (
                                        <motion.form
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                if (paymentMethod === 'cash') {
                                                    setBookingStep(4);
                                                    setPaymentSuccess(true);
                                                } else {
                                                    handlePayment(e);
                                                }
                                            }}
                                            className="space-y-5"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="font-serif font-bold text-xl">
                                                    {paymentMethod === 'card' ? 'Card Details' : 'Confirm Cash Payment'}
                                                </h3>
                                                <button type="button" onClick={() => setBookingStep(1)} className="text-xs opacity-50 hover:opacity-100 uppercase font-bold tracking-wider flex items-center"><ArrowLeft size={12} className="mr-1" /> Back</button>
                                            </div>

                                            <div className="p-4 bg-sunset-coral/10 border border-sunset-coral/20 rounded-xl mb-4">
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span>Total Due ({adults + children} pax):</span>
                                                    <span className="font-bold">{totalPrice}</span>
                                                </div>
                                                {paymentMethod === 'cash' && (
                                                    <p className="text-[10px] opacity-60 mt-2">Please pay upon arrival at the location.</p>
                                                )}
                                            </div>

                                            {paymentMethod === 'card' && (
                                                <>
                                                    <div>
                                                        <label className="text-xs uppercase font-bold opacity-50 mb-2 block">Card Number</label>
                                                        <div className="relative">
                                                            <input type="text" placeholder="0000 0000 0000 0000" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sand-beige placeholder:text-sand-beige/20 focus:outline-none focus:border-sunset-coral/50 font-mono text-sm" />
                                                            <CreditCard size={18} className="absolute right-4 top-3.5 opacity-50" />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="text-xs uppercase font-bold opacity-50 mb-2 block">Expiry</label>
                                                            <input type="text" placeholder="MM/YY" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sand-beige placeholder:text-sand-beige/20 focus:outline-none focus:border-sunset-coral/50 font-mono text-sm text-center" />
                                                        </div>
                                                        <div>
                                                            <label className="text-xs uppercase font-bold opacity-50 mb-2 block">CVC</label>
                                                            <input type="text" placeholder="123" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sand-beige placeholder:text-sand-beige/20 focus:outline-none focus:border-sunset-coral/50 font-mono text-sm text-center" />
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            <button type="submit" className="w-full py-4 bg-sunset-coral hover:bg-sunset-coral/90 text-white font-bold rounded-2xl transition-all shadow-lg mt-4 flex justify-center items-center">
                                                {paymentMethod === 'card' ? 'Pay Securely' : 'Confirm & Finish'}
                                            </button>
                                        </motion.form>
                                    )}

                                    {bookingStep === 3 && (
                                        <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 flex flex-col items-center justify-center text-center">
                                            <div className="w-12 h-12 border-4 border-sunset-coral/30 border-t-sunset-coral rounded-full animate-spin mb-4"></div>
                                            <p className="font-bold animate-pulse">Processing Payment...</p>
                                        </motion.div>
                                    )}

                                    {bookingStep === 4 && paymentSuccess && (
                                        <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center text-tropical-mint flex flex-col items-center">
                                            <div className="w-16 h-16 rounded-full bg-tropical-mint/20 flex items-center justify-center mb-6">
                                                <CheckCircle size={32} />
                                            </div>
                                            <h3 className="text-2xl font-serif font-bold text-white mb-2">Booking Confirmed!</h3>
                                            <p className="opacity-70 text-sand-beige text-sm leading-relaxed mb-8">
                                                Thank you for booking! You can now download your receipt below.
                                            </p>

                                            <button
                                                onClick={handleDownloadReceipt}
                                                className="w-full py-4 bg-sunset-coral hover:bg-sunset-coral/90 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 mb-4"
                                            >
                                                <Download size={18} />
                                                Download Receipt
                                            </button>

                                            <Link to="/experiences" className="w-full py-4 glass text-white text-sm font-bold rounded-2xl transition-all flex items-center justify-center hover:bg-white/10">
                                                Plan More Activities
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceDetail;
