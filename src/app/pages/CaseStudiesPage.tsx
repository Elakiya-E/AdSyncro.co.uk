import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, Award, Target, CheckCircle2, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'Retrofit Lead Generation at Scale',
      client: 'Retrofit Energy Provider',
      industry: 'Retrofit & Energy',
      challenge: 'The client struggled with inconsistent lead quality, rising acquisition costs, and low homeowner trust despite strong demand for retrofit services.',
      solution: [
        'AI driven homeowner targeting',
        'Grant aligned messaging frameworks',
        'Conversion optimized landing journeys',
        'Automated lead qualification and routing'
      ],
      image: 'https://images.unsplash.com/photo-1631277190979-1704e8c7d574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW5zdWxhdGlvbiUyMHJldHJvZml0fGVufDF8fHx8MTc2NjU2MjYwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      results: [
        'Significant improvement in lead quality',
        'Higher appointment booking rates',
        'Reduced cost per qualified lead'
      ],
      testimonial: {
        quote: "The quality of leads transformed our operations. We spend less time filtering and more time seeking installs.",
        author: "Operations Director",
        position: "National Retrofit Provider"
      }
    },
    {
      id: 2,
      title: 'Compliance Ready Growth for a Regulated Service Provider',
      client: 'Regulated Services Firm',
      industry: 'Regulated Services',
      challenge: 'Growth initiatives were limited by strict compliance requirements, manual lead checks, and fragmented tracking.',
      solution: [
        'Privacy first automation workflows',
        'Lead validation and approval logic',
        'Audit ready tracking and reporting',
        'Controlled AI optimization'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NjU1OTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      results: [
        'Safer, compliant lead acquisition',
        'Reduced manual processing time',
        'Improved visibility across the funnel'
      ],
      testimonial: {
        quote: "Finally, a growth partner that understands the regulatory environment as well as we do.",
        author: "Head of Compliance",
        position: "Leading Financial Firm"
      }
    },
    {
      id: 3,
      title: 'Automation Led Scaling for an SME',
      client: 'Digital Growth SME',
      industry: 'Digital Growth (SMEs)',
      challenge: 'The business needed to scale demand without increasing headcount or operational complexity.',
      solution: [
        'AI assisted campaign execution',
        'CRM driven pipelines',
        'Automated follow ups and scoring',
        'Real time performance dashboards'
      ],
      image: 'https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjUxMzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      results: [
        'Faster lead response times',
        'Improved conversion rates',
        'Scalable, repeatable growth systems'
      ],
      testimonial: {
        quote: "I've reclaimed my time and doubled my revenue. The system works.",
        author: "Founder",
        position: "B2B Service Agency"
      }
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
              <span className="text-sm font-semibold text-black">Success Stories</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Proven Results from{' '}
              <span className="text-black">AI Powered</span> Growth Systems
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AdSyncro helps organizations – from scaling SMEs to national retrofit providers – automate their growth and turn demand into predictable revenue.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
            >
              {[
                { number: '50+', label: 'Success Stories' },
                { number: '10K+', label: 'Leads Generated' },
                { number: '250%', label: 'Avg ROI' },
                { number: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm"
                >
                  <div className="text-3xl font-bold mb-1 text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Case Study Number */}
                <motion.div
                  className="absolute -top-8 left-0 text-[150px] font-bold text-primary/5 -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  0{study.id}
                </motion.div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}>
                  {/* Image Section */}
                  <motion.div
                    className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={study.image}
                        alt={study.client}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Industry Badge */}
                      <motion.div
                        className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <span className="text-sm font-semibold text-black">{study.industry}</span>
                      </motion.div>

                      {/* Results Grid */}
                      {/* Results Grid Removed to adapt to new content structure */}
                      {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.slice(0, 2).map((result, resultIndex) => (
                            <motion.div
                              key={resultIndex}
                              className="text-white"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + resultIndex * 0.1 }}
                            >
                              <div className="text-2xl font-bold">{result.metric}</div>
                              <div className="text-sm text-gray-300">{result.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div> */}
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div
                      className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <span className="text-black font-semibold">Case Study</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {study.title}
                    </h2>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          Challenge
                        </h3>
                        <p className="text-muted-foreground pl-4">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                          Solution
                        </h3>
                        <p className="text-muted-foreground pl-4 space-y-2">
                          {study.solution.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-secondary mt-1.5">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </p>
                      </div>
                    </div>

                    {/* Results Cards */}
                    <div className="grid grid-cols-1 gap-4 mb-8">
                      {study.results.map((result, resultIndex) => (
                        <motion.div
                          key={resultIndex}
                          className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: resultIndex * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <motion.div
                            className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <TrendingUp className="w-4 h-4" />
                          </motion.div>
                          <div className="font-semibold text-foreground">{result}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <motion.div
                      className="bg-primary p-6 rounded-2xl text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex flex-col items-center text-center gap-4">
                        <motion.div
                          animate={{
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Award className="w-8 h-8 text-white flex-shrink-0" />
                        </motion.div>
                        <div>
                          <p className="text-gray-300 mb-4 italic">"{study.testimonial.quote}"</p>
                          <div>
                            <div className="font-semibold">{study.testimonial.author}</div>
                            <div className="text-sm text-gray-400">{study.testimonial.position}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-16">
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
              <span className="text-primary font-semibold">Impact Metrics</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              How We Measure Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every case study is built around clear performance indicators
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <TrendingUp />, title: 'Lead quality & conversion rates', description: 'Focusing on high intent appointments.' },
              { icon: <DollarSign />, title: 'Cost efficiency', description: 'Reducing CPA while increasing scale.' },
              { icon: <Zap />, title: 'Automation impact', description: 'Saving hours of manual admin work.' },
              { icon: <Target />, title: 'Scalability and compliance', description: 'Growing safely within regulatory bounds.' },
            ].map((factor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {factor.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">{factor.title}</h3>
                <p className="text-muted-foreground">{factor.description}</p>
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
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Start Your Success Story
              </h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                See how AI powered automation can transform your growth.
              </p>

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
              <p className="mt-4 text-sm text-gray-400 opacity-80">
                We’ll respond within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
