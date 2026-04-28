import { motion } from 'motion/react';
import { Cookie, Settings, Eye, Shield, CheckCircle2, Info } from 'lucide-react';

export default function CookiesPage() {
    const sections = [
        {
            title: "1. What are cookies?",
            content: (
                <p>
                    Cookies are small text files stored on your device when you visit a website. They help websites function properly and improve user experience.
                </p>
            )
        },
        {
            title: "2. How we use cookies",
            content: (
                <>
                    <p className="mb-4">We use cookies to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Ensure the website works correctly</li>
                        <li>Understand how visitors use our website</li>
                        <li>Improve performance and user experience</li>
                        <li>Remember user preferences (if applicable)</li>
                    </ul>
                </>
            )
        },
        {
            title: "3. Types of cookies we may use",
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary" />
                            Essential cookies
                        </h4>
                        <p className="text-sm">These are necessary for the website to function and cannot be switched off.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                            <Eye className="w-4 h-4 text-secondary" />
                            Analytics cookies
                        </h4>
                        <p className="text-sm">These help us understand how visitors use our website (e.g. Google Analytics).</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                            <Settings className="w-4 h-4 text-accent" />
                            Functionality cookies
                        </h4>
                        <p className="text-sm">These remember your preferences and settings.</p>
                    </div>
                </div>
            )
        },
        {
            title: "4. Managing cookies",
            content: (
                <p>
                    You can control or delete cookies at any time through your browser settings.
                    You can also block cookies, but some parts of the website may not work properly.
                </p>
            )
        },
        {
            title: "5. Third-party cookies",
            content: (
                <p>
                    Some cookies may come from trusted third-party services such as analytics or embedded content providers.
                </p>
            )
        },
        {
            title: "6. Updates to this policy",
            content: (
                <p>
                    We may update this Cookie Policy from time to time. Any changes will be posted on this page.
                </p>
            )
        },
        {
            title: "7. Contact us",
            content: (
                <p>
                    If you have questions about cookies, contact:<br />
                    <strong>ADSYNCRO</strong><br />
                    <strong>Email:</strong> <a href="mailto:info@adsyncro.co.uk" className="text-primary hover:underline">info@adsyncro.co.uk</a>
                </p>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-12 lg:py-32 bg-secondary text-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6"
                        >
                            <span className="text-sm font-semibold text-white">Preference Management</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            Cookie <span className="text-primary">Policy</span>
                        </h1>

                        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                            Understanding how we use cookies to improve your digital experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-12 border border-gray-100"
                    >
                        <div className="space-y-12">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm">
                                            {index + 1}
                                        </span>
                                        {section.title.split('. ')[1] || section.title}
                                    </h2>
                                    <div className="text-muted-foreground leading-relaxed pl-11">
                                        {section.content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                            <p className="text-sm text-muted-foreground">
                                Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Info Cards */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl h-fit">
                                <Settings className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Manage Preferences</h3>
                                <p className="text-sm text-muted-foreground">You can reset your cookie choices at any time through your browser settings.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                            <div className="p-3 bg-secondary/10 rounded-xl h-fit">
                                <Shield className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Privacy Commitment</h3>
                                <p className="text-sm text-muted-foreground">We use cookies responsibly to enhance functionality, never for intrusive tracking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
