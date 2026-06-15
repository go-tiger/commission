import type { PortfolioData, LauncherItem, ServerItem } from '../types/portfolio';

export async function getPortfolioData(): Promise<PortfolioData> {
  const base = process.env.NODE_ENV === 'production' ? '/commission' : '';

  const [launcherRes, serverRes, githubRes, commitsRes] = await Promise.all([
    fetch(`${base}/launcher/data.json`),
    fetch(`${base}/server/data.json`),
    fetch('https://api.github.com/orgs/mchdistro'),
    fetch('https://api.github.com/repos/go-tiger/commission/commits?per_page=1'),
  ]);

  const launcher: LauncherItem[] = await launcherRes.json();
  const server: ServerItem[] = await serverRes.json();
  const githubData = await githubRes.json();
  const commitsData = await commitsRes.json();

  launcher.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  server.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalRepos = githubData.public_repos || 0;
  const additionalLauncherCount = Math.max(0, totalRepos - launcher.length);

  let lastCommitDate: string | undefined;
  if (Array.isArray(commitsData) && commitsData.length > 0) {
    const raw = commitsData[0]?.commit?.committer?.date || commitsData[0]?.commit?.author?.date;
    if (raw) {
      const d = new Date(raw);
      lastCommitDate = `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
    }
  }

  return { launcher, server, additionalLauncherCount, lastCommitDate };
}
