export interface Skill {
    title: string;
    icon: string;
    items: string[];
    color: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
    isTools?: boolean;
  }
  
  export interface Tool {
    name: string;
    image: string;
    category: string;
  }
  
  export const SKILLS: Skill[] = [
    {
      title: "On-Page SEO",
      icon: "DocumentTextIcon",
      items: [
        "Title tags optimization",
        "Meta descriptions",
        "Header tags structure",
        "Content optimization"
      ],
      color: "blue"
    },
    {
      title: "Off-Page SEO",
      icon: "LinkIcon",
      items: [
        "Link building strategies",
        "Guest posting",
        "Web 2.0 creation",
        "Business listings"
      ],
      color: "green"
    },
    {
      title: "Technical SEO",
      icon: "CogIcon",
      items: [
        "Sitemap creation",
        "Robots.txt configuration",
        "HTTPS implementation",
        "Crawl optimization"
      ],
      color: "purple"
    },
    {
      title: "Local SEO",
      icon: "MapIcon",
      items: [
        "Google Business Profile optimization",
        "Local citations",
        "Hyperlocal content creation"
      ],
      color: "red"
    },
    {
      title: "Tools",
      icon: "ChartBarIcon",
      items: [
        "Google Analytics",
        "Search Console",
        "GitHub",
        "Cloudflare",
        "Vercel"
      ],
      color: "yellow",
      isTools: true
    }
  ];
  
  export const TOOLS: Tool[] = [
    {
      name: "Google Analytics",
      image: "google-analytics.svg",
      category: "Analytics"
    },
    {
      name: "Google Search Console",
      image: "search-console.svg",
      category: "Monitoring"
    },
    {
      name: "Ahrefs",
      image: "ahrefs.svg",
      category: "SEO"
    },
    {
      name: "SEMrush",
      image: "semrush.svg",
      category: "SEO"
    },
    {
      name: "Screaming Frog",
      image: "screaming-frog.svg",
      category: "Technical SEO"
    }
  ];