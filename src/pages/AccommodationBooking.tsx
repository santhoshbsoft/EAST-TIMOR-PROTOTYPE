import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar as CalendarIcon, Users, CreditCard, ShieldCheck } from 'lucide-react';
import { accommodations, Accommodation } from '../data/accommodations';

const AccommodationBooking: React.FC = () => {
    const { accommodationId, roomId } = useParams<{ accommodationId: string; roomId: string }>();
    const navigate = useNavigate();

    const [accommodation, setAccommodation] = useState<Accommodation | null>(null);

    // Form State
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adults, setAdults] = useState('2');
    const [childrenCount, setChildrenCount] = useState('0');
    const [selectedRoom, setSelectedRoom] = useState<string>('');

    // Guest State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    useEffect(() => {
        const found = accommodations.find(a => a.id === accommodationId);
        if (found) {
            setAccommodation(found);
            if (roomId && found.rooms.some(r => r.id === roomId)) {
                setSelectedRoom(roomId);
            } else if (found.rooms.length > 0) {
                setSelectedRoom(found.rooms[0].id);
            }
        }
    }, [accommodationId, roomId]);

    if (!accommodation) {
        return <div className="min-h-screen bg-forest-green text-white pt-32 pb-16 flex items-center justify-center">Loading...</div>;
    }

    const roomDetails = accommodation.rooms.find(r => r.id === selectedRoom) || accommodation.rooms[0];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreeTerms) {
            alert("Please agree to the Terms and Conditions to proceed.");
            return;
        }

        // In a real app, we would save the booking details to context/state/API here
        // For prototype, we navigate and pass some data via state
        navigate(`/accommodation/${accommodationId}/room/${roomId}/payment`, {
            state: {
                bookingData: {
                    checkIn,
                    checkOut,
                    adults,
                    childrenCount,
                    roomId: selectedRoom,
                    roomName: roomDetails.name,
                    pricePerNight: roomDetails.price,
                    guestName: `${firstName} ${lastName}`,
                    email,
                    phone
                }
            }
        });
    };

    return (
        <div className="min-h-screen bg-forest-green pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <button
                    onClick={() => navigate(`/accommodation/${accommodation.id}`)}
                    className="flex items-center text-gray-300 hover:text-tropical-mint mb-8 transition-colors font-medium w-fit"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Property Details
                </button>

                <div className="mb-8 animate-slide-up">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Complete Your Booking</h1>
                    <p className="text-gray-300 text-lg">You are booking a stay at <span className="font-semibold text-tropical-mint">{accommodation.name}</span></p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 animate-slide-up" style={{ animationDelay: '100ms' }}>

                    {/* Stay Details */}
                    <div className="bg-ocean-deep p-6 md:p-8 rounded-2xl shadow-sm border border-gray-700">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center border-b border-gray-700 pb-4">
                            <CalendarIcon className="h-6 w-6 mr-2 text-tropical-mint" />
                            1. Reservation Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Check-in Date *</label>
                                <input
                                    type="date"
                                    required
                                    className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white placeholder-gray-500"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Check-out Date *</label>
                                <input
                                    type="date"
                                    required
                                    className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white placeholder-gray-500"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    min={checkIn || new Date().toISOString().split('T')[0]}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Room Type *</label>
                                <select
                                    className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white"
                                    value={selectedRoom}
                                    onChange={(e) => setSelectedRoom(e.target.value)}
                                >
                                    {accommodation.rooms.map(r => (
                                        <option key={r.id} value={r.id}>{r.name} - ${r.price}/night</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Adults</label>
                                    <select
                                        className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white"
                                        value={adults}
                                        onChange={(e) => setAdults(e.target.value)}
                                    >
                                        {[1, 2, 3, 4, 5].map(n => <option key={`a-${n}`} value={n}>{n}</option>)}
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Children</label>
                                    <select
                                        className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white"
                                        value={childrenCount}
                                        onChange={(e) => setChildrenCount(e.target.value)}
                                    >
                                        {[0, 1, 2, 3, 4].map(n => <option key={`c-${n}`} value={n}>{n}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Guest Details */}
                    <div className="bg-ocean-deep p-6 md:p-8 rounded-2xl shadow-sm border border-gray-700">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center border-b border-gray-700 pb-4">
                            <Users className="h-6 w-6 mr-2 text-tropical-mint" />
                            2. Guest Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">First Name *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white placeholder-gray-500"
                                    placeholder="John"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Last Name *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white placeholder-gray-500"
                                    placeholder="Doe"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white placeholder-gray-500"
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white placeholder-gray-500"
                                    placeholder="+1 234 567 8900"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Country/Region</label>
                                <select
                                    className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option value="">Select Country</option>
                                    <option value="AU">Australia</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="PT">Portugal</option>
                                    <option value="US">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Special Requests (Optional)</label>
                            <textarea
                                className="w-full border-gray-600 rounded-lg shadow-sm focus:ring-tropical-mint focus:border-tropical-mint p-3 border bg-forest-green text-white placeholder-gray-500 h-24 resize-none"
                                placeholder="Any special needs, dietary requirements, or arrival time preferences?"
                                value={specialRequests}
                                onChange={(e) => setSpecialRequests(e.target.value)}
                            ></textarea>
                            <p className="text-xs text-gray-400 mt-1">Special requests cannot be guaranteed but the property will do its best.</p>
                        </div>
                    </div>

                    {/* Terms and Submit */}
                    <div className="bg-ocean-deep p-6 md:p-8 rounded-2xl border border-gray-700">
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="h-5 w-5 text-tropical-mint focus:ring-tropical-mint border-gray-600 rounded bg-forest-green"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-medium text-white">
                                    I agree to the Terms & Conditions and Privacy Policy
                                </label>
                                <p className="text-gray-400 mt-1">I certify that the information provided is correct and I accept the cancellation policy.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-700 gap-4">
                            <div className="flex items-center text-sm text-gray-400">
                                <ShieldCheck className="h-5 w-5 text-tropical-mint mr-2" />
                                Secure booking encryption provided
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-tropical-mint hover:bg-white text-forest-green font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <CreditCard className="mr-2 h-5 w-5" />
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AccommodationBooking;
