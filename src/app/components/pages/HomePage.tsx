import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Target, Zap, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-[#1fb57a]" />,
      title: 'AI Automation',
      description: 'Chatbots, CRM automation, lead scoring, and intelligent dashboards',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#1fb57a]" />,
      title: 'Retrofit Lead Gen',
      description: 'Homeowner targeting, grant messaging, and optimized landing pages',
    },
    {
      icon: <Target className="w-12 h-12 text-[#1fb57a]" />,
      title: 'Paid Media & PPC',
      description: 'Google Ads, programmatic advertising, and performance marketing',
    },
    {
      icon: <Zap className="w-12 h-12 text-[#1fb57a]" />,
      title: 'SEO & Content',
      description: 'Retrofit-focused keywords, content strategy, and organic growth',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Audit', description: 'Comprehensive analysis of your current marketing' },
    { number: '02', title: 'Strategy', description: 'Custom plan tailored to your goals' },
    { number: '03', title: 'Build', description: 'Implementation of campaigns and systems' },
    { number: '04', title: 'Automate', description: 'AI-powered automation for efficiency' },
    { number: '05', title: 'Optimize', description: 'Continuous improvement and testing' },
    { number: '06', title: 'Scale', description: 'Growth and expansion of successful tactics' },
  ];

  const stats = [
    { number: '250%', label: 'Avg. ROI Increase' },
    { number: '10K+', label: 'Leads Generated' },
    { number: '50+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Retention' },
  ];

  const benefits = [
    'Proven track record in retrofit marketing',
    'AI-powered automation for maximum efficiency',
    'Data-driven strategies that deliver results',
    'Expert team with industry knowledge',
    'Transparent reporting and analytics',
    'Flexible packages to suit your budget',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#102028] via-[#1a3341] to-[#102028] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1fb57a] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#16a5b2] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-16 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Where Smart Marketing Meets <span className="text-[#1fb57a]">Green Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              AI-powered marketing and retrofit lead programs that drive real results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#1fb57a] text-white rounded-lg hover:bg-[#1a9d69] transition-all duration-200 inline-flex items-center justify-center"
              >
                Get a Free Audit
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border-2 border-[#16a5b2] text-white rounded-lg hover:bg-[#16a5b2] transition-all duration-200 inline-flex items-center justify-center"
              >
                See Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#1fb57a] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#102028] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive marketing solutions powered by AI and data-driven insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#1fb57a] hover:shadow-lg transition-all duration-200"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#102028] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-[#1fb57a] hover:text-[#1a9d69] font-semibold"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#102028] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven process delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="text-5xl font-bold text-[#1fb57a] opacity-20 absolute top-4 right-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#102028] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/process"
              className="inline-flex items-center text-[#1fb57a] hover:text-[#1a9d69] font-semibold"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1fb57a] to-[#16a5b2] rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm font-semibold mb-2">FEATURED CASE STUDY</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  250% Increase in Qualified Leads for Retrofit Company
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  How we helped a leading retrofit provider generate over 1,000 qualified leads per month using AI-powered automation and targeted campaigns.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold">250%</div>
                    <div className="text-sm opacity-80">Lead Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">65%</div>
                    <div className="text-sm opacity-80">Lower CPA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4.2x</div>
                    <div className="text-sm opacity-80">ROI</div>
                  </div>
                </div>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#1fb57a] rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
                  <Award className="w-24 h-24 text-white/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why AdSyncro */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#102028] mb-6">
                Why Choose AdSyncro?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                AdSyncro blends automation, AI optimization and retrofit expertise to deliver marketing that actually converts.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#1fb57a] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Users className="w-12 h-12 text-[#1fb57a] mb-4" />
                <h3 className="font-semibold text-[#102028] mb-2">Expert Team</h3>
                <p className="text-sm text-gray-600">Industry-leading specialists</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 mt-8">
                <Bot className="w-12 h-12 text-[#1fb57a] mb-4" />
                <h3 className="font-semibold text-[#102028] mb-2">AI-Powered</h3>
                <p className="text-sm text-gray-600">Cutting-edge automation</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Target className="w-12 h-12 text-[#1fb57a] mb-4" />
                <h3 className="font-semibold text-[#102028] mb-2">Results-Driven</h3>
                <p className="text-sm text-gray-600">Data-backed strategies</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 mt-8">
                <Award className="w-12 h-12 text-[#1fb57a] mb-4" />
                <h3 className="font-semibold text-[#102028] mb-2">Award-Winning</h3>
                <p className="text-sm text-gray-600">Recognized excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#102028] rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Retrofit Business?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Book a free retrofit marketing audit and discover how we can help you generate more qualified leads
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#1fb57a] text-white rounded-lg hover:bg-[#1a9d69] transition-all duration-200"
            >
              Get Your Free Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              We'll reply within 24 hours
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
