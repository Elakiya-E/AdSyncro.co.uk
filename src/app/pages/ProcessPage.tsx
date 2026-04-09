import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Lightbulb, Hammer, Bot, TrendingUp, Rocket, ArrowRight, CheckCircle2, Clock, Users, Target, BarChart3, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ProcessPage() {
  const processSteps = [
    {
      number: '01',
      title: 'Audit',
      icon: <Search className="w-12 h-12" />,
      description: 'We begin by evaluating your existing demand flow, data quality, tracking, and conversion performance.',
      outcome: 'A clear view of what’s working, what’s not, and where automation can unlock growth.',
      deliverables: [
        'Lead sources & quality',
        'Funnel performance',
        'Tracking & attribution',
        'Automation gaps',
        'Compliance considerations'
      ],
      image: 'https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY2NDkwMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--primary)',
    },
    {
      number: '02',
      title: 'Strategy',
      icon: <Lightbulb className="w-12 h-12" />,
      description: 'Using audit insights, we design a sector-specific growth strategy aligned with your goals, data maturity, and compliance needs.',
      outcome: 'A clear, actionable roadmap built for scale.',
      deliverables: [
        'Target audience & intent signals',
        'Messaging frameworks',
        'Channel strategy',
        'Automation logic',
        'KPIs & success metrics'
      ],
      image: 'https://images.unsplash.com/photo-1730382624761-af8112d26209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwZ3JhcGglMjBncm93dGh8ZW58MXx8fHwxNzY2NTYyNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--accent)',
    },
    {
      number: '03',
      title: 'Build',
      icon: <Hammer className="w-12 h-12" />,
      description: 'We build the systems that power performance — from landing experiences to automation workflows.',
      outcome: 'A connected growth system ready for automation.',
      deliverables: [
        'Conversion-optimized landing pages',
        'CRM integrations',
        'Lead scoring & routing',
        'Tracking & analytics setup'
      ],
      image: 'https://images.unsplash.com/photo-1762341107847-d4d75c6da8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjU1MDc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--primary)',
    },
    {
      number: '04',
      title: 'Automate',
      icon: <Bot className="w-12 h-12" />,
      description: 'Automation removes manual bottlenecks and ensures every lead is handled efficiently and consistently.',
      outcome: 'Faster response times and higher lead conversion.',
      deliverables: [
        'Lead qualification',
        'Follow-ups & routing',
        'Data synchronization',
        'Performance monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1752614671119-4868a91efc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90JTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NjY1NjI2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--accent)',
    },
    {
      number: '05',
      title: 'Optimize',
      icon: <TrendingUp className="w-12 h-12" />,
      description: 'We continuously refine performance using real-time insights and AI-driven optimization.',
      outcome: 'Consistent improvement and reduced waste.',
      deliverables: [
        'Targeting & messaging',
        'Funnel performance',
        'Cost efficiency',
        'Conversion rates'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NjU1OTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--primary)',
    },
    {
      number: '06',
      title: 'Scale',
      icon: <Rocket className="w-12 h-12" />,
      description: 'Once systems are proven, we scale reach and volume while maintaining performance and compliance.',
      outcome: 'Predictable, scalable growth without added complexity.',
      deliverables: [
        'Expanded targeting',
        'Increased automation depth',
        'Advanced reporting',
        'Long-term growth planning'
      ],
      image: 'https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjUxMzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--accent)',
    },
  ];

  const whyItWorks = [
    {
      icon: <Search />,
      title: 'Clarity',
      description: 'Transparent tracking and clear deliverables.',
    },
    {
      icon: <CheckCircle2 />,
      title: 'Compliance',
      description: 'Built for regulated industries.',
    },
    {
      icon: <BarChart3 />,
      title: 'Conversion',
      description: 'Focused on high intent leads.',
    },
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
              <span className="text-sm font-semibold text-primary">Our Proven Process</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              A Structured Path from <span className="text-primary">Insight</span> to Scaled Growth
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AdSyncro follows a clear, repeatable process designed to reduce risk, improve efficiency, and deliver measurable outcomes. Each step is powered by data, automation, and continuous optimization.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { icon: <Clock />, text: '6-8 weeks to launch' },
                { icon: <CheckCircle2 />, text: 'Proven methodology' },
                { icon: <Users />, text: 'Dedicated team' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/50 shadow-sm"
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Step Number Background */}
                <motion.div
                  className="absolute -top-12 left-0 text-[180px] font-bold opacity-5 -z-10"
                  style={{ color: step.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {step.number}
                </motion.div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}>
                  {/* Content Section */}
                  <motion.div
                    className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="p-4 rounded-2xl"
                        style={{
                          backgroundColor: `${step.color}15`,
                          color: step.color
                        }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: step.color }}>
                          STEP {step.number}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xl text-gray-600 mb-6">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="font-semibold text-primary">Outcome:</span>
                        <span>{step.outcome}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
                      <h3 className="font-semibold text-foreground mb-4">What We Review/Define/Build:</h3>
                      <ul className="space-y-3">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <motion.li
                            key={deliverableIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: deliverableIndex * 0.1 }}
                            whileHover={{ x: 10 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            </motion.div>
                            <span className="text-gray-700">{deliverable}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Image Section */}
                  <motion.div
                    className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Floating Step Badge */}
                      <motion.div
                        className="absolute top-6 right-6 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl"
                        style={{ backgroundColor: step.color }}
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {step.number}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="flex justify-center my-8"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight
                        className="w-12 h-12 transform rotate-90"
                        style={{ color: step.color }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-primary font-semibold">Why It Works</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Built on Proven Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our methodology is designed to deliver consistent, measurable results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {whyItWorks.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mb-6 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
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
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <Rocket className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ready to Start?
              </h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Discover how this process can work for your business.
              </p>

              <div className="flex flex-col items-center gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
                  >
                    Get a Free Audit
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </motion.div>
                <div className="flex items-center gap-2 mt-4 text-white/90 font-semibold">
                  <span>We’ll respond within 24 hours.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
