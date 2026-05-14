import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import { Code2 } from 'lucide-react';

const WebDevelopmentPage = () => {
    return (
        <ServiceDetail
            title="Web Design & Development"
            subtitle="High-Performance Digital Experiences"
            description="Your website is your best salesperson. We build lightning-fast, conversion-optimized websites that serve as the foundation for your performance marketing success."
            capabilities={[
                "Modern React/Next.js Apps",
                "Conversion Optimization",
                "Core Web Vitals Focus",
                "Mobile-First Experience",
                "Custom CRM Integrations",
                "Brand Identity Design"
            ]}
            businessValue={[
                "Faster Load Times (LCP)",
                "Lower Bounce Rates",
                "Higher Trust & Authority",
                "Seamless Marketing Integration"
            ]}
            image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1080"
            color="var(--secondary)"
            icon={<Code2 className="w-16 h-16" />}
            seoTitle="Web Design & Development UK | Conversion-Focused Sites"
            seoDescription="High-performance web design and development services in the UK. We build fast, responsive, and SEO-optimized websites for businesses."
            canonical="/services/web-development"
            faq={[
                {
                    question: "Do you build websites that are optimised for SEO?",
                    answer: "Yes, every website we build is architected with SEO from the ground up — including Core Web Vitals optimisation, semantic HTML structure, fast load times, mobile-first design, and schema markup."
                },
                {
                    question: "What technology do you use to build websites?",
                    answer: "We primarily build with React and Next.js for high-performance, scalable applications. For simpler sites, we use Vite-based setups. All builds are focused on speed, conversion, and seamless CRM integration."
                }
            ]}
        />
    );
};

export default WebDevelopmentPage;
