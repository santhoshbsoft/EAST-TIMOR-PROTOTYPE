import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-forest-green text-sand-beige pt-20 pb-10 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <Link to="/" className="text-3xl font-serif font-bold tracking-tighter">
                        TIMOR-<span className="text-sunset-coral">LESTE</span>
                    </Link>
                    <p className="opacity-70 leading-relaxed">
                        Discover the untouched beauty of Asia's youngest nation. From pristine reefs to rugged mountains, adventure awaits in every municipality.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-sunset-coral transition-colors">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-sunset-coral transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-sunset-coral transition-colors">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-sunset-coral">Quick Links</h4>
                    <ul className="space-y-4 opacity-70">
                        <li><Link to="/about" className="hover:text-white transition-colors">About Timor-Leste</Link></li>
                        <li><Link to="/municipalities" className="hover:text-white transition-colors">Explore Municipalities</Link></li>
                        <li><Link to="/experiences" className="hover:text-white transition-colors">Our Experiences</Link></li>
                        <li><Link to="/plan" className="hover:text-white transition-colors">Plan Your Trip</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-sunset-coral">Contact Us</h4>
                    <ul className="space-y-4 opacity-70">
                        <li className="flex items-start space-x-3">
                            <MapPin size={18} className="mt-1 flex-shrink-0" />
                            <span>Dili, Timor-Leste</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="flex-shrink-0" />
                            <span>+670 123 4567</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="flex-shrink-0" />
                            <span>info@timorleste.tl</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-sunset-coral">Newsletter</h4>
                    <p className="opacity-70 mb-4 text-sm">Subscribe for travel tips and hidden gems.</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-sunset-coral"
                        />
                        <button className="bg-sunset-coral px-4 py-2 rounded-r-md hover:bg-sunset-coral/90 transition-colors">
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs opacity-40">
                <p>© 2026 Timor-Leste Tourism Authority. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
