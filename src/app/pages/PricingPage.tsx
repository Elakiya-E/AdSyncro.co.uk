import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, TrendingUp, Rocket, HelpCircle, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      subtitle: 'For Early Stage or Pilot Engagements',
      icon: <Zap className="w-8 h-8" />,
      description: 'Designed for businesses beginning their automation and performance journey.',
      monthlyPrice: 'Contact for Pricing',
      annualPrice: 'Contact for Pricing',
      color: '#1fb57a',
      popular: false,
      features: [
        'Growth & automation audit',
        'Core funnel setup',
        'Basic AI automation workflows',
        'Essential tracking & reporting',
        'Monthly performance review',
      ],
      bestFor: [
        'SMEs testing automation',
        'New retrofit initiatives',
        'Proof of concept projects',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Growth',
      subtitle: 'For Businesses Ready to Scale',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Built for organizations seeking predictable demand and deeper automation.',
      monthlyPrice: 'Request Quote',
      annualPrice: 'Request Quote',
      color: '#16a5b2',
      popular: true,
      features: [
        'Advanced funnel architecture',
        'AI driven lead scoring & routing',
        'Multi channel acquisition setup',
        'CRM & analytics integrations',
        'Continuous optimization',
      ],
      bestFor: [
        'Growing SMEs',
        'Retrofit providers scaling demand',
        'Regulated services with steady volume',
      ],
      cta: 'Request a Quote',
    },
    {
      name: 'Enterprise',
      subtitle: 'For Complex, Compliance Led Growth',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Tailored solutions for organizations with advanced requirements, multiple stakeholders, and strict governance.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      color: '#1fb57a',
      popular: false,
      features: [
        'Custom automation architecture',
        'Compliance ready workflows',
        'Advanced reporting & dashboards',
        'Dedicated optimization roadmap',
        'Strategic performance reviews',
      ],
      bestFor: [
        'Large retrofit programs',
        'Regulated enterprises',
        'Multi region operations',
      ],
      cta: 'Talk to an Expert',
    },
  ];

  const faqs = [
    {
      question: 'What\'s included in the ad budget?',
      answer: 'The pricing shown is our management fee. Ad spend is separate and paid directly to the platforms (Google, Facebook, etc.). We recommend a minimum ad budget of £2,000/month for Starter, £5,000/month for Growth, and £10,000+/month for Enterprise.',
    },
    {
      question: 'Is there a contract or minimum commitment?',
      answer: 'We require a 3-month minimum commitment to allow time for optimization and results. After that, all plans are month-to-month with 30 days notice to cancel.',
    },
    {
      question: 'What kind of results can I expect?',
      answer: 'While results vary by industry and competition, our clients typically see 2-3x ROI within 6 months. We focus on qualified leads, not just traffic, ensuring you get homeowners ready to retrofit.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can upgrade at any time. Downgrades take effect at the start of your next billing cycle.',
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Yes! If none of our standard plans fit your needs, we can create a custom package. Contact our sales team to discuss your specific requirements.',
    },
    {
      question: 'What makes AdSyncro different from other agencies?',
      answer: 'We specialize exclusively in retrofit and green energy marketing. Our team understands EPC data, grant systems, and homeowner psychology. Plus, we leverage AI automation to maximize efficiency and results.',
    },
  ];

  const addOns = [
    { name: 'Additional Landing Pages', price: '£500/page' },
    { name: 'Video Ad Creation', price: '£1,500/video' },
    { name: 'Advanced SEO Package', price: '£2,000/month' },
    { name: 'Social Media Management', price: '£1,500/month' },
    { name: 'Content Marketing', price: '£2,500/month' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

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
              <span className="text-sm font-semibold text-black">Transparent Pricing</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Flexible <span className="text-black">Engagement Models</span> Built for Scale
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AdSyncro offers transparent, value driven pricing designed to match your growth stage, technical maturity, and compliance requirements. Each engagement focuses on outcomes, automation depth, and long term scalability.
            </p>

            {/* Billing Toggle Removed as per new content structure which doesn't emphasize monthly/annual toggle */}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: plan.popular ? 1.02 : 1.05 }}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${plan.popular ? 'md:scale-105' : ''
                  }`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-semibold"
                    initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                  >
                    MOST POPULAR
                  </motion.div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: `${plan.color}15`,
                      color: plan.color
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {plan.icon}
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <div className="text-sm text-black font-semibold mb-4 h-10">{plan.subtitle}</div>
                  <p className="text-muted-foreground mb-6 min-h-[48px]">{plan.description}</p>

                  {/* Price Removed/Hidden as per new content structure focus on engagement models */}
                  {/* <div className="mb-6">
                    <motion.div
                      className="flex items-baseline"
                      key={billingCycle}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {typeof plan.monthlyPrice === 'number' ? (
                        <>
                          <span className="text-4xl md:text-5xl font-bold text-foreground">
                            £{billingCycle === 'monthly'
                              ? plan.monthlyPrice.toLocaleString()
                              : (typeof plan.annualPrice === 'number' ? Math.floor(plan.annualPrice / 12) : 0).toLocaleString()
                            }
                          </span>
                          <span className="text-muted-foreground ml-2">/month</span>
                        </>
                      ) : (
                        <span className="text-4xl md:text-5xl font-bold text-foreground">
                          {plan.monthlyPrice}
                        </span>
                      )}
                    </motion.div>
                    {billingCycle === 'annual' && typeof plan.annualPrice === 'number' && (
                      <div className="text-sm text-muted-foreground mt-1">
                        £{plan.annualPrice.toLocaleString()} billed annually
                      </div>
                    )}
                  </div> */}

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-8"
                  >
                    <Link
                      to="/contact"
                      className={`block text-center px-6 py-4 rounded-lg transition-all duration-300 bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl`}
                    >
                      {plan.cta}
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </Link>
                  </motion.div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">Includes:</div>
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Best For */}
                  <div className="space-y-4">
                    <div className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">Best For:</div>
                    {plan.bestFor.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Engagements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Custom Engagements: Built Around Your Needs</h3>
                <p className="text-gray-300 text-lg max-w-2xl">
                  If your requirements don’t fit a standard model, we design a custom engagement aligned to your goals, systems, and constraints.
                </p>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg font-bold"
                >
                  Request a Custom Quote
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4"
            >
              <span className="text-black font-semibold">FAQ</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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


              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Our free audit helps identify the right engagement model for your business.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 mt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get a Free Audit
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </motion.div>
                <p className="text-sm text-gray-400 opacity-80 font-medium">
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
