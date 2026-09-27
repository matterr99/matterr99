import { ProjectDossier, TickerItem, WireDispatch } from '../types';

export const TICKER_DATA: TickerItem[] = [
  { symbol: 'KAIROS.LIQ', label: 'Kairos Macro Liquidity', value: '$3,842.10B', change: '+2.34%', isPositive: true, category: 'macro' },
  { symbol: 'TENNIS.RSI', label: 'Kinematic Efficiency Index', value: '94.2/100', change: '+4.1%', isPositive: true, category: 'tennis' },
  { symbol: 'WEB.LATENCY', label: 'Core Web Vitals TTFB', value: '28ms', change: '-12.5%', isPositive: true, category: 'webdev' },
  { symbol: 'FED.DOTS', label: 'Fed Funds Implied Rate', value: '4.25%', change: '-0.25%', isPositive: false, category: 'macro' },
  { symbol: 'STROKE.VEL', label: 'Forehand Angular Velocity', value: '118 km/h', change: '+3.8%', isPositive: true, category: 'tennis' },
  { symbol: 'REPO.STATUS', label: 'System Build Pipeline', value: 'PROD GREEN', change: '100%', isPositive: true, category: 'webdev' },
  { symbol: 'CROSS.FX', label: 'DXY Sovereign Index', value: '102.40', change: '+0.18%', isPositive: true, category: 'macro' },
];

export const PROJECTS_DATA: ProjectDossier[] = [
  {
    id: 'kairos-macro',
    title: 'Kairos Global Research: Cross-Asset Macro Research Terminal',
    kicker: 'DISPATCH · MACRO INTELLIGENCE',
    deck: 'A unified quantitative intelligence terminal tracking global liquidity flows, sovereign debt dynamics, cross-market FX regimes, and central bank balance sheet contractions.',
    category: 'macro',
    categoryLabel: 'Macro Research',
    status: 'DEVELOPMENT IN PROGRESS',
    statusType: 'progress',
    publishDate: 'September 2026',
    readTime: '6 min read',
    imageUrl: '/src/assets/images/bloomberg_lead_macro_1790446169392.jpg',
    imageCaption: 'The Kairos macro environment integrates multi-asset pricing feeds, central bank balance sheets, and sovereign bond curve metrics into high-density analytical dashboards.',
    liveUrl: 'https://matterr99.github.io/kairos-macro-trading-hub/',
    githubUrl: 'https://github.com/matterr99/kairos-macro-trading-hub',
    summary: 'Kairos Global Research represents a modern institutional framework for decoding global monetary liquidity, interest rate regimes, and capital cycle inflection points in real-time.',
    keyTakeaways: [
      'Multi-currency global liquidity aggregate model monitoring Fed, ECB, BOJ, and PBOC balance sheets in synchronized intervals.',
      'Sovereign yield curve inversion tracking with dynamic spread monitors (2Y/10Y, 3M/10Y) and term-premia calculations.',
      'High-frequency institutional research briefs synthesising geopolitical shocks, commodity super-cycles, and currency adjustments.',
      'Modular client architecture engineered for instant execution, clean tabular data display, and minimal cognitive load.'
    ],
    metrics: [
      { label: 'Asset Classes Covered', value: '6 Major Regimes', delta: 'FX, Rates, Equities, Energy, Gold, Credit', isPositive: true },
      { label: 'Liquidity Update Frequency', value: 'Real-time Feed', delta: 'Sub-second rendering', isPositive: true },
      { label: 'Quantitative Indicators', value: '28+ Core Models', delta: '+6 Added this quarter', isPositive: true },
      { label: 'Target Audience', value: 'Institutional / PMs', delta: 'Macro discretionary desks', isPositive: true },
    ],
    specifications: {
      architecture: 'High-Throughput Responsive Macro Terminal SPA with Client-Side Vector Engine',
      technologies: ['TypeScript', 'Modern Reactive Web Engines', 'Quantitative Charting Systems', 'Tailwind CSS', 'Tabular Numeral Math Engine'],
      focusArea: 'Macroeconomics, Sovereign Debt, Central Banking & Quantitative Cross-Asset Trading',
      targetUsers: 'Discretionary Macro Portfolio Managers, Quantitative Researchers, Independent Asset Allocators',
    },
    deepDiveContent: [
      {
        heading: 'The Structural Macro Problem: Information Fragmentation',
        paragraphs: [
          'In contemporary financial markets, cross-asset data is siloed across prohibitively expensive proprietary terminals and fragmented public repositories. Discretionary macro traders and independent researchers lose critical decision latency reconciling disparate data streams.',
          'Kairos Global Research bridges this gap by unifying global liquidity aggregations, sovereign yield curves, and macroeconomic regime models into an ultra-streamlined, responsive analytical terminal designed for clear signal extraction.'
        ]
      },
      {
        heading: 'Algorithmic Liquidity & Yield Decomposition',
        paragraphs: [
          'The core engine normalizes balance sheet expansions across G4 central banks, accounting for Reverse Repo (RRP) drawdowns and Treasury General Account (TGA) fluctuations. This provides an unobstructed view of net net USD liquidity injecting into asset prices.',
          'Users can drill down from high-level global liquidity indices into localized rate differentials, inflation breakevens, and historical monetary regimes.'
        ]
      },
      {
        heading: 'Architecture & Terminal Experience',
        paragraphs: [
          'Built with zero bloat and uncompromising visual rigor. Every table utilizes strict tabular numerals for optical vertical alignment, high-contrast dark palette to minimize eye strain during extended market hours, and modular cards for custom analytical layouts.'
        ]
      }
    ]
  },
  {
    id: 'tennis-portfolio',
    title: 'High-Performance Athletic Science: Modern Tennis Training Insights',
    kicker: 'ATHLETIC METHODOLOGY · BIOMECHANICS',
    deck: 'Player development methodologies, kinetic chain efficiency diagnostics, and match analytics bridging sport science with on-court competitive execution.',
    category: 'tennis',
    categoryLabel: 'Athletic Science',
    status: 'LIVE MODULE',
    statusType: 'live',
    publishDate: 'August 2026',
    readTime: '4 min read',
    imageUrl: '/src/assets/image/IMG_5243.jpeg',
    imageCaption: 'Kinematic tracking visualizer highlighting ground reaction force vector transmission through hip-shoulder rotational separation.',
    liveUrl: 'https://matterr99.github.io/Tennis-portfolio/index.html',
    githubUrl: 'https://github.com/matterr99/Tennis-portfolio',
    summary: 'A deep-dive digital monograph and coaching repository establishing scientific methodologies for junior and professional player progression, stroke biomechanics, and match tactical intelligence.',
    keyTakeaways: [
      'Comprehensive kinetic chain breakdown isolating leg drive, core torque, shoulder uncoiling, and racket head lag acceleration.',
      'Periodized training protocols balancing neuromuscular power generation, injury prevention, and tactical court positioning.',
      'Interactive stroke diagnostic guides for coaches, competitive players, and performance analysts.',
      'Live deployment ready on GitHub Pages with comprehensive drills and coaching frameworks.'
    ],
    metrics: [
      { label: 'Kinetic Chain Modules', value: '12 Deep Dives', delta: 'Serve, Forehand, Backhand, Footwork', isPositive: true },
      { label: 'Drill Video / Schematics', value: '45+ Protocols', delta: 'Complete annual curriculum', isPositive: true },
      { label: 'Deployment Status', value: '100% Live Production', delta: 'Accessible globally', isPositive: true },
      { label: 'Application Type', value: 'Open Educational Dossier', delta: 'Free community access', isPositive: true },
    ],
    specifications: {
      architecture: 'Single Page Modern Digital Monograph & Drills Catalog',
      technologies: ['Modern HTML5 / Canvas', 'Tailwind CSS', 'Responsive Touch Engine', 'Biomechanical Vector Diagramming'],
      focusArea: 'Tennis Biomechanics, High-Performance Coaching, Kinetic Chain Optimization',
      targetUsers: 'Tennis Players, Academy Directors, Strength & Conditioning Specialists',
    },
    deepDiveContent: [
      {
        heading: 'The Shift Toward Biomechanical Precision',
        paragraphs: [
          'Modern tennis is no longer coached through subjective imitation; it is an exact discipline of physics, ground reaction forces, and angular momentum transfer. Every millimeter of racket-face angle and millisecond of hip-shoulder separation dictates ball spin rate and court penetration.',
          'The Tennis Portfolio compiles years of rigorous on-court player coaching, video telemetry, and kinetic chain research into an accessible, structured knowledge base.'
        ]
      },
      {
        heading: 'Player Development Pillars',
        paragraphs: [
          'The repository addresses three foundational pillars: Mechanical Efficiency (protecting joints while maximizing stroke RPM), Tactical Geometry (exploiting court angles and depth differentials), and Cognitive Resilience under high-stakes competitive pressure.'
        ]
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Modern Web Engineering: Production UI/UX & Systems Architecture',
    kicker: 'ENGINEERING · FULL-STACK',
    deck: 'Architectural showcase of high-density user interfaces, reactive state paradigms, and clean TypeScript/React applications built for speed and precision.',
    category: 'webdev',
    categoryLabel: 'Web Systems',
    status: 'ACTIVE REPOSITORY',
    statusType: 'repo',
    publishDate: 'September 2026',
    readTime: '5 min read',
    imageUrl: '/src/assets/images/bloomberg_web_architecture_1790446190321.jpg',
    imageCaption: 'High-density client interfaces prioritize sub-30ms interaction feedback, strict tabular data alignment, and minimal layout shift.',
    summary: 'A curated showcase of full-stack engineering repositories, custom algorithmic calculators, interactive canvases, and production web applications built with modern architectural discipline.',
    keyTakeaways: [
      'Zero-slop interface philosophy: Eliminated candy pill wrappers, low-contrast text, and unnecessary animation latency.',
      'High-performance client rendering with sub-30ms input response and complete keyboard navigation accessibility.',
      'Modular TypeScript architecture with rigorous component boundaries and typed domain schemas.',
      'Interactive real-time visualizations utilizing WebGL and Canvas 2D render loops for fluid 60fps data modeling.'
    ],
    metrics: [
      { label: 'Avg TTFB / First Paint', value: '< 35ms', delta: 'Optimized asset bundles', isPositive: true },
      { label: 'Codebase Standards', value: '100% Strict TypeScript', delta: 'Zero any escape hatches', isPositive: true },
      { label: 'Accessibility Score', value: '100 / 100 Lighthouse', delta: 'WCAG AA contrast verified', isPositive: true },
      { label: 'Design System', value: 'Editorial / High-Density', delta: 'Bloomberg & Broadsheet inspired', isPositive: true },
    ],
    specifications: {
      architecture: 'Full-Stack React + Vite + TypeScript Client with Express Backend & Serverless API Routes',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Motion Engine', 'Express / Node.js', 'Canvas 2D / WebGL'],
      focusArea: 'High-Density Dashboards, Real-Time Data Visualization, Editorial Publishing Systems',
      targetUsers: 'Founders, Product Teams, Engineering Leads seeking high-craft software engineering',
    },
    deepDiveContent: [
      {
        heading: 'Philosophy: Density, Legibility & Performance',
        paragraphs: [
          'Modern web applications have too often sacrificed information density for bloated whitespace and ornamental fluff. Professional users—whether traders, coaches, or engineers—demand immediate access to high-fidelity data without having to dig through five layers of nested modals.',
          'My engineering approach emphasizes typographic hierarchy, instant feedback loops (<100ms), and mathematically sound layouts that scale seamlessly across 1440px desktop workstations and mobile devices alike.'
        ]
      },
      {
        heading: 'Component Craftsmanship & Anti-Slop Discipline',
        paragraphs: [
          'Adhering to strict anti-slop rules: zero arbitrary badge sandwiches, unboxed metadata with subtle typographic separators, strictly tabular numerals for vertical data alignment, and deliberate 60-30-10 palette discipline.'
        ]
      }
    ]
  }
];

export const WIRE_DISPATCHES: WireDispatch[] = [
  {
    id: 'wire-01',
    timestamp: '11:04 AM EDT',
    kicker: 'MACRO ALERT',
    title: 'Kairos Liquidity Index flags USD reserve contraction across Asian central banks',
    summary: 'Cross-border FX intervention signals upward pressure on short-end sovereign yields as liquidity conditions tighten heading into Q4.',
    category: 'macro',
    relatedProject: 'kairos-macro',
    tags: ['Liquidity', 'FX Reserves', 'Central Banks']
  },
  {
    id: 'wire-02',
    timestamp: '09:45 AM EDT',
    kicker: 'TENNIS METHODOLOGY',
    title: 'Biomechanics study on racket-lag acceleration published to Tennis Portfolio module',
    summary: 'New kinematic breakdown showing +8.4% rotational speed gains through active thoracic spine uncoiling during closed-stance forehands.',
    category: 'tennis',
    relatedProject: 'tennis-portfolio',
    tags: ['Biomechanics', 'Forehand', 'Kinetic Chain']
  },
  {
    id: 'wire-03',
    timestamp: '08:20 AM EDT',
    kicker: 'SYSTEM UPDATE',
    title: 'Production portfolio updated to Bloomberg-style high-density editorial format',
    summary: 'Complete architectural migration to unified editorial broadsheet with real-time ticker, tabular data alignment, and dark/light terminal modes.',
    category: 'webdev',
    relatedProject: 'web-development',
    tags: ['UI/UX', 'Architecture', 'Performance']
  },
  {
    id: 'wire-04',
    timestamp: 'YESTERDAY',
    kicker: 'MACRO RESEARCH',
    title: 'Yield Curve Term-Premia Model integrated into Kairos Macro Terminal',
    summary: 'Added Adrian, Crump & Moench (ACM) 10-year term premium decomposition for evaluating real duration risk.',
    category: 'macro',
    relatedProject: 'kairos-macro',
    tags: ['Yield Curve', 'ACM Model', 'Duration']
  },
  {
    id: 'wire-05',
    timestamp: '2 DAYS AGO',
    kicker: 'COACHING DISPATCH',
    title: 'Junior development tournament curriculum released for competitive academies',
    summary: 'Structured 16-week periodization guide covering tactical shot patterns, recovery nutrition, and psychological pressure routines.',
    category: 'tennis',
    relatedProject: 'tennis-portfolio',
    tags: ['Curriculum', 'Junior Tour', 'Periodization']
  },
  {
    id: 'wire-06',
    timestamp: '3 DAYS AGO',
    kicker: 'ENGINEERING NOTE',
    title: 'Canvas 2D render loop optimization achieves steady 60fps across mobile viewports',
    summary: 'Refactored trajectory particle engine and wave rendering for battery-friendly sub-5% CPU utilization.',
    category: 'webdev',
    relatedProject: 'web-development',
    tags: ['Performance', 'Canvas2D', 'Optimization']
  }
];

export const AUTHOR_PROFILE = {
  name: 'Gabriel Vasquez',
  role: 'Quantitative Macro Analyst, High-Performance Tennis Methodologist & Full-Stack Web Engineer',
  location: 'Global / Remote',
  email: 'matterr99@outlook.com',
  bio: 'Specialized in cross-asset macro liquidity modeling, high-performance tennis player development, and modern software architectures. Building high-density tools where data, physical discipline, and engineering converge.',
  avatarUrl: '/src/assets/images/bloomberg_gabriel_portrait_1790446199679.jpg',
  competencies: [
    { label: 'Macro & Quantitative Finance', detail: 'Global Liquidity, Sovereign Debt, FX Regimes, Cross-Asset Strategy' },
    { label: 'Athletic Science & Tennis', detail: 'Kinetic Chain Diagnostics, Periodized Coaching, Tactical Analytics' },
    { label: 'Software Architecture', detail: 'React 19, TypeScript, Tailwind CSS, High-Density UI, Canvas/WebGL' }
  ],
  externalLinks: {
    tennisLive: 'https://matterr99.github.io/Tennis-portfolio/index.html',
    kairosLive: 'https://matterr99.github.io/kairos-macro-trading-hub/',
    github: 'https://github.com/matterr99',
  }
};
