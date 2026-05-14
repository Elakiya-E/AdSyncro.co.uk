import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import { Users } from 'lucide-react';

const B2BLeadGenPage = () => {
    return (
        <ServiceDetail
            title="B2B Lead Generation Services"
            subtitle="Fueling Your Pipeline with Qualified Leads"
            description="Quality over quantity. We identify and engage your ideal B2B target audience, delivering high-intent leads that are ready for your sales team to close."
            capabilities={[
                "Account-Based Marketing (ABM)",
                "LinkedIn Outreach Systems",
                "Lead Scoring & Filtering",
                "Cold Outreach Automation",
                "CRM Syncing",
                "Pipeline Management"
            ]}
            businessValue={[
                "Increased Sales Pipeline",
                "Higher Lead-to-Close Ratios",
                "Better CRM Data Integrity",
                "Predictable B2B Growth"
            ]}
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080"
            color="var(--primary)"
            icon={<Users className="w-16 h-16" />}
            seoTitle="B2B Lead Generation Agency UK | Account-Based Marketing"
            seoDescription="Professional B2B lead generation services in the UK. We help businesses fill their pipelines with high-quality, qualified B2B leads."
            canonical="/services/b2b-lead-generation"
            faq={[
                {
                    question: "How do you qualify B2B leads?",
                    answer: "We use a combination of lead scoring models, firmographic data, and behavioural signals to filter out low-intent prospects — ensuring your sales team only receives highly qualified, sales-ready leads."
                },
                {
                    question: "What industries do you generate B2B leads for?",
                    answer: "We specialise in retrofit & energy, regulated services, professional services, SaaS, and growth-focused SMEs across the UK — sectors where compliance, trust, and precision targeting are critical."
                }
            ]}
        />
    );
};

export default B2BLeadGenPage;
