/**
 * AdSyncro Dynamic Sitemap Generator
 * Runs at build time via vite.config.ts
 * Generates /public/sitemap.xml with all static + dynamic routes
 * DO NOT modify - SEO infrastructure only
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SITE_URL = 'https://adsyncro.co.uk';
const TODAY = new Date().toISOString().split('T')[0];

// ─── Static Routes ────────────────────────────────────────────────────────────
const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about-us', priority: '0.8', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/performance-marketing', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/seo-services', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/ppc-management', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/email-marketing', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/native-advertising', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/social-media-advertising', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/b2b-lead-generation', priority: '0.9', changefreq: 'monthly' },
    { path: '/services/web-development', priority: '0.9', changefreq: 'monthly' },
    { path: '/solutions', priority: '0.8', changefreq: 'monthly' },
    { path: '/case-studies', priority: '0.8', changefreq: 'weekly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact-us', priority: '0.8', changefreq: 'monthly' },
    { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { path: '/process', priority: '0.8', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.5', changefreq: 'monthly' },
    { path: '/cookies', priority: '0.5', changefreq: 'monthly' },
    { path: '/terms', priority: '0.5', changefreq: 'monthly' },
];

// ─── Dynamic Blog Slugs ───────────────────────────────────────────────────────
// These are the known blog slugs from the default data in BlogPage.tsx
// Add new slugs here as blog posts are published via the CMS
const blogSlugs = [
    'how-ai-improves-retrofit-lead-quality',
    'building-compliance-ready-growth-systems',
    'scaling-smes-with-automation',
];

// ─── Dynamic Case Study Slugs ──────────────────────────────────────────────────
// Add new slugs here as case studies are published via the CMS
const caseStudySlugs = [
    'retrofit-energy-provider',
];

// ─── Build URL Entries ─────────────────────────────────────────────────────────
function makeUrl({ loc, lastmod, changefreq, priority }) {
    return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
    ].join('\n');
}

const allUrls = [
    // Static routes
    ...staticRoutes.map(r => makeUrl({
        loc: `${SITE_URL}${r.path}`,
        lastmod: TODAY,
        changefreq: r.changefreq,
        priority: r.priority,
    })),

    // Blog detail pages
    ...blogSlugs.map(slug => makeUrl({
        loc: `${SITE_URL}/blog/${slug}`,
        lastmod: TODAY,
        changefreq: 'monthly',
        priority: '0.7',
    })),

    // Case study detail pages
    ...caseStudySlugs.map(slug => makeUrl({
        loc: `${SITE_URL}/case-studies/${slug}`,
        lastmod: TODAY,
        changefreq: 'monthly',
        priority: '0.7',
    })),
];

// ─── Write Sitemap ─────────────────────────────────────────────────────────────
const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allUrls,
    '</urlset>',
].join('\n');

const outputPath = resolve(ROOT, 'public', 'sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf-8');

const totalUrls = staticRoutes.length + blogSlugs.length + caseStudySlugs.length;
console.log(`✅ Sitemap generated: ${outputPath}`);
console.log(`   ${totalUrls} URLs | lastmod: ${TODAY}`);
