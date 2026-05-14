import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import { Share2 } from 'lucide-react';

const SocialMediaPage = () => {
    return (
        <ServiceDetail
            title="Social Media Advertising Agency UK"
            subtitle="Connecting Brands with Precise Audiences"
            description="Scale your business on Facebook, Instagram, LinkedIn, and TikTok. We use advanced behavioral targeting and high-converting creative to stop the scroll and drive action."
            capabilities={[
                "Paid Social Meta Ads",
                "LinkedIn Lead Gen",
                "TikTok Advertising",
                "Creative Strategy & Testing",
                "Custom Audience Building",
                "Social Analytics Tracking"
            ]}
            businessValue={[
                "Enhanced Brand Authority",
                "Direct-to-Consumer Growth",
                "B2B Professional Lead Gen",
                "Rapid Market Scaling"
            ]}
            image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1080"
            color="var(--accent)"
            icon={<Share2 className="w-16 h-16" />}
            seoTitle="Social Media Ads Agency UK | Facebook & LinkedIn Experts"
            seoDescription="Leading social media advertising agency in the UK. Scale your growth with targeted Facebook, Instagram, and LinkedIn ads."
            canonical="/services/social-media-advertising"
            faq={[
                {
                    question: "Which social media platforms do you advertise on?",
                    answer: "We run paid campaigns on Facebook, Instagram, LinkedIn, and TikTok — selecting platforms based on where your ideal audience spends their time and which offers the best ROI for your specific goals."
                },
                {
                    question: "How do you target the right audience on social media?",
                    answer: "We use custom audience building, lookalike audiences, behavioural targeting, and retargeting to ensure your ads reach high-intent prospects most likely to convert into leads or customers."
                }
            ]}
        />
    );
};

export default SocialMediaPage;
