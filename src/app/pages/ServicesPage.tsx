import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Target, Zap, CheckCircle2, ArrowRight, BarChart3, MessageSquare, Users, Shield, Globe, Cpu, Building2, Scale, Rocket } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ServicesPage() {
  const industries = [
    {
      id: 'retrofit',
      icon: <Building2 className="w-16 h-16" />,
      title: 'Retrofit & Energy',
      subtitle: 'Driving High-Intent Homeowner Demand at Scale',
      description: 'Retrofit and energy businesses operate in a trust-driven, incentive-led market. AdSyncro helps you attract, qualify, and convert homeowners using AI-optimized journeys aligned with grants, subsidies, and compliance requirements.',
      whatWeEnable: [
        'Homeowner & postcode-level targeting',
        'Grant- and incentive-aligned messaging',
        'Conversion-focused landing systems',
        'Automated lead qualification & routing',
        'Performance tracking across the funnel'
      ],
      outcomes: [
        'Higher quality retrofit leads',
        'Reduced acquisition costs',
        'Predictable, scalable demand'
      ],
      cta: 'Get a Free Retrofit Audit',
      color: 'var(--secondary)',
      image: 'https://images.unsplash.com/photo-1631277190979-1704e8c7d574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW5zdWxhdGlvbiUyMHJldHJvZml0fGVufDF8fHx8MTc2NjU2MjYwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'regulated',
      icon: <Shield className="w-16 h-16" />,
      title: 'Regulated Services',
      subtitle: 'Compliance-Ready Growth Systems',
      description: 'For regulated industries, growth must balance performance with precision. AdSyncro provides AI-powered systems built with compliance, data security, and auditability at the core.',
      designedFor: [
        'Financial services',
        'Healthcare',
        'Legal & professional services',
        'Any compliance-led sector'
      ],
      whatWeEnable: [
        'Lead validation & filtering',
        'Approval-based workflows',
        'Privacy-first data handling',
        'Audit-ready tracking & reporting',
        'Controlled automation'
      ],
      outcomes: [
        'Safer lead generation',
        'Reduced operational risk',
        'Transparent, compliant growth'
      ],
      cta: 'Request a Compliance-Ready Audit',
      color: 'var(--primary)',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbXBsaWFuY2V8ZW58MXx8fHwxNzY2NTc3MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'smes',
      icon: <Rocket className="w-16 h-16" />,
      title: 'Digital Growth (SMEs)',
      subtitle: 'Automation-Led Scaling for Growing Businesses',
      description: 'SMEs need efficiency before scale. AdSyncro helps growing businesses implement AI-driven systems that reduce manual work while improving performance.',
      whatWeEnable: [
        'AI-assisted campaign execution',
        'CRM-driven pipelines',
        'Automated follow-ups & scoring',
        'Real-time performance dashboards'
      ],
      outcomes: [
        'Faster growth without added headcount',
        'Better visibility into performance',
        'Scalable, repeatable systems'
      ],
      cta: 'Get a Free Growth Audit',
      color: 'var(--accent)',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbXxlbnwxfHx8fDE3NjY1NzcwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
              AI-Powered Growth <span className="text-primary">Solutions by Industry</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AdSyncro delivers intelligent growth systems designed around industry realities — not generic marketing tactics. Each solution combines AI automation, data intelligence, and performance optimization to drive predictable outcomes.
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

      {/* Industry Solutions List */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} id={industry.id} className="scroll-mt-32">
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
                      <div style={{ color: industry.color }}>
                        {industry.icon}
                      </div>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{industry.title}</h2>
                    <h3 className="text-xl font-semibold text-primary mb-4">{industry.subtitle}</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Designed For (Only for Regulated) */}
                    {industry.designedFor && (
                      <div className="mb-6">
                        <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Designed For</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.designedFor.map((item, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-8">
                      <h4 className="font-bold text-foreground mb-4">What We Enable</h4>
                      <ul className="space-y-3">
                        {industry.whatWeEnable.map((item, idx) => (
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
                        Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {industry.outcomes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
                    >
                      {industry.cta}
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>

                  {/* Image Column */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={industry.image}
                        alt={industry.title}
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

      {/* How to Choose the Right Solution */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              How to Choose the Right Solution
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Not sure where you fit? Our audit identifies the right solution based on your industry, data maturity, and growth goals.
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
