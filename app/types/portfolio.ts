export interface LauncherItem {
  id: number;
  title: string;
  client: string;
  date: string;
  image?: string;
}

export interface ServerItem {
  id: number;
  title: string;
  subtitle?: string;
  game?: string;
  client: string;
  date: string;
  duration?: string;
  players?: string;
  hasCreativeServer?: boolean;
  youtubeId?: string;
  image?: string;
}

export interface PortfolioData {
  launcher: LauncherItem[];
  server: ServerItem[];
  additionalLauncherCount?: number;
  lastCommitDate?: string;
}
