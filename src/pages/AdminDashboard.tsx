import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, Users, CalendarCheck, FileEdit, TrendingUp,
    DollarSign, Map, Download, Eye, Edit, Trash2, Plus,
    CheckCircle, XCircle, Clock, Globe, Star, LogOut
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom';

// ── Static Data ──────────────────────────────────────────────

const bookingTrends = [
    { name: 'Jan', bookings: 400, revenue: 2400 },
    { name: 'Feb', bookings: 300, revenue: 1398 },
    { name: 'Mar', bookings: 900, revenue: 9800 },
    { name: 'Apr', bookings: 1480, revenue: 3908 },
    { name: 'May', bookings: 1890, revenue: 4800 },
    { name: 'Jun', bookings: 2390, revenue: 3800 },
    { name: 'Jul', bookings: 2780, revenue: 5200 },
    { name: 'Aug', bookings: 3100, revenue: 6100 },
];

const visitorsByCountry = [
    { name: 'Australia', visitors: 3240 },
    { name: 'Portugal', visitors: 2180 },
    { name: 'Indonesia', visitors: 1920 },
    { name: 'Japan', visitors: 1450 },
    { name: 'USA', visitors: 1280 },
    { name: 'UK', visitors: 980 },
];

const categoryPie = [
    { name: 'Marine', value: 38 },
    { name: 'Land', value: 28 },
    { name: 'Heritage', value: 18 },
    { name: 'Food', value: 16 },
];
const PIE_COLORS = ['#0F6E6E', '#1F3D2B', '#FF6B4A', '#FFAB91'];

const tourists = [
    { id: 1, name: 'Sarah Thompson', email: 'sarah.t@email.com', country: 'Australia', bookings: 5, spent: '$1,240', joined: '2025-12-04', status: 'Active' },
    { id: 2, name: 'Marco Silva', email: 'marco.s@email.com', country: 'Portugal', bookings: 3, spent: '$820', joined: '2026-01-15', status: 'Active' },
    { id: 3, name: 'Yuki Tanaka', email: 'yuki.t@email.com', country: 'Japan', bookings: 7, spent: '$2,100', joined: '2025-11-20', status: 'Active' },
    { id: 4, name: 'James Wilson', email: 'james.w@email.com', country: 'USA', bookings: 2, spent: '$450', joined: '2026-02-01', status: 'Inactive' },
    { id: 5, name: 'Ana Pereira', email: 'ana.p@email.com', country: 'Portugal', bookings: 4, spent: '$960', joined: '2025-10-08', status: 'Active' },
    { id: 6, name: 'Budi Santoso', email: 'budi.s@email.com', country: 'Indonesia', bookings: 6, spent: '$1,550', joined: '2026-01-22', status: 'Active' },
];

const bookings = [
    { id: 'BK-2401', tourist: 'Sarah Thompson', activity: 'Atauro Deep Wall Dive', date: '2026-03-12', persons: 2, amount: '$240', status: 'Confirmed' },
    { id: 'BK-2402', tourist: 'Marco Silva', activity: 'Whale Watching Expedition', date: '2026-03-15', persons: 3, amount: '$255', status: 'Confirmed' },
    { id: 'BK-2403', tourist: 'Yuki Tanaka', activity: 'Mt. Ramelau Summit Trek', date: '2026-03-18', persons: 1, amount: '$60', status: 'Pending' },
    { id: 'BK-2404', tourist: 'James Wilson', activity: 'Dili Street Food Safari', date: '2026-03-20', persons: 2, amount: '$80', status: 'Cancelled' },
    { id: 'BK-2405', tourist: 'Ana Pereira', activity: 'Uma Lulik Sacred House Tour', date: '2026-03-22', persons: 4, amount: '$180', status: 'Confirmed' },
    { id: 'BK-2406', tourist: 'Budi Santoso', activity: 'Ermera Coffee Plantation', date: '2026-03-25', persons: 2, amount: '$110', status: 'Pending' },
];

const contentItems = [
    { id: 1, title: 'Why Timor-Leste is Asia\'s Last Secret', type: 'Blog Post', author: 'Admin', status: 'Published', views: 8420, date: '2026-02-15' },
    { id: 2, title: 'Top 10 Diving Spots in Atauro', type: 'Guide', author: 'Admin', status: 'Published', views: 12300, date: '2026-01-28' },
    { id: 3, title: 'Ermera Coffee: From Bean to Cup', type: 'Blog Post', author: 'Guest Writer', status: 'Draft', views: 0, date: '2026-03-01' },
    { id: 4, title: 'Cultural Festival Calendar 2026', type: 'Page', author: 'Admin', status: 'Published', views: 5640, date: '2026-02-20' },
    { id: 5, title: 'Sacred Houses of Timor-Leste', type: 'Blog Post', author: 'Admin', status: 'Review', views: 0, date: '2026-03-02' },
    { id: 6, title: 'Visitor Safety Guidelines', type: 'Page', author: 'Admin', status: 'Published', views: 3200, date: '2026-01-10' },
];

const destinations = [
    { id: 1, name: 'Dili', activities: 24, bookings: 1820, rating: 4.8, status: 'Active', revenue: '$142,300' },
    { id: 2, name: 'Atauro Island', activities: 18, bookings: 1450, rating: 5.0, status: 'Active', revenue: '$118,500' },
    { id: 3, name: 'Baucau', activities: 12, bookings: 980, rating: 4.7, status: 'Active', revenue: '$68,200' },
    { id: 4, name: 'Lautém', activities: 8, bookings: 620, rating: 4.6, status: 'Active', revenue: '$42,100' },
    { id: 5, name: 'Ainaro', activities: 6, bookings: 540, rating: 4.5, status: 'Active', revenue: '$35,800' },
    { id: 6, name: 'Ermera', activities: 5, bookings: 380, rating: 4.4, status: 'Active', revenue: '$28,600' },
    { id: 7, name: 'Viqueque', activities: 4, bookings: 290, rating: 4.3, status: 'Inactive', revenue: '$18,400' },
];

// ── Components ───────────────────────────────────────────────

const StatCard = ({ icon: Icon, label, value, trend, color }: any) => (
    <div className="glass-dark p-8 rounded-[32px] border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
            <Icon size={48} />
        </div>
        <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">{label}</p>
        <h4 className="text-4xl font-bold mb-4">{value}</h4>
        <div className={`flex items-center text-xs font-bold ${color || 'text-tropical-mint'}`}>
            <TrendingUp size={14} className="mr-1" />
            <span>{trend} vs last month</span>
        </div>
    </div>
);

const StatusBadge = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
        Active: 'bg-tropical-mint/20 text-tropical-mint',
        Confirmed: 'bg-tropical-mint/20 text-tropical-mint',
        Published: 'bg-tropical-mint/20 text-tropical-mint',
        Inactive: 'bg-red-500/20 text-red-400',
        Cancelled: 'bg-red-500/20 text-red-400',
        Pending: 'bg-yellow-500/20 text-yellow-400',
        Draft: 'bg-white/10 text-sand-beige/50',
        Review: 'bg-sunset-coral/20 text-sunset-coral',
    };
    return (
        <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${styles[status] || 'bg-white/10 text-sand-beige/50'}`}>
            {status}
        </span>
    );
};

// ── Tabs ─────────────────────────────────────────────────────

const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'tourists', label: 'Tourists', icon: Users },
    { id: 'bookings', label: 'Bookings', icon: CalendarCheck },
    { id: 'content', label: 'Content', icon: FileEdit },
    { id: 'destinations', label: 'Destinations', icon: Map },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
];

// ── Main Component ───────────────────────────────────────────

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-ocean-deep pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                {/* Sidebar */}
                <aside className="w-full lg:w-64 space-y-2 shrink-0">
                    <div className="text-sunset-coral font-bold p-6 mb-4 text-lg tracking-widest">ADMIN PORTAL</div>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all ${activeTab === tab.id
                                ? 'bg-sunset-coral/20 text-sunset-coral'
                                : 'opacity-40 hover:opacity-100 hover:bg-white/5'
                                }`}
                        >
                            <tab.icon size={20} />
                            <span className="font-bold text-sm">{tab.label}</span>
                        </button>
                    ))}
                    <button
                        onClick={() => navigate('/')}
                        className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl opacity-40 hover:opacity-100 hover:bg-white/5 transition-all mt-8"
                    >
                        <LogOut size={20} />
                        <span className="font-bold text-sm">Back to Site</span>
                    </button>
                </aside>

                {/* Main Content */}
                <div className="flex-grow space-y-12 min-w-0">
                    {/* ────── OVERVIEW TAB ────── */}
                    {activeTab === 'overview' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                                <div>
                                    <h2 className="section-title text-3xl md:text-4xl mb-4">System Overview</h2>
                                    <p className="opacity-50 font-bold text-xs uppercase tracking-widest">Real-time performance monitoring</p>
                                </div>
                                <button className="btn-outline py-2 flex items-center space-x-2">
                                    <Download size={16} />
                                    <span>Export Report</span>
                                </button>
                            </header>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <StatCard icon={Users} label="Total Tourists" value="12,482" trend="+12%" />
                                <StatCard icon={DollarSign} label="Total Revenue" value="$458,206" trend="+24%" />
                                <StatCard icon={CalendarCheck} label="Monthly Bookings" value="2,840" trend="+8%" />
                                <StatCard icon={Eye} label="Page Views" value="284,520" trend="+18%" />
                                <StatCard icon={Star} label="Avg. Rating" value="4.8" trend="+0.2" />
                                <StatCard icon={Globe} label="Countries" value="42" trend="+5" />
                            </div>

                            <div className="glass-dark p-10 rounded-[40px] border border-white/5 h-[400px]">
                                <div className="flex justify-between items-center mb-10">
                                    <h4 className="text-xl font-bold">Booking Trends</h4>
                                    <div className="flex space-x-4 text-xs font-bold uppercase opacity-50">
                                        <span className="text-sunset-coral">● Bookings</span>
                                        <span>● Revenue</span>
                                    </div>
                                </div>
                                <ResponsiveContainer width="100%" height="80%">
                                    <AreaChart data={bookingTrends}>
                                        <defs>
                                            <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#FF6B4A" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#FF6B4A" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#ffffff30', fontSize: 12 }} />
                                        <YAxis hide />
                                        <Tooltip contentStyle={{ backgroundColor: '#003B44', borderRadius: '16px', border: '1px solid #ffffff10' }} itemStyle={{ color: '#F5E6C8' }} />
                                        <Area type="monotone" dataKey="bookings" stroke="#FF6B4A" fillOpacity={1} fill="url(#colorBookings)" strokeWidth={3} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>
                    )}

                    {/* ────── TOURISTS TAB ────── */}
                    {activeTab === 'tourists' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <header className="flex justify-between items-end">
                                <div>
                                    <h2 className="section-title text-3xl md:text-4xl mb-4">Tourists Management</h2>
                                    <p className="opacity-50 font-bold text-xs uppercase tracking-widest">{tourists.length} registered users</p>
                                </div>
                                <button className="btn-primary py-2 flex items-center space-x-2">
                                    <Plus size={16} />
                                    <span>Add Tourist</span>
                                </button>
                            </header>

                            <div className="glass-dark rounded-[32px] border border-white/5 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/5">
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Name</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Email</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Country</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Bookings</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Spent</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Status</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tourists.map(t => (
                                                <tr key={t.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                    <td className="px-6 py-5 font-bold text-sm">{t.name}</td>
                                                    <td className="px-6 py-5 text-sm opacity-60">{t.email}</td>
                                                    <td className="px-6 py-5 text-sm opacity-60">{t.country}</td>
                                                    <td className="px-6 py-5 text-sm font-bold">{t.bookings}</td>
                                                    <td className="px-6 py-5 text-sm font-bold text-sunset-coral">{t.spent}</td>
                                                    <td className="px-6 py-5"><StatusBadge status={t.status} /></td>
                                                    <td className="px-6 py-5">
                                                        <div className="flex space-x-2">
                                                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Eye size={14} /></button>
                                                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Edit size={14} /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ────── BOOKINGS TAB ────── */}
                    {activeTab === 'bookings' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <header className="flex justify-between items-end">
                                <div>
                                    <h2 className="section-title text-3xl md:text-4xl mb-4">Bookings Management</h2>
                                    <p className="opacity-50 font-bold text-xs uppercase tracking-widest">{bookings.length} recent bookings</p>
                                </div>
                            </header>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 text-center">
                                    <CheckCircle size={24} className="text-tropical-mint mx-auto mb-2" />
                                    <p className="text-2xl font-bold">4</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 mt-1">Confirmed</p>
                                </div>
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 text-center">
                                    <Clock size={24} className="text-yellow-400 mx-auto mb-2" />
                                    <p className="text-2xl font-bold">2</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 mt-1">Pending</p>
                                </div>
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 text-center">
                                    <XCircle size={24} className="text-red-400 mx-auto mb-2" />
                                    <p className="text-2xl font-bold">1</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 mt-1">Cancelled</p>
                                </div>
                            </div>

                            <div className="glass-dark rounded-[32px] border border-white/5 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/5">
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Booking ID</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Tourist</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Activity</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Date</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Persons</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Amount</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map(b => (
                                                <tr key={b.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                    <td className="px-6 py-5 text-sm font-bold text-sunset-coral">{b.id}</td>
                                                    <td className="px-6 py-5 text-sm font-bold">{b.tourist}</td>
                                                    <td className="px-6 py-5 text-sm opacity-60">{b.activity}</td>
                                                    <td className="px-6 py-5 text-sm opacity-60">{b.date}</td>
                                                    <td className="px-6 py-5 text-sm text-center">{b.persons}</td>
                                                    <td className="px-6 py-5 text-sm font-bold">{b.amount}</td>
                                                    <td className="px-6 py-5"><StatusBadge status={b.status} /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ────── CONTENT TAB ────── */}
                    {activeTab === 'content' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <header className="flex justify-between items-end">
                                <div>
                                    <h2 className="section-title text-3xl md:text-4xl mb-4">Content Management</h2>
                                    <p className="opacity-50 font-bold text-xs uppercase tracking-widest">{contentItems.length} content items</p>
                                </div>
                                <button className="btn-primary py-2 flex items-center space-x-2">
                                    <Plus size={16} />
                                    <span>New Post</span>
                                </button>
                            </header>

                            <div className="glass-dark rounded-[32px] border border-white/5 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/5">
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Title</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Type</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Author</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Views</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Date</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Status</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contentItems.map(c => (
                                                <tr key={c.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                    <td className="px-6 py-5 text-sm font-bold max-w-[250px] truncate">{c.title}</td>
                                                    <td className="px-6 py-5 text-xs opacity-60">
                                                        <span className="px-3 py-1 bg-white/5 rounded-full">{c.type}</span>
                                                    </td>
                                                    <td className="px-6 py-5 text-sm opacity-60">{c.author}</td>
                                                    <td className="px-6 py-5 text-sm font-bold">{c.views.toLocaleString()}</td>
                                                    <td className="px-6 py-5 text-sm opacity-60">{c.date}</td>
                                                    <td className="px-6 py-5"><StatusBadge status={c.status} /></td>
                                                    <td className="px-6 py-5">
                                                        <div className="flex space-x-2">
                                                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Edit size={14} /></button>
                                                            <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors text-red-400"><Trash2 size={14} /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ────── DESTINATIONS TAB ────── */}
                    {activeTab === 'destinations' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <header className="flex justify-between items-end">
                                <div>
                                    <h2 className="section-title text-3xl md:text-4xl mb-4">Destinations Management</h2>
                                    <p className="opacity-50 font-bold text-xs uppercase tracking-widest">{destinations.length} active destinations</p>
                                </div>
                                <button className="btn-primary py-2 flex items-center space-x-2">
                                    <Plus size={16} />
                                    <span>Add Destination</span>
                                </button>
                            </header>

                            <div className="glass-dark rounded-[32px] border border-white/5 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/5">
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Destination</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Activities</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Bookings</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Rating</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Revenue</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Status</th>
                                                <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest opacity-40">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {destinations.map(d => (
                                                <tr key={d.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                    <td className="px-6 py-5 text-sm font-bold">{d.name}</td>
                                                    <td className="px-6 py-5 text-sm text-center">{d.activities}</td>
                                                    <td className="px-6 py-5 text-sm font-bold">{d.bookings.toLocaleString()}</td>
                                                    <td className="px-6 py-5">
                                                        <div className="flex items-center space-x-1 text-sunset-coral">
                                                            <Star size={12} fill="currentColor" />
                                                            <span className="text-sm font-bold">{d.rating}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5 text-sm font-bold text-tropical-mint">{d.revenue}</td>
                                                    <td className="px-6 py-5"><StatusBadge status={d.status} /></td>
                                                    <td className="px-6 py-5">
                                                        <div className="flex space-x-2">
                                                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Eye size={14} /></button>
                                                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Edit size={14} /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ────── ANALYTICS TAB ────── */}
                    {activeTab === 'analytics' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                            <header>
                                <h2 className="section-title text-3xl md:text-4xl mb-4">Analytics Dashboard</h2>
                                <p className="opacity-50 font-bold text-xs uppercase tracking-widest">In-depth performance insights</p>
                            </header>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Visitors by Country */}
                                <div className="glass-dark p-8 rounded-[32px] border border-white/5 h-[380px]">
                                    <h4 className="text-lg font-bold mb-8">Visitors by Country</h4>
                                    <ResponsiveContainer width="100%" height="80%">
                                        <BarChart data={visitorsByCountry} layout="vertical">
                                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" horizontal={false} />
                                            <XAxis type="number" hide />
                                            <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#ffffff60', fontSize: 12 }} width={80} />
                                            <Tooltip contentStyle={{ backgroundColor: '#003B44', borderRadius: '16px', border: '1px solid #ffffff10' }} itemStyle={{ color: '#F5E6C8' }} />
                                            <Bar dataKey="visitors" fill="#FF6B4A" radius={[0, 8, 8, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Bookings by Category */}
                                <div className="glass-dark p-8 rounded-[32px] border border-white/5 h-[380px]">
                                    <h4 className="text-lg font-bold mb-8">Bookings by Category</h4>
                                    <ResponsiveContainer width="100%" height="80%">
                                        <PieChart>
                                            <Pie data={categoryPie} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" stroke="none">
                                                {categoryPie.map((_, i) => (
                                                    <Cell key={i} fill={PIE_COLORS[i]} />
                                                ))}
                                            </Pie>
                                            <Tooltip contentStyle={{ backgroundColor: '#003B44', borderRadius: '16px', border: '1px solid #ffffff10' }} itemStyle={{ color: '#F5E6C8' }} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="flex flex-wrap justify-center gap-4 -mt-4">
                                        {categoryPie.map((cat, i) => (
                                            <div key={cat.name} className="flex items-center space-x-2 text-xs">
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                                                <span className="opacity-60">{cat.name} ({cat.value}%)</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Revenue Trend */}
                            <div className="glass-dark p-10 rounded-[40px] border border-white/5 h-[400px]">
                                <h4 className="text-xl font-bold mb-8">Revenue Trend (2026)</h4>
                                <ResponsiveContainer width="100%" height="80%">
                                    <AreaChart data={bookingTrends}>
                                        <defs>
                                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#26A69A" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#26A69A" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#ffffff30', fontSize: 12 }} />
                                        <YAxis hide />
                                        <Tooltip contentStyle={{ backgroundColor: '#003B44', borderRadius: '16px', border: '1px solid #ffffff10' }} itemStyle={{ color: '#F5E6C8' }} />
                                        <Area type="monotone" dataKey="revenue" stroke="#26A69A" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 text-center">
                                    <p className="text-3xl font-bold text-sunset-coral">87%</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 mt-2">Booking Completion</p>
                                </div>
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 text-center">
                                    <p className="text-3xl font-bold text-tropical-mint">4.2 days</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 mt-2">Avg. Stay Duration</p>
                                </div>
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 text-center">
                                    <p className="text-3xl font-bold text-sand-beige">$362</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 mt-2">Avg. Spend / Tourist</p>
                                </div>
                                <div className="glass-dark p-6 rounded-2xl border border-white/5 text-center">
                                    <p className="text-3xl font-bold text-sunset-coral">94%</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 mt-2">Satisfaction Rate</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
