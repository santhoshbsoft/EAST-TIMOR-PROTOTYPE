import React, { useEffect } from 'react';

const TravelTips: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-sand-beige/20 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-ocean-deep text-center mb-12">
                    Essential Timor Leste Tips for a Smooth Travel Experience
                </h1>

                <div className="space-y-8">

                    {/* Geography */}
                    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Geography</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-800">Time Difference</h3>
                                <p className="text-gray-600 mt-1">GMT+9 hours</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Population</h3>
                                <p className="text-gray-600 mt-1">1.1 million</p>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-semibold text-gray-800">Language</h3>
                                <p className="text-gray-600 mt-1 mb-2">Tetun, Portuguese, Bahasa and English</p>
                                <p className="text-gray-600">The Tetun Translator can provide simple translation from English to Tetun. Learn Tetun at Lorosa’e English Language Institute.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Climate</h3>
                                <p className="text-gray-600 mt-1">Tropical humid climate with temperatures 25–35°C in lowlands and cooler inland areas.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Rainfall</h3>
                                <p className="text-gray-600 mt-1">Dry season: May – November<br />Wet season: December – April</p>
                            </div>
                        </div>
                    </section>

                    {/* Practical Information */}
                    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Practical Information</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-800">Telecommunications</h3>
                                <p className="text-gray-600 mt-1">Good mobile phone coverage in main centres. Travelers can bring an unlocked handset and purchase a SIM card and credit on arrival. Internet is available but speeds may be relatively slow.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Electricity</h3>
                                <p className="text-gray-600 mt-1">Electricity may be limited in some outlying areas and outages can occur. Carrying a torch/flashlight is recommended. Power plug types may vary, so bring a travel adapter.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Driving</h3>
                                <p className="text-gray-600 mt-1">A valid driving licence is required when hiring vehicles or motorcycles and must be carried while driving.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Health</h3>
                                <p className="text-gray-600 mt-1">Comprehensive travel insurance is highly recommended.</p>
                            </div>
                        </div>
                    </section>

                    {/* General Tips */}
                    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">General Tips</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-800">Travel Agencies</h3>
                                <p className="text-gray-600 mt-1">Travel agencies are available in Dili for international flight arrangements.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Tipping</h3>
                                <p className="text-gray-600 mt-1">Tipping is not expected, but it is appreciated.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Cultural Guidelines</h3>
                                <p className="text-gray-600 mt-1">Visitors should ask permission before taking photographs of people and before visiting sacred sites or communities. Wearing modest clothing is appreciated, especially in districts.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Environmental Responsibility</h3>
                                <div className="text-gray-600 mt-1">
                                    <p className="mb-2">Please:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Do not litter</li>
                                        <li>Do not light fires</li>
                                        <li>Avoid purchasing souvenirs made from endangered species (e.g., turtles)</li>
                                        <li>Do not touch or remove marine species such as coral or shells</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Freshwater Conservation</h3>
                                <p className="text-gray-600 mt-1">In some locations freshwater resources are limited, so travelers should use water sparingly.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default TravelTips;
