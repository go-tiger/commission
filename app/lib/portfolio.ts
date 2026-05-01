import type { PortfolioData, LauncherItem, ServerItem } from '../types/portfolio';

export async function getPortfolioData(): Promise<PortfolioData> {
  const base = process.env.NODE_ENV === 'production' ? '/commission' : '';

  const [launcherRes, serverRes] = await Promise.all([
    fetch(`${base}/launcher/data.json`),
    fetch(`${base}/server/data.json`),
  ]);

  const launcher: LauncherItem[] = await launcherRes.json();
  const server: ServerItem[] = await serverRes.json();

  launcher.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  server.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { launcher, server };
}
