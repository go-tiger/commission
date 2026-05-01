export interface LauncherItem {
  id: string;
  title: string;
  client: string;
  date: string;
  image?: string;
}

export interface ServerItem {
  id: string;
  title: string;
  game?: string;
  client: string;
  date: string;
  duration?: string;
  players?: string;
  image?: string;
}

export interface PortfolioData {
  launcher: LauncherItem[];
  server: ServerItem[];
}
