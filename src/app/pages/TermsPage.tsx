import { motion } from 'motion/react';
import { Gavel, Scale, FileText, Shield, Globe, Lock, Info, CheckCircle2 } from 'lucide-react';

export default function TermsPage() {
    const sections = [
        {
            title: "1. Introduction",
            content: (
                <p>
                    These Terms & Conditions govern your use of this website operated by ADSYNCRO UK.<br />
                    By using this website, you agree to these terms. If you do not agree, please do not use the website.
                </p>
            )
        },
        {
            title: "2. Use of the website",
            content: (
                <>
                    <p className="mb-4">You agree to use this website only for lawful purposes. You must not:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Use the website in a way that causes damage or disruption</li>
                        <li>Attempt to gain unauthorised access</li>
                        <li>Use it for fraudulent or harmful activity</li>
                    </ul>
                </>
            )
        },
        {
            title: "3. Services and information",
            content: (
                <>
                    <p className="mb-4">All content on this website is for general information only. We do not guarantee accuracy, completeness, or suitability for any purpose.</p>
                    <p>We may update or change content at any time without notice.</p>
                </>
            )
        },
        {
            title: "4. Intellectual property",
            content: (
                <>
                    <p className="mb-4">All content on this website (text, branding, design, logos) belongs to ADSYNCRO UK unless stated otherwise.</p>
                    <p>You may not copy, reproduce, or distribute content without permission.</p>
                </>
            )
        },
        {
            title: "5. Limitation of liability",
            content: (
                <>
                    <p className="mb-4">We are not liable for any loss or damage arising from:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Use of this website</li>
                        <li>Reliance on information provided</li>
                        <li>Technical issues or website downtime</li>
                    </ul>
                </>
            )
        },
        {
            title: "6. Third-party links",
            content: (
                <p>This website may include links to external websites. We are not responsible for their content or policies.</p>
            )
        },
        {
            title: "7. Privacy",
            content: (
                <p>Your use of this website is also governed by our Privacy Policy.</p>
            )
        },
        {
            title: "8. Changes to terms",
            content: (
                <p>We may update these Terms & Conditions at any time. Continued use of the website means you accept any updates.</p>
            )
        },
        {
            title: "9. Governing law",
            content: (
                <p>These Terms are governed by the laws of England and Wales.</p>
            )
        },
        {
            title: "10. Contact",
            content: (
                <p>
                    If you have questions about these Terms, contact:<br />
                    <strong>ADSYNCRO</strong><br />
                    <strong>Email:</strong> <a href="mailto:info@adsyncro.co.uk" className="text-primary hover:underline">info@adsyncro.co.uk</a>
                </p>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-12 lg:py-32 bg-primary text-white">
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
                            <span className="text-sm font-semibold text-white">Legal Agreement</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Terms & <span className="text-secondary">Conditions</span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Please read these terms carefully before using our website and services.
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
                                    <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                                            {index + 1}
                                        </span>
                                        {section.title.split('. ')[1]}
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

            {/* Trust Section */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <Gavel className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold mb-2">Legal Compliance</h3>
                            <p className="text-sm text-muted-foreground">Operating under the laws of England and Wales.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <Scale className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold mb-2">Fair Usage</h3>
                            <p className="text-sm text-muted-foreground">Promoting lawful and respectful interaction.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold mb-2">Transparency</h3>
                            <p className="text-sm text-muted-foreground">Clear and upfront terms of engagement.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
