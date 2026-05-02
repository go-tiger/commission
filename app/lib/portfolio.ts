import type { PortfolioData, LauncherItem, ServerItem } from '../types/portfolio';

export async function getPortfolioData(): Promise<PortfolioData> {
  const base = process.env.NODE_ENV === 'production' ? '/commission' : '';

  const [launcherRes, serverRes, githubRes] = await Promise.all([
    fetch(`${base}/launcher/data.json`),
    fetch(`${base}/server/data.json`),
    fetch('https://api.github.com/orgs/mchdistro'),
  ]);

  const launcher: LauncherItem[] = await launcherRes.json();
  const server: ServerItem[] = await serverRes.json();
  const githubData = await githubRes.json();

  launcher.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  server.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalRepos = githubData.public_repos || 0;
  const additionalLauncherCount = Math.max(0, totalRepos - launcher.length);

  return { launcher, server, additionalLauncherCount };
}
