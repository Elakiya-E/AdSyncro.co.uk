import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Target, Zap, Award, Users, ArrowRight, CheckCircle2, BarChart3, Clock, Shield, Hammer } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import heroImage from '@/assets/hero-image.jpg';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const services = [
    {
      id: 'ai-automation',
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: 'AI Automation',
      description: 'Intelligent systems that connect marketing, data, and operations to remove manual effort and improve lead quality.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NjY1NzYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'retrofit',
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: 'Retrofit Lead Gen',
      description: 'Generate high intent homeowner demand with AI optimized targeting, grant aligned messaging, and conversion ready journeys.',
      image: 'https://images.unsplash.com/photo-1630404991412-9504d094e8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1aWxkaW5nJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzY2NTYyMTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'paid-media',
      icon: <Target className="w-12 h-12 text-primary" />,
      title: 'Paid Media',
      description: 'Run performance campaigns optimized by AI insights, ensuring every click feeds into a measurable system.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NjU1OTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'seo-content',
      icon: <Award className="w-12 h-12 text-primary" />,
      title: 'SEO & Content',
      description: 'Build long term visibility using intent driven SEO and content designed to convert, not just rank.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBtYXJrZXRpbmclMjBjb250ZW50fGVufDF8fHx8MTc2NjU3NjM0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Audit', description: 'We assess your current demand flow, data, and conversion gaps.', icon: <BarChart3 /> },
    { number: '02', title: 'Strategy', description: 'AI backed growth architecture tailored to your sector and goals.', icon: <Target /> },
    { number: '03', title: 'Build', description: 'Landing systems, automation workflows, and tracking infrastructure.', icon: <Hammer /> },
    { number: '04', title: 'Automate', description: 'AI handles lead scoring, routing, and optimization.', icon: <Bot /> },
    { number: '05', title: 'Optimize', description: 'Continuous improvement driven by performance data.', icon: <TrendingUp /> },
    { number: '06', title: 'Scale', description: 'Expand reach while maintaining efficiency and compliance.', icon: <Award /> },
  ];



  const benefits = [
    'AI first architecture',
    'Sector specific expertise (retrofit & regulated services)',
    'Compliance ready systems',
    'Transparent performance tracking',
    'Scalable by design',
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
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center py-10 md:py-0">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Blobs removed for cleaner look */}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{ opacity, scale }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
              >

                <span className="text-sm font-semibold text-black">AI-Powered Marketing Solutions</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
                Where Smart Marketing Meets{' '}
                <span className="text-primary inline-block">
                  Green Innovation
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                AdSyncro is an AI powered growth automation platform helping retrofit, regulated, and growth focused businesses generate qualified demand, streamline operations, and scale sustainably.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <Link
                    to="/contact"
                    className="group px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get a Free Audit
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    to="/case-studies"
                    className="group px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    See Case Studies
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 flex items-center gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <span>24h response time</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={heroImage}
                  alt="AI Marketing Solution"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute top-8 -right-4 bg-white rounded-lg p-4 shadow-xl border border-gray-100"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">+250%</div>
                    <div className="text-xs text-muted-foreground">Avg ROI</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -left-4 bg-white rounded-lg p-4 shadow-xl border border-gray-100"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">10K+</div>
                    <div className="text-xs text-muted-foreground">Leads Generated</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}

      </section>

      {/* Trust Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by retrofit specialists, regulated service providers, and growth driven SMEs.</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              "Compliance ready workflows",
              "AI driven lead qualification",
              "Built for performance, privacy, and scale"
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <CheckCircle2 className="w-6 h-6 text-primary mr-3" />
                <span className="text-lg font-medium text-gray-800">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview with Images */}
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
              <span className="text-black font-semibold">Our Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Purpose Built Solutions for Complex Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AdSyncro delivers outcome focused growth systems designed for industries where accuracy, compliance, and efficiency matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(228,185,11,0.15)] transition-all duration-300 border border-gray-100 hover:border-primary/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <motion.div
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300 relative z-10"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore All Solutions
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Process Timeline */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              <span className="text-black font-semibold">Our Process</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 6-step methodology delivers consistent results
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

            <div className="space-y-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        {index % 2 === 0 && (
                          <>
                            <div>
                              <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                            </div>
                            <motion.div
                              className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              {step.icon}
                            </motion.div>
                          </>
                        )}
                        {index % 2 !== 0 && (
                          <>
                            <motion.div
                              className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              {step.icon}
                            </motion.div>
                            <div>
                              <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                            </div>
                          </>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <motion.div
                    className="hidden lg:block w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-white shadow-lg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, boxShadow: "0 0 0 0 rgba(228, 185, 11, 0.7)" }}
                    viewport={{ once: true }}
                    animate={{
                      boxShadow: ["0 0 0 0 rgba(228, 185, 11, 0.7)", "0 0 0 10px rgba(228, 185, 11, 0)"]
                    }}
                    transition={{
                      type: "spring", stiffness: 200, delay: index * 0.1,
                      boxShadow: { duration: 1.5, repeat: Infinity }
                    }}
                  />

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/process"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study with Image */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NjUzMzE4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-16 text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-4">
                  <span className="text-sm font-semibold text-white">FEATURED CASE STUDY</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Driving Retrofit Leads at Scale
                </h2>
                <div className="mb-6">
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Client</p>
                  <p className="text-xl text-white">Retrofit Energy Provider</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Challenge</p>
                  <p className="text-lg text-gray-300">Low quality leads and inconsistent demand.</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Solution</p>
                  <p className="text-lg text-gray-300">AI driven targeting, grant aligned messaging, and automated qualification.</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-2">Impact</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Higher lead to appointment rate</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Reduced acquisition costs</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Predictable monthly demand</li>
                  </ul>
                </div>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  <motion.div
                    className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ opacity: 0.2 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-32 h-32 text-primary" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why AdSyncro with Benefits */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4"
              >
                <span className="text-black font-semibold">Why Choose Us</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Built for Performance, Not Guesswork
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                AdSyncro blends automation, AI optimization, and domain expertise to turn complex growth challenges into measurable outcomes.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    </motion.div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: <Users />, title: 'Expert Team', desc: 'Industry-leading specialists' },
                { icon: <Bot />, title: 'AI-Powered', desc: 'Cutting-edge automation' },
                { icon: <Target />, title: 'Results-Driven', desc: 'Data-backed strategies' },
                { icon: <Award />, title: 'Award-Winning', desc: 'Recognized excellence' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-[0_10px_40px_rgba(22,165,178,0.15)] transition-all duration-300 border border-gray-100 ${index % 2 === 1 ? 'mt-8' : ''
                    }`}
                >
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Magnet - Free Audit */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden text-white"
          >
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-6"
                >
                  <span className="text-white font-semibold">Limited Time Offer</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Free Growth & Automation Audit
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Discover where automation, AI, and smarter targeting can unlock immediate growth opportunities.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                >
                  Get a Free Audit
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  What you get:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Funnel & data audit",
                    "Lead quality assessment",
                    "Automation opportunities",
                    "Actionable growth roadmap"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Ready to grow with intelligence and automation?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg font-semibold w-full sm:w-auto justify-center"
                >
                  Get a Free Audit
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg font-semibold w-full sm:w-auto justify-center"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </div>
            <p className="text-muted-foreground font-medium tracking-wide uppercase text-sm">
              Privacy first. Performance driven. Built to scale.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
