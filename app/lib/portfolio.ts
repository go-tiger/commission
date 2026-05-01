import type { PortfolioData } from '../types/portfolio';

export async function getPortfolioData(): Promise<PortfolioData> {
  const base = process.env.NODE_ENV === 'production' ? '/commission' : '';
  const response = await fetch(`${base}/portfolio-data.json`);
  const data: PortfolioData = await response.json();

  data.launcher.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  data.server.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return data;
}
