'use client';

import { useEffect, useState } from 'react';
import { getPortfolioData } from './portfolio';
import type { PortfolioData } from '../types/portfolio';

// Hero와 Portfolio가 같은 요청을 공유하도록 모듈 단위로 캐시
let cached: Promise<PortfolioData> | null = null;

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    cached ??= getPortfolioData().catch(() => ({ launcher: [], server: [] }));
    cached.then(setData);
  }, []);

  return data;
}
