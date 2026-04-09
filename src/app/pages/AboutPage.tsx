import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Target, Users, Award, TrendingUp, Shield, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import retrofitCardImage from '@/assets/retrofit-card-final.png';


export default function AboutPage() {
  const differentiators = [
    {
      title: 'Platform First Approach',
      description: 'AdSyncro is built as a connected system — not isolated tactics. Every workflow, insight, and optimization feeds into a single growth engine.',
      icon: <Target className="w-8 h-8 text-primary" />
    },
    {
      title: 'AI Driven by Design',
      description: 'From lead scoring to performance optimization, AI powers decision making across the funnel.',
      icon: <Zap className="w-8 h-8 text-secondary" />
    },
    {
      title: 'Sector Specific Expertise',
      description: 'We specialize in retrofit & energy, regulated services, and growth focused SMEs — industries where precision matters.',
      icon: <Award className="w-8 h-8 text-primary" />
    },
    {
      title: 'Compliance & Trust',
      description: 'Privacy, governance, and auditability are embedded into every solution.',
      icon: <Shield className="w-8 h-8 text-secondary" />
    }
  ];

  const focusAreas = [
    'AI powered growth automation',
    'Retrofit & energy demand systems',
    'Compliance ready growth frameworks',
    'Scalable digital growth for SMEs'
  ];

  const philosophy = [
    { title: 'Intelligent', desc: 'driven by data, not assumptions' },
    { title: 'Efficient', desc: 'automated where possible' },
    { title: 'Responsible', desc: 'compliant and transparent' },
    { title: 'Scalable', desc: 'built to grow with your business' }
  ];

  const partners = [
    'Retrofit & energy providers',
    'Regulated service organizations',
    'Growth driven SMEs',
    'Strategic B2B partners'
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
              >
                <span className="text-sm font-semibold text-primary">About AdSyncro</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Built for <span className="text-primary">Intelligent</span>, Scalable Growth
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                AdSyncro is an AI powered growth automation platform designed to help businesses grow with precision, efficiency, and confidence. We exist to replace fragmented marketing efforts with intelligent systems that scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2NjQ3NzEwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team at Office"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why AdSyncro Exists */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-5xl mx-auto"
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />

              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Target className="w-32 h-32 text-foreground" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 relative z-10">
                  Why AdSyncro Exists
                  <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full"></div>
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed relative z-10">
                  <p>
                    Growth today is complex. Businesses face rising acquisition costs, fragmented data, compliance pressures, and limited operational bandwidth.
                  </p>
                  <p className="font-semibold text-primary text-xl">
                    AdSyncro was built to solve this.
                  </p>
                  <p>
                    We combine automation, AI optimization, and sector expertise to create growth systems that are measurable, compliant, and designed for long term performance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-10 border border-white/50"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Focus Areas</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {focusAreas.map((area, index) => (
                  <li key={index} className="flex items-center gap-4 p-4 bg-white/70 rounded-xl shadow-sm border border-white/60">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section >


      {/* What Makes AdSyncro Different */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Makes AdSyncro Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-white/50"
              >
                <div className="p-3 bg-primary/10 rounded-xl inline-block mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Our Philosophy */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4"
            >
              <span className="text-primary font-semibold">Our Philosophy</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Growth Should Be</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/40 backdrop-blur-sm p-6 rounded-xl text-center border border-white/50 hover:border-primary transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">— {item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Who We Work With */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Who We Work With</h2>
            <p className="text-xl text-muted-foreground">Collaborating with leaders in energy, regulation, and growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Retrofit & Energy Providers', img: retrofitCardImage },
              { name: 'Regulated Service Organizations', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY1NjUxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
              { name: 'Growth Driven SMEs', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nfGVufDF8fHx8MTc2NjU2NTE0MHww&ixlib=rb-4.1.0&q=80&w=1080' },
              { name: 'Strategic B2B Partners', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya2luZ3xlbnwxfHx8fDE3NjY1NjUxODd8MA&ixlib=rb-4.1.0&q=80&w=1080' }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={partner.img}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                  <div className="h-1 w-12 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-10 shadow-xl border border-primary/10 relative overflow-hidden"
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
                Ready to Build Smarter Growth?
              </h2>
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Discover how AdSyncro can support your growth journey.
              </p>

              <div className="flex flex-col items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-10 py-5 bg-white text-primary text-lg font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Get a Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <div className="flex items-center gap-2 mt-2 text-white/90 font-semibold">
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
