import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import { Target } from 'lucide-react';

const PerformanceMarketingPage = () => {
    return (
        <ServiceDetail
            title="Performance Marketing Agency UK"
            subtitle="ROI-Driven Strategies Optimized for Growth"
            description="We don't just run ads; we engineer growth systems. Our performance marketing approach combines data intelligence with creative excellence to deliver measurable results that impact your bottom line."
            capabilities={[
                "Multi-channel performance audits",
                "Data-driven budget allocation",
                "Conversion rate optimization (CRO)",
                "Advanced attribution modeling",
                "High-intent lead generation",
                "Real-time ROI dashboarding"
            ]}
            businessValue={[
                "Reduced CPA by up to 40%",
                "Increased Lead Quality",
                "Transparent Performance Tracking",
                "Scalable Customer Acquisition"
            ]}
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080"
            color="var(--primary)"
            icon={<Target className="w-16 h-16" />}
            seoTitle="Performance Marketing Agency UK | ROI-Driven Lead Gen"
            seoDescription="AdSyncro is a leading performance marketing agency in the UK. We focus on ROI-driven lead generation, CPA optimisation, and data-backed growth strategies."
            canonical="/services/performance-marketing"
            faq={[
                {
                    question: "What is performance-based marketing?",
                    answer: "Performance-based marketing is a strategy where you pay for results, such as leads or sales, rather than just impressions or clicks. We focus on delivering tangible ROI."
                },
                {
                    question: "How do you measure success?",
                    answer: "We use advanced tracking and attribution to measure CPA, ROAS, and overall lead quality, ensuring every pound spent is accounted for."
                }
            ]}
        />
    );
};

export default PerformanceMarketingPage;
