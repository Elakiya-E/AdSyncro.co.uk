import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import SEO from './SEO';

interface ServiceDetailProps {
    title: string;
    subtitle: string;
    description: string;
    capabilities: string[];
    businessValue: string[];
    image: string;
    color: string;
    icon: React.ReactNode;
    seoTitle: string;
    seoDescription: string;
    canonical: string;
    faq?: { question: string; answer: string }[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
    title,
    subtitle,
    description,
    capabilities,
    businessValue,
    image,
    color,
    icon,
    seoTitle,
    seoDescription,
    canonical,
    faq
}) => {
    return (
        <div>
            <SEO
                title={seoTitle}
                description={seoDescription}
                canonical={canonical}
                faqSchema={faq}
                breadcrumbSchema={[
                    { name: 'Home', item: 'https://adsyncro.co.uk' },
                    { name: 'Services', item: 'https://adsyncro.co.uk/services' },
                    { name: seoTitle }
                ]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": title,
                    "description": description,
                    "provider": {
                        "@type": "ProfessionalService",
                        "name": "AdSyncro",
                        "url": "https://adsyncro.co.uk",
                        "logo": "https://adsyncro.co.uk/logo.png"
                    },
                    "areaServed": "GB"
                }}
            />

            <section className="relative overflow-hidden py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Content Column */}
                        <div>
                            <motion.div
                                className="inline-block p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div style={{ color }}>
                                    {icon}
                                </div>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
                            <h2 className="text-2xl font-semibold text-primary mb-6">{subtitle}</h2>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed italic border-l-4 border-primary pl-6">
                                {description}
                            </p>

                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-foreground mb-6">Core Capabilities</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {capabilities.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-10 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                                    <TrendingUp className="w-6 h-6 text-accent" />
                                    Business Outcome & Efficiency
                                </h3>
                                <ul className="space-y-4">
                                    {businessValue.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 group">
                                            <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                                            <span className="text-gray-800 font-semibold text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact-us"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg font-bold text-lg"
                                >
                                    Book a Strategy Session
                                    <ArrowRight className="ml-2" size={20} />
                                </Link>
                                <Link
                                    to="/case-studies"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-all duration-300 font-bold text-lg"
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <motion.div
                                className="relative rounded-3xl overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ImageWithFallback
                                    src={image}
                                    alt={`${title} - ${subtitle} - Performance solutions by AdSyncro UK`}
                                    className="w-full h-auto object-cover min-h-[500px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            </motion.div>

                            {/* Floating Stat or Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px]"
                            >
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">UK Target Market</p>
                                <p className="text-2xl font-black text-primary">ROI Focused</p>
                                <p className="text-gray-600 text-sm mt-2">Maximum efficiency through AI-powered optimization.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section if provided */}
            {faq && faq.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faq.map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                                        <span className="text-primary font-black">Q.</span>
                                        {item.question}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed flex items-start gap-3">
                                        <span className="text-secondary font-black">A.</span>
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ServiceDetail;
