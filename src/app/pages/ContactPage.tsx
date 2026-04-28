import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, Users, Shield, ArrowRight, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    company: '',
    role: '',
    serviceInterest: '',
    postcode: '',
    message: '',
    consent: false,
    // Hidden fields
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmTerm: '',
    utmContent: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  // TODO: Replace with your Google Apps Script Web App URL after deploying
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorVisible(false);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          ...formData,
          type: 'audit',
          email: formData.workEmail,
          fullName: formData.fullName,
          phone: formData.phoneNumber,
          interest: formData.serviceInterest,
          timestamp: new Date().toISOString(),
        })
      });

      // Since we use no-cors, we can't read the response body as JSON
      // but we can assume success if the request completes without error
      setSubmitted(true);
      setFormData({
        fullName: '',
        workEmail: '',
        phoneNumber: '',
        company: '',
        role: '',
        serviceInterest: '',
        postcode: '',
        message: '',
        consent: false,
        utmSource: '',
        utmMedium: '',
        utmCampaign: '',
        utmTerm: '',
        utmContent: ''
      });
      setTimeout(() => setSubmitted(false), 8000);

    } catch (error) {
      console.error('Submission error:', error);
      setErrorVisible(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const stats = [
    { number: '< 24h', label: 'Response Time', icon: <Clock /> },
    { number: '98%', label: 'Client Satisfaction', icon: <CheckCircle2 /> },
    { number: '50+', label: 'Active Clients', icon: <Users /> },
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
      <section className="relative overflow-hidden pt-24 pb-12 lg:py-32">
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
                <span className="text-sm font-semibold text-black">Contact</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Let’s Talk About <span className="text-black">Smarter Growth</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Whether you’re exploring automation, scaling retrofit demand, or building compliance ready growth systems, we’re here to help.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Start with a free audit and discover how AI powered automation can support your goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-12 border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Get a Free Audit
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete the form below and our team will review your requirements and respond within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p>We've received your submission and will get back to you soon.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden Fields for Tracking */}
                  <input type="hidden" name="utmSource" value={formData.utmSource} />
                  <input type="hidden" name="utmMedium" value={formData.utmMedium} />
                  <input type="hidden" name="utmCampaign" value={formData.utmCampaign} />
                  <input type="hidden" name="utmTerm" value={formData.utmTerm} />
                  <input type="hidden" name="utmContent" value={formData.utmContent} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="AdsyncPro"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Director of Growth"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="adsyncpro@gmail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="+44 7000 000000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Postcode
                      </label>
                      <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="SW1A 1AA"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="retrofit-energy">Retrofit & Energy</option>
                      <option value="regulated-services">Regulated Services</option>
                      <option value="digital-growth">Digital Growth (SMEs)</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to the processing of my data in accordance with the Privacy Policy.
                    </label>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      {isSubmitting ? 'Sending Request...' : 'Get a Free Audit'}
                    </button>
                    {errorVisible && (
                      <p className="text-red-500 text-center text-sm mt-3 font-medium">
                        Sorry, something went wrong. Please try again or call us directly.
                      </p>
                    )}
                    <p className="text-center text-sm text-gray-400 mt-3">
                      We’ll respond within 24 hours.
                    </p>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Sidebar Content */}
            <div className="space-y-12">
              {/* What Happens Next */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary text-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-white" />
                    What Happens Next
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold mb-1">We review your submission</h4>
                        <p className="text-gray-400 text-sm">Our team analyzes your requirements to ensure the best fit.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold mb-1">Assess fit and opportunities</h4>
                        <p className="text-gray-400 text-sm">We identify key growth levers and compliance needs.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold mb-1">Share clear next steps</h4>
                        <p className="text-gray-400 text-sm">We'll propose a tailored roadmap or schedule a detailed call.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-700/50 text-center text-gray-400 italic text-sm">
                    No pressure. No obligation. Just clarity.
                  </div>
                </div>
              </motion.div>

              {/* Alternative Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md text-center"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Alternative Contact</h3>
                <p className="text-muted-foreground mb-6">Prefer to speak directly?</p>
                <a href="tel:+447523812314" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5" />
                  Request a Quote or Schedule a Call
                </a>
              </motion.div>

              {/* Trust & Privacy */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Shield className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Trust & Privacy</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Your data is handled securely and used only to assess and respond to your request. We follow privacy first and compliance ready practices across all systems.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <p className="text-lg text-gray-700 font-medium mb-4">Ready to take the next step?</p>
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center text-secondary font-bold hover:text-primary transition-all">
                  Get a Free Audit <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
