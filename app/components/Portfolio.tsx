'use client';

import { useState, useEffect } from 'react';
import { getPortfolioData } from '../lib/portfolio';
import type { PortfolioData, LauncherItem, ServerItem } from '../types/portfolio';

const INITIAL_COUNT = 5;

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '24px',
};

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
    fontSize: '18px',
    fontWeight: active ? 700 : 500,
    color: active ? 'var(--accent)' : 'var(--text-secondary)',
    cursor: 'pointer',
    paddingBottom: '10px',
    borderBottom: active ? '3px solid var(--accent)' : '3px solid transparent',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  });

  return (
    <section id='portfolio' style={{ padding: '60px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2
          style={{
            fontSize: '36px',
            marginBottom: '50px',
            textAlign: 'center',
            color: 'var(--text-primary)',
            fontWeight: 700,
          }}
        >
          포트폴리오
          <span
            style={{
              display: 'block',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, var(--accent) 0%, var(--success) 100%)',
              margin: '15px auto 0',
              borderRadius: '2px',
            }}
          />
        </h2>

        {/* 탭 버튼 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px',
            borderBottom: '2px solid var(--border)',
            paddingBottom: '15px',
          }}
        >
          <button style={tabButtonStyle(activeTab === 'launcher')} onClick={() => setActiveTab('launcher')}>
            🎮 커스텀 런처 {data ? `(${data.launcher.length})` : ''}
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
        .portfolio-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; }
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
}: {
  items: (LauncherItem | ServerItem)[];
  total: number;
  showAll: boolean;
  defaultEmoji: string;
  onShowAll: () => void;
  renderSub?: (item: LauncherItem | ServerItem) => React.ReactNode;
  category: 'launcher' | 'server';
}) {
  return (
    <div>
      <div className='portfolio-grid'>
        {items.map((item, idx) => (
          <PortfolioCard key={idx} item={item} defaultEmoji={defaultEmoji} renderSub={renderSub} category={category} />
        ))}
      </div>
      {!showAll && total > INITIAL_COUNT && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={onShowAll}
            style={{
              background: 'var(--accent)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
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
  const getImagePath = (): string | null => {
    if (item.image) return item.image;
    const base = process.env.NODE_ENV === 'production' ? '/commission' : '';
    return `${base}/${category}/${item.id}.png`;
  };

  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--success) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px',
          textAlign: 'center',
          padding: '20px',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {(() => {
          const imagePath = getImagePath();
          return imagePath ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imagePath} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span style={{ fontSize: '32px' }}>{defaultEmoji}</span>
          );
        })()}
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--text-primary)' }}>{item.title}</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {item.client} · {item.date}
        </p>
        {renderSub?.(item)}
      </div>
    </div>
  );
}
