import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import { Layout } from 'lucide-react';

const NativeAdvertisingPage = () => {
    return (
        <ServiceDetail
            title="Native Advertising Agency UK"
            subtitle="Seamless Content Integration for Quality Traffic"
            description="Capture attention where it matters most. Our native advertising campaigns on Taboola, Outbrain, and MGID deliver high-intent users through content that feels natural and trustworthy."
            capabilities={[
                "Taboola & Outbrain Ads",
                "Programmatic Native Media",
                "Editorial Style Copywriting",
                "Placement Optimization",
                "Retargeting Integration",
                "Performance Analysis"
            ]}
            businessValue={[
                "Higher Trust & Engagement",
                "Lower Ad Fatigue",
                "Massive Scale Potential",
                "Premium Publisher Access"
            ]}
            image="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1080"
            color="var(--secondary)"
            icon={<Layout className="w-16 h-16" />}
            seoTitle="Native Advertising Agency UK | Taboola & Outbrain Experts"
            seoDescription="The UK's leading native advertising agency. We specialize in Taboola and Outbrain campaign management to drive high-quality traffic."
            canonical="/services/native-advertising"
            faq={[
                {
                    question: "What platforms do you use for native advertising?",
                    answer: "We manage campaigns on Taboola, Outbrain, and MGID — the UK's leading native content platforms — optimising placement, creatives, and bids for maximum engagement at the lowest cost per click."
                },
                {
                    question: "How is native advertising different from display ads?",
                    answer: "Native ads blend naturally into the publisher's editorial feed, making them far less intrusive than display banners. This results in higher trust, better engagement rates, and significantly lower ad fatigue for your audience."
                }
            ]}
        />
    );
};

export default NativeAdvertisingPage;
