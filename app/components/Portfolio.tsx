'use client';

import { useState, useEffect } from 'react';
import { getPortfolioData } from '../lib/portfolio';
import type { PortfolioData, LauncherItem, ServerItem } from '../types/portfolio';

const INITIAL_COUNT = 5;

export default function Portfolio() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [activeTab, setActiveTab] = useState<'launcher' | 'server'>('launcher');
  const [showAll, setShowAll] = useState<{ launcher: boolean; server: boolean }>({
    launcher: false,
    server: false,
  });

  useEffect(() => {
    getPortfolioData()
      .then(setData)
      .catch(() => setData({ launcher: [], server: [] }));
  }, []);

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    background: 'none',
    border: 'none',
    fontSize: '16px',
    fontWeight: active ? 700 : 500,
    color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
    cursor: 'pointer',
    paddingBottom: '12px',
    borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  });

  return (
    <section id='portfolio' style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ color: 'var(--accent)', fontSize: '13px', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '16px' }}>
          PROJECT
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, marginBottom: '10px' }}>참여한 프로젝트</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '40px', fontWeight: 400 }}>
          마지막 업데이트: {data?.lastCommitDate ?? '불러오는 중...'}
        </p>

        {/* 탭 버튼 */}
        <div
          style={{
            display: 'flex',
            gap: '28px',
            marginBottom: '40px',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <button style={tabButtonStyle(activeTab === 'launcher')} onClick={() => setActiveTab('launcher')}>
            🎮 커스텀 런처 {data ? `(${data.launcher.length} + α)` : ''}
          </button>
          <button style={tabButtonStyle(activeTab === 'server')} onClick={() => setActiveTab('server')}>
            🌍 게임 서버 {data ? `(${data.server.length})` : ''}
          </button>
        </div>

        {/* 탭 컨텐츠 */}
        <div style={{ minHeight: '300px' }}>
          {!data && <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>포트폴리오 데이터 로딩 중...</p>}

          {data && activeTab === 'launcher' && (
            <TabContent
              items={showAll.launcher ? data.launcher : data.launcher.slice(0, INITIAL_COUNT)}
              total={data.launcher.length}
              showAll={showAll.launcher}
              defaultEmoji='🎮'
              onShowAll={() => setShowAll(prev => ({ ...prev, launcher: true }))}
              category='launcher'
              additionalCount={data.additionalLauncherCount}
            />
          )}

          {data && activeTab === 'server' && (
            <TabContent
              items={showAll.server ? data.server : data.server.slice(0, INITIAL_COUNT)}
              total={data.server.length}
              showAll={showAll.server}
              defaultEmoji='🌍'
              onShowAll={() => setShowAll(prev => ({ ...prev, server: true }))}
              category='server'
              renderSub={item => {
                const s = item as ServerItem;
                return (
                  <>
                    {s.players && <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{s.players}</p>}
                    {s.game && <p style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 500 }}>{s.game}</p>}
                  </>
                );
              }}
            />
          )}
        </div>
      </div>

      {/* 반응형 grid 스타일 */}
      <style>{`
        .portfolio-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
        @media (max-width: 1400px) { .portfolio-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 1024px) { .portfolio-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px)  { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px)  { .portfolio-grid { grid-template-columns: repeat(1, 1fr); } }
      `}</style>
    </section>
  );
}

function TabContent({
  items,
  total,
  showAll,
  defaultEmoji,
  onShowAll,
  renderSub,
  category,
  additionalCount,
}: {
  items: (LauncherItem | ServerItem)[];
  total: number;
  showAll: boolean;
  defaultEmoji: string;
  onShowAll: () => void;
  renderSub?: (item: LauncherItem | ServerItem) => React.ReactNode;
  category: 'launcher' | 'server';
  additionalCount?: number;
}) {
  return (
    <div>
      <div className='portfolio-grid'>
        {items.map((item, idx) => (
          <PortfolioCard key={idx} item={item} defaultEmoji={defaultEmoji} renderSub={renderSub} category={category} />
        ))}
      </div>
      {showAll && category === 'launcher' && additionalCount && additionalCount > 0 && (
        <div style={{ textAlign: 'center', marginTop: '40px', padding: '24px', color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: '16px' }}>
            이 외에도 <strong style={{ color: 'var(--accent)' }}>{additionalCount}개 이상</strong>의 런처 제작을 진행했습니다.
          </p>
        </div>
      )}
      {!showAll && total > INITIAL_COUNT && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={onShowAll}
            style={{
              background: 'none',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              padding: '10px 24px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'inherit',
            }}
          >
            전체 보기 ({total})
          </button>
        </div>
      )}
    </div>
  );
}

function PortfolioCard({
  item,
  defaultEmoji,
  renderSub,
  category,
}: {
  item: LauncherItem | ServerItem;
  defaultEmoji: string;
  renderSub?: (item: LauncherItem | ServerItem) => React.ReactNode;
  category: 'launcher' | 'server';
}) {
  const [imageError, setImageError] = useState(false);
  const [useJpg, setUseJpg] = useState(false);

  const getImagePath = (): string | null => {
    if (item.image) return item.image;
    if ('youtubeId' in item && (item.youtubeId as string)) {
      return `https://img.youtube.com/vi/${(item.youtubeId as string)}/maxresdefault.jpg`;
    }
    const base = process.env.NODE_ENV === 'production' ? '/commission' : '';
    const ext = useJpg ? 'jpg' : 'png';
    return `${base}/${category}/${item.id}.${ext}`;
  };

  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--accent)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          background: 'var(--surface2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-secondary)',
          fontSize: '14px',
          textAlign: 'center',
          padding: 0,
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {(() => {
          const imagePath = getImagePath();
          return imagePath && !imageError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imagePath}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={() => {
                if (!useJpg) {
                  setUseJpg(true);
                } else {
                  setImageError(true);
                }
              }}
            />
          ) : (
            <span style={{ fontSize: '28px' }}>{defaultEmoji}</span>
          );
        })()}
      </div>
      <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h3 style={{ fontSize: 'clamp(8px, 2.5vw, 15px)', margin: '0 0 8px 0', fontWeight: 700, whiteSpace: 'nowrap', color: 'var(--text-primary)' }}>
          {item.title}
        </h3>
        {'subtitle' in item && (item.subtitle as string) && (
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 10px 0' }}>
            {(item.subtitle as string)}
          </p>
        )}
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '0 0 4px 0' }}>
          {item.client}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, flex: 1 }}>
            {('duration' in item && (item.duration as string)) ? item.duration : item.date}
          </p>
          {'hasCreativeServer' in item && (item.hasCreativeServer as boolean) && (
            <span style={{
              fontSize: '11px',
              background: 'var(--accent-dim)',
              color: '#0a0e14',
              padding: '2px 6px',
              borderRadius: '3px',
              whiteSpace: 'nowrap',
              fontWeight: 600
            }}>
              🛠️
            </span>
          )}
        </div>
        {renderSub?.(item)}
      </div>
    </div>
  );
}
