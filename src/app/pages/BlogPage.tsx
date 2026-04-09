import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, TrendingUp, Shield, Zap, RefreshCw, Smartphone, BarChart3, Search, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function BlogPage() {
  const categories = [
    {
      id: 'retrofit',
      name: 'Retrofit Guides',
      description: 'Actionable resources for retrofit and energy businesses navigating homeowner demand, incentives, and trust based conversion.',
      topics: ['Homeowner intent & behavior', 'Grant and incentive communication', 'Retrofit funnel optimization', 'Lead quality improvement'],
      icon: <RefreshCw className="w-8 h-8 text-primary" />
    },
    {
      id: 'automation',
      name: 'AI & Growth Automation',
      description: 'Practical insights on how AI and automation can streamline growth, reduce manual work, and improve performance.',
      topics: ['AI driven lead qualification', 'Automation workflows', 'CRM and data integration', 'Performance analytics'],
      icon: <Zap className="w-8 h-8 text-secondary" />
    },
    {
      id: 'casestudies',
      name: 'Case Studies',
      description: 'Real world examples of how AI powered systems drive measurable outcomes across industries.',
      topics: ['Retrofit demand generation', 'Compliance ready growth', 'SME scaling through automation'],
      icon: <BarChart3 className="w-8 h-8 text-primary" />
    },
    {
      id: 'updates',
      name: 'Updates',
      description: 'Platform updates, industry insights, and AdSyncro announcements.',
      topics: ['Product improvements', 'Industry trends', 'Best practices'],
      icon: <Smartphone className="w-8 h-8 text-secondary" />
    }
  ];

  const featuredArticles = [
    {
      title: 'How AI Improves Retrofit Lead Quality',
      excerpt: 'Discover how artificial intelligence is transforming homeowner targeting and qualification to drive better conversion rates.',
      category: 'Retrofit Guides',
      author: 'Sarah Johnson',
      date: 'December 20, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1645027718562-54414cd86f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjY0NzQwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Building Compliance Ready Growth Systems',
      excerpt: 'Navigating the complex world of regulations. How to scale operations without compromising on compliance and data security.',
      category: 'Case Studies',
      author: 'Compliance Expert',
      date: 'December 28, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NjU1OTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Scaling SMEs with Automation, Not Headcount',
      excerpt: 'Learn how small teams are achieving enterprise-level results through smart automation strategies and efficient workflows.',
      category: 'AI & Growth Automation',
      author: 'Growth Strategist',
      date: 'December 25, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1752614671119-4868a91efc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90JTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NjY1NjI2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
            >
              <span className="text-sm font-semibold text-black">Insights & Resources</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Insights on <span className="text-black">AI Powered Growth</span>, Retrofit, and Automation
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The AdSyncro Blog is a knowledge hub focused on helping businesses understand how automation, AI, and data driven systems enable sustainable, compliant growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Categories Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Content Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our content is designed to educate, guide decision makers, and support long term growth through practical insights — not hype.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="relative p-4 bg-white rounded-2xl shadow-sm border border-gray-100 inline-block">
                  {category.icon}
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{category.name}</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{category.description}</p>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-2 opacity-80">
                      <Search className="w-3 h-3" />
                      Topics Include:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                      {category.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-medium">
                          <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Featured Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-semibold shadow-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {article.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Search & Scale */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-8">Built for Search & Scale</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            All content is structured for SEO with intent focused topics, clear information architecture, and performance optimized pages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Intent Focused Topics', icon: <Search className="w-5 h-5" /> },
              { title: 'Clear Information Architecture', icon: <BarChart3 className="w-5 h-5" /> },
              { title: 'Performance Optimized Pages', icon: <Zap className="w-5 h-5" /> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-white rounded-full shadow-sm text-secondary">{item.icon}</div>
                <span className="font-semibold text-foreground">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-primary rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl"
          >
            {/* Animated Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Want Practical Growth Insights?
              </h2>
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Subscribe or explore how AI powered automation can support your growth strategy.
              </p>

              <div className="flex flex-col items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-10 py-5 bg-white text-primary text-lg font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    Get a Free Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
                <p className="text-sm text-gray-400 opacity-80 mt-2">
                  We’ll respond within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
