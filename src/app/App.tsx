import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ProcessPage from './pages/ProcessPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import TermsPage from './pages/TermsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

import ScrollToHash from './components/ScrollToHash';

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <CookieBanner />
      <div className="fixed inset-0 -z-10 bg-[#D9DCE5]"></div>
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-primary/5 blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] rounded-full bg-secondary/5 blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] left-[20%] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-gray-100/40 blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="min-h-screen flex flex-col relative pt-16 lg:pt-20">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}