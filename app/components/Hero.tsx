'use client';

import { usePortfolioData } from '../lib/usePortfolioData';
import { DISCORD_URL } from './Header';

export default function Hero() {
  const data = usePortfolioData();

  const stats: [string, number | string, string][] = data
    ? [
        ['런처 제작', data.launcher.length + (data.additionalLauncherCount ?? 0), '+'],
        ['서버 구축', data.server.length, '건'],
        ['최대 동시 인원', Math.max(0, ...data.server.map(s => parseInt(s.players ?? '') || 0)), '명'],
        ['함께한 의뢰인', countClients(data), '팀'],
      ]
    : [
        ['런처 제작', '-', ''],
        ['서버 구축', '-', ''],
        ['최대 동시 인원', '-', ''],
        ['함께한 의뢰인', '-', ''],
      ];

  return (
    <section id='top' className='dark hero'>
      <div className='wrap'>
        <div className='hero-copy'>
          <span className='badge'>COMMISSIONS OPEN</span>
          <h1>
            방송용 마인크래프트 서버와
            <br />
            <em>전용 런처</em>를 만듭니다
          </h1>
          <p className='lead'>
            스트리머 합방 콘텐츠 서버부터 접속용 커스텀 런처까지. 기획을 받아 서버를 열고, 시청자와 참가자가 바로 들어올 수 있게 준비합니다.
          </p>
          <div className='ctas'>
            <a className='btn btn-main' href={DISCORD_URL} target='_blank' rel='noopener noreferrer'>
              디스코드로 의뢰하기
            </a>
            <a className='btn btn-line' href='#portfolio'>
              작업물 보기
            </a>
          </div>
          <dl className='stats'>
            {stats.map(([label, value, unit]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>
                  {value}
                  <small>{unit}</small>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function countClients(data: { launcher: { client: string }[]; server: { client: string }[] }) {
  const names = new Set<string>();
  [...data.launcher, ...data.server].forEach(i => i.client.split(/[/&]/).forEach(c => names.add(c.trim())));
  return names.size;
}
