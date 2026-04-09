import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Target, Zap, CheckCircle2, ArrowRight, Shield, Globe, Cpu, Building2, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function SolutionsPage() {
    const capabilities = [
        {
            id: 'ai-automation',
            icon: <Bot className="w-16 h-16" />,
            title: 'AI Automation',
            subtitle: 'Intelligent Systems That Work While You Scale',
            description: 'Our AI automation layer connects marketing, data, and operations to remove manual effort and improve lead quality.',
            capabilities: [
                'AI chatbots & conversational flows',
                'Lead scoring & prioritization',
                'CRM integration (HubSpot, Salesforce)',
                'Automated follow ups & routing',
                'Performance dashboards & reporting'
            ],
            businessValue: [
                'Faster response times',
                'Higher conversion rates',
                'Reduced operational load'
            ],
            color: 'var(--primary)',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1080',
        },
        {
            id: 'retrofit',
            icon: <Building2 className="w-16 h-16" />,
            title: 'Retrofit Lead Generation',
            subtitle: 'Built for Trust, Incentives, and Conversion',
            description: 'Retrofit markets require precision, clarity, and compliance. We design end to end demand systems aligned with homeowner intent and government incentives.',
            capabilities: [
                'Homeowner & postcode level targeting',
                'Grant & subsidy messaging frameworks',
                'Conversion optimized landing pages',
                'Lead validation & qualification',
                'End to end funnel tracking'
            ],
            businessValue: [
                'Higher intent leads',
                'Lower acquisition costs',
                'Predictable demand flow'
            ],
            color: 'var(--secondary)',
            image: 'https://images.unsplash.com/photo-1631277190979-1704e8c7d574?auto=format&fit=crop&q=80&w=1080',
        },
        {
            id: 'paid-media',
            icon: <Target className="w-16 h-16" />,
            title: 'Paid Media',
            subtitle: 'Data Driven Acquisition Across Channels',
            description: 'We run performance campaigns optimized by AI insights, not guesswork, ensuring every click feeds into a measurable system.',
            capabilities: [
                'Search & display campaigns',
                'Social & programmatic media',
                'Budget optimization',
                'Conversion tracking & attribution'
            ],
            businessValue: [
                'Smarter spend allocation',
                'Improved ROI',
                'Clear visibility into performance'
            ],
            color: 'var(--accent)',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080',
        },
        {
            id: 'seo-content',
            icon: <Search className="w-16 h-16" />,
            title: 'SEO & Content',
            subtitle: 'Sustainable Growth Through Search & Authority',
            description: 'We build long term visibility using intent driven SEO and content designed to convert, not just rank.',
            capabilities: [
                'Keyword & intent research',
                'Retrofit & compliance friendly content',
                'Technical SEO foundations',
                'Performance monitoring'
            ],
            businessValue: [
                'Compounding organic growth',
                'Reduced dependency on ads',
                'Stronger brand authority'
            ],
            color: 'var(--primary)',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1080',
        }
    ];

    return (
        <div className="">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-10 md:py-16">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Core Growth <span className="text-primary">Capabilities</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            AdSyncro delivers AI powered growth through integrated services that work together as a single system. Each capability is designed to automate decision making, improve efficiency, and drive measurable outcomes.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
                            >
                                Find Your Solution
                                <ArrowRight className="ml-2" size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities List */}
            <section className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {capabilities.map((capability, index) => (
                            <div key={index} id={capability.id} className="scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                                >
                                    {/* Content Column */}
                                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                        <motion.div
                                            className="inline-block p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div style={{ color: capability.color }}>
                                                {capability.icon}
                                            </div>
                                        </motion.div>

                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{capability.title}</h2>
                                        <h3 className="text-xl font-semibold text-primary mb-4">{capability.subtitle}</h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            {capability.description}
                                        </p>

                                        <div className="mb-8">
                                            <h4 className="font-bold text-foreground mb-4">Capabilities</h4>
                                            <ul className="space-y-3">
                                                {capability.capabilities.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                                <TrendingUp className="w-5 h-5 text-accent" />
                                                Business Value
                                            </h4>
                                            <ul className="space-y-2">
                                                {capability.businessValue.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-3">
                                                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Image Column */}
                                    <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                        <motion.div
                                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ImageWithFallback
                                                src={capability.image}
                                                alt={capability.title}
                                                className="w-full h-auto"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrated by Design */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Integrated by Design
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Each service is connected through a single data and automation layer, ensuring insights flow across campaigns, channels, and teams.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg font-semibold"
                        >
                            Get a Free Audit
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">We’ll respond within 24 hours.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
