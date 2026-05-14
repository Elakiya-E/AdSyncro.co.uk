import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Zap, Award } from 'lucide-react';
import { caseStudyService } from '../services/api';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import SEO from '../components/SEO';

export default function CaseStudyDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const [study, setStudy] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudy = async () => {
            try {
                if (slug) {
                    const response = await caseStudyService.getBySlug(slug);
                    setStudy(response.data);
                }
            } catch (error) {
                console.error('Error fetching case study:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudy();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading case study...</div>;
    }

    if (!study) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
                <Link to="/case-studies" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Case Studies
                </Link>
            </div>
        );
    }

    const caseStudySchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": study.title,
        "image": study.image,
        "url": `https://adsyncro.co.uk/case-studies/${slug}`,
        "author": {
            "@type": "Organization",
            "name": "AdSyncro",
            "url": "https://adsyncro.co.uk"
        },
        "publisher": {
            "@type": "Organization",
            "name": "AdSyncro",
            "logo": {
                "@type": "ImageObject",
                "url": "https://adsyncro.co.uk/logo.png"
            }
        },
        "description": study.challenge || study.description,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://adsyncro.co.uk/case-studies/${slug}`
        }
    };

    const csBreadcrumb = [
        { name: 'Home', item: 'https://adsyncro.co.uk' },
        { name: 'Case Studies', item: 'https://adsyncro.co.uk/case-studies' },
        { name: study.title }
    ];

    return (
        <div className="bg-background min-h-screen py-24">
            <SEO
                title={`${study.title} | AdSyncro Case Study`}
                description={study.challenge || study.description}
                canonical={`/case-studies/${slug}`}
                ogType="article"
                ogImage={study.image || '/og-image.png'}
                schema={caseStudySchema}
                breadcrumbSchema={csBreadcrumb}
            />

            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="mb-8 flex items-center text-sm text-muted-foreground">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/case-studies" className="hover:text-primary">Case Studies</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium truncate">{study.title}</span>
                </nav>

                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 text-primary font-bold text-sm">
                        Case Study: {study.category || 'Performance Growth'}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                        {study.title}
                    </h1>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Industry</p>
                            <p className="font-bold text-foreground">{study.industry || 'Retrofit & Energy'}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Scale</p>
                            <p className="font-bold text-foreground">{study.scale || 'Enterprise'}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">ROI Focus</p>
                            <p className="font-bold text-primary">{study.roi || '3.5x Avg'}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Timeline</p>
                            <p className="font-bold text-foreground">{study.timeline || 'Phase 1 Complete'}</p>
                        </div>
                    </div>
                </motion.header>

                <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 aspect-video">
                    <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Target className="text-primary" /> The Challenge
                            </h2>
                            <div className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                                {study.challenge}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Zap className="text-primary" /> Our Strategy
                            </h2>
                            <div className="text-lg text-muted-foreground prose prose-lg">
                                {study.strategy}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Award className="text-primary" /> The Implementation
                            </h2>
                            <div className="text-lg text-muted-foreground prose prose-lg">
                                {study.implementation}
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-primary p-8 rounded-3xl text-white shadow-xl sticky top-24">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <TrendingUp /> Key Results
                            </h3>
                            <ul className="space-y-6">
                                {(study.results || ['240% Lead Growth', '45% CPA Reduction', '100% Compliance Score']).map((result: string, i: number) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                                        <span className="font-bold text-lg">{result}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-12">
                                <Link
                                    to="/contact-us"
                                    className="block w-full py-4 bg-white text-primary rounded-xl font-bold text-center hover:bg-gray-100 transition-all shadow-lg"
                                >
                                    Achieve Similar Results
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>

                <footer className="mt-24 pt-12 border-t border-gray-100 flex justify-between items-center">
                    <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        <ArrowLeft size={20} /> Back to Case Studies
                    </Link>
                </footer>
            </article>
        </div>
    );
}
