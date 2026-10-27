import { base } from '../lib/portfolio';

export const DISCORD_URL = 'https://discord.gg/am48Cvufun';

export default function Header() {
  return (
    <header className='site-header'>
      <div className='wrap'>
        <a className='logo' href='#top'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${base}/favicon.ico`} alt='' width={28} height={28} />
          고랑
        </a>
        <nav className='site-nav' aria-label='주요 메뉴'>
          <a href='#services'>서비스</a>
          <a href='#portfolio'>작업물</a>
          <a href='#process'>진행 과정</a>
          <a href='#contact'>문의</a>
        </nav>
        <a className='btn btn-main' href={DISCORD_URL} target='_blank' rel='noopener noreferrer'>
          디스코드로 문의
        </a>
      </div>
    </header>
  );
}
