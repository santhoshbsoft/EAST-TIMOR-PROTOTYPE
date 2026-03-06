import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, Calendar, Users, MapPin, Printer, ArrowRight, Home } from 'lucide-react';

const AccommodationSuccess: React.FC = () => {
    const { accommodationId } = useParams<{ accommodationId: string }>();
    const location = useLocation();
    const navigate = useNavigate();

    // In a real app we'd fetch the booking details using a booking ID if not in state
    const bookingState = location.state;

    useEffect(() => {
        if (!bookingState) {
            navigate(`/accommodation/${accommodationId}`);
        }
    }, [bookingState, accommodationId, navigate]);

    if (!bookingState) {
        return <div className="min-h-screen bg-forest-green text-white pt-32 flex justify-center">Loading...</div>;
    }

    const { bookingData, totalPaid, reference } = bookingState;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-forest-green pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Success Header */}
                <div className="text-center mb-10 animate-slide-up">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-tropical-mint/20 rounded-full mb-6 shadow-sm border border-tropical-mint/30">
                        <CheckCircle className="h-10 w-10 text-tropical-mint" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Booking Confirmed!
                    </h1>
                    <p className="text-lg text-gray-300">
                        Thank you, <span className="font-semibold text-tropical-mint">{bookingData.guestName}</span>. Your reservation is complete.
                    </p>
                    <p className="text-gray-400 mt-2">
                        A confirmation email has been sent to <span className="font-medium text-white">{bookingData.email}</span>.
                    </p>
                </div>

                {/* Booking Receipt Card */}
                <div className="bg-ocean-deep rounded-2xl shadow-md border border-gray-700 overflow-hidden mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>

                    {/* Header Strip */}
                    <div className="bg-ocean-light border-b border-gray-700 text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <p className="text-tropical-mint text-sm font-semibold uppercase tracking-wider mb-1">Booking Reference</p>
                            <p className="text-2xl font-mono font-bold tracking-widest">{reference}</p>
                        </div>
                        <div className="text-left md:text-right">
                            <p className="text-tropical-mint text-sm font-semibold uppercase tracking-wider mb-1">Total Paid</p>
                            <p className="text-2xl font-bold text-sunrise-gold">${totalPaid.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Details Main */}
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row justify-between mb-8 pb-8 border-b border-gray-700 gap-6">

                            <div className="flex-1 space-y-4">
                                <h3 className="text-xl font-bold text-white mb-2 border-b border-gray-700 pb-2">Property Details</h3>
                                <div className="flex items-start">
                                    <Home className="h-5 w-5 text-tropical-mint mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-white">{bookingData.roomName}</p>
                                        <p className="text-gray-400 text-sm">Room selection</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-tropical-mint mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-white text-sm">Property Location Contact</p>
                                        <a href={`tel:${bookingData.phone.replace(/\s/g, '')}`} className="text-tropical-mint hover:underline text-sm block">Contact Property</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4 border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-8">
                                <h3 className="text-xl font-bold text-white mb-2 border-b border-gray-700 pb-2">Stay Information</h3>
                                <div className="flex items-start">
                                    <Calendar className="h-5 w-5 text-tropical-mint mr-3 mt-0.5" />
                                    <div>
                                        <div className="flex justify-between gap-4 mb-2">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase">Check-in</p>
                                                <p className="font-bold text-white">{new Date(bookingData.checkIn).toLocaleDateString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase">Check-out</p>
                                                <p className="font-bold text-white">{new Date(bookingData.checkOut).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="h-5 w-5 text-tropical-mint mr-3 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-white">{bookingData.adults} Adults, {bookingData.childrenCount} Children</p>
                                        <p className="text-gray-400 text-sm">Under reservation name: {bookingData.guestName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handlePrint}
                                className="flex items-center justify-center px-6 py-3 bg-forest-green hover:bg-forest-green/80 text-white font-medium rounded-xl transition-colors border border-gray-600 shadow-sm hover:shadow-md"
                            >
                                <Printer className="h-5 w-5 mr-2" /> Print Confirmation
                            </button>
                            <button
                                onClick={() => navigate('/plan-your-trip')}
                                className="flex items-center justify-center px-8 py-3 bg-tropical-mint hover:bg-white text-forest-green font-bold rounded-xl transition-all shadow-md"
                            >
                                Continue Exploring <ArrowRight className="h-5 w-5 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center text-sm text-gray-400 animate-slide-up" style={{ animationDelay: '200ms' }}>
                    <p>Have questions about your stay? Contact the property directly or reach out to our support team.</p>
                </div>
            </div>
        </div>
    );
};

export default AccommodationSuccess;
