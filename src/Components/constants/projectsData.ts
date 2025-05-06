export interface Project {
    title: string;
    description: string;
    icon: string;
    color: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
    link?: string;
    tags?: string[];
  }
  
  export const PROJECTS: Project[] = [
    {
      title: "LeadMarketing.com",
      description: "Real Estate website where I enhanced visibility and authority with off-page strategies.",
      icon: "HomeModernIcon",
      color: "blue",
      link: "https://leadmarketing.com",
      tags: ["SEO Strategy", "Backlink Building"]
    },
    {
      title: "shop.acssllc.ae",
      description: "E-Commerce website where I improved SEO through on-page fixes, keyword use, and link-building.",
      icon: "ShoppingCartIcon",
      color: "green",
      link: "https://shop.acssllc.ae",
      tags: ["E-commerce SEO", "Keyword Research"]
    }
  ];