const publicSite =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_PUBLIC_SITE_URL) ||
  'https://furqan-portfolio-two.vercel.app'

export const projectCategories = ['All', 'Web Apps', 'Shopify', 'WordPress', 'Branding']

export const projects = [
  {
    id: 'devportfolio',
    title: 'DevPortfolio',
    description:
      'A cinematic personal portfolio with glass UI, motion design, and a developer-first aesthetic.',
    category: 'Web Apps',
    tags: ['React', 'Next.js', 'Tailwind'],
    gradient: 'from-violet-600 via-fuchsia-600 to-indigo-900',
    liveUrl: publicSite,
    repoUrl: 'https://github.com/Furqanamir-7/PortfolioWebsite',
  },
  {
    id: 'shopease',
    title: 'ShopEase',
    description:
      'Custom Shopify theme with advanced collection filtering, quick view, and conversion-focused UX.',
    category: 'Shopify',
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    gradient: 'from-emerald-600 via-teal-700 to-slate-900',
    liveUrl: 'https://themes.shopify.com',
    repoUrl: 'https://github.com/furqanamir/shopease',
  },
  {
    id: 'blogpress',
    title: 'BlogPress',
    description:
      'Editorial WordPress theme with modular blocks and Elementor-ready sections for publishers.',
    category: 'WordPress',
    tags: ['WordPress', 'PHP', 'Elementor'],
    gradient: 'from-sky-600 via-blue-800 to-slate-950',
    liveUrl: 'https://wordpress.org/themes/',
    repoUrl: 'https://github.com/furqanamir/blogpress',
  },
  {
    id: 'brandkit',
    title: 'BrandKit',
    description:
      'Full brand identity and social media creative system for a modern lifestyle brand launch.',
    category: 'Branding',
    tags: ['Figma', 'Illustrator'],
    gradient: 'from-amber-500 via-orange-600 to-rose-900',
    liveUrl: 'https://www.behance.net',
    repoUrl: 'https://github.com/furqanamir/brandkit',
  },
]
