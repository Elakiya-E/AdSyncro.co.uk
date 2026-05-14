import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
    LogOut, LayoutDashboard, FileText, Settings,
    CheckCircle2, AlertCircle, Save, Plus, Trash2,
    ChevronRight, RefreshCw, Layers
} from 'lucide-react';
import axios from 'axios';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('blogs');
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const endpoint = activeTab === 'blogs' ? 'blogs' : activeTab === 'services' ? 'services' : activeTab === 'case-studies' ? 'case-studies' : 'pricing';
            const response = await axios.get(`${API_URL}/${endpoint}`);
            setData(response.data);
        } catch (err) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const handleSave = async (id: string, updatedItem: any) => {
        setSubmitting(true);
        setSuccess('');
        try {
            const endpoint = activeTab === 'blogs' ? 'blogs' : activeTab === 'services' ? 'services' : activeTab === 'case-studies' ? 'case-studies' : 'pricing';
            await axios.put(`${API_URL}/${endpoint}/${id}`, updatedItem);
            setSuccess('Content updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            setError('Update failed');
        } finally {
            setSubmitting(false);
        }
    };

    const tabs = [
        { id: 'blogs', name: 'Blog Articles', icon: <FileText size={20} /> },
        { id: 'services', name: 'Services', icon: <Layers size={20} /> },
        { id: 'pricing', name: 'Pricing Plans', icon: <Settings size={20} /> },
    ];

    if (!loading && !data) return <div>No data found</div>;

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-100 flex flex-col pt-8">
                <div className="px-6 mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shadow-sm">
                        AS
                    </div>
                    <span className="font-bold text-xl text-foreground">Admin<span className="text-primary text-sm align-top ml-1">CMS</span></span>
                </div>

                <nav className="flex-grow px-4 space-y-1">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === tab.id
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {tab.icon}
                            <span className="font-medium text-sm">{tab.name}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-50">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                        <LogOut size={20} />
                        <span className="font-medium text-sm">Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-8">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground">Manage {tabs.find(t => t.id === activeTab)?.name}</h2>
                        <p className="text-muted-foreground mt-1 tracking-tight">Updating this will reflect instantly on your live website.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 border border-green-100"
                            >
                                <CheckCircle2 size={16} /> {success}
                            </motion.div>
                        )}
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-foreground text-white rounded-xl hover:bg-gray-800 transition-all text-sm font-bold shadow-sm">
                            <Plus size={18} /> Add New Entry
                        </button>
                    </div>
                </header>

                {loading ? (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-400 gap-4">
                        <RefreshCw className="animate-spin" size={32} />
                        <span className="font-medium uppercase tracking-widest text-xs">Fetching dynamic content...</span>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {Array.isArray(data) ? data.map((item: any) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-4">
                                        {item.image && (
                                            <img src={item.image} alt={item.title || item.name || 'Content Preview'} className="w-16 h-16 rounded-xl object-cover" />
                                        )}
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title || item.name}</h3>
                                            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                                {item.category || item.subtitle || 'Entry'}
                                                <ChevronRight size={12} className="text-gray-300" />
                                                ID: {item._id}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors bg-gray-50 rounded-lg">
                                            <Trash2 size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleSave(item._id, item)}
                                            disabled={submitting}
                                            className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm"
                                        >
                                            <Save size={18} /> Save Changes
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-50">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest">Main Title</label>
                                        <input
                                            type="text"
                                            defaultValue={item.title || item.name}
                                            className="w-full px-4 py-3 bg-gray-50/50 border border-transparent rounded-xl focus:bg-white focus:border-primary/20 outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest">Subtitle / Category</label>
                                        <input
                                            type="text"
                                            defaultValue={item.subtitle || item.category || ''}
                                            className="w-full px-4 py-3 bg-gray-50/50 border border-transparent rounded-xl focus:bg-white focus:border-primary/20 outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest">Summary / Description</label>
                                        <textarea
                                            defaultValue={item.description || item.excerpt || ''}
                                            rows={3}
                                            className="w-full px-4 py-3 bg-gray-50/50 border border-transparent rounded-xl focus:bg-white focus:border-primary/20 outline-none transition-all font-medium resize-none"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )) : (
                            <div className="bg-white p-12 rounded-3xl text-center border border-dashed border-gray-200">
                                <LayoutDashboard size={48} className="mx-auto mb-4 text-gray-200" />
                                <p className="text-gray-400 font-medium tracking-tight">Configuration for <strong>{tabs.find(t => t.id === activeTab)?.name}</strong> is managed globally.</p>
                                <button className="mt-4 text-primary font-bold hover:underline">View Settings</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
