import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import { Search } from 'lucide-react';

const SEOServicesPage = () => {
    return (
        <ServiceDetail
            title="SEO Services UK"
            subtitle="Dominating Search Results with Authority"
            description="Beyond keyword rankings, we build topical authority. Our SEO strategies are designed to capture high-intent search traffic and convert it into loyal customers through technical excellence and semantic content."
            capabilities={[
                "Technical SEO Audits",
                "Topical Authority Content",
                "Strategic Link Building",
                "Local SEO Optimization",
                "E-E-A-T Signal Enhancement",
                "Semantic Entity Mapping"
            ]}
            businessValue={[
                "Sustainable Organic Growth",
                "Increased Brand Visibility",
                "Compounding ROI over time",
                "High-Intent Traffic Capture"
            ]}
            image="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1080"
            color="var(--secondary)"
            icon={<Search className="w-16 h-16" />}
            seoTitle="SEO Agency UK | Technical & Enterprise SEO Services"
            seoDescription="Expert SEO agency in the UK providing technical SEO, content strategy, and link building. Boost your organic rankings and drive high-intent traffic."
            canonical="/services/seo-services"
            faq={[
                {
                    question: "How long does it take to see SEO results?",
                    answer: "While some technical fixes show immediate impact, sustainable organic growth typically takes 3-6 months as authority compounds."
                },
                {
                    question: "Do you focus on Local SEO?",
                    answer: "Yes, we provide specialized local SEO services for UK businesses targeting specific regions like London, Manchester, and Birmingham."
                }
            ]}
        />
    );
};

export default SEOServicesPage;
