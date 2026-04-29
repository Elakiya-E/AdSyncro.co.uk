import { Link } from 'react-router-dom';
import { motion, Variants, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import adsyncroLogoFinal from '@/assets/adsyncro-logo-final.png';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // TODO: Replace with your Google Apps Script Web App URL after deploying
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubmitting(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          email: newsletterEmail,
          type: 'newsletter',
          fullName: 'Newsletter Subscriber',
          timestamp: new Date().toISOString()
        })
      });
      setSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Newsletter error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <footer className="bg-white/40 backdrop-blur-md border-t border-white/50 text-foreground relative overflow-hidden">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-80"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company Info & Newsletter */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <img src={adsyncroLogoFinal} alt="AdSyncro" className="h-10 w-auto" />
              </motion.div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Empowering sustainable growth through AI-driven marketing and compliance-ready automation.
              </p>

              {/* Newsletter Mini-Section */}
              <div className="pt-4">
                <h5 className="font-semibold text-xs mb-3 text-foreground uppercase tracking-wider">Stay Updated</h5>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={submitted ? "Thanks for joining!" : "Enter your email"}
                    disabled={isSubmitting || submitted}
                    required
                    className={`bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm ${submitted ? 'border-primary text-primary font-medium' : ''}`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className={`bg-primary text-white p-2 rounded-lg hover:bg-secondary transition-all shadow-md flex items-center justify-center shrink-0 ${isSubmitting ? 'opacity-50' : ''}`}
                  >
                    <ArrowUp className={`w-4 h-4 transition-transform ${submitted ? 'rotate-0' : 'rotate-45'}`} />
                  </button>
                </form>
              </div>

              <div className="flex space-x-4 pt-2">
                {[
                  {
                    id: 'instagram',
                    href: 'https://www.instagram.com/adsyncro_?igsh=NncxNGJ5MW9qa2Fz&utm_source=qr',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <defs>
                          <linearGradient id="insta-gradient-footer" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#E1306C" />
                            <stop offset="0.5" stopColor="#F77737" />
                            <stop offset="1" stopColor="#FCAF45" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" fill="url(#insta-gradient-footer)" />
                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zM18.406 5.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" fill="url(#insta-gradient-footer)" />
                      </svg>
                    ),
                    text: 'Connect with us on Instagram'
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.id === 'instagram' ? '_blank' : '_self'}
                    rel={social.id === 'instagram' ? 'noopener noreferrer' : ''}
                    className="hover:opacity-80 transition-all bg-white py-4 px-4 rounded-full shadow-sm border border-gray-100 flex items-center gap-3 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {social.icon}
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{social.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-foreground mb-2">Quick Links</h4>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Services', path: '/solutions' },
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Pricing', path: '/pricing' },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                    >
                      <ArrowUp className="w-3 h-3 mr-2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      <span className="group-hover:font-medium transition-all">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-foreground mb-2">Services</h4>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {[
                  { name: 'AI Automation', id: 'ai-automation' },
                  { name: 'Retrofit Lead Gen', id: 'retrofit' },
                  { name: 'Paid Media', id: 'paid-media' },
                  { name: 'SEO & Content', id: 'seo-content' },
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground group cursor-pointer"
                  >
                    <Link to={`/solutions#${service.id}`} className="flex items-center w-full">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                      <span className="group-hover:text-foreground transition-colors">{service.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-foreground mb-2">Contact Us</h4>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: <Mail size={18} />, text: 'Info@adsyncro.co.uk', href: 'mailto:Info@adsyncro.co.uk' },
                  { icon: <Phone size={18} />, text: '+44 7523 812314', href: 'tel:+447523812314' },
                  { icon: <MapPin size={18} />, text: 'London, UK', href: null },
                ].map((contact, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start bg-white/50 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                    whileHover={{ x: 2, scale: 1.02 }}
                  >
                    <motion.span
                      className="mr-3 mt-0.5 text-primary bg-primary/10 p-2 rounded-full"
                      whileHover={{ rotate: 15 }}
                    >
                      {contact.icon}
                    </motion.span>
                    <div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors font-medium block"
                        >
                          {contact.text}
                        </a>
                      ) : (
                        <span className="text-muted-foreground font-medium">{contact.text}</span>
                      )}

                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-6 pt-6 bg-[#000943] rounded-xl px-4 py-4 shadow-xl border border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-medium"
              >
                &copy; {new Date().getFullYear()} AdSyncro. All rights reserved.
              </motion.p>
              <div className="mt-4 md:mt-0 flex gap-6">
                {[
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Terms of Service', path: '/terms' },
                  { name: 'Cookie Policy', path: '/cookies' },
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-white hover:text-secondary transition-colors hover:underline decoration-secondary/30 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button - Outside footer to avoid backdrop-filter clipping */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-12 h-12 bg-white border border-gray-100 text-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl z-[60] group"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
