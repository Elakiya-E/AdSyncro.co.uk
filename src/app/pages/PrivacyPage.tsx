import { motion } from 'motion/react';
import { Shield, Mail, Globe, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPage() {
    const sections = [
        {
            title: "1. About us",
            content: (
                <p>
                    This website is operated by ADSYNCRO UK (“we”, “us”, “our”).<br />
                    We are committed to protecting your personal data and respecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR).<br />
                    If you have any questions, you can contact us at:<br />
                    <strong>Email:</strong> <a href="mailto:info@adsyncro.co.uk" className="text-primary hover:underline">info@adsyncro.co.uk</a>
                </p>
            )
        },
        {
            title: "2. Information we collect",
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact details (such as email address and phone number)</li>
                    <li>Information you provide via contact forms or direct email</li>
                    <li>Technical data such as IP address, browser type, and device information</li>
                    <li>Website usage data (pages visited, time spent, interactions)</li>
                </ul>
            )
        },
        {
            title: "3. How we use your information",
            content: (
                <>
                    <p className="mb-4">We use your data to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Respond to enquiries and provide customer support</li>
                        <li>Deliver our services</li>
                        <li>Improve website performance and user experience</li>
                        <li>Maintain security of our systems</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                    <p className="mt-4 font-semibold text-primary">We do not sell or rent your personal data to third parties.</p>
                </>
            )
        },
        {
            title: "4. Cookies",
            content: (
                <>
                    <p className="mb-4">Our website uses cookies to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Ensure the website functions properly</li>
                        <li>Analyse traffic and usage patterns</li>
                        <li>Improve user experience</li>
                    </ul>
                    <p className="mt-4">You can control or disable cookies through your browser settings at any time.</p>
                </>
            )
        },
        {
            title: "5. Legal basis for processing",
            content: (
                <>
                    <p className="mb-4">We process your personal data under the following lawful bases:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Your consent (e.g. contact forms, cookies)</li>
                        <li>Legitimate interests (e.g. improving services, website security)</li>
                        <li>Legal obligations (where required by law)</li>
                    </ul>
                </>
            )
        },
        {
            title: "6. Data storage and security",
            content: (
                <p>
                    We take reasonable technical and organisational measures to protect your personal data against loss, misuse, or unauthorised access.<br />
                    However, no method of online transmission or storage is completely secure.
                </p>
            )
        },
        {
            title: "7. Sharing your data",
            content: (
                <>
                    <p className="mb-4">We may share your data only with trusted third-party providers where necessary, such as:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Website hosting providers</li>
                        <li>Analytics services (e.g. Google Analytics, if used)</li>
                        <li>IT and security service providers</li>
                    </ul>
                    <p className="mt-4">We ensure these third parties comply with data protection regulations. We will also disclose data if required by law.</p>
                </>
            )
        },
        {
            title: "8. Your rights",
            content: (
                <>
                    <p className="mb-4">Under UK GDPR, you have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to or restrict processing</li>
                        <li>Withdraw consent at any time (where applicable)</li>
                        <li>Lodge a complaint with the Information Commissioner’s Office (ICO)</li>
                    </ul>
                </>
            )
        },
        {
            title: "9. Third-party links",
            content: (
                <p>Our website may contain links to external websites. We are not responsible for the privacy practices of those websites.</p>
            )
        },
        {
            title: "10. Data retention",
            content: (
                <p>We only keep your personal data for as long as necessary to fulfil the purposes outlined in this policy or as required by law.</p>
            )
        },
        {
            title: "11. Changes to this policy",
            content: (
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            )
        },
        {
            title: "12. Contact us",
            content: (
                <p>
                    If you have any questions about this Privacy Policy or how your data is handled, please contact:<br />
                    <strong>ADSYNCRO</strong><br />
                    <strong>Email:</strong> <a href="mailto:info@adsyncro.co.uk" className="text-primary hover:underline">info@adsyncro.co.uk</a><br />
                    <strong>Website:</strong> <a href="https://adsyncro.co.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://adsyncro.co.uk</a>
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
                            <span className="text-sm font-semibold text-white">Privacy First</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Privacy <span className="text-secondary">Policy</span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            How we collect, use, and protect your personal data in accordance with UK GDPR.
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

            {/* Summary Section / Why we care */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <Lock className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold mb-2">Secure Storage</h3>
                            <p className="text-sm text-muted-foreground">Industry standard data protection measures.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <Eye className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold mb-2">Transparent Use</h3>
                            <p className="text-sm text-muted-foreground">Clearly defined purposes for data processing.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold mb-2">UK GDPR Compliant</h3>
                            <p className="text-sm text-muted-foreground">Your rights are protected under UK law.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
