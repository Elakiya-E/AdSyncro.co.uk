import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';
import { Mail } from 'lucide-react';

const EmailMarketingPage = () => {
    return (
        <ServiceDetail
            title="Email Marketing Agency UK"
            subtitle="Nurturing Leads into Loyal Customers"
            description="Turn your data into revenue. Our email marketing strategies combine powerful automation with personalized messaging to drive retention and high-value lead generation."
            capabilities={[
                "Email Automation Flows",
                "CRM Data Integration",
                "Lead Drip Campaigns",
                "A/B Subject Line Testing",
                "Subscriber Segmentation",
                "Deliverability Optimization"
            ]}
            businessValue={[
                "Increased Customer Lifetime Value",
                "Higher Engagement Rates",
                "Automated Lead Nurturing",
                "Zero Ad Spend Retention"
            ]}
            image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080"
            color="var(--primary)"
            icon={<Mail className="w-16 h-16" />}
            seoTitle="Email Marketing Services UK | B2B Email Lead Gen"
            seoDescription="Top email marketing agency in the UK. We provide automated email services, B2B lead generation, and performance-driven email campaigns."
            canonical="/services/email-marketing"
            faq={[
                {
                    question: "What types of email marketing campaigns do you run?",
                    answer: "We run automated drip campaigns, promotional broadcasts, re-engagement sequences, lead nurturing flows, and B2B outreach campaigns — all deeply integrated with your CRM."
                },
                {
                    question: "Can you help improve our email deliverability?",
                    answer: "Yes, we audit your sending infrastructure, clean subscriber lists, optimise domain authentication (SPF, DKIM, DMARC), and implement best practices to maximise inbox placement rates."
                }
            ]}
        />
    );
};

export default EmailMarketingPage;
