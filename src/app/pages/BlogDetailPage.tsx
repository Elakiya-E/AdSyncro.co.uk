import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogService } from '../services/api';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import SEO from '../components/SEO';

export default function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                if (slug) {
                    const response = await blogService.getBySlug(slug);
                    setArticle(response.data);
                }
            } catch (error) {
                console.error('Error fetching blog article:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticle();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading article...</div>;
    }

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
                <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Blog
                </Link>
            </div>
        );
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "image": article.image,
        "url": `https://adsyncro.co.uk/blog/${slug}`,
        "author": {
            "@type": "Person",
            "name": article.author || "AdSyncro Expert"
        },
        "publisher": {
            "@type": "Organization",
            "name": "AdSyncro",
            "logo": {
                "@type": "ImageObject",
                "url": "https://adsyncro.co.uk/logo.png"
            }
        },
        "datePublished": article.date || new Date().toISOString(),
        "dateModified": article.updatedAt || article.date || new Date().toISOString(),
        "description": article.excerpt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://adsyncro.co.uk/blog/${slug}`
        }
    };

    const blogBreadcrumb = [
        { name: 'Home', item: 'https://adsyncro.co.uk' },
        { name: 'Blog', item: 'https://adsyncro.co.uk/blog' },
        { name: article.title }
    ];

    return (
        <div className="bg-background min-h-screen pt-24 pb-12">
            <SEO
                title={article.title}
                description={article.excerpt}
                canonical={`/blog/${slug}`}
                ogType="article"
                ogImage={article.image || '/og-image.png'}
                schema={articleSchema}
                breadcrumbSchema={blogBreadcrumb}
            />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="mb-8 flex items-center text-sm text-muted-foreground">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/blog" className="hover:text-primary">Blog</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium truncate">{article.title}</span>
                </nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-gray-100 py-6">
                            <div className="flex items-center gap-2 text-foreground font-medium">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                    {article.author?.[0] || 'A'}
                                </div>
                                {article.author || 'AdSyncro Expert'}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                {article.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-primary" />
                                {article.readTime || '5 min read'}
                            </div>
                        </div>
                    </header>

                    <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl relative group">
                        <ImageWithFallback
                            src={article.image}
                            alt={article.title}
                            className="w-full h-auto object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
                        {article.content ? (
                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        ) : (
                            <p>{article.excerpt}</p>
                        )}

                        <p className="mt-8">
                            At AdSyncro, we are dedicated to helping businesses navigate the complexities of digital growth. Our AI-powered solutions are designed to deliver ROI while ensuring full compliance and transparency.
                        </p>
                    </div>

                    <footer className="mt-16 pt-8 border-t border-gray-100">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-foreground">Share this article:</span>
                                <div className="flex gap-2">
                                    <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-primary hover:text-white transition-all text-muted-foreground">
                                        <Twitter size={18} />
                                    </button>
                                    <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-primary hover:text-white transition-all text-muted-foreground">
                                        <Linkedin size={18} />
                                    </button>
                                    <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-primary hover:text-white transition-all text-muted-foreground">
                                        <Facebook size={18} />
                                    </button>
                                </div>
                            </div>

                            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                <ArrowLeft size={20} /> Back to all articles
                            </Link>
                        </div>
                    </footer>
                </motion.div>
            </article>

            {/* Recommended Section */}
            <section className="mt-24 py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Recommended Reading</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm font-medium">
                        <p className="col-span-full italic text-muted-foreground">More insights coming soon...</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
