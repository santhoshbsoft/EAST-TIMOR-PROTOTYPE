import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CreditCard, ShieldCheck, Building, ChevronLeft, CreditCard as VisaIcon, Lock, Tag } from 'lucide-react';
import { accommodations, Accommodation } from '../data/accommodations';

interface BookingData {
    checkIn: string;
    checkOut: string;
    adults: string;
    childrenCount: string;
    roomId: string;
    roomName: string;
    pricePerNight: number;
    guestName: string;
    email: string;
    phone: string;
}

const AccommodationPayment: React.FC = () => {
    const { accommodationId, roomId } = useParams<{ accommodationId: string; roomId: string }>();
    const location = useLocation();
    const navigate = useNavigate();

    const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
    const [bookingData, setBookingData] = useState<BookingData | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'paypal' | 'transfer'>('credit');
    const [discountCode, setDiscountCode] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        const found = accommodations.find(a => a.id === accommodationId);
        if (found) setAccommodation(found);

        // Retrieve passed booking data
        if (location.state?.bookingData) {
            setBookingData(location.state.bookingData);
        } else {
            // If no data, maybe they refreshed. Redirect to property.
            navigate(`/accommodation/${accommodationId}`);
        }
    }, [accommodationId, location, navigate]);

    if (!accommodation || !bookingData) {
        return <div className="min-h-screen bg-forest-green text-white pt-32 flex justify-center">Loading...</div>;
    }

    // Calculate nights and totals
    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);
    const nights = Math.max(1, Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)));

    const subtotal = nights * bookingData.pricePerNight;
    const taxes = subtotal * 0.1; // 10% tax
    const total = subtotal + taxes;

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call for payment processing
        setTimeout(() => {
            navigate(`/accommodation/${accommodationId}/room/${roomId}/confirmation`, {
                state: {
                    bookingData,
                    totalPaid: total,
                    reference: `TL-${Math.floor(Math.random() * 900000) + 100000}`
                }
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-forest-green pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-300 hover:text-tropical-mint mb-6 transition-colors font-medium text-sm w-fit"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Guest Details
                </button>

                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 animate-slide-up">
                    Secure Checkout
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Payment Form (Left 2 cols) */}
                    <div className="lg:col-span-2 space-y-6 animate-slide-up" style={{ animationDelay: '100ms' }}>

                        {/* Payment Method Selector */}
                        <div className="bg-ocean-deep p-6 rounded-2xl shadow-sm border border-gray-700">
                            <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Payment Method</h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <label className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'credit' ? 'border-tropical-mint bg-forest-green text-tropical-mint' : 'border-gray-600 text-gray-400 hover:border-tropical-mint/50'}`}>
                                    <input type="radio" className="sr-only" checked={paymentMethod === 'credit'} onChange={() => setPaymentMethod('credit')} />
                                    <CreditCard className="h-8 w-8 mb-2" />
                                    <span className="text-sm font-medium">Credit Card</span>
                                </label>
                                <label className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'debit' ? 'border-tropical-mint bg-forest-green text-tropical-mint' : 'border-gray-600 text-gray-400 hover:border-tropical-mint/50'}`}>
                                    <input type="radio" className="sr-only" checked={paymentMethod === 'debit'} onChange={() => setPaymentMethod('debit')} />
                                    <VisaIcon className="h-8 w-8 mb-2" />
                                    <span className="text-sm font-medium">Debit Card</span>
                                </label>
                                <label className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-tropical-mint bg-forest-green text-tropical-mint' : 'border-gray-600 text-gray-400 hover:border-tropical-mint/50'}`}>
                                    <input type="radio" className="sr-only" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} />
                                    <div className="flex font-bold text-xl italic mb-2 tracking-tighter">
                                        <span className={paymentMethod === 'paypal' ? 'text-blue-400' : 'text-gray-300'}>Pay</span>
                                        <span className={paymentMethod === 'paypal' ? 'text-blue-300' : 'text-gray-400'}>Pal</span>
                                    </div>
                                    <span className="text-sm font-medium">PayPal</span>
                                </label>
                                <label className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'transfer' ? 'border-tropical-mint bg-forest-green text-tropical-mint' : 'border-gray-600 text-gray-400 hover:border-tropical-mint/50'}`}>
                                    <input type="radio" className="sr-only" checked={paymentMethod === 'transfer'} onChange={() => setPaymentMethod('transfer')} />
                                    <Building className="h-8 w-8 mb-2" />
                                    <span className="text-sm font-medium">Bank Transfer</span>
                                </label>
                            </div>

                            {/* Dynamic Payment Details */}
                            {paymentMethod === 'credit' || paymentMethod === 'debit' ? (
                                <form id="payment-form" onSubmit={handlePayment} className="space-y-4">
                                    <div className="bg-forest-green p-6 rounded-xl border border-gray-600">
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Name on Card</label>
                                            <input type="text" required className="w-full border-gray-600 bg-ocean-deep text-white rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border placeholder-gray-500" placeholder="J. DOE" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Card Number</label>
                                            <div className="relative">
                                                <input type="text" required className="w-full border-gray-600 bg-ocean-deep text-white rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 pl-10 border placeholder-gray-500" placeholder="0000 0000 0000 0000" maxLength={19} />
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <CreditCard className="h-5 w-5 text-gray-500" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-1">Expiry Date</label>
                                                <input type="text" required className="w-full border-gray-600 bg-ocean-deep text-white rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border placeholder-gray-500" placeholder="MM/YY" maxLength={5} />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-1">Security Code (CVV)</label>
                                                <input type="text" required className="w-full border-gray-600 bg-ocean-deep text-white rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border placeholder-gray-500" placeholder="123" maxLength={4} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            ) : paymentMethod === 'paypal' ? (
                                <div className="bg-ocean-deep p-6 rounded-xl border border-gray-600 flex flex-col items-center justify-center text-center">
                                    <p className="text-gray-300 mb-4">You will be redirected to PayPal to complete your secure payment.</p>
                                    <button form="payment-form" onClick={handlePayment} className="px-8 py-3 bg-yellow-500 font-bold text-gray-900 rounded-full hover:bg-yellow-400 transition-colors">
                                        Pay with PayPal
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-forest-green p-6 rounded-xl border border-gray-600">
                                    <p className="text-gray-300 mb-4 font-medium">Please transfer the final amount to the following bank account:</p>
                                    <div className="bg-ocean-deep p-4 border border-gray-700 rounded-lg font-mono text-sm space-y-2 mb-4 text-gray-300 shadow-sm">
                                        <p><span className="text-gray-500">Bank Name:</span> Central Bank of Timor-Leste</p>
                                        <p><span className="text-gray-500">Account Name:</span> Visit Timor Tourism Dept</p>
                                        <p><span className="text-gray-500">Account No:</span> 1234-5678-9012</p>
                                        <p><span className="text-gray-500">SWIFT Code:</span> CBTT-TLDI</p>
                                    </div>
                                    <p className="text-sm text-gray-500">Your booking will be confirmed once the transfer is verified (usually within 24 hours).</p>
                                    <form id="payment-form" onSubmit={handlePayment} className="mt-4"><button type="submit" className="hidden">Submit Transfer Intent</button></form>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Order Summary (Right Col) */}
                    <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                        <div className="bg-ocean-deep p-6 rounded-2xl shadow-sm border border-gray-700 sticky top-28">
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Booking Summary</h3>

                            {/* Hotel Mini-card */}
                            <div className="flex gap-4 mb-6">
                                <img src={accommodation.featureImage} alt={accommodation.name} className="w-20 h-20 rounded-lg object-cover" />
                                <div>
                                    <p className="text-xs text-tropical-mint font-bold uppercase mb-1">{accommodation.type}</p>
                                    <h4 className="font-bold text-white leading-tight">{accommodation.name}</h4>
                                    <p className="text-sm text-gray-400">{accommodation.municipality}</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Check-in</span>
                                    <span className="font-medium text-white">{checkInDate.toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Check-out</span>
                                    <span className="font-medium text-white">{checkOutDate.toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Duration</span>
                                    <span className="font-medium text-white">{nights} Night{nights > 1 ? 's' : ''}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Guests</span>
                                    <span className="font-medium text-white">{bookingData.adults} Adults, {bookingData.childrenCount} Children</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Room</span>
                                    <span className="font-medium text-white text-right">{bookingData.roomName}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-700 pt-4 mb-6 space-y-3">
                                <div className="flex justify-between text-gray-400">
                                    <span>${bookingData.pricePerNight} x {nights} nights</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Taxes & Fees</span>
                                    <span>${taxes.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="mb-6 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Tag className="h-4 w-4 text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Discount Code"
                                    className="w-full text-sm pl-9 pr-20 py-2 border border-gray-600 rounded-lg focus:ring-tropical-mint focus:border-tropical-mint bg-forest-green text-white placeholder-gray-500"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                                <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-tropical-mint hover:text-white bg-transparent">
                                    Apply
                                </button>
                            </div>

                            <div className="bg-forest-green border border-gray-600 p-4 rounded-xl flex items-center justify-between mb-6">
                                <span className="text-lg font-bold text-white">Total Payable</span>
                                <span className="text-2xl font-bold text-sunrise-gold">${total.toFixed(2)}</span>
                            </div>

                            {(paymentMethod === 'credit' || paymentMethod === 'debit' || paymentMethod === 'transfer') && (
                                <button
                                    form="payment-form"
                                    className="w-full py-4 bg-tropical-mint hover:bg-white text-forest-green font-bold rounded-xl transition-all shadow-md flex justify-center items-center"
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? (
                                        <span className="animate-pulse flex items-center">
                                            <Lock className="h-5 w-5 mr-2" /> Processing...
                                        </span>
                                    ) : (
                                        <>
                                            <Lock className="h-5 w-5 mr-2" /> Complete Reservation
                                        </>
                                    )}
                                </button>
                            )}

                            <div className="mt-4 flex flex-col items-center justify-center text-xs text-gray-400 pt-4 border-t border-gray-700 text-center">
                                <div className="flex items-center text-tropical-mint mb-2 font-medium">
                                    <ShieldCheck className="h-4 w-4 mr-1" />
                                    256-bit Secure Encryption
                                </div>
                                <p>Your personal information is safe and secure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccommodationPayment;
