'use client';

import { useState } from 'react';
import { base } from '../lib/portfolio';
import { usePortfolioData } from '../lib/usePortfolioData';
import type { LauncherItem, ServerItem } from '../types/portfolio';

const INITIAL_COUNT = 8;

type Category = 'launcher' | 'server';

const LABEL: Record<Category, { tab: string; kicker: string; placeholder: string }> = {
  launcher: { tab: '커스텀 런처', kicker: 'CUSTOM LAUNCHER', placeholder: 'LAUNCHER' },
  server: { tab: '게임 서버', kicker: 'GAME SERVER', placeholder: 'SERVER' },
};

const yearOf = (date: string) => date.slice(0, 4);

export default function Portfolio() {
  const data = usePortfolioData();
  const [category, setCategory] = useState<Category>('launcher');
  const [year, setYear] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const selectCategory = (c: Category) => {
    setCategory(c);
    setYear('all');
    setShowAll(false);
  };

  const items: (LauncherItem | ServerItem)[] = data ? data[category] : [];
  const years = [...new Set(items.map(i => yearOf(i.date)))];
  const filtered = year === 'all' ? items : items.filter(i => yearOf(i.date) === year);
  const visible = showAll || year !== 'all' ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id='portfolio' className='sec work'>
      <div className='wrap'>
        <div className='work-top'>
          <div className='sec-head'>
            <span className='eyebrow'>PORTFOLIO</span>
            <h2>참여한 프로젝트</h2>
            <span className='updated'>마지막 업데이트: {data?.lastCommitDate ?? '불러오는 중...'}</span>
          </div>
          <div className='tabs' role='tablist' aria-label='작업 종류'>
            {(['launcher', 'server'] as const).map(c => (
              <button key={c} className='tab' role='tab' aria-selected={category === c} onClick={() => selectCategory(c)}>
                {LABEL[c].tab}
                {data && <span>{data[c].length}</span>}
              </button>
            ))}
          </div>
        </div>

        {!data && <p className='updated'>포트폴리오 데이터 로딩 중...</p>}

        {data && (
          <>
            <div className='years' role='group' aria-label='연도 필터'>
              {['all', ...years].map(y => (
                <button key={y} type='button' className='chip' aria-pressed={year === y} onClick={() => setYear(y)}>
                  {y === 'all' ? '전체' : y} · {y === 'all' ? items.length : items.filter(i => yearOf(i.date) === y).length}
                </button>
              ))}
            </div>

            <div className='portfolio-grid'>
              {visible.map(item => (
                <PortfolioCard key={item.id} item={item} category={category} />
              ))}
            </div>

            <div className='more'>
              {visible.length < filtered.length ? (
                <button type='button' onClick={() => setShowAll(true)}>
                  전체 보기 ({filtered.length})
                </button>
              ) : (
                category === 'launcher' &&
                year === 'all' &&
                !!data.additionalLauncherCount && (
                  <p>
                    이 외에도 <strong>{data.additionalLauncherCount}개 이상</strong>의 런처를 제작했습니다.
                  </p>
                )
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function PortfolioCard({ item, category }: { item: LauncherItem | ServerItem; category: Category }) {
  const [imageError, setImageError] = useState(false);
  const [useJpg, setUseJpg] = useState(false);
  const server = category === 'server' ? (item as ServerItem) : null;

  const getImagePath = (): string => {
    if (item.image) return item.image;
    if (server?.youtubeId) return `https://img.youtube.com/vi/${server.youtubeId}/maxresdefault.jpg`;
    return `${base}/${category}/${item.id}.${useJpg ? 'jpg' : 'png'}`;
  };

  return (
    <article className='card'>
      <div className='thumb'>
        {!imageError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getImagePath()}
            alt={item.title}
            loading='lazy'
            onError={() => {
              if (!useJpg && !item.image && !server?.youtubeId) setUseJpg(true);
              else setImageError(true);
            }}
          />
        ) : (
          <div className='ph'>
            <b>{LABEL[category].placeholder}</b>
            {server && '썸네일 자리'}
          </div>
        )}
      </div>
      <div className='card-body'>
        <span className='k'>{LABEL[category].kicker}</span>
        <h3>
          {item.title}
          {server?.subtitle && <small>{server.subtitle}</small>}
        </h3>
        <span className='meta'>
          {item.client} · {server?.duration || item.date}
        </span>
        {server && (server.players || server.hasCreativeServer || (server.game && server.game !== '마인크래프트')) && (
          <div className='tags'>
            {server.players && <span>{server.players}</span>}
            {server.game && server.game !== '마인크래프트' && <span>{server.game}</span>}
            {server.hasCreativeServer && <span className='g'>시스템 개발</span>}
          </div>
        )}
      </div>
    </article>
  );
}
