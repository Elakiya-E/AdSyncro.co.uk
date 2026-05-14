import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import { MousePointerClick } from 'lucide-react';

const PPCManagementPage = () => {
    return (
        <ServiceDetail
            title="PPC Management UK"
            subtitle="Precision Targeting for Immediate Impact"
            description="Maximize your Google Ads and Bing spend with AI-optimized campaigns. We focus on high-conversion keywords and landing page synergy to drive the lowest possible cost per lead."
            capabilities={[
                "Google Ads Management",
                "Bing Ads & Search Partners",
                "PPC Performance Audits",
                "Remarketing Campaigns",
                "Ad Copy A/B Testing",
                "Landing Page Optimization"
            ]}
            businessValue={[
                "Lower Cost Per Acquisition",
                "Instant Search Visibility",
                "Measurable Lead Volume",
                "Scalable PPC Success"
            ]}
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080"
            color="var(--accent)"
            icon={<MousePointerClick className="w-16 h-16" />}
            seoTitle="PPC Agency UK | Google Ads Management London"
            seoDescription="Professional PPC agency in the UK specializing in Google Ads, search marketing, and conversion focus. Get more leads for your ad spend."
            canonical="/services/ppc-management"
            faq={[
                {
                    question: "How do you optimize PPC budget?",
                    answer: "We use granular tracking and AI-driven bidding strategies to ensure your budget is allocated to the highest-performing keywords and audiences."
                },
                {
                    question: "Do you handle landing pages?",
                    answer: "Yes, we design and optimize landing pages to ensure that the traffic we drive has the highest possible chance of converting."
                }
            ]}
        />
    );
};

export default PPCManagementPage;
