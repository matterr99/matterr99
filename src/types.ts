export type ThemeMode = 'dark' | 'light';

export type Category = 'all' | 'macro' | 'tennis' | 'webdev' | 'wire';

export interface TickerItem {
  symbol: string;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  category: string;
}

export interface ProjectDossier {
  id: string;
  title: string;
  kicker: string;
  deck: string;
  category: 'macro' | 'tennis' | 'webdev';
  categoryLabel: string;
  status: 'LIVE MODULE' | 'DEVELOPMENT IN PROGRESS' | 'ACTIVE REPOSITORY';
  statusType: 'live' | 'progress' | 'repo';
  publishDate: string;
  readTime: string;
  imageUrl: string;
  imageCaption: string;
  liveUrl?: string;
  githubUrl?: string;
  summary: string;
  keyTakeaways: string[];
  metrics: {
    label: string;
    value: string;
    delta?: string;
    isPositive?: boolean;
  }[];
  specifications: {
    architecture: string;
    technologies: string[];
    focusArea: string;
    targetUsers: string;
  };
  deepDiveContent: {
    heading: string;
    paragraphs: string[];
  }[];
}

export interface WireDispatch {
  id: string;
  timestamp: string;
  kicker: string;
  title: string;
  summary: string;
  category: 'macro' | 'tennis' | 'webdev' | 'dispatch';
  relatedProject?: string;
  tags: string[];
}
