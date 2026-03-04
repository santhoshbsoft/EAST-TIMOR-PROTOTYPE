import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Auth = ({ mode }: { mode: 'login' | 'register' }) => {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mode === 'login') {
            if (email === 'admin@example.com' && password === 'admin') {
                navigate('/admin');
            } else {
                navigate('/dashboard'); // Default tourist dashboard
            }
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-ocean-deep flex items-center justify-center px-6 pt-20 pb-12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sunset-coral/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tropical-teal/10 rounded-full blur-[120px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md glass-dark p-8 md:p-12 rounded-[40px] border border-white/5 relative z-10"
            >
                <div className="text-center mb-10">
                    <Link to="/" className="text-2xl font-serif font-bold tracking-tighter mb-4 inline-block">
                        TIMOR-<span className="text-sunset-coral">LESTE</span>
                    </Link>
                    <h2 className="text-3xl font-bold">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
                    <p className="opacity-50 text-sm mt-2">
                        {mode === 'login' ? 'Please enter your details to sign in.' : 'Join the frontier of discovery.'}
                    </p>
                    {mode === 'login' && (
                        <div className="mt-4 p-4 glass rounded-2xl text-[10px] text-left space-y-1">
                            <p className="font-bold text-sunset-coral">QUICK ACCESS CREDENTIALS:</p>
                            <p>Admin: admin@example.com / admin</p>
                            <p>Tourist: any email / any password</p>
                        </div>
                    )}
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {mode === 'register' && (
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-sunset-coral transition-colors"
                                />
                            </div>
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-2">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-sunset-coral transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                            <input
                                type={showPass ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 focus:outline-none focus:border-sunset-coral transition-colors"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                            >
                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {mode === 'login' && (
                        <div className="flex justify-between items-center text-xs">
                            <label className="flex items-center space-x-2 cursor-pointer opacity-70 hover:opacity-100">
                                <input type="checkbox" className="rounded-sm bg-white/5 border-white/10 text-sunset-coral focus:ring-sunset-coral" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="text-sunset-coral font-bold hover:underline">Forgot Password?</a>
                        </div>
                    )}

                    <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2 py-4">
                        <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
                        <ArrowRight size={20} />
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <p className="text-sm opacity-50">
                        {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
                        <Link
                            to={mode === 'login' ? '/register' : '/login'}
                            className="ml-2 text-sunset-coral font-bold hover:underline"
                        >
                            {mode === 'login' ? 'SignUp' : 'Login'}
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Auth;
