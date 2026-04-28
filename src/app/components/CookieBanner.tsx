import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookie-consent', 'all');
        setIsVisible(false);
    };

    const handleRejectNonEssential = () => {
        localStorage.setItem('cookie-consent', 'essential');
        setIsVisible(false);
    };

    const handleSettings = () => {
        // In a real app this might open a modal, 
        // for now we can redirect to cookies page or just show the banner
        window.location.href = '/cookies';
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:max-w-md z-[100]"
                >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                <Cookie className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-lg mb-1">Cookie Preferences</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    We use cookies to enhance your browsing experience, provide analytics, and improve our services. You can accept all cookies or manage your preferences.
                                </p>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            <button
                                onClick={handleAcceptAll}
                                className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-md"
                            >
                                Accept All
                            </button>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={handleRejectNonEssential}
                                    className="py-2 px-4 bg-gray-50 text-foreground border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all"
                                >
                                    Reject Non-Essential
                                </button>
                                <button
                                    onClick={handleSettings}
                                    className="py-2 px-4 bg-gray-50 text-foreground border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                                >
                                    <Settings size={14} />
                                    Settings
                                </button>
                            </div>
                        </div>
                        <p className="mt-4 text-[10px] text-center text-muted-foreground">
                            By clicking "Accept All", you agree to our <Link to="/cookies" className="underline hover:text-primary">Cookie Policy</Link>.
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
