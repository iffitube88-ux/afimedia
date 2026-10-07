// Case study data - separated for better code splitting
export const detailedCaseStudies = [
  {
    id: 1,
    icon: '🛍️',
    title: 'E-commerce Fashion Brand',
    industry: 'Fashion & Retail',
    overview: 'Helped a growing e-commerce fashion brand scale from $50K to $500K monthly revenue through strategic Meta Ads campaigns and conversion optimization.',
    challenge: 'Client was struggling with high customer acquisition costs and low conversion rates. Their previous agency failed to deliver consistent results, and they were burning through ad budget without seeing proportional returns.',
    solution: 'We implemented a comprehensive Meta Ads strategy focusing on lookalike audiences, dynamic product ads, and retargeting funnels. Combined with landing page optimization and email marketing automation.',
    strategies: [
      'Created custom lookalike audiences based on high-value customers',
      'Implemented dynamic product ads for personalized recommendations',
      'Built multi-touch retargeting funnels with progressive offers',
      'Optimized landing pages for mobile-first experience',
      'Set up abandoned cart email sequences with 3-touch follow-up'
    ],
    results: [
      { value: '4.8x', label: 'Return on Ad Spend' },
      { value: '$500K', label: 'Monthly Revenue' },
      { value: '62%', label: 'Reduction in CAC' }
    ],
    timeline: [
      { phase: 'Month 1', title: 'Audit & Strategy', description: 'Comprehensive audit of existing campaigns and customer data analysis' },
      { phase: 'Month 2', title: 'Campaign Launch', description: 'Launched optimized Meta Ads campaigns with new audience segments' },
      { phase: 'Month 3', title: 'Optimization', description: 'Continuous A/B testing and budget reallocation based on performance' },
      { phase: 'Month 4-6', title: 'Scaling', description: 'Scaled winning campaigns and expanded to new product lines' }
    ],
    testimonial: {
      quote: 'lamaMedia transformed our e-commerce business. We went from struggling with ad spend to consistently hitting 4.8x ROAS. Their data-driven approach and strategic thinking are unmatched.',
      name: 'Sarah Johnson',
      title: 'CEO, Fashion Brand'
    }
  },
  {
    id: 2,
    icon: '🏥',
    title: 'Local Dental Practice',
    industry: 'Healthcare',
    overview: 'Transformed a local dental practice from invisible in search results to dominating local SEO with 28 page 1 rankings and 45+ new patients monthly.',
    challenge: 'Dental practice had virtually no online presence. They were invisible in local search results, relying entirely on word-of-mouth referrals. Competitors with better SEO were capturing all the local traffic.',
    solution: 'Implemented comprehensive local SEO strategy including Google Business Profile optimization, local citation building, schema markup, and location-specific landing pages.',
    strategies: [
      'Optimized Google Business Profile with complete information and regular posts',
      'Built 50+ local citations across relevant directories',
      'Implemented local schema markup for better search visibility',
      'Created location-specific landing pages for each service area',
      'Developed content strategy targeting local search intent'
    ],
    results: [
      { value: '+312%', label: 'Organic Traffic Increase' },
      { value: '28', label: 'Page 1 Rankings' },
      { value: '45+', label: 'New Patients Monthly' }
    ],
    timeline: [
      { phase: 'Month 1', title: 'Technical Foundation', description: 'Complete technical SEO audit and fixes, schema implementation' },
      { phase: 'Month 2-3', title: 'Content Creation', description: 'Location pages, service pages, and blog content' },
      { phase: 'Month 4-5', title: 'Local Citations', description: 'Built 50+ local citations and optimized GBP profile' },
      { phase: 'Month 6', title: 'Review Generation', description: 'Implemented patient review generation system' }
    ],
    testimonial: {
      quote: 'The results speak for themselves. We went from page 3 to position 1 for our main keywords in 4 months. We are now generating 45+ new patients monthly from organic search alone.',
      name: 'Dr. Jennifer Rodriguez',
      title: 'Owner, Dental Practice'
    }
  },
  {
    id: 3,
    icon: '💻',
    title: 'B2B SaaS Startup',
    industry: 'Technology',
    overview: 'Helped a B2B SaaS startup reduce customer acquisition cost from $450 to $180 while scaling to $45K MRR in 90 days through full-funnel Google Ads strategy.',
    challenge: 'SaaS startup was burning through capital with unsustainable customer acquisition costs. Their $450 CAC made it impossible to achieve profitability. They needed a scalable, cost-effective acquisition channel.',
    solution: 'Implemented full-funnel Google Ads strategy with advanced keyword targeting, landing page optimization, and conversion tracking improvements.',
    strategies: [
      'Restructured Google Ads account with dedicated campaigns for each funnel stage',
      'Implemented advanced keyword targeting with negative keyword optimization',
      'Created 15 high-converting landing pages with A/B testing',
      'Deployed conversion tracking with proper attribution modeling',
      'Implemented lead scoring and CRM integration for sales alignment'
    ],
    results: [
      { value: '6.2x', label: 'Return on Ad Spend' },
      { value: '+$45K', label: 'Monthly Recurring Revenue' },
      { value: '$180', label: 'New CAC (from $450)' }
    ],
    timeline: [
      { phase: 'Week 1-2', title: 'Audit & Planning', description: 'Complete account audit and strategy development' },
      { phase: 'Week 3-4', title: 'Landing Pages', description: 'Created 15 optimized landing pages for different segments' },
      { phase: 'Week 5-8', title: 'Campaign Launch', description: 'Phased campaign launch with rigorous testing' },
      { phase: 'Week 9-12', title: 'Scale & Optimize', description: 'Continuous optimization and budget scaling' }
    ],
    testimonial: {
      quote: 'lamaMedia helped us reduce our CAC by 60% while scaling to $45K MRR in 90 days. Their full-funnel approach and data-driven optimization was exactly what we needed for our Series A.',
      name: 'Robert Kim',
      title: 'Founder & CEO, SaaS Startup'
    }
  }
];
